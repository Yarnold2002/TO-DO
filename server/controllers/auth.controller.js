import sql from "../db.js"
//import { userSchema } from "../models/User.js"

export const register = async (req, res) => {
    //parametros para crear el usuario
    const {user_name, email, password, name, last_name, phone, role} = req.body
    try {
        const userFound = await sql`
        SELECT * FROM USERS
        WHERE email = ${email} || ${user_name}
        `
        console.log("Valor de userFound:", userFound)
        if (userFound.length === 0) {
      const createUser = await sql`
        INSERT INTO USERS("user_name", "email", "password", "name", "last_name", "phone", "role") 
        VALUES (${user_name}, ${email}, ${password}, ${name}, ${last_name}, ${phone}, ${role})
      `;

      console.log("Usuario creado:", req.body);
      return res.status(201).json({
        message: "Usuario registrado correctamente",
        usuario: req.body,
      });
    }

    // Ya existe un usuario con ese correo
    return res.status(400).json({ error: "El correo ya está registrado" });

  } catch (error) {
    console.error("Error al crear usuario:", error);
    res.status(500).json({ error: "Error al registrar el usuario" });
  }
}