import '../models';
import { sequelize } from './sequelize';

async function bootstrap() {
  await sequelize.sync();
}

export default bootstrap;
