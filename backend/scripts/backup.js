const cron = require('node-cron');
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

// Daily Midnight Auto-Backup Execution (12:00 AM)
cron.schedule('0 0 * * *', () => {
    const backupDir = path.join(__dirname, '../backups');
    if (!fs.existsSync(backupDir)) fs.mkdirSync(backupDir);

    const fileName = `backup-${Date.now()}.sql`;
    const filePath = path.join(backupDir, fileName);

    exec(`pg_dump -U postgres -d fireshield_db > ${filePath}`, (err) => {
        if (err) return console.error('Backup creation failed:', err);

        console.log('Database Backup Successfully Created:', fileName);

        // Keep only the last 2 backup files
        fs.readdir(backupDir, (err, files) => {
            const sqlFiles = files
                .filter(f => f.endsWith('.sql'))
                .map(f => ({ name: f, time: fs.statSync(path.join(backupDir, f)).mtime.getTime() }))
                .sort((a, b) => b.time - a.time);

            if (sqlFiles.length > 2) {
                for (let i = 2; i < sqlFiles.length; i++) {
                    fs.unlinkSync(path.join(backupDir, sqlFiles[i].name));
                    console.log('Deleted old backup file:', sqlFiles[i].name);
                }
            }
        });
    });
});
