import reunionRepository from "./reunionRepository.js";

const browse = async (_, res) => {
    try {
        const meetingFromDB = await reunionRepository.readAll();
        for (const meeting of meetingFromDB) {
            meeting.date = new Date(tache.date).toLocaleString("fr-FR");
        }
        res.status(200).json(meetingFromDB);
    } catch (error) {
        res.status(500).json(error);
    }
};

const read = async (req, res) => {
    const { id } = req.params;
    try {
        const meetingFromDB = await reunionRepository.read(id);
        meetingFromDB[0].date = new Date(meetingFromDB[0].date).toLocaleString("fr-FR");
        res.status(200).json(meetingFromDB);
    } catch (error) {
        res.status(500).json(error);
    }
}

const add = async (req, res) => {
    const { name, description, date, place } = req.body;
    try {
        const result = await reunionRepository.create(name, description, date, place);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
}

const edit = async (req, res) => {
    const { id } = req.params;
    const { name, description, date, place } = req.body;
    try {
        const result = await reunionRepository.update(id, name, description, date, place);
        res.status(204).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
}

const destroy = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await reunionRepository.delete(id);
        res.status(204).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
}

export default { browse, read, add, edit, destroy };