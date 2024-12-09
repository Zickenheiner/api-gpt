import client from "../../../database/client.js";

class TacheRepository {
  async readAll() {
    const [rows] = await client.query("select * from tache");
    return rows;
  }

  async read(id) {
    const [rows] = await client.query("select * from tache where id = ?", [id]);
    return rows;
  }

  async create(name, description, date, priority, finished, is_coordination_spe) {
    const result = await client.query('insert into tache (name, description, date, priority, finished, is_coordination_spe) values (?, ?, ?, ?, ?, ?)', [name, description, date, priority, finished,is_coordination_spe]);
    return result
  }

  async update(id, name, description, date, priority, finished, is_coordination_spe) {
    const result = await client.query('update tache set name = ?, description = ?, date = ?, priority = ?, finished = ?, is_coordination_spe = ? where id = ?', [name, description, date, priority, finished, is_coordination_spe, id]);
    return result
  }

  async delete(id) {
    const result = await client.query('delete from tache where id = ?', [id]);
    return result
  }
}

export default new TacheRepository;