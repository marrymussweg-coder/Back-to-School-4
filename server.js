const express = require('express');
const app = express();

// Liefert alle Dateien aus dem "public"-Ordner aus (index.html, zeichentool.html, masteransicht.html)
app.use(express.static('public'));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}`);
});
