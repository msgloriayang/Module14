const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
// const loginRoutes = require('./home-routes');

router.use('/api',apiRoutes);
router.use('/',homeRoutes);
// router.use('/login',homeRoutes);


module.exports = router;