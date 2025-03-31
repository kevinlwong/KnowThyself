// src/app/dashboard/layout.tsx
import React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="dashboard-layout">
      {/* You can add shared dashboard layout elements here */}
      <main>{children}</main>
    </div>
  );
}