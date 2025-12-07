// Marketing Layout
// Single responsibility: Shared layout wrapper for all marketing routes

'use client';

import { usePathname } from 'next/navigation';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import { type Locale } from '@/content/karate-do-neuhausen';

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const locale: Locale = pathname?.startsWith('/de/') ? 'de' : 'en';

  return (
    <>
      {/* Global Navbar */}
      <Navbar locale={locale} />

      {/* Page Content */}
      {children}

      {/* Global Footer */}
      <Footer locale={locale} />
    </>
  );
}
