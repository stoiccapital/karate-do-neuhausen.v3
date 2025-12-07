// Footer
// Single responsibility: Global footer component for marketing pages

'use client';

import SectionContainer from '@/components/ui/section-container';
import { copy, type Locale } from '@/content/karate-do-neuhausen';

interface FooterProps {
  locale: Locale;
}

export default function Footer({ locale }: FooterProps) {
  const content = copy[locale].footer;
  const isDE = locale === 'de';
  const basePath = isDE ? '/de/karate-do-neuhausen' : '/karate-do-neuhausen';

  return (
    <footer className="bg-white border-t border-gray-200 py-12 md:py-16">
      <SectionContainer>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Block */}
          <div className="space-y-4">
            <h3 className="text-black text-lg font-bold">
              {content.brandTitle}
            </h3>
            <p className="text-sm text-gray-600">
              {content.brandText}
            </p>
          </div>

          {/* Navigation Block */}
          <div>
            <h4 className="text-black font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {content.nav.map((link) => (
                <li key={link.href}>
                  <a
                    href={`${basePath}${link.href}`}
                    className="text-sm text-gray-600 hover:text-black transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Block */}
          <div>
            <h4 className="text-black font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <span className="text-gray-900">{content.contactLabels.addressLabel}</span>
                <br />
                Winthirplatz 6
                <br />
                {locale === 'de' ? '80639 München' : '80639 Munich'}
              </li>
              <li>
                <span className="text-gray-900">{content.contactLabels.phoneLabel}</span>{' '}
                <a
                  href="tel:+491791226471"
                  className="hover:text-black transition-colors"
                >
                  +49 179 1226471
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Block */}
          <div>
            <h4 className="text-black font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/impressum"
                  className="text-sm text-gray-600 hover:text-black transition-colors"
                >
                  {content.legal.impressum}
                </a>
              </li>
              <li>
                <a
                  href={isDE ? '/de/datenschutz' : '/datenschutz'}
                  className="text-sm text-gray-600 hover:text-black transition-colors"
                >
                  {content.legal.datenschutz}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Line */}
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
          <p>{content.copyright}</p>
        </div>
      </SectionContainer>
    </footer>
  );
}
