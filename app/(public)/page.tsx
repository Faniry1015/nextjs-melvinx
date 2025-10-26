import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <p>Home page</p>
      <Button ><Link href='./account'>Click here</Link></Button>
    </div>
  );
}
