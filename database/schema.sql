-- 1. Users Table (Role-Based Access Control)
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role VARCHAR(20) DEFAULT 'staff', -- 'admin', 'staff', 'master_admin'
    permissions JSONB, -- Example: {"sales": true, "inventory": false}
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. Preset Terms & Conditions Table
CREATE TABLE terms_conditions (
    id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL, -- e.g., 'Supply Terms', 'AMC Terms'
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 3. Preset Signatures Table
CREATE TABLE signatories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL, -- e.g., 'Rakibul Hasan'
    title VARCHAR(100) NOT NULL, -- e.g., 'Managing Director'
    signature_image_url TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 4. Activity Log (Audit Trail)
CREATE TABLE activity_logs (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    action VARCHAR(50), -- e.g., 'LOGIN', 'CREATE_SALES', 'DELETE_INVOICE'
    details TEXT,
    ip_address VARCHAR(45),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
