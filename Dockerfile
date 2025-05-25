# Etapa de construcción
FROM node:23-alpine AS builder

WORKDIR /app

# Copiar archivos necesarios para instalar dependencias y build
COPY package*.json ./
RUN npm install

# Copiar el resto del código para build
COPY . .

# Ejecutar el build
RUN npm run build

# Etapa de producción (solo archivos necesarios)
FROM node:23-alpine AS production

WORKDIR /app

# Instalar 'serve' para servir archivos estáticos
RUN npm install -g serve

# Copiar solo los archivos construidos (no código fuente, no node_modules)
COPY --from=builder /app/dist .

EXPOSE 3000

CMD ["serve", "-s", ".", "-l", "3000"]
