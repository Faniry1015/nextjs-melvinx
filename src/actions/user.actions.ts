'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function createUserAction(formData: FormData) {
  const email = String(formData.get('email') ?? '');
  const name  = String(formData.get('name') ?? '');

  // (optionnel) validations
  if (!email || !name) throw new Error('Email et nom requis');

  await prisma.user.create({ data: { email, name } });
    revalidatePath('/auth/signin');
}
