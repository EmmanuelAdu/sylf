import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

// Server Middleware setup
app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

const startServer = () => {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
}

export { app, startServer };
