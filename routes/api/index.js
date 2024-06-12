// router 
const router = require('express').Router();
// UserRoute
const userRoute = require('./userRoute');
// thoughtRoute
const thoughtRoute = require('./thoughtRoute');
router.use('/thoughts', thoughtRoute);
router.use('/users', userRoute);
// Export
module.exports = router;
