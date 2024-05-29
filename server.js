const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;
const IMAGES_DIR = path.join(__dirname, 'boletines');

// Servir archivos estáticos desde el directorio de imágenes
app.use('/boletines', express.static(IMAGES_DIR));

// Endpoint para listar todas las imágenes en el directorio
app.get('/boletines', (req, res) => {
    fs.readdir(IMAGES_DIR, (err, files) => {
        if (err) {
            return res.status(500).send('Unable to scan directory');
        }
        const images = files.filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file));
        res.json(boletines);
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
