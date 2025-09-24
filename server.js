import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import fs from "fs";
import path from "path";

const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "public")));

app.post("/generate", (req, res) =
  const { prompt, type, mode, fps, quality, captions } = req.body;
  const ext = type === "video" ? "mp4" : "png";
  const filename = `output_\${Date.now()}.\${ext}`;
  const filepath = path.join(__dirname, "public", filename);

  fs.writeFileSync(filepath, `Generated \${type} for: \${prompt}, mode: \${mode}, \${fps} FPS, \${quality}, captions: \${captions}`);
  res.json({ url: `/${filename}`, type });
});

app.listen(PORT, () = VImage Creator running on port ${PORT}`));
