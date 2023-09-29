const router = require('express').Router();
const apiRoutes = require('./api');

//  use the defined routes
router.use('/api', apiRoutes);
//  if route doesn't exist
router.use((req, res) => res.send('Invalid route!'));

module.exports = router;
