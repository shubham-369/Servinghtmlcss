const express = require('express');
const router = express.Router();
const contact = require('../controllers/contact');

router.route('/contact.html').get(contact);


module.exports = router;