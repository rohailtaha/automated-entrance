import { DataTypes } from 'sequelize';
import { sequelize } from 'src/utils/sequelize';
import User from './User';
import Hostel from './Hostel';

const WardenDetails = sequelize.define('WardenDetails', {
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
  hostelId: {
    type: DataTypes.INTEGER,
    field: 'hostel_id',
  },
});

WardenDetails.belongsTo(User, { foreignKey: 'user_id' });
User.hasOne(WardenDetails, { foreignKey: 'user_id' });

WardenDetails.belongsTo(Hostel, { foreignKey: 'hostel_id' });
Hostel.hasOne(WardenDetails, { foreignKey: 'hostel_id' });

export default WardenDetails;
