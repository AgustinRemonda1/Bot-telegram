import express, { Application } from 'express';
import AppConfig from './Interfaces/AppConfig.interface';
import bot from './Services/Bot.service';
import { botHears, baseBotCommands, botCommandStart, botOnCommand } from './Commands/Bot.commands';
import Database from './Database/Database'

class App {
  public app: Application;
  public port: Number;
  public name: String;

  constructor(appConfig: AppConfig){
    const {
      port, 
      name, 
      routes,
      middlewares
    } = appConfig;

    this.app = express();
    this.port = port;
    this.name = name;

    this.routes(routes);
    this.middlewares(middlewares);
    this.dbSetup()
    this.botSetup();
  }

  public middlewares = (middlewares: Array<any>) => {
    middlewares.map(middleware => {
      this.app.use(middleware)
    })
  }

  public routes = (routes: Array<any>) => {
    routes.map(route => {
      this.app.use(route.path, route.route)
    })
  }

  public listen = () => {
    this.app.listen(this.port, () => {
      console.log('%s running.', this.name);
    })
  }

  public dbSetup = () => {
    this.app.use((req: any, res, next) => 
      {
        req.database = Database;
        next();
      }
    )
  }
  
  public botSetup = () => {
    bot.start(botCommandStart);

    baseBotCommands.map(command => bot.command(command.command, command.response))
    
    botHears.map(hear => bot.hears(hear.message, hear.response));

    botOnCommand.map(command => 
      bot.on("contact", (ctx:any) => command.response(ctx, bot))
    );
   
    bot.launch();
  }
}


export default App;
