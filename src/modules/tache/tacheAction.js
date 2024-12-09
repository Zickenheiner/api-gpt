import tacheRepository from "./tacheRepository.js";

const browse = async (_, res) => {
    try {
        const taskFromDB = await tacheRepository.readAll();
        for (const tache of taskFromDB) {
            tache.date = new Date(tache.date).toLocaleString("fr-FR");
        }
        res.status(200).json(taskFromDB);
    } catch (error) {
        res.status(500).json(error);
    }
};

const read = async (req, res) => {
    const { id } = req.params;
    try {
        const taskFromDB = await tacheRepository.read(id);
        taskFromDB[0].date = new Date(taskFromDB[0].date).toLocaleString("fr-FR");
        res.status(200).json(taskFromDB);
    } catch (error) {
        res.status(500).json(error);
    }
}

const add = async (req, res) => {
    const { name, description, date, priority, isCoordinationSpe } = req.body;
    console.log(req.body);
    
    try {
        const result = await tacheRepository.create(name, description, date, priority, false, isCoordinationSpe);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
}

const edit = async (req, res) => {
    const { id } = req.params;
    const { name, description, date, priority, finished, isCoordinationSpe } = req.body;
    try {
        const result = await tacheRepository.update(id, name, description, date, priority, finished, isCoordinationSpe);
        res.status(204).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
}

const destroy = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await tacheRepository.delete(id);
        res.status(204).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
}

export default { browse, read, add, edit, destroy };