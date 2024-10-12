import { sequelize } from '@/utils/sequelize';
import User from './User';
import { DataTypes } from 'sequelize';
import Hostel from './Hostel';

const StudentDetails = sequelize.define(
  'student_details',
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
    studentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
    hostelId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { underscored: true }
);

// index on studentId

StudentDetails.belongsTo(User, { foreignKey: 'user_id' });
User.hasOne(StudentDetails, { foreignKey: 'user_id' });

StudentDetails.belongsTo(Hostel, { foreignKey: 'hostel_id' });
Hostel.hasMany(StudentDetails, { foreignKey: 'hostel_id' });

export default StudentDetails;
