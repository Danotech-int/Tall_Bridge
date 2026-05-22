const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // We add connection options to handle network volatility
        const options = {
            tls: true,
            tlsAllowInvalidCertificates: true, // Bypass strict SSL handshake
            serverSelectionTimeoutMS: 15000    // Give it more time to find the server
        };
        
        await mongoose.connect(process.env.MONGODB_URI, options);
        console.log('MongoDB Connected Successfully...');
    } catch (err) {
        console.error('Database connection failed:', err.message);
        process.exit(1);
    }
};

module.exports = connectDB;