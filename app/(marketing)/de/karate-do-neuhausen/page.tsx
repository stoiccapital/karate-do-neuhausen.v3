import type { Metadata } from 'next';
import Stack from '@/components/ui/stack';
import HeroKarateDoNeuhausen from '@/components/sections/karate-do-neuhausen/hero-karate-do-neuhausen';
import SocialProofKarateDoNeuhausen from '@/components/sections/karate-do-neuhausen/social-proof-karate-do-neuhausen';
import ValuePropsKarateDoNeuhausen from '@/components/sections/karate-do-neuhausen/value-props-karate-do-neuhausen';
import FeaturesKarateDoNeuhausen from '@/components/sections/karate-do-neuhausen/features-karate-do-neuhausen';
import DeepDivesKarateDoNeuhausen from '@/components/sections/karate-do-neuhausen/deep-dives-karate-do-neuhausen';
import UseCasesKarateDoNeuhausen from '@/components/sections/karate-do-neuhausen/use-cases-karate-do-neuhausen';
import TestimonialsKarateDoNeuhausen from '@/components/sections/karate-do-neuhausen/testimonials-karate-do-neuhausen';
import PricingKarateDoNeuhausen from '@/components/sections/karate-do-neuhausen/pricing-karate-do-neuhausen';
import FaqKarateDoNeuhausen from '@/components/sections/karate-do-neuhausen/faq-karate-do-neuhausen';
import FinalCtaKarateDoNeuhausen from '@/components/sections/karate-do-neuhausen/final-cta-karate-do-neuhausen';
import { copy } from '@/content/karate-do-neuhausen';

const locale = 'de' as const;

export const metadata: Metadata = {
  title: copy[locale].head.title,
  description: copy[locale].head.description,
  alternates: {
    canonical: '/karate-do-neuhausen',
  },
};

export default function KarateDoNeuhausenPageDE() {
  return (
    <>
      {/* Main sections - Canonical order */}
      <Stack gap="2xl">
        <HeroKarateDoNeuhausen locale={locale} />
        <SocialProofKarateDoNeuhausen locale={locale} />
        <ValuePropsKarateDoNeuhausen locale={locale} />
        <FeaturesKarateDoNeuhausen locale={locale} />
        <DeepDivesKarateDoNeuhausen locale={locale} />
        <UseCasesKarateDoNeuhausen locale={locale} />
        <TestimonialsKarateDoNeuhausen locale={locale} />
        <PricingKarateDoNeuhausen locale={locale} />
        <FaqKarateDoNeuhausen locale={locale} />
        <FinalCtaKarateDoNeuhausen locale={locale} />
      </Stack>
    </>
  );
}
