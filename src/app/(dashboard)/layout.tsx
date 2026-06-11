import { AuthProvider } from "@/components/providers/AuthProvider";
import ProtectedLayout from "@/components/layout/ProtectedLayout";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <ProtectedLayout>
        {children}
      </ProtectedLayout>
    </AuthProvider>
  );
}
