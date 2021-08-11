import express from 'express'
const router = express.Router();

import tasks from  './todo'
import dashboard from './dashboard'
import collection from './collection'
import lists from './list'

router.use('/lists', lists);
router.use('/tasks', tasks);
router.use('/dashboard', dashboard);
router.use('/collection', collection);


export default router;