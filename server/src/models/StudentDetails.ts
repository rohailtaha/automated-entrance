import { sequelize } from 'src/utils/sequelize';
import User from './User';
import { DataTypes } from 'sequelize';
import Hostel from './Hostel';

const StudentDetails = sequelize.define('StudentDetails', {
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
  studentId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'student_id',
  },
  hostelId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'hostel_id',
  },
});

// index on studentId

StudentDetails.belongsTo(User, { foreignKey: 'user_id' });
User.hasOne(StudentDetails, { foreignKey: 'user_id' });

StudentDetails.belongsTo(Hostel, { foreignKey: 'hostel_id' });
Hostel.hasMany(StudentDetails, { foreignKey: 'hostel_id' });

export default StudentDetails;
