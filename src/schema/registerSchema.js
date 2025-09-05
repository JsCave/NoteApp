import * as zod from "zod"

export const registerSchema=zod.object({
    name:zod.string().max(15,"the max length is 15 char"),
    email:zod.email(),
    password:zod.string()
    .nonempty('Password is required')
    .regex(/^[A-Za-z0-9]{6,20}$/, 'Password must be 6–20 characters and contain only letters and numbers'),
    age:zod.string().refine((data)=>data>18,"age must be +18"),
    phone:zod.string().regex(/^01[0125][0-9]{8}$/,"the phone is not valid")


});
