import BotCommandRepository from '../Entities/Repositories/BotCommand.repository';
import BotCommand from '../Entities/Models/BotCommands.model';
import { HttpStatus } from '../Config/Server/HTTPStatus.config';
import { buildCommands } from '../Bot/Controller/Bot.controller';
import bot from '../Entities/Services/Bot.service';


class BotCommandController {
  getCommands = async (req: any, res: any): Promise<void> => {
    try {
      const botCommands: BotCommand[] = await BotCommandRepository.getAll();
      res.send(botCommands);
    } catch (e) {
      res.send({
        errorCodes: e, 
        codeStatus: HttpStatus.INTERNAL_SERVER_ERROR
      });
    }
  };

  getCommandById = async (req: any, res: any): Promise<void> => {
    const { id } = req.params;

    try {
      const botCommands: BotCommand = await BotCommandRepository.get(id);
      res.send(botCommands);
    } catch (e) {
      res.send({
        errorCodes: e, 
        codeStatus: HttpStatus.INTERNAL_SERVER_ERROR
      });
    }
  };

  getCommandsTypes = async (req: any, res: any): Promise<void> => {
    try {
      const botCommandsTypes: BotCommand[] = await BotCommandRepository.getCommandsTypes();
      res.send(botCommandsTypes);
    } catch (e) {
      res.send({
        errorCodes: e, 
        codeStatus: HttpStatus.INTERNAL_SERVER_ERROR
      });
    }
  };
  
  getCommandsTypesById = async (req: any, res: any): Promise<void> => {
    const { id } = req.params;

    try {
      const botCommandsTypes: BotCommand = await BotCommandRepository.getCommandsTypesById(id);
      res.send(botCommandsTypes);
    } catch (e) {
      res.send({
        errorCodes: e, 
        codeStatus: HttpStatus.INTERNAL_SERVER_ERROR
      });
    }
  };

  postCommand = async (req: any, res: any): Promise<void> => {
    const { body } = req;
    
    try {
      const botCommands: BotCommand = await BotCommandRepository.post(body);
      await buildCommands(bot);
      res.send(botCommands);
    } catch (e) {
      res.send({
        errorCodes: e, 
        codeStatus: HttpStatus.INTERNAL_SERVER_ERROR
      });
    }
  };

  updateCommand = async (req: any, res: any): Promise<void> => {
    const { body } = req;
    const { id } = req.params;

    try {
      const botCommands: BotCommand = await BotCommandRepository.update(id, body);
      res.send(botCommands);
    } catch (e) {
      res.send({
        errorCodes: e, 
        codeStatus: HttpStatus.INTERNAL_SERVER_ERROR
      });
    }
  };

  deleteCommand = async (req: any, res: any): Promise<void> => {
    const { id } = req.params;

    try {
      await BotCommandRepository.delete(id);
      res.sendStatus(HttpStatus.OK);
    } catch (e) {
      res.send({
        errorCodes: e, 
        codeStatus: HttpStatus.INTERNAL_SERVER_ERROR
      });
    }
  };

}

export default new BotCommandController();
