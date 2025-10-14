import { PagesLayout } from "@/components/pages-layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function notfound() {
  return (
    <PagesLayout title="Page non trouvée">
      <Card className="w-full flex flex-col items-center justify-center p-10">
        <p className="mb-6">Désolé, la page que vous recherchez n'existe pas.</p>
        <Link href="/">
          <Button>Retour à l'accueil</Button>
        </Link>
      </Card>
    </PagesLayout>
  );
}