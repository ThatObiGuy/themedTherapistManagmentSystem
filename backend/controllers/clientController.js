const db = require('../db'); // Import the database connection

// Retrieve all Clients
exports.retrieveClients = (req, res) => {
    db.query('SELECT * FROM client', (err, results) => {
        if (err) throw err;
        if (err) console.log(data.toString());
        res.json(results);
    });
};

// Create a new Client
exports.createClient = (req, res) => {
    const { name, email, phone_number, regularity } = req.body;
    db.query('INSERT INTO client (name, email, phone_number, regularity) VALUES (?, ?, ?, ?)',
    [name, email, phone_number, regularity], (err, results) => {
        if (err) throw err;
        if (err) console.log(data.toString());
    });
};

// Update Client by ID
exports.updateClient = (req, res) => {
    const { id } = req.params;
    const { name, email, phone_number, regularity } = req.body;
    db.query('UPDATE client SET name = ?, email = ?, phone_number = ?, regularity = ? WHERE ArtistID = ?',
    [name, email, phone_number, regularity, id], (err, results) => {
        if (err) throw err;
        if (err) console.log(data.toString());
    });
};

// Delete Client by ID
exports.deleteClient = (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM client WHERE client_id = ?', [id], (err, results) => {
        if (err) throw err;
        if (err) console.log(data.toString());
    });
};