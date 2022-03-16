# Testing Automation

El proyecto tiene como objetivo brindar multiples ejemplos de tests

# Instalar NodeJs

```sh
https://nodejs.org/es/download/
```

# Instalar cypress

```sh
cd your\project\path
npm install cypress --save-dev
```

# Ejecutar

Vía NPM (ver "scripts" en package.json)
```sh
cd your\project\path
npm run cypress:run
```

  - -- browser -> especifica el navegador, si se omite el default es Electron headless
  - -- spec -> test a ejecutar, si no se encuentra scannea y ejecuta todos.

# Notas
  - Headless mode solo vía "Electron" (default), caso contrario utilizar --headed
  - Los videos solo se pueden grabar cuando el navegador es Electron.
 
