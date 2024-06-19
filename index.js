console.log("Starting application...");

const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const connectDB = require('./config/db');
const router = require('./routes');
const bodyParser = require('body-parser');

const app = express();

app.use(cors({
    origin: true,
    credentials: true
}));

app.use(cookieParser());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use("/api", router);

const PORT = process.env.PORT || 8080;

const startServer = async () => {
    try {
        await connectDB();
        console.log("Connected to DB successfully");

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error("Failed to connect to DB:", error);
        process.exit(1); // Exit the process with failure
    }
};

startServer();
