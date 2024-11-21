"use client";

import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";

export function AuthButton({
      text = "Sign in",
      className
}: {
      text?: string;
      className?: string;
      variant?: "default" | "ghost";
      children?: React.ReactNode;
}) {
  return (
  <>
      <SignedOut>
        <SignInButton>
            <button className={className}>{text}</button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <Link href="/gallery/">
            <button className={className}>{text}</button>
        </Link>
      </SignedIn>
    </>
  );
}
