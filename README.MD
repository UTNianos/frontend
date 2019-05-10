# Frontend UTNianos

Codigo del Frontend de la nueva plataforma de UTNianos. 

[![Build Status](https://travis-ci.com/UTNianos/frontend.svg?branch=master)](https://travis-ci.com/UTNianos/frontend)

[![codecov](https://codecov.io/gh/UTNianos/frontend/branch/master/graph/badge.svg)](https://codecov.io/gh/UTNianos/frontend)

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

### Comandos básicos

+ Arrancar el servidor de desarrollo.

```sh
yarn start
```

+ Generar el build de producción.

```sh
yarn build
```

+ Para correr los tests

```sh
yarn test
```

+ Correr los tests con cobertura de código.

```sh
yarn test --coverage
```

### Linter

+ Correr el linter

```sh
yarn lint-all
```

+ Correr el linter en modo CI.

```sh
yarn lint-all-ci
```

## Instalar Redux DevTools extension (opcional).

Añadir a las extensiones en [Chrome](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)
ó [Mozilla](https://addons.mozilla.org/es/firefox/addon/remotedev/) .
