import { Throttle } from '@nestjs/throttler';

// Rate limiting pour les opérations de lecture (plus permissif)
// Applique directement la limite: 100 lectures par minute
export const GetThrottle = () => Throttle({ default: { limit: 200, ttl: 60000 } });

// Rate limiting pour les opérations de création/modification (modéré)
// Applique directement la limite: 30 opérations par minute
export const WriteThrottle = () => Throttle({ default: { limit: 50, ttl: 60000 } }); 