import { Throttle } from '@nestjs/throttler';

// Rate limiting pour les uploads de fichiers (plus permissif)
// Applique directement la limite: 10 uploads par minute
export const UploadThrottle = () => Throttle({ default: { limit: 10, ttl: 60000 } });

// Rate limiting pour les opérations de création/modification (modéré)
// Applique directement la limite: 30 opérations par minute
export const WriteThrottle = () => Throttle({ default: { limit: 30, ttl: 60000 } }); 