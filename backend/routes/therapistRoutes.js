const express = require('express'); // Import express
const router = express.Router(); // Make a router
const therapistController = require('../controllers/therapistController'); // Import therapist controller

router.get('/', therapistController.retrieveTherapist);
router.post('/', therapistController.createTherapist);
router.put('/:id', therapistController.updateTherapist);
router.delete('/:id', therapistController.deleteTherapist);

module.exports = router; // Export router