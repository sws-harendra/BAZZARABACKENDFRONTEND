const express = require("express");
const router = express.Router();
const { SocialLinks } = require("../models");

// GET
router.get("/", async (req, res) => {
    try {
        const data = await SocialLinks.findOne();
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// POST
router.post("/", async (req, res) => {
    try {
        const { instagram, facebook, twitter } = req.body;

        let data = await SocialLinks.findOne();

        if (data) {
            await data.update({ instagram, facebook, twitter });
        } else {
            data = await SocialLinks.create({ instagram, facebook, twitter });
        }

        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;