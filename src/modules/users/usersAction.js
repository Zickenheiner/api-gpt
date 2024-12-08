import userRepository from "./userRepository.js";

const browse = async (req, res) => {
    const categoryFromDB = await userRepository.readAll();
    res.status(200).json(categoryFromDB);
};

const read = async (req, res) => {
    const { id } = req.params;
    const categoryFromDB = await userRepository.read(id);
    res.status(200).json(categoryFromDB);
}

const add = async (req, res) => {
    const { name } = req.body;
    const result = await userRepository.create(name);
    res.status(201).json(result);
}

const edit = async (req, res) => {
    const { name, id } = req.body;
    const result = await userRepository.update(id, name);
    res.status(204).json(result);
}

const destroy = async (req, res) => {
    const { id } = req.params;
    const result = await userRepository.delete(id);
    res.status(204).json(result);
}

export { browse, read, add, edit, destroy };