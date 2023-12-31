
module.exports.params = {
  dbname: process.env.MYSQL_ENV_MYSQL_DATABASE,
  username: process.env.MYSQL_ENV_MYSQL_USER,
  password: process.env.MYSQL_ENV_MYSQL_PASSWORD,
  params: {
      host: process.env.MARIADB_SERVICE_SERVICE_HOST,
      port: process.env.MARIADB_SERVICE_SERVICE_PORT,
      dialect: 'mysql'
  }
};
