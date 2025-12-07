// Use Cases Section
// Single responsibility: What students gain - 4-card grid

import SectionContainer from '@/components/ui/section-container';
import Heading from '@/components/ui/heading';
import TextBlock from '@/components/ui/text-block';
import Card from '@/components/ui/card';
import Stack from '@/components/ui/stack';
import { copy, type Locale } from '@/content/karate-do-neuhausen';

interface UseCasesKarateDoNeuhausenProps {
  locale: Locale;
}

export default function UseCasesKarateDoNeuhausen({ locale }: UseCasesKarateDoNeuhausenProps) {
  const content = copy[locale].useCases;

  return (
    <section id="who-its-for" className="py-20 md:py-24 lg:py-32">
      <SectionContainer>
        <Stack gap="lg">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <Heading level={2} className="text-black">
              {content.heading}
            </Heading>
          </div>

          {/* 4-Card Grid (3 columns on desktop, 1-2 on mobile) */}
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {content.cards.map((card, index) => (
              <Card key={index}>
                {/* Optional Icon Placeholder */}
                <div className="mb-4">
                  <div className="w-12 h-12 bg-gray-100 border border-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-xl">•</span>
                  </div>
                </div>
                <Heading level={3} className="text-black mb-4">
                  {card.title}
                </Heading>
                <TextBlock size="sm" className="text-gray-700">
                  {card.body}
                </TextBlock>
              </Card>
            ))}
          </div>
        </Stack>
      </SectionContainer>
    </section>
  );
}
