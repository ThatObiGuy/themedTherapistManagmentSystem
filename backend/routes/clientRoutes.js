const express = require('express'); // Import express
const router = express.Router(); // Make a router
const clientController = require('../controllers/clientController'); // Import client controller

router.get('/', clientController.retrieveClients);
router.post('/', clientController.createClient);
router.put('/:id', clientController.updateClient);
router.delete('/:id', clientController.deleteClient);

module.exports = router; // Export router