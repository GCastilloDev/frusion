#!/usr/bin/env sh

# abort on errors
set -e

# navega a frontend
cd frontend
npm run build

# regresar a la carpeta principal
cd ..

# copiar carpet dist
npm run copyDist

# Ir a la carpeta backend
cd backend

# Se inicializa el repositorio
git init
git add -A
git commit -m 'deploy'

# Se forza a subirlo a la rama deploy
git push -f https://github.com/GustavoCastilloMX/frusion.git master:deploy

# Se elimina el directorio de git
rm -rf \.git
