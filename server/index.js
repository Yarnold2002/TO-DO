import app from "./app.js";
import { testConnection } from "./db.js";

await testConnection();
app.listen(3000)

console.log("server on port" , 3000)