# 💬 ChatterBox – Real-Time Chat Application

ChatterBox is a real-time chat application built using **Node.js, Express.js, TypeScript, and Socket.IO**. It allows multiple users to exchange messages instantly without refreshing the page.

The application uses WebSockets through Socket.IO to provide real-time, bidirectional communication between the server and connected clients.

## 🚀 Live Demo

🔗 **Live Website:** https://chatterbox-orfi.onrender.com/

📂 **GitHub Repository:** https://github.com/pakhisrivastava2122/ChatterBox

## ✨ Features

- ⚡ **Real-Time Messaging:** Send and receive messages instantly.
- 🔄 **WebSocket Communication:** Uses Socket.IO for real-time, bidirectional communication.
- 👥 **Multi-User Chat:** Messages are broadcast to all currently connected users.
- 🌐 **Simple Web Interface:** A lightweight and easy-to-use chat interface.
- 🚀 **Express Server:** Serves the chat application and manages client connections.
- 📱 **Responsive Viewport:** Includes viewport settings for mobile devices.

## 🛠️ Technologies Used

- **Node.js** – JavaScript runtime environment.
- **Express.js** – Web application server framework.
- **TypeScript** – Adds static typing to JavaScript.
- **Socket.IO** – Enables real-time, bidirectional communication.
- **HTML & CSS** – Build and style the chat interface.
- **JavaScript** – Handles client-side chat interactions.
- **npm** – Manages project dependencies.

## 📂 Project Structure

```text
ChatterBox/
│
├── src/
│   └── index.ts          # Server and Socket.IO logic
│
├── index.html            # Chat user interface
├── package.json          # Dependencies and npm scripts
├── package-lock.json     # Dependency lock file
├── tsconfig.json         # TypeScript configuration
├── .gitignore            # Git ignore rules
└── README.md             # Project documentation
```

## ⚙️ Prerequisites

Before running the project, make sure you have installed:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- npm (included with Node.js)
- Git (optional, for cloning the repository)

To verify your installations, open a terminal and run:

```bash
node -v
npm -v
```

## 🚀 Getting Started

Follow these steps to run ChatterBox on your local machine.

### Step 1: Clone the Repository

Open your terminal and execute:

```bash
git clone https://github.com/pakhisrivastava2122/ChatterBox.git
```

Navigate to the project directory:

```bash
cd ChatterBox
```

Alternatively, download the repository as a ZIP file from GitHub and extract it.

### Step 2: Install Dependencies

Install the required packages using npm:

```bash
npm install
```

### Step 3: Build the Project

Compile the TypeScript source code into JavaScript:

```bash
npm run build
```

### Step 4: Start the Server

Run the following command:

```bash
npm start
```

The server will start on port `3000` by default, provided no other port is configured.

### Step 5: Open the Application

Open your browser and visit:

**http://localhost:3000**

You can now start sending messages through ChatterBox.

### Alternative: Run in Development Mode

To start the application in development mode, use:

```bash
npm run dev
```

This command uses Nodemon and ts-node to execute the TypeScript server during development.

## 🔌 How It Works

1. A user opens the application in a browser.
2. The client establishes a Socket.IO connection with the server.
3. When a user sends a message, the client emits a `chat message` event.
4. The server receives the event and broadcasts the message to connected clients.
5. All connected users receive the message in real time without refreshing the page.

## 📌 Current Limitations

- Messages are not stored permanently in a database.
- Chat history is not retained after messages disappear from the active session.
- User authentication and private messaging are not currently implemented.
- Messages are broadcast to all connected clients.

## 🔮 Future Enhancements

- User registration and authentication.
- Private and group conversations.
- Persistent message storage using MongoDB.
- Online/offline user status.
- Typing indicators and message notifications.
- Improved UI with a modern, responsive design.

## 👩‍💻 Author

**Pakhi Srivastava**

- GitHub: [@pakhisrivastava2122](https://github.com/pakhisrivastava2122)

## 📄 License

This project is currently available under the license specified in the repository's `package.json`. Check the repository for applicable usage and distribution terms.
