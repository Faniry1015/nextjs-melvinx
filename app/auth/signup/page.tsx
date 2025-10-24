'use client';

import { useTransition } from 'react';
import { createUserAction } from '@/actions/user.actions';

export default function NewUserForm() {
  const [pending, start] = useTransition();

  return (
    <form action={(fd) => start(() => createUserAction(fd))}>
      <input name="email" type="email" placeholder="Email" required />
      <input name="name"  type="text"  placeholder="Nom"   required />
      <input name="password"  type="password"  placeholder="Mot de passe"   required />
      <button disabled={pending}>{pending ? 'Ajout…' : 'Créer'}</button>
    </form>
  );
}
