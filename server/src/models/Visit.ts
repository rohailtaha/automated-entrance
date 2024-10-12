import { DataTypes } from 'sequelize';
import { sequelize } from '@/utils/sequelize';
import StudentDetails from './StudentDetails';
import { VISIT_STATUS } from '@/utils/constants';
import User from './User';

const Visit = sequelize.define(
  'Visits',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    visitorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    studentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
    relation: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    visitTime: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM(VISIT_STATUS.Pending, VISIT_STATUS.Accepted),
      allowNull: false,
    },
  },
  { underscored: true }
);

Visit.belongsTo(User, { foreignKey: 'visitor_id' });
User.hasMany(Visit, { foreignKey: 'visitor_id' });
Visit.belongsTo(StudentDetails, {
  foreignKey: 'student_id',
  targetKey: 'studentId',
});
StudentDetails.hasMany(Visit, {
  foreignKey: 'student_id',
  sourceKey: 'studentId',
});

export default Visit;
