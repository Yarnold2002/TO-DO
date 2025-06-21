import z from "zod"

export const registerSchema = z.object({
    user_name:z.string({required_error:'Ingrese un nombre de Usuario.'}),
    email:z.string({required_error:'Ingrese una correo'}).email(),
    password:z.string({required_error:'Ingrese su contraseña'}).min(6),
    name:z.string({required_error:'Ingrese su nombre.'}),
    last_name:z.string({required_error:'Ingrese su apellido.'}),
    phone:z.string({required_error:'Ingrese su numero de celular.'}),
    //falta el rol por id
    role:z.number()

}) 