
######## Instalación

# Instalar las dependencias.
npm install

# Buildear JS.
webpack --progress

# Iniciar un servidor en la carpeta donde esta el JS.
 cd build
 python -m http.server 8000

# Ir a la dirección indicada (el puerto por defecto es 8000).
http://localhost:8000/