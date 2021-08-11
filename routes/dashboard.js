import Router from 'express'
import controller from '../controllers/dashboard.controller.js'

const router = new Router()

router.get('/', (req, res) => {
    controller.getDashboard(req, res);
});

export default router;