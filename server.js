import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static frontend files
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "../frontend")));

// Example API endpoint (replace with your own logic)
app.post("/generate-video", (req, res) => {
    const { text, mode } = req.body;
    // Placeholder logic for demo
    res.json({ success: true, message: `Video generated in mode: ${mode}` });
});

// Handle all other routes to serve frontend
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/index.html"));
});

// Use Render's dynamic port or fallback to 3000 locally
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ VImage Creator running on port ${PORT}`));

