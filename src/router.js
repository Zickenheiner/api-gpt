import express from 'express';
import tacheAction from './modules/tache/tacheAction.js'
import reunionAction from './modules/reunion/reunionAction.js';

const router = express.Router();

router.get('/', (_, res) => {
    res.json({ message: 'API fonctionnelle!' });
});

//Tache

router.get("/api/taches", tacheAction.browse);
router.get("/api/taches/:id", tacheAction.read);
router.post("/api/taches", tacheAction.add);
router.put("/api/taches/:id", tacheAction.edit);
router.delete("/api/taches/:id", tacheAction.destroy);

//Reunion

router.get("/api/reunions", reunionAction.browse);
router.get("/api/reunions/:id", reunionAction.read);
router.post("/api/reunions", reunionAction.add);
router.put("/api/reunions/:id", reunionAction.edit);
router.delete("/api/reunions/:id", reunionAction.destroy);


export default router;