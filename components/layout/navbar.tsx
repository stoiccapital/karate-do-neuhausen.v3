// Navbar
// Single responsibility: Global navigation component for marketing pages

'use client';

import { useState } from 'react';
import SectionContainer from '@/components/ui/section-container';
import { copy, type Locale } from '@/content/karate-do-neuhausen';

interface NavbarProps {
  locale: Locale;
}

export default function Navbar({ locale }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const content = copy[locale].navbar;
  const isDE = locale === 'de';
  const enPath = '/karate-do-neuhausen';
  const dePath = '/de/karate-do-neuhausen';

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <SectionContainer>
        <nav className="flex items-center justify-between h-16">
          {/* Brand/Logo Block */}
          <div className="flex items-center">
            <a 
              href={`${isDE ? dePath : enPath}#hero`} 
              className="text-xl font-bold text-black"
              onClick={closeMobileMenu}
            >
              {content.brand}
            </a>
          </div>

          {/* Primary Nav Links - Desktop Only */}
          <div className="hidden md:flex items-center gap-8">
            {content.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-900 hover:text-black transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Language Switcher & CTA - Desktop Only */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language Switcher */}
            <div className="flex items-center gap-2 border-r border-gray-200 pr-4">
              <a
                href={enPath}
                className={`text-sm font-medium transition-colors ${
                  locale === 'en'
                    ? 'text-black'
                    : 'text-gray-600 hover:text-black'
                }`}
              >
                EN
              </a>
              <span className="text-gray-300">|</span>
              <a
                href={dePath}
                className={`text-sm font-medium transition-colors ${
                  locale === 'de'
                    ? 'text-black'
                    : 'text-gray-600 hover:text-black'
                }`}
              >
                DE
              </a>
            </div>

            {/* Primary CTA Button */}
            <a
              href="#final-cta"
              className="px-6 py-2 bg-black text-white rounded-lg font-semibold hover:bg-gray-900 transition-colors"
            >
              {content.primaryCta}
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-2">
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="text-gray-900 hover:text-black transition-colors p-2"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                // X icon when open
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Hamburger icon when closed
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu Container */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="py-4 space-y-4">
              {/* Mobile Nav Links */}
              {content.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className="block px-4 py-2 text-gray-900 hover:text-black hover:bg-gray-50 transition-colors font-medium"
                >
                  {link.label}
                </a>
              ))}

              {/* Mobile Language Switcher */}
              <div className="px-4 py-2 border-t border-gray-200">
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-600 font-medium">Language:</span>
                  <div className="flex items-center gap-2">
                    <a
                      href={enPath}
                      onClick={closeMobileMenu}
                      className={`text-sm font-medium px-3 py-1 rounded transition-colors ${
                        locale === 'en'
                          ? 'bg-gray-100 text-black'
                          : 'text-gray-600 hover:text-black hover:bg-gray-50'
                      }`}
                    >
                      EN
                    </a>
                    <span className="text-gray-300">|</span>
                    <a
                      href={dePath}
                      onClick={closeMobileMenu}
                      className={`text-sm font-medium px-3 py-1 rounded transition-colors ${
                        locale === 'de'
                          ? 'bg-gray-100 text-black'
                          : 'text-gray-600 hover:text-black hover:bg-gray-50'
                      }`}
                    >
                      DE
                    </a>
                  </div>
                </div>
              </div>

              {/* Mobile CTA Button */}
              <div className="px-4 py-2 border-t border-gray-200">
                <a
                  href="#final-cta"
                  onClick={closeMobileMenu}
                  className="block w-full px-6 py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-900 transition-colors text-center"
                >
                  {content.primaryCta}
                </a>
              </div>
            </div>
          </div>
        )}
      </SectionContainer>
    </header>
  );
}
