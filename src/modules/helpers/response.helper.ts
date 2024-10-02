import { HttpStatus } from '@nestjs/common';

export function sendResponse(statusCode: number, message: string, data?: any) {
  return {
    statusCode,
    message,
    data: data || null, 
  };
}