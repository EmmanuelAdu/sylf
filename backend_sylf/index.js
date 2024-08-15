import connectDB from './src/config/db.js';
import { app, startServer } from './src/config/server.js';


const initializeServer = async () => {
    try {
        // Establish DatabaseConnection
        await connectDB();
        const serverResult = startServer();
        console.log('Server Result', serverResult)
    } catch (error) {
        console.error('Failed to startServer:', error.message);
        process.exit(1);
    }
};

initializeServer();
