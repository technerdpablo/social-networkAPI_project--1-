
const router = require('express').Router();
const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtRoutes');

// define routes or paths
router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

module.exports = router;