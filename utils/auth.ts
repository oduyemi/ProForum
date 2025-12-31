import jwt from "jsonwebtoken";

interface JwtPayload {
    id: string;
  }
  
  export const verifyToken = (token: string): JwtPayload => {
    return jwt.verify(
      token,
      process.env.JWT_SECRET as string
    ) as JwtPayload;
  };

export const logout = async () => {
  await fetch('/api/auth/logout', { method: 'POST' });
  window.location.href = '/login'; // Redirect to login
};