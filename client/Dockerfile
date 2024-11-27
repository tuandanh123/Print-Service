# Stage 1: Build the React app
FROM node:20.16.0 AS build
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build the React app
RUN npm run build

# Stage 2: Serve the app using Nginx
FROM nginx:alpine
WORKDIR /usr/share/nginx/html

# Remove the default Nginx configuration file
RUN rm -rf ./*

# Copy build files from the previous stage
COPY --from=build /app/build .

# Expose port 80 for the server
EXPOSE 80

# Start Nginx
ENTRYPOINT ["nginx", "-g", "daemon off;"]
