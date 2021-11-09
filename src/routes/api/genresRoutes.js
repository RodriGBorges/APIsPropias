const router = require('express').Router();
const { list, detail } = require('../../controllers/api/genresController');


router.get('/genres', list)
router.get('/genres/detail/:id', detail)


module.exports = router;