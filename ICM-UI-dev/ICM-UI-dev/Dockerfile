# ==== BUILD STAGE ====
# Use a Node 18 base image for building the application
FROM node:18-alpine AS build

# Set the working directory to /src inside the container
WORKDIR /src

# Copy src files to the working directory
COPY . .

# Install dependencies and build the app
RUN npm ci && npm run build

# ==== PRODUCTION STAGE ====
# Use an Nginx base image for serving the built application
FROM nginx:stable-alpine

# Copy the built app from the build stage to the Nginx served directory
COPY --from=build /src/dist /usr/share/nginx/html

# Copy a custom Nginx configuration file (optional)
# Uncomment and create nginx.conf in the project root if needed
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 for the application
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]

