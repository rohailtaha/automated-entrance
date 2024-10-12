import { sequelize } from '@/utils/sequelize';
import User from './User';
import { DataTypes } from 'sequelize';

const VisitorDetails = sequelize.define(
  'VisitorDetails',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    cnic: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  { underscored: true }
);

VisitorDetails.belongsTo(User, { foreignKey: 'user_id' });
User.hasOne(VisitorDetails, { foreignKey: 'user_id' });

export default VisitorDetails;
