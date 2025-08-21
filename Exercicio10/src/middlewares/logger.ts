import { Request, Response, NextFunction } from 'express';

export const loggerMiddleware = (req: Request, res: Response, next: NextFunction) => {
//   const timestamp = new Date().toLocaleTimeString();
  const { method, originalUrl } = req;
  const localDate = new Date().toLocaleDateString();
const localTime = new Date().toLocaleTimeString();

  console.log(`[${localDate} ${localTime}] ${method} ${originalUrl}`);
  
  next();
};