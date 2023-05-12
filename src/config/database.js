module.exports = {
    dialect: "mysql",
    username: process.env.MYSQLUSER || "root",
    password: process.env.MYSQLPASSWORD || "cqQt9zfsTHR06IANS4QG",
    database: process.env.MYSQLDATABASE || "railway",
    host: process.env.MYSQLHOST || "containers-us-west-98.railway.app",
    port:process.env.MYSQLPORT || "6902",
    define: {
      timestamp: true,
      underscored:true
    }
  }