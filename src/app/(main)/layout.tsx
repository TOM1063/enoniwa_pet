import { NavigationMenu } from "@/components/navigation-menu";
export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    return (
    <div className="h-100">
        {children}
      <NavigationMenu/>
    </div>
  );
}
