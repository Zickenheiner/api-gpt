import express from 'express'
import cors from 'cors'
import "dotenv/config";
import router from './router.js';

const apiKeys = process.env.API_KEYS.split(',');

function verifierCleAPI(req, res, next) {
  const cleAPI = req.headers['x-api-key'];
  
  if (!cleAPI) {
    return res.status(401).json({ message: 'Clé API manquante' });
  }
  
  if (!apiKeys.includes(cleAPI)) {
    return res.status(403).json({ message: 'Clé API invalide' });
    
  }
  
  next();
}

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', verifierCleAPI);
app.use(router);

export default app;

// Au début de votre index.js