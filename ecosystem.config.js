module.exports = {
  apps: [
    {
      name: "app",
      script: "./src/server.ts",
      instances: "3",
      exec_mode: "cluster",
      // interpreter: "ts-node",
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      }
    }
  ]
};
