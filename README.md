# Prodo
Prodo
Prodo is a productivity application built atop the MERN (MongoDB, Express.js, React.js, Node.js) stack, featuring a plethora of auxiliary libraries and prebuilt services. It's aimed at offering the premium paid features of applications like TODO list and Evernote, with additional features such as GPT-4 integration, absolutely free of charge. Although the application is fully functional as is, the development process is ongoing with many more features to be added.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- Node.js
- npm
- MongoDB

## Getting Started

These instructions will help you get a copy of the project up and running on your local machine for development and testing purposes.

1. Fork the repository.
2. Open your unix shell and execute the following command to clone the repository to a local directory of your choice.

    ```bash
    git clone git@github.com:YOUR_GITHUB_USERNAME/Prodo.git
    ```

3. Navigate to the client directory and install the latest version of vite using npm.

    ```bash
    cd Prodo/client
    npm install vite@latest
    ```

4. Run the client-side of the application with the following command.

    ```bash
    npm run dev
    ```

5. Navigate back to the parent directory and install the necessary packages for the server-side of the application.

    ```bash
    cd ..
    npm install express mongodb mongoose cors
    ```

6. Finally, start the server with the following command.

    ```bash
    node index
    ```
   Or, if you have nodemon installed, you can use:

    ```bash
    nodemon index
    ```
The client will automatically run on the first available port, while the API server will run on port 3005. If you wish to run the server on a different port, you can change the port number in the index.js file.

## Contributing

We love your input! We want to make contributing to this project as easy and transparent as possible, whether it's:

- Reporting a bug
- Discussing the current state of the code
- Submitting a fix
- Proposing new features

Feel free to open an issue or create a pull request with your changes.



