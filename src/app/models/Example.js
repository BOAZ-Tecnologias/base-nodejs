import Sequelize, { Model } from 'sequelize';

class Example extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.STRING,
          unique: true,
          allowNull: false,
          primaryKey: true,
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        status: {
          type: Sequelize.BOOLEAN,
          defaultValue: true,
        },
        deleted_at: Sequelize.DATE,
      },
      {
        sequelize,
        tableName: 'Example',
        paranoid: true,
      }
    );

    return this;
  }

  static associate(_models) {}
}

export default Example;
