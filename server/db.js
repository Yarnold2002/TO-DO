import dotenv from 'dotenv';
import postgres from 'postgres';

dotenv.config();

// ✅ Crear la instancia una sola vez
const sql = postgres(process.env.POSTGRES_URL);

console.log("Conectando a:", process.env.POSTGRES_URL);
// ✅ Función para probar conexión
export const testConnection = async () => {
  try {
    await sql`SELECT 1`;
    console.log("✅ Base de datos conectada");
  } catch (error) {
    console.error("❌ Error de conexión a la base de datos:", error.message);
  }
};


// ✅ Exportar la instancia para usar en rutas
export default sql;