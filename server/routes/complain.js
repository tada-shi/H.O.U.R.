const express = require('express');
const pool = require("../../server/db.js");

const router = express.Router();

router.post("/", async(req, res) => {
    try {
        const { enrollment_no,app_reason } = req.body;
        const postComplain = await pool.query("insert into complain_applications(enrollment_no,app_reason) values($1, $2) RETURNING *",
        [enrollment_no, app_reason]);
        res.json(postComplain.rows);
    } catch (error) {
        console.log(error);
    }
});

module.exports = router