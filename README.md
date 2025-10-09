# 🚀 ShareIT — Real-Time File Sharing

**ShareIT** is a blazing-fast, privacy-first file sharing app built for the modern web. It enables users to transfer files directly between browsers using peer-to-peer connections—no central server, no storage delays, just instant sharing.


## ✨ Key Features

-  **Peer-to-Peer Sharing:** Powered by WebRTC for secure, direct browser-to-browser communication.
-  **Real-Time Transfers:** Instant file delivery with live progress updates.
-  **Smart UI:** Built with React.js for a smooth and intuitive user experience.
-  **Robust Backend:** Node.js handles signaling and connection orchestration.
-  **Scalable Storage:** MongoDB manages user sessions and metadata efficiently.


## 🧰 Tech Stack

| Layer      | Technologies Used |
|------------|-------------------|
| **Frontend** | React.js, HTML5, CSS3 |
| **Backend**  | Node.js, Express.js, Socket.io/WebSockets |
| **Database** | MongoDB |


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


### 🔍 How It Works
- Signaling Phase: React frontend communicates with the Node.js backend to exchange connection metadata (SDPs, ICE candidates).
- Connection Setup: WebRTC establishes a direct data channel between users.
- File Transfer: Files are sent directly via the data channel—no server involvement in the actual transfer.


### 🤝 Contributing
We love open-source collaboration!
Feel free to open an issue or submit a pull request to improve ShareIT.

