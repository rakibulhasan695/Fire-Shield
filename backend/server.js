const express = require('express');
const cors = require('cors');
require('dotenv').config();

const pool = require('./config/db');
const auditLog = require('./middleware/auditLog');
const termsRoutes = require('./routes/terms');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Master Maintenance Control Flag
let isSystemLocked = false;

// Global Security Check Middleware
app.use((req, res, next) => {
    if (isSystemLocked && req.headers['master-key'] !== process.env.MASTER_KEY) {
        return res.status(503).json({ 
            error: "System is currently locked by Master Admin for maintenance." 
        });
    }
    next();
});

// Master Lock/Unlock API (Only Master Admin can use)
app.post('/api/admin/system-lock', (req, res) => {
    const { lock, masterKey } = req.body;
    if (masterKey !== process.env.MASTER_KEY) {
        return res.status(403).json({ error: "Unauthorized access: Invalid Master Key." });
    }
    isSystemLocked = lock;
    res.json({ message: `System access has been ${isSystemLocked ? 'LOCKED' : 'UNLOCKED'}.` });
});

// API Routes with Audit Logging
app.use('/api/terms', auditLog('ACCESS_TERMS'), termsRoutes);

// Health Check Endpoint
app.get('/api/health', (req, res) => {
    res.json({ status: "Fire Shield ERP Server is Running Smoothly", systemLocked: isSystemLocked });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Fire Shield ERP Backend running on port ${PORT}`);
});
