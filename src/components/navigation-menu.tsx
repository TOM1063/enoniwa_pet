import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Logo } from "./logo";
import { Brush, Heart, CircleHelp} from 'lucide-react';

export function NavigationMenu() {
  return (
    <div className="fixed bottom-0 w-full flex h-14 bg-white items-center justify-between px-4 md:px-10 lg:px-16 text-black ">
      <Logo />
      <Link href="/canvas">
        <Brush />
      </Link>
      <Link href="/gallery">
        <Heart />
      </Link>
      <Link href="/gallery">
        <CircleHelp />
      </Link>

      <UserButton />
    </div>
  );
}
