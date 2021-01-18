import { Op } from 'sequelize';

export const searchFields = fields => search =>
  fields.map(field => ({
    [field]: {
      [Op.iLike]: `%${search}%`,
    },
  }));
