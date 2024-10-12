import { DataTypes } from 'sequelize';
import { VISIT_STATUS } from 'src/utils/constants';
import { sequelize } from 'src/utils/sequelize';
import User from './User';
import StudentDetails from './StudentDetails';

const Visit = sequelize.define('Visits', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  visitorId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'visitor_id',
  },
  studentId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'student_id',
  },
  relation: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  visitTime: {
    type: DataTypes.DATE,
    allowNull: false,
    field: 'visit_time',
  },
  status: {
    type: DataTypes.ENUM(VISIT_STATUS.Pending, VISIT_STATUS.Accepted),
    allowNull: false,
  },
});

Visit.belongsTo(User, { foreignKey: 'visitor_id' });
Visit.belongsTo(StudentDetails, { foreignKey: 'student_id' });
User.hasMany(Visit, { foreignKey: 'visitor_id' });
StudentDetails.hasMany(Visit, { foreignKey: 'student_id' });

export default Visit;
