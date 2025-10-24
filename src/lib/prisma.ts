import { PrismaClient } from '@prisma/client';

declare global {
  // Evite les doublons en dev (HMR)
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

export const prisma =
  global.prisma ??
  new PrismaClient({
    log: ['warn', 'error'], // optionnel: logs utiles
  });

if (process.env.NODE_ENV !== 'production') global.prisma = prisma;
