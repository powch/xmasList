const router = require('express').Router();
const listRoutes = require('./lists');

// Book routes
router.use("/lists", listRoutes);

module.exports = router;
