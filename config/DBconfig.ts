// make sure that any items are correctly URL encoded in the connection string
const sql = require("mssql");

const userName = process.env.DB_USERNAME || "your DB user name"; //if you have a domain account "domainName//userName" use 2 backslashes or username@domain
const password = process.env.DB_PASSWORD || "your DB password Here";
const database = process.env.DB_NAME || "elshubank";

const DBconfig = `Server=localhost,1433;Database=${database};User Id=${userName};Password=${password};Encrypt=false`;

export default DBconfig;
