import * as DOMPurify from 'dompurify';
import { JSDOM } from 'jsdom';

// Créer un faux DOM pour DOMPurify
const window = new JSDOM('').window;
const purify = DOMPurify(window as any);

export function sanitizeInput(input: string): string {
  return purify.sanitize(input, { ALLOWED_TAGS: [], ALLOWED_ATTR: [] });
}

export function sanitizeObject(obj: any): any {
  if (typeof obj === 'string') {
    return sanitizeInput(obj);
  } else if (Array.isArray(obj)) {
    // Handle arrays properly
    return obj.map(item => sanitizeObject(item));
  } else if (typeof obj === 'object' && obj !== null) {
    const sanitized: any = {};
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        sanitized[key] = sanitizeObject(obj[key]);
      }
    }
    return sanitized;
  }
  return obj;
}
