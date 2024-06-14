const express = require('express');
const router = express();


router.get('/', (req, res) => {

    res.status(200).json({
        status:"success",
        message:"Auth is up and running"
    })
})

module.exports = router;