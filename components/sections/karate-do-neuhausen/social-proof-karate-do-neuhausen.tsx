// Social Proof Section
// Single responsibility: Build trust with proof points

import SectionContainer from '@/components/ui/section-container';
import Heading from '@/components/ui/heading';
import TextBlock from '@/components/ui/text-block';
import Card from '@/components/ui/card';
import GoogleIcon from '@/components/ui/icons/google';
import { copy, type Locale } from '@/content/karate-do-neuhausen';

interface SocialProofKarateDoNeuhausenProps {
  locale: Locale;
}

export default function SocialProofKarateDoNeuhausen({ locale }: SocialProofKarateDoNeuhausenProps) {
  const content = copy[locale].socialProof;
  const { googleRating } = content;

  return (
    <section className="py-20 md:py-24 lg:py-32">
      <SectionContainer>
        <div className="text-center space-y-8 max-w-3xl mx-auto">
          <Heading level={2} className="text-black">
            {content.heading}
          </Heading>
          
          {/* Google Rating Badge */}
          <div className="flex items-center justify-center gap-3 py-4">
            <GoogleIcon className="text-gray-900 flex-shrink-0" size={32} />
            <div className="text-left">
              <div className="font-semibold text-black">{googleRating.label}</div>
              <div className="text-gray-700">{googleRating.rating}</div>
            </div>
          </div>
          
          {/* 2x2 Grid */}
          <div className="grid grid-cols-2 gap-6 mt-12">
            {content.cards.map((card, index) => (
              <Card key={index} className="text-center">
                <Heading level={3} className="text-black mb-3">
                  {card.title}
                </Heading>
                <TextBlock size="sm" className="text-gray-700">
                  {card.body}
                </TextBlock>
              </Card>
            ))}
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
