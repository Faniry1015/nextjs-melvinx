'use server'; // garantit une exécution côté serveur

import { prisma } from '@/lib/prisma';

// Création
export async function createUser(email: string, name: string, password: string) {
  return prisma.user.create({ data: { email, name, password } });
}

// Lecture par email
export async function getUserByEmail(email: string) {
  return prisma.user.findUnique({ where: { email } });
}

// Lecture de tous les users
export async function getAllUsers() {
  return prisma.user.findMany();
}
