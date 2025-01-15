const videos = require('./data/videos.js');
const express = require('express');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

const dbPath = path.join('/tmp', 'db.json');

const readDB = () => {
  if (!fs.existsSync(dbPath)) {
    fs.writeFileSync(dbPath, JSON.stringify({videos}, null, 2));
  }
  const data = fs.readFileSync(dbPath);
  return JSON.parse(data);
};

const writeDB = (data) => {
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
};

//Ruta principal

app.get('/', (req, res) => {
  res.status(200).json({message: 'Servidor para Alura Flix corriendo OK'})
});

// Ruta POST para añadir un video
app.post('/videos', (req, res) => {
  const { title, category, image, video, description } = req.body;
  const newVideo = { id: uuidv4(), title, category, image, video, description };
  const db = readDB();
  db.videos.push(newVideo);
  writeDB(db);
  res.status(201).json(newVideo);
});

// Obtener todos los videos
app.get('/videos', (req, res) => {
    res.header('Access-Control-Allow-Origin','*');
    const db = readDB();
    res.status(200).json(db.videos);
});

// Ruta GET para obtener un video por su ID
app.get('/videos/:id', (req, res) => {
  const { id } = req.params;
  const db = readDB();
  const video = db.videos.find(video => video.id === id);

  if (video) {
    res.status(200).json(video);
  } else {
    res.status(404).json({ data: null, message: 'Video no encontrado' });
  }
});


// Ruta DELETE para eliminar un video
app.delete('/videos/:id', (req, res) => {
  const { id } = req.params;
  const db = readDB();
  const videosUpdate = db.videos.filter(video => video.id !== id);
  if (videosUpdate.length === db.videos.length) {
    return res.status(404).json({ message: 'Producto no encontrado' });
  }
  db.videos = videosUpdate;
  writeDB(db);
  res.status(200).json({ message: 'Video eliminado' });
});

// Ruta PUT para actualizar un video
app.put('/videos/:id', (req, res) => {
  const { id } = req.params;
  const { title, category, image, video, description } = req.body;
  const db = readDB();
  const videoIndex = db.videos.findIndex(video => video.id === id);

  if (videoIndex !== -1) {
    db.videos[videoIndex] = { ...db.videos[videoIndex], title, category, image, video, description };
    writeDB(db);
    res.status(200).json(db.videos[videoIndex]);
  } else {
    res.status(404).json({ message: 'Video no encontrado' });
  }
});

// Middleware para manejar rutas no encontradas
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'build','index.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
