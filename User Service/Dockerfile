# Usa la imagen oficial de Node.js
FROM node:20

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos del proyecto
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código
COPY . .

# Expone el puerto en el que corre tu API
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "start"]
