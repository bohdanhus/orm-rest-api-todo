import Router from'express'
import controller from '../controllers/collection.controller.js'
const router = new Router()

router.get('/today', (req, res) => {
    controller.getCollection(res);
});

export default router;