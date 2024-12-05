// Importation des modules nécessaires
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

// Initialisation du serveur Express
const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Servir des fichiers statiques (ex. frontend)
app.use(express.static('public'));

// Gestion des connexions Socket.IO
io.on('connection', (socket) => {
    console.log('Un utilisateur s\'est connecté');

    // Réception d'un message du client
    socket.on('chat message', (msg) => {
        console.log('Message reçu :', msg);
        // Envoie du message à tous les utilisateurs
        io.emit('chat message', msg);
    });

    // Déconnexion de l'utilisateur
    socket.on('disconnect', () => {
        console.log('Un utilisateur s\'est déconnecté');
    });
});

// Démarrage du serveur
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Serveur en écoute sur http://localhost:${PORT}`);
});
