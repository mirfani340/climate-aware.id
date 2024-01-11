# Project Description
This project, named "hackfest-gdsc-kopet-team", is focused on climate change education. It utilizes Next.js as the frontend framework, Laravel as the backend framework, and MySQL as the database. To facilitate quick setup, the project includes Docker Compose and a Dockerfile. These tools allow for easy containerization and deployment of the application.

# Team members
1. Muhammad Irfani as a Hustler
2. Fajar Nasrullah as a Hipster
3. Maulana Dimyati as a Hacker
4. Singgih Budi Hartono as a Hacker

# Quickstart (using docker)

To run the project using Docker Compose, follow these steps:

1. Make sure you have Docker installed on your machine. If not, you can download and install it from the official Docker website.

2. Open a terminal or command prompt and navigate to the project directory.

3. Run the following command to start the containers defined in the Docker Compose file:

    ```bash
    docker-compose up
    ```

    This command will build the necessary images and start the containers.

4. Wait for the containers to start up. You should see logs indicating the progress of the startup process.

5. Once the containers are up and running, you can access the frontend of application by opening a web browser and navigating to `http://localhost:3000`.

    Note: Depending on your Docker setup, you may need to use a different hostname or IP address to access the application.

6. You can now interact with the application and explore its features.

7. To stop the containers, you can press `Ctrl + C` in the terminal or command prompt where you ran the `docker-compose up` command. Alternatively, you can run the following command in a separate terminal or command prompt:

    ```bash
    docker-compose down
    ```

    This command will stop and remove the containers.

That's it! You have successfully run the project using Docker Compose. Enjoy exploring the climate change education application!

 # Manual Install

 ## Clone the repo 

```bash
git clone https://github.com/mirfani340/hackfest-gdsc-kopet-team
```

## Install Laravel Dependency (Backend)
```bash
composer install
```
## Generate Key
```bash
php artisan key:generate
```

## Make .env
### For Unix System / Linux
```bash
cp .env.example .env 
```

### For Windows
Just make a copy of **.env.example** to **.env** 

## Ready
```bash
php artisan serve 
```

## Install Next.js Dependency (Frontend)
### Install Depedency Using Yarn
```bash
yarn install
```

### Install Depedency Using NPM
```bash
npm install
```

## Running the dev server
### Using Yarn
```bash
yarn run dev
```

### Using NPM
```bash
npm run dev
```

