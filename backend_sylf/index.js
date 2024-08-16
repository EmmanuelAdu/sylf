import connectDB from './src/config/db.js';
import { startServer } from './src/config/server.js';
import { createUserTable } from './src/migrations/createUser.js';


const initializeServer = async () => {
    try {
        // Establish DatabaseConnection
        await connectDB();
        await createUserTable();
        const serverResult = startServer();
        console.log('Server Result', serverResult)
    } catch (error) {
        console.error('Failed to startServer:', error.message);
        process.exit(1);
    }
};

initializeServer();
