import { DataTypes } from 'sequelize';
import { CLIENT_ROLE } from 'src/utils/constants';
import { sequelize } from 'src/utils/sequelize';

const User = sequelize.define('Users', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.ENUM(
      CLIENT_ROLE.Student,
      CLIENT_ROLE.Visitor,
      CLIENT_ROLE.Warden,
      CLIENT_ROLE.Gatekeeper
    ),
    allowNull: false,
  },
});

export default User;
