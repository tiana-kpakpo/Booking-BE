import express from'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config();
import sequelize from './config/db.js';

const app = express();
const PORT = process.env.PORT || 9090

app.use(express.json());
app.use(cors({origin: '*'}))


app.listen(PORT, () => console.log(`Server is running on ${PORT}`))