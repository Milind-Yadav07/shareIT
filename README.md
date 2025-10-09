# 🚀 ShareIT — Real-Time Peer-to-Peer File Sharing

**ShareIT** is a blazing-fast, privacy-first file sharing app built for the modern web. It enables users to transfer files directly between browsers using peer-to-peer connections—no central server, no storage delays, just instant sharing.

---

## ✨ Key Features

- 🔗 **Peer-to-Peer Sharing:** Powered by WebRTC for secure, direct browser-to-browser communication.
- ⚡ **Real-Time Transfers:** Instant file delivery with live progress updates.
- 🧠 **Smart UI:** Built with React.js for a smooth and intuitive user experience.
- 🛠️ **Robust Backend:** Node.js handles signaling and connection orchestration.
- 📦 **Scalable Storage:** MongoDB manages user sessions and metadata efficiently.

---

## 🧰 Tech Stack

| Layer      | Technologies Used |
|------------|-------------------|
| **Frontend** | React.js, HTML5, CSS3 |
| **Backend**  | Node.js, Express.js, Socket.io/WebSockets |
| **Database** | MongoDB |

---

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

