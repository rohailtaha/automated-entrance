import { CLIENT_ROLE } from '@/utils/constants';
import { sequelize } from '@/utils/sequelize';
import { DataTypes } from 'sequelize';

const User = sequelize.define(
  'users',
  {
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
  },
  { underscored: true }
);

export default User;
