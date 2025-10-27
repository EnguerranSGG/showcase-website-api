import { SetMetadata } from '@nestjs/common';

export const THROTTLER_SKIP_KEY = 'throttler_skip';

/**
 * Décorateur pour exclure une route du rate limiting global
 * Utilise la fonctionnalité native de @nestjs/throttler
 */
export const SkipThrottle = (limit = true) => SetMetadata(THROTTLER_SKIP_KEY, limit); 