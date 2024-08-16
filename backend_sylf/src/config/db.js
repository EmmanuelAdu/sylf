import mysql from 'mysql2/promise'

// Async function to connect to the database
const connectDB = async() => {
    try {
        const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'new_password',
        port: 33061,
        database: 'sylf'
        });
        console.log('Connected to the MYSQL Database');
        return connection;
    } catch (error) {
        console.error('Error connecting to the database:', error.message);
        throw error;
    } 
}


export default connectDB;