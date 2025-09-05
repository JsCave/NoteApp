import * as zod from "zod"

export const loginSchema=zod.object({
    email:zod.email(),
    password:zod.string()
    .nonempty('Password is required')
    .regex(/^[A-Za-z0-9]{6,20}$/, 'Password must be 6–20 characters and contain only letters and numbers'),



});