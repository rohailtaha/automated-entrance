import { sequelize } from 'src/utils/sequelize';
import { DataTypes } from 'sequelize';

const Hostel = sequelize.define('Hostels', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Hostel;
