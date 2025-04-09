const db = require('../db'); // Import the connection to the database

// Retrieve all Therapists
exports.retrieveTherapists = (req, res) => {
    db.query('SELECT * FROM Therapist', (err, results) => {
        if (err) throw err;
        if (err) console.log(data.toString());
        res.json(results); // Return the JSON of the results
    });
};

// Create a new Therapist
exports.createTherapist = (req, res) => {
    const { title, name, email, location, years_of_practice, availability } = req.body; // Get the data from the request
    db.query('INSERT INTO Therapist (Title, Name, Email, Location, years_of_practice, Availability) VALUES (?, ?, ?, ?, ?, ?)', 
    [title, name, email, location, years_of_practice, availability], (err, results) => { // Perform an SQL query
        if (err) throw err;
        if (err) console.log(data.toString());
    });
};

// Update Therapist by ID
exports.updateTherapist = (req, res) => {
    const { id } = req.params; // Get the ID of the therapist from the URL
    const { title, name, email, location, years_of_practice, availability } = req.body; // Get the data from the request
    db.query(
        'UPDATE Therapist SET title = ?, name = ?, email = ?, location = ?, years_of_practice = ?, availability = ? WHERE therapist_id = ?',
        [title, name, email, location, years_of_practice, availability, id],
        (err, results) => {
            if (err) {
                console.error(err);
                res.status(500).send('Error updating therapist');
            } else {
                res.status(200).send('Therapist updated successfully');
            }
        }
    );
};

// Delete Therapist by ID
exports.deleteTherapist = (req, res) => {
    const { id } = req.params; // Get the ID of the therapist from the URL
    db.query('DELETE FROM Therapist WHERE therapist_id = ?', [id], (err, results) => { // Perform an SQL query
        if (err) throw err; 
        if (err) console.log(data.toString());
    });
};