// Final CTA Section
// Single responsibility: Convert to trial-class booking - centered, low density

import SectionContainer from '@/components/ui/section-container';
import Heading from '@/components/ui/heading';
import TextBlock from '@/components/ui/text-block';
import CtaGroup from '@/components/ui/cta-group';
import { copy, type Locale } from '@/content/karate-do-neuhausen';

interface FinalCtaKarateDoNeuhausenProps {
  locale: Locale;
}

export default function FinalCtaKarateDoNeuhausen({ locale }: FinalCtaKarateDoNeuhausenProps) {
  const content = copy[locale].finalCta;

  return (
    <section id="final-cta" className="py-24 md:py-32 lg:py-40">
      <SectionContainer>
        <div className="text-center space-y-8 max-w-2xl mx-auto">
          <Heading level={2} className="text-black">
            {content.heading}
          </Heading>
          <TextBlock size="lg" className="text-gray-700">
            {content.paragraph}
          </TextBlock>
          <CtaGroup className="justify-center pt-4">
            <a
              href="https://wa.me/491791226471"
              className="px-10 py-5 bg-black text-white rounded-lg font-semibold hover:bg-gray-900 transition-colors text-lg"
            >
              {content.primaryCta}
            </a>
            <a
              href="#schedule"
              className="px-10 py-5 border-2 border-black text-black rounded-lg font-semibold hover:bg-gray-50 transition-colors text-lg"
            >
              {content.secondaryCta}
            </a>
          </CtaGroup>
        </div>
      </SectionContainer>
    </section>
  );
}
