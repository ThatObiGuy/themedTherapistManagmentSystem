const express = require('express'); // Import express
const router = express.Router(); // Make a router
const sessionController = require('../controllers/sessionController'); // Import session controller

router.get('/', sessionController.retrieveSessions); // when user tries to get sessions, call retrieveSessions function from sessionController
router.post('/', sessionController.createSession);
router.put('/:id', sessionController.updateSession);
router.delete('/:id', sessionController.deleteSession);

module.exports = router; // Export router