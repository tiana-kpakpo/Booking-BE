import { Sequelize }  from 'sequelize';
import dotenv from 'dotenv'
dotenv.config();

const sequelize = new Sequelize(process.env.MYSQL_DB, process.env.MYSQL_USER, process.env.MYSQL_PASWRD, {
    host: process.env.MYSQL_HOST,
    dialect: 'mysql',
});

try {
    sequelize.authenticate();
    console.log('mysql connection established')
} catch (error) {
    console.error('mysql connection unsuccessful', error)
    
}

export default sequelize;