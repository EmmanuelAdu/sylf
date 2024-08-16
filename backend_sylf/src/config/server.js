import app from '../../app.js';


// Start server
export const startServer = () => {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
}