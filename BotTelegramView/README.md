## Setup del proyecto:

#### BotTelegramView:

```
cd BotTelegramView
npm install
cp .env.dev .env.local
```

Nota: El comando cp basicamente copia y pega el archivo local, con el nombre que nosotros queramos, pero en este caso lo necesitamos sin ese .dev nada mas.#### BotTelegramView:

Luego de eso, solo corra el comando

```
npm run dev
```

y listo el proyecto va estar levantado.

nota: requiere de la version de node 16.15.1. El archivo .env.dev, contiene una variable que habilita el mockeo, lo cual hace que puedas meter cualquier usuario y contraseña, y te haga ingresar igual a la aplicacion para poder hacer una prueba visual y tecnica.
Esto ultimo se debe hay que hay que rehacer el servicio para la aplicacion por que quedo completamente deprecado, pero almenos
permite tener una demo tecnica de lo que es el front.
