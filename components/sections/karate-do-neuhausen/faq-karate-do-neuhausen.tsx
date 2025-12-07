// FAQ Section
// Single responsibility: Address parent concerns - vertical accordion stack

import SectionContainer from '@/components/ui/section-container';
import Heading from '@/components/ui/heading';
import TextBlock from '@/components/ui/text-block';
import Stack from '@/components/ui/stack';
import { copy, type Locale } from '@/content/karate-do-neuhausen';

interface FaqKarateDoNeuhausenProps {
  locale: Locale;
}

export default function FaqKarateDoNeuhausen({ locale }: FaqKarateDoNeuhausenProps) {
  const content = copy[locale].faq;

  return (
    <section id="faq" className="py-20 md:py-24 lg:py-32 bg-gray-50">
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

          {/* Vertical Accordion Stack */}
          <div className="max-w-3xl mx-auto mt-12 space-y-4">
            {content.qaItems.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6"
              >
                <Heading level={3} className="text-black mb-3">
                  {item.question}
                </Heading>
                <TextBlock size="sm" className="text-gray-700">
                  {item.answer}
                </TextBlock>
              </div>
            ))}
          </div>
        </Stack>
      </SectionContainer>
    </section>
  );
}
