// Petit serveur de prévisualisation local — `node server.js`, puis http://localhost:5173
// Aucune dépendance : sert simplement les fichiers du dossier courant.
// Il ne sert QU'À la prévisualisation locale ; en production, Hostinger sert
// directement les fichiers statiques.

const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 5173;
const ROOT = __dirname;

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".xml": "application/xml; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
};

http
  .createServer((req, res) => {
    // On ignore la query string (les `?v=3` de cache-busting sur styles.css / script.js).
    let rel = decodeURIComponent(req.url.split("?")[0]);
    if (rel.endsWith("/")) rel += "index.html";

    // Empêche de remonter au-dessus du dossier du site (../../).
    const filePath = path.join(ROOT, path.normalize(rel));
    if (!filePath.startsWith(ROOT)) {
      res.writeHead(403).end("Forbidden");
      return;
    }

    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" }).end("404 — page introuvable");
        return;
      }
      res.writeHead(200, {
        "Content-Type": MIME[path.extname(filePath).toLowerCase()] || "application/octet-stream",
        "Cache-Control": "no-store", // pour voir les modifications sans vider le cache
      });
      res.end(data);
    });
  })
  .listen(PORT, () => console.log(`Ambree Studio — prévisualisation sur http://localhost:${PORT}`));
