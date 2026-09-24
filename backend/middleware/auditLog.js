const pool = require('../config/db');

const logActivity = (action) => {
    return async (req, res, next) => {
        res.on('finish', async () => {
            if (req.user && res.statusCode < 400) {
                const userId = req.user.id;
                const ip = req.ip || req.connection.remoteAddress;
                const details = `${action} performed on ${req.originalUrl}`;
                
                await pool.query(
                    'INSERT INTO activity_logs (user_id, action, details, ip_address) VALUES ($1, $2, $3, $4)',
                    [userId, action, details, ip]
                );
            }
        });
        next();
    };
};

module.exports = logActivity;
