
# Video Streaming Application

This is a full-stack video streaming application built with **React** for the frontend and **Express** for the backend. The application supports video upload, conversion to HLS (HTTP Live Streaming) format, and playback using **Video.js**.

## Features
- **Frontend** built with **React** and **Vite** for fast development.
- **Backend** built with **Express** to handle video upload and conversion.
- **HLS Support** for streaming video content.
- **Video Upload** with **Multer** middleware for file handling.
- **YouTube Video Integration** using **Video.js** plugin.

## Tech Stack
- **Frontend**:
  - React
  - Vite
  - Video.js (for video playback)
  - ESLint (for code linting)
  
- **Backend**:
  - Node.js
  - Express
  - Multer (for handling file uploads)
  - UUID (for generating unique video identifiers)
  - FFmpeg (for video conversion to HLS format)

## Getting Started

### Prerequisites
1. **Node.js** installed on your system.
   - You can download it from [here](https://nodejs.org/).

2. **FFmpeg** installed for video conversion.
   - You can download it from [here](https://ffmpeg.org/download.html).

### Backend Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/prince-kumar-singh/video-streaming.git
   cd video-streaming
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a directory for uploaded videos:
   ```bash
   mkdir uploads
   ```

4. Run the server:
   ```bash
   npm start
   ```

The server will run on `http://localhost:8000`.

### Frontend Setup
1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the frontend:
   ```bash
   npm run dev
   ```

The frontend will run on `http://localhost:5173`.

### Video Upload and Streaming
- To upload a video, send a `POST` request to `http://localhost:8000/upload` with the video file. The backend will process the video and convert it into HLS format.
- You can test the video player on the frontend using the HLS stream URL provided by the backend in the response.



## File Uploading Details
- **Upload Endpoint**: `POST /upload`
  - Files are uploaded to the `uploads` directory.
  - Videos are converted to HLS format using FFmpeg and stored in the `uploads/courses/{lessonId}` folder.

## Video Player
- The frontend uses **Video.js** with the YouTube plugin to play videos.
- Supports **HLS** streaming using the `application/x-mpegURL` format for video playback.

## Contribution
Feel free to fork this repository and make contributions. If you have any suggestions or improvements, create a pull request.

## License
This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments
- **Video.js** for providing an easy-to-use video player.
- **FFmpeg** for video conversion and streaming support.
- **Multer** for handling file uploads in Node.js.
- **UUID** for generating unique identifiers for videos and lessons.

---

Thank you for checking out this project! Feel free to explore and contribute. 🚀
