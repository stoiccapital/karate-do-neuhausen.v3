// Deep Dives Section
// Single responsibility: Methodology, class structure, teacher qualifications, schedule

import Image from 'next/image';
import SectionContainer from '@/components/ui/section-container';
import Heading from '@/components/ui/heading';
import TextBlock from '@/components/ui/text-block';
import MediaContainer from '@/components/ui/media-container';
import Stack from '@/components/ui/stack';
import { copy, type Locale } from '@/content/karate-do-neuhausen';

interface DeepDivesKarateDoNeuhausenProps {
  locale: Locale;
}

export default function DeepDivesKarateDoNeuhausen({ locale }: DeepDivesKarateDoNeuhausenProps) {
  const content = copy[locale].deepDives;

  return (
    <section id="schedule" className="py-20 md:py-24 lg:py-32 bg-gray-50">
      <SectionContainer>
        <Stack gap="xl">
          {/* Pain/Context Block - Top */}
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <Heading level={2} className="text-black">
              {content.heading}
            </Heading>
            <TextBlock size="base" className="text-gray-700">
              {content.intro}
            </TextBlock>
          </div>

          {/* Methodology - Text Left, Media Right */}
          <div className="grid md:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="md:col-span-6 space-y-6">
              <Heading level={3} className="text-black">
                {content.blockA.title}
              </Heading>
              <TextBlock size="base" className="text-gray-700">
                {content.blockA.paragraph}
              </TextBlock>
              <ul className="space-y-3 text-gray-700">
                {content.blockA.bullets.map((bullet, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2 text-black">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:col-span-6">
              <MediaContainer>
                {content.blockA.image ? (
                  <div className="relative aspect-[4/3] w-full rounded-lg border border-gray-200 overflow-hidden">
                    <Image
                      src={content.blockA.image.src}
                      alt={content.blockA.image.alt}
                      fill
                      className="object-cover"
                      sizes="(min-width: 768px) 50vw, 100vw"
                    />
                  </div>
                ) : (
                  <div className="aspect-[4/3] bg-gray-100 rounded-lg flex items-center justify-center border border-gray-200">
                    <span className="text-gray-400 text-sm text-center px-4">
                      {content.blockA.visualLabel}
                    </span>
                  </div>
                )}
              </MediaContainer>
            </div>
          </div>

          {/* Class Structure & Schedule */}
          <div className="grid md:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="md:col-span-6 space-y-6">
              <Heading level={3} className="text-black">
                {content.blockB.title}
              </Heading>
              <TextBlock size="base" className="text-gray-700">
                {content.blockB.paragraph}
              </TextBlock>
              <div className="space-y-4">
                {content.blockB.schedules.map((schedule, index) => (
                  <div key={index} className="border-l-2 border-black pl-4">
                    <Heading level={4} className="text-black mb-2">
                      {schedule.title}
                    </Heading>
                    <TextBlock size="sm" className="text-gray-700">
                      {schedule.text}
                    </TextBlock>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:col-span-6 space-y-6">
              <Heading level={3} className="text-black">
                {content.blockC.title}
              </Heading>
              <TextBlock size="base" className="text-gray-700">
                {content.blockC.paragraph}
              </TextBlock>
              <ul className="space-y-3 text-gray-700">
                {content.blockC.bullets.map((bullet, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2 text-black">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Stack>
      </SectionContainer>
    </section>
  );
}
