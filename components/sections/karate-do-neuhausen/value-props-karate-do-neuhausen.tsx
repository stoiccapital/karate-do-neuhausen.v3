// Value Propositions Section
// Single responsibility: Why parents choose this dojo

import SectionContainer from '@/components/ui/section-container';
import Heading from '@/components/ui/heading';
import TextBlock from '@/components/ui/text-block';
import Card from '@/components/ui/card';
import Stack from '@/components/ui/stack';
import { copy, type Locale } from '@/content/karate-do-neuhausen';

interface ValuePropsKarateDoNeuhausenProps {
  locale: Locale;
}

export default function ValuePropsKarateDoNeuhausen({ locale }: ValuePropsKarateDoNeuhausenProps) {
  const content = copy[locale].valueProps;

  return (
    <section className="py-20 md:py-24 lg:py-32 bg-gray-50">
      <SectionContainer>
        <Stack gap="lg">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <Heading level={2} className="text-black">
              {content.heading}
            </Heading>
          </div>

          {/* 4-Column Grid (3 columns on desktop, 1-2 on mobile) */}
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {content.cards.map((card, index) => (
              <Card key={index} className="text-center">
                {/* Icon Placeholder */}
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 bg-gray-100 border border-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-2xl">•</span>
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
