import connectDB from "../config/db.js";

export const createUserTable = async () => {

    const connection = await connectDB();
    try {
        await connection.query(`CREATE TABLE IF NOT EXISTS users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            username VARCHAR(100) NOT NULL,
            email VARCHAR(100) NOT NULL UNIQUE,
            password VARCHAR(100) NOT NULL,
            bio TEXT,
            profile_picture VARCHAR(255),
            user_type ENUM('student', 'teacher', 'admin') NOT NULL DEFAULT 'student',
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
        )`);
        console.log('User table created successfully');
    } catch (error) {
        console.error('Error creating user table:', error.message);
        throw error;
    }
}