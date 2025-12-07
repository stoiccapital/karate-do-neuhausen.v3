// Section component imports
import HeroLanding from "@/components/sections/landing/hero-landing";
import SocialProofLanding from "@/components/sections/landing/social-proof-landing";
import ValuePropsLanding from "@/components/sections/landing/value-props-landing";
import FeaturesLanding from "@/components/sections/landing/features-landing";
import DeepDivesLanding from "@/components/sections/landing/deep-dives-landing";
import UseCasesLanding from "@/components/sections/landing/use-cases-landing";
import TestimonialsLanding from "@/components/sections/landing/testimonials-landing";
// import PricingLanding from "@/components/sections/landing/pricing-landing";
import FaqLanding from "@/components/sections/landing/faq-landing";
import FinalCtaLanding from "@/components/sections/landing/final-cta-landing";

// Navbar → Main Sections → Final CTA → Footer

export default function Page({
  params,
}: {
  params: { 'page-name': string };
}) {
  return (
    <>
      {/* Main Sections - Canonical Order */}
      <main className="flex flex-col gap-0">
        {/* Hero */}
        <HeroLanding />

        {/* Social Proof */}
        <SocialProofLanding />

        {/* Value Props */}
        <ValuePropsLanding />

        {/* Features */}
        <FeaturesLanding />

        {/* Deep Dives */}
        <DeepDivesLanding />

        {/* Use Cases */}
        <UseCasesLanding />

        {/* Testimonials */}
        <TestimonialsLanding />

        {/* Pricing (optional) */}
        {/* <PricingLanding /> */}

        {/* FAQ */}
        <FaqLanding />

        {/* Final CTA */}
        <FinalCtaLanding />
      </main>
    </>
  );
}

