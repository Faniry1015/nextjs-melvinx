import { PagesLayout } from "@/components/pages-layout";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-4xl font-bold">Bienvenue sur Faniry</h1>
      <p className="text-lg text-center max-w-md">
        Découvrez une plateforme innovante pour gérer vos projets et collaborer efficacement.
      </p>
      <div className="flex gap-4">
        <Link href="/auth/signup">
          <Button variant='outline'>S'inscrire</Button>
        </Link>
        <Link href="/auth/login">
          <Button variant='default'>Se connecter</Button>
        </Link>
      </div>
    </div>
  );
}
