const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index.ejs');
});

router.post('/SignatureRequest', async (req, res) => {
    const { name, role, sector, extension, phone } = req.body;
    console.log(extension);
    res.render('signature.ejs', {name, role, sector, extension, phone});
});

module.exports = router;