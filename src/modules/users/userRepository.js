import client from "../../../database/client.js";

class UserRepository {
  async readAll() {
    const [rows] = await client.query("select * from user");
    return rows;
  }

  async read(id) {
    const [rows] = await client.query("select * from user where id = ?", [id]);
    return rows;
  }

  async create(name) {
    const result = await client.query('insert into user (name) values (?)', [name]);
    return result
  }

  async update(id, name) {
    const result = await client.query('update user set name = ? where id = ?', [name, id]);
    return result
  }

  async delete(id) {
    const result = await client.query('delete from user where id = ?', [id]);
    return result
  }
}

export default new UserRepository;