import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

// Server Middleware setup
app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

export default app;