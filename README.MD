# Frontend UTNianos

## Arrancar el repositorio

### Instalar las dependencias y compilar el repositorio.
```sh
npm install
webpack --progress
```

### Iniciar un servidor en la carpeta donde esta el JS.

Cualquier servidor de archivos estáticos funciona, por ejemplo 
http.server de python o npm.
 
```sh
cd build
python -m http.server
http://localhost:8000/
```

Ó

```sh
cd build
npm start
http://localhost:3000/
```