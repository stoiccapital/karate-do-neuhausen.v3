// Hero Section
// Single responsibility: Premium hero section with split-grid layout

import SectionContainer from '@/components/ui/section-container';
import Heading from '@/components/ui/heading';
import TextBlock from '@/components/ui/text-block';
import MediaContainer from '@/components/ui/media-container';
import CtaGroup from '@/components/ui/cta-group';
import { copy, type Locale } from '@/content/karate-do-neuhausen';

interface HeroKarateDoNeuhausenProps {
  locale: Locale;
}

export default function HeroKarateDoNeuhausen({ locale }: HeroKarateDoNeuhausenProps) {
  const content = copy[locale].hero;

  return (
    <section id="hero" className="py-20 md:py-24 lg:py-32">
      <SectionContainer>
        <div className="grid md:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Text Content - Left Side */}
          <div className="md:col-span-6 space-y-8">
            <Heading level={1} className="text-black">
              {content.h1}
            </Heading>
            <TextBlock size="lg" className="text-gray-700 max-w-xl">
              {content.body}
            </TextBlock>
            <CtaGroup>
              <a
                href="https://wa.me/491791226471"
                className="px-8 py-4 bg-black text-white rounded-lg font-semibold hover:bg-gray-900 transition-colors text-center"
              >
                {content.primaryCta}
              </a>
              <a
                href="#schedule"
                className="px-8 py-4 border-2 border-black text-black rounded-lg font-semibold hover:bg-gray-50 transition-colors text-center"
              >
                {content.secondaryCta}
              </a>
            </CtaGroup>
          </div>

          {/* Media - Right Side */}
          <div className="md:col-span-6">
            <MediaContainer>
              <div className="aspect-[4/3] bg-gray-100 rounded-lg flex items-center justify-center border border-gray-200">
                <span className="text-gray-400 text-sm">{content.mediaAlt}</span>
              </div>
            </MediaContainer>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
