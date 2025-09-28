import { PagesLayout } from "@/components/pages-layout";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <PagesLayout title="Accueil">
      <Link href='/formations'> <Button>Modules de formations</Button> </Link>
    </PagesLayout>
  );
}
