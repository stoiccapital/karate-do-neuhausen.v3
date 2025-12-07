// Testimonials Section
// Single responsibility: Parent quotes for trust building - 2-column grid

import SectionContainer from '@/components/ui/section-container';
import Heading from '@/components/ui/heading';
import TextBlock from '@/components/ui/text-block';
import Card from '@/components/ui/card';
import Stack from '@/components/ui/stack';
import { copy, type Locale } from '@/content/karate-do-neuhausen';

interface TestimonialsKarateDoNeuhausenProps {
  locale: Locale;
}

export default function TestimonialsKarateDoNeuhausen({ locale }: TestimonialsKarateDoNeuhausenProps) {
  const content = copy[locale].testimonials;

  return (
    <section className="py-20 md:py-24 lg:py-32 bg-gray-50">
      <SectionContainer>
        <Stack gap="lg">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <Heading level={2} className="text-black">
              {content.heading}
            </Heading>
            <TextBlock size="base" className="text-gray-700">
              {content.intro}
            </TextBlock>
          </div>

          {/* 2-Column Grid */}
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {content.items.map((item, index) => (
              <Card key={index}>
                <TextBlock className="mb-6 italic text-gray-700 text-base leading-relaxed">
                  "{item.quote}"
                </TextBlock>
                <div>
                  <TextBlock size="sm" className="font-semibold text-black">
                    {item.name}
                  </TextBlock>
                  <TextBlock size="sm" className="text-gray-600">
                    {item.role}
                  </TextBlock>
                </div>
              </Card>
            ))}
          </div>
        </Stack>
      </SectionContainer>
    </section>
  );
}
