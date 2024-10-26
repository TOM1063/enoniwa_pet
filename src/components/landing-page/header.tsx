import { Logo } from "@/components/logo";
import { AuthButton } from "@/components/auth-button";

export function Header() {
  return(<div className="flex h-28 items-center justify-between px-16">
      <Logo />
      <AuthButton className="bg-white text-black hover:text-gray-500">
        sign in
      </AuthButton>
    </div>
  );
}
