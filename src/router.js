import express from 'express';
import { add, browse, destroy, edit, read } from './modules/users/usersAction.js'

const router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: 'API fonctionnelle!' });
});

router.get("/api/users", browse);
router.get("/api/users/:id", read);
router.post("/api/users", add);
router.put("/api/users", edit);
router.delete("/api/users/:id", destroy);


export default router;