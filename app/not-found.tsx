import { PagesLayout } from "@/components/pages-layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function notfound() {
  return (
      <Card className="w-full flex flex-col items-center justify-center p-10">
        <h1 className="text-2xl font-bold mb-4">404 - Page non trouvée</h1>
        <p className="mb-6">Désolé, la page que vous recherchez n’existe pas.</p>
        <Link href="/">
          <Button>Retour à l’accueil</Button>
        </Link>
      </Card>
  );
}