// Pricing Section
// Single responsibility: Membership tiers - 2-column pricing table

import SectionContainer from '@/components/ui/section-container';
import Heading from '@/components/ui/heading';
import TextBlock from '@/components/ui/text-block';
import Card from '@/components/ui/card';
import Stack from '@/components/ui/stack';
import { copy, type Locale } from '@/content/karate-do-neuhausen';

interface PricingKarateDoNeuhausenProps {
  locale: Locale;
}

export default function PricingKarateDoNeuhausen({ locale }: PricingKarateDoNeuhausenProps) {
  const content = copy[locale].pricing;

  return (
    <section className="py-20 md:py-24 lg:py-32">
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

          {/* 2-Column Pricing Grid */}
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {content.plans.map((plan, index) => (
              <Card key={index} className="flex flex-col">
                <Heading level={3} className="text-black mb-2">
                  {plan.title}
                </Heading>
                <TextBlock size="sm" className="text-gray-600 mb-4">
                  {plan.subtitle}
                </TextBlock>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-black">{plan.priceLine}</span>
                </div>
                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="flex items-start text-gray-700">
                      <span className="mr-2 text-black">•</span>
                      <span className="text-sm">{bullet}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#final-cta"
                  className="w-full px-6 py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-900 transition-colors text-center"
                >
                  {plan.ctaLabel}
                </a>
              </Card>
            ))}
          </div>
        </Stack>
      </SectionContainer>
    </section>
  );
}
