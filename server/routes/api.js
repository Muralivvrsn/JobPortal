const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller");


router.post('/register',controller.register);
router.get('/login',controller.login);
router.get('/home',controller.home);
router.get('/jobs',controller.jobs)


module.exports = router;