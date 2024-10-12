import { sequelize } from 'src/utils/sequelize';
import User from './User';
import { DataTypes } from 'sequelize';

const VisitorDetails = sequelize.define('VisitorDetails', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'user_id',
  },
  CNIC: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

VisitorDetails.belongsTo(User, { foreignKey: 'user_id' });
User.hasOne(VisitorDetails, { foreignKey: 'user_id' });

export default VisitorDetails;
