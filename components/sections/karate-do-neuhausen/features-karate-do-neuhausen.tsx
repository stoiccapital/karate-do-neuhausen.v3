// Features Section
// Single responsibility: Program features - alternating left-right split layout

import Image from 'next/image';
import SectionContainer from '@/components/ui/section-container';
import Heading from '@/components/ui/heading';
import TextBlock from '@/components/ui/text-block';
import MediaContainer from '@/components/ui/media-container';
import Stack from '@/components/ui/stack';
import { copy, type Locale } from '@/content/karate-do-neuhausen';

interface FeaturesKarateDoNeuhausenProps {
  locale: Locale;
}

export default function FeaturesKarateDoNeuhausen({ locale }: FeaturesKarateDoNeuhausenProps) {
  const content = copy[locale].features;
  const mediaRightOrder = [true, false, true, false];

  return (
    <section id="classes" className="py-20 md:py-24 lg:py-32">
      <SectionContainer>
        <Stack gap="xl">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <Heading level={2} className="text-black">
              {content.heading}
            </Heading>
          </div>

          {/* Alternating Feature Blocks */}
          <div className="space-y-16 md:space-y-24">
            {content.items.map((item, index) => (
              <div
                key={index}
                className={`grid md:grid-cols-12 gap-8 lg:gap-12 items-center ${
                  mediaRightOrder[index] ? '' : 'md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1'
                }`}
              >
                {/* Text Content */}
                <div className="md:col-span-6 space-y-6">
                  <Heading level={3} className="text-black">
                    {item.title}
                  </Heading>
                  <TextBlock size="base" className="text-gray-700">
                    {item.body}
                  </TextBlock>
                </div>

                {/* Media */}
                <div className="md:col-span-6">
                  <MediaContainer>
                    {item.image ? (
                      <div className="relative aspect-[4/3] w-full rounded-lg border border-gray-200 overflow-hidden">
                        <Image
                          src={item.image.src}
                          alt={item.image.alt}
                          fill
                          className="object-cover"
                          sizes="(min-width: 768px) 50vw, 100vw"
                        />
                      </div>
                    ) : (
                      <div className="aspect-[4/3] bg-gray-100 rounded-lg flex items-center justify-center border border-gray-200">
                        <span className="text-gray-400 text-sm text-center px-4">
                          {item.visualLabel}
                        </span>
                      </div>
                    )}
                  </MediaContainer>
                </div>
              </div>
            ))}
          </div>
        </Stack>
      </SectionContainer>
    </section>
  );
}
