# ShareIT

ShareIT is a real-time, peer-to-peer file sharing application built with a modern web stack. It allows users to effortlessly share files directly with one another without the need for a central server to store the files, ensuring privacy and speed.

## Features

- **Peer-to-Peer Sharing:** Utilizes WebRTC for direct, secure connections between users.
- **Real-Time Communication:** Instant file transfer and progress updates.
- **Intuitive UI:** A clean and easy-to-use interface built with React.js.
- **Robust Backend:** Powered by Node.js for managing signaling and user connections.
- **Scalable Database:** MongoDB is used to handle user data and session management.

## Technologies Used

- **Frontend:**
  - **React.js:** A JavaScript library for building user interfaces.
  - **HTML5 & CSS3:** For structuring and styling the web application.

- **Backend:**
  - **Node.js:** A JavaScript runtime for building the server-side logic.
  - **Express.js:** A web framework for Node.js, used to create the REST API.
  - **Socket.io / WebSockets:** For real-time, bidirectional event-based communication.

- **Database:**
  - **MongoDB:** A NoSQL database used for storing user information and file metadata.


### Installation

1.  **Clone the repository:**
    ```
    git clone
    ```

2.  **Install frontend dependencies:**
    ```
    npm install
    ```

3.  **Install backend dependencies:**
    ```
    npm install
    ```

### Running the Application

1.  **Start the backend server:**
    ```
    npm start
    ```

2.  **Start the frontend development server:**
    ```
    npm start
    ```

3.  **Open your browser:**
    The application will be available at `http://localhost:3000`.

## How It Works

1.  **Signaling:** The frontend (React) communicates with the backend (Node.js) to exchange metadata required to establish a peer-to-peer connection. This metadata includes things like network addresses and session descriptions (SDPs).
2.  **Connection Establishment:** Once the signaling is complete, the WebRTC API takes over to create a direct data channel between the two browsers.
3.  **File Transfer:** The file is then sent directly from one user's browser to the other's through this data channel. The server is only used to facilitate the initial connection and is not involved in the actual file transfer.

## Contributing

We welcome contributions! Please feel free to open an issue or submit a pull request.

