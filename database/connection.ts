import { Sequelize } from 'sequelize';

const db = new Sequelize('node', 'root', 'admin', {
    host: 'localhost',
    dialect: 'mysql',
    //loggging:false es para la consola , te da informacion mas detallada.
});

export default db;