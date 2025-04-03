const db = require('../db'); // Import the database connection

// Retrieve all Sessions
exports.retrieveSessions = (req, res) => {
    db.query('SELECT * FROM Session', (err, results) => {
        if (err) throw err;
        if (err) console.log(data.toString());
        res.json(results);
    });
};

// Create a new Session
exports.createSession = (req, res) => {
    const { therapistId, clientId, sessionNotes, sessionDate, sessionLength } = req.body;
    db.query('INSERT INTO Session (therapist_id, client_id, session_notes, session_date, session_length) VALUES (?, ?, ?, ?, ?)',
    [therapistId, clientId, sessionNotes, sessionDate, sessionLength], (err, results) => {
        if (err) throw err;
        if (err) console.log(data.toString());
    });
};

// Update Session by ID
exports.updateSession = (req, res) => {
    const { id } = req.params;
    const { therapistId, clientId, sessionNotes, sessionDate, sessionLength } = req.body;
    db.query('UPDATE Session SET therapist_id = ?, client_id = ?, session_notes = ?, session_date = ?, session_length = ? WHERE session_id = ?',
    [therapistId, clientId, sessionNotes, sessionDate, sessionLength, id], (err, results) => {
        if (err) throw err;
        if (err) console.log(data.toString());
    });
};

// Delete Session by ID
exports.deleteSession = (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM Session WHERE session_id = ?', [id], (err, results) => {
        if (err) throw err;
        if (err) console.log(data.toString());
    });
};