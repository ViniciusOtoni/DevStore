import initModels from './models/init-models.js';

import Sequelize from 'sequelize';

const sequelize = new Sequelize(
    'mysql_17753_nsf2021', 
    'nsf2021', 
    'nsf@2021', {
    host: 'my01.winhost.com',
    dialect: 'mysql',
    logging: false
});

const db = initModels(sequelize);
export default db;