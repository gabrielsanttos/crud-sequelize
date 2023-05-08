module.exports = {
    dialect: "mysql",
    username: process.env.DB_USERNAME || "root",
    password: process.env.DB_PASSWORD || "cqQt9zfsTHR06IANS4QG",
    database: process.env.DB_DBNAME || "railway",
    host: process.env.DB_HOST || "containers-us-west-98.railway.app",
    port:process.env.DB_PORT || "6902",
    define: {
      timestamp: true,
      underscored:true
    }
  }