import client from "../../../database/client.js";

class ReunionRepository {
  async readAll() {
    const [rows] = await client.query("select * from reunion");
    return rows;
  }

  async read(id) {
    const [rows] = await client.query("select * from reunion where id = ?", [id]);
    return rows;
  }

  async create(name , description, date, place) {
    const result = await client.query('insert into reunion (name, description, date, place) values (?, ?, ?, ?)', [name, description, date, place]);
    return result
  }

  async update(id, name, description, date, place) {
    const result = await client.query('update reunion set name = ? , description = ? , date = ? , place = ? where id = ?', [name, description, date, place, id]);
    return result
  }

  async delete(id) {
    const result = await client.query('delete from reunion where id = ?', [id]);
    return result
  }
}

export default new ReunionRepository;