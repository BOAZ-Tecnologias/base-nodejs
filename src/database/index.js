import Sequelize from 'sequelize';
import Example from '../app/models/Example';
import databaseConfig from '../config/database';

const models = [Example];

class Database {
  constructor(db_host, db_user, db_name) {
    this.models = [];
    this.init(db_host, db_user, db_name);
  }

  init(host, username, database) {
    const { DB_HOST, DB_USER, DB_NAME } = process.env;

    this.connection = new Sequelize({
      ...databaseConfig,
      host: DB_HOST || host,
      username: DB_USER || username,
      database: DB_NAME || database,
    });

    this.models = models.map(model => model.init(this.connection));

    this.models.map(
      model => model.associate && model.associate(this.connection.models)
    );
  }

  getModels() {
    return this.models.reduce((payload, data) => {
      return {
        ...payload,
        [data.name]: data,
      };
    }, {});
  }

  static sequelize() {
    return new Sequelize(databaseConfig);
  }
}

export default Database;
