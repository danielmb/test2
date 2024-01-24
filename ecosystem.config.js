module.exports = {
  apps: [
    {
      name: 'app',
      script: 'index.js',
      instances: 'max',
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
        PORT: 3000,
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
    },
  ],
};

// pm2 start ecosystem.config.js --env production
