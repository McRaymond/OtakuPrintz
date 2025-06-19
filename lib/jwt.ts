import jwt from "jsonwebtoken"

const secret = process.env.NEXTAUTH_SECRET || "changeme"

export function signJwt(payload: object): string {
  return jwt.sign(payload, secret, { expiresIn: "7d" })
}
