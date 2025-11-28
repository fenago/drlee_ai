'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface CourseBreadcrumbProps {
  category: string;
}

export default function CourseBreadcrumb({ category }: CourseBreadcrumbProps) {
  const router = useRouter();

  const handleCatalogClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    // Navigate to home page
    router.push('/');

    // Wait for navigation and page render, then scroll to catalog
    setTimeout(() => {
      const catalogElement = document.getElementById('catalog');
      if (catalogElement) {
        const yOffset = -96; // Account for header height
        const y = catalogElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 300); // Increased delay to ensure content is rendered
  };

  return (
    <div className="flex items-center gap-2 text-sm text-white/50 mb-6">
      <Link href="/" className="hover:text-white transition-colors">
        Home
      </Link>
      <span>/</span>
      <Link
        href="/#catalog"
        onClick={handleCatalogClick}
        className="hover:text-white transition-colors"
      >
        Catalog
      </Link>
      <span>/</span>
      <span className="text-white/70">{category}</span>
    </div>
  );
}
