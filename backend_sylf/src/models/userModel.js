import connectDB from "../config/db.js";

export const createUser = async (userData) => {
    const { username, email, password } = userData;
    const connection = await connectDB;
    try {
        const [rows] = await connection.execute(
            'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
            [username, email, password]
        );
        return rows;
    } catch (error) {
        console.error('Error creating user:', error.message);
        throw error;
    }
}