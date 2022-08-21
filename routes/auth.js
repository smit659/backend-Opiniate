const express = require('express');
const router = express.Router();
const passport = require('passport');
// require('dotenv').config();
const app = express();

const CLIENT_URL = "http://localhost:3000/dashboard";

router.get("/login/failed", (req,res) => {
    res.status(401).json({
        success: false,
        message: "failure",
    })
});
router.get("/login/success", (req,res) => {
    res.status(200).json({
        success: true,
        message: "successfullll",
        user: req.user,
    })
});
router.get("/logout", (req,res) => {
    req.logout();
    res.redirect("http://localhost:3000");
});

router.get("/google", passport.authenticate("google", {scope: ["profile"]}));
router.get("/google/callback", passport.authenticate("google", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed"
}),()=>console.log('failed'));

module.exports = router;