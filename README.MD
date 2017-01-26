# Frontend UTNianos

Codigo del Frontend de la nueva plataforma de UTNianos. 

## Instalar prerequisitos

### Instalar node y npm

```sh
<manejador de paquetes> + <comando para instalar> nodejs npm
```
### Instalar yarn

```sh
npm install -g yarn
```

## Arrancar el repositorio

### Instalar las dependencias y compilar el repositorio.

```sh
yarn
```

Para generar el build de desarrollo.

```sh
webpack --progress
```
Para generar el build de producción.

```sh
webpack --config webpack.config.prod.js
```

### Iniciar un servidor en la carpeta donde esta el JS.

Cualquier servidor de archivos estáticos funciona, por ejemplo 
http.server de python o npm start de node.
 
```sh
cd build
python -m http.server
http://localhost:8000/
```

ó

```sh
cd build
npm start
http://localhost:3000/
```

## Instalar Redux DevTools extension (opcional).

Añadir a las extensiones en [Chrome](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)
ó [Mozilla](https://addons.mozilla.org/es/firefox/addon/remotedev/) .