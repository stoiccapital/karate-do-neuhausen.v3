// Impressum Page
// Single responsibility: Legal information page (DE + EN)

import type { Metadata } from 'next';
import SectionContainer from '@/components/ui/section-container';
import Heading from '@/components/ui/heading';
import TextBlock from '@/components/ui/text-block';
import Stack from '@/components/ui/stack';

export const metadata: Metadata = {
  title: 'Impressum | Karate Do Neuhausen',
  description: 'Rechtliche Informationen, Kontakt- und Vereinsdaten von Karate Do Neuhausen e. V.',
};

export default function ImpressumPage() {
  return (
    <main>
      <section className="py-20 md:py-24 lg:py-32">
        <SectionContainer>
          <div className="max-w-4xl mx-auto">
            <Stack gap="xl">
              {/* German Block - Primary */}
              <div className="space-y-8">
                <div>
                  <Heading level={1} className="text-black mb-4">
                    Impressum
                  </Heading>
                  <Heading level={2} className="text-black text-2xl font-semibold mb-6">
                    Rechtliche Informationen und Kontaktdaten
                  </Heading>
                </div>

                <div className="space-y-6">
                  {/* Organisation */}
                  <div>
                    <Heading level={3} className="text-black mb-2">
                      Organisation
                    </Heading>
                    <TextBlock size="base" className="text-gray-700">
                      Karate Do Neuhausen e. V.
                    </TextBlock>
                  </div>

                  {/* Kontaktperson */}
                  <div>
                    <Heading level={3} className="text-black mb-2">
                      Kontaktperson
                    </Heading>
                    <TextBlock size="base" className="text-gray-700 whitespace-pre-line">
                      Pero Lazic{'\n'}Telefon: +49 179 1226471
                    </TextBlock>
                  </div>

                  {/* Vorstand */}
                  <div>
                    <Heading level={3} className="text-black mb-2">
                      Vorstand
                    </Heading>
                    <TextBlock size="base" className="text-gray-700 whitespace-pre-line">
                      Anh Chu{'\n'}Lazar Drljevic
                    </TextBlock>
                  </div>

                  {/* Adresse */}
                  <div>
                    <Heading level={3} className="text-black mb-2">
                      Adresse
                    </Heading>
                    <TextBlock size="base" className="text-gray-700 whitespace-pre-line">
                      Karate Do Neuhausen{'\n'}Winthirplatz 6{'\n'}80639 München{'\n'}Deutschland
                    </TextBlock>
                  </div>

                  {/* Vereinsdaten */}
                  <div>
                    <Heading level={3} className="text-black mb-2">
                      Vereinsdaten
                    </Heading>
                    <TextBlock size="base" className="text-gray-700 whitespace-pre-line">
                      Registernummer: VR 17176 München{'\n'}Umsatzsteuer-Identifikationsnummer: 143/217/80416 K47
                    </TextBlock>
                  </div>

                  {/* Bankverbindung */}
                  <div>
                    <Heading level={3} className="text-black mb-2">
                      Bankverbindung
                    </Heading>
                    <TextBlock size="base" className="text-gray-700 whitespace-pre-line">
                      Deutsche Bank PGK{'\n'}IBAN: DE05 7007 0024 0696 0140 00
                    </TextBlock>
                  </div>
                </div>
              </div>

              {/* English Block - Secondary */}
              <div className="pt-12 border-t border-gray-200 space-y-8">
                <div>
                  <Heading level={2} className="text-black mb-4">
                    Imprint
                  </Heading>
                  <Heading level={3} className="text-black text-xl font-semibold mb-6">
                    Legal information and contact details
                  </Heading>
                </div>

                <div className="space-y-6">
                  {/* Organization */}
                  <div>
                    <Heading level={3} className="text-black mb-2">
                      Organization
                    </Heading>
                    <TextBlock size="base" className="text-gray-700">
                      Karate Do Neuhausen e. V.
                    </TextBlock>
                  </div>

                  {/* Contact Person */}
                  <div>
                    <Heading level={3} className="text-black mb-2">
                      Contact Person
                    </Heading>
                    <TextBlock size="base" className="text-gray-700 whitespace-pre-line">
                      Pero Lazic{'\n'}Phone: +49 179 1226471
                    </TextBlock>
                  </div>

                  {/* Board Members */}
                  <div>
                    <Heading level={3} className="text-black mb-2">
                      Board Members
                    </Heading>
                    <TextBlock size="base" className="text-gray-700 whitespace-pre-line">
                      Anh Chu{'\n'}Lazar Drljevic
                    </TextBlock>
                  </div>

                  {/* Address */}
                  <div>
                    <Heading level={3} className="text-black mb-2">
                      Address
                    </Heading>
                    <TextBlock size="base" className="text-gray-700 whitespace-pre-line">
                      Karate Do Neuhausen{'\n'}Winthirplatz 6{'\n'}80639 Munich{'\n'}Germany
                    </TextBlock>
                  </div>

                  {/* Association Data */}
                  <div>
                    <Heading level={3} className="text-black mb-2">
                      Association Data
                    </Heading>
                    <TextBlock size="base" className="text-gray-700 whitespace-pre-line">
                      Registration Number: VR 17176 Munich{'\n'}VAT Identification Number: 143/217/80416 K47
                    </TextBlock>
                  </div>

                  {/* Bank Details */}
                  <div>
                    <Heading level={3} className="text-black mb-2">
                      Bank Details
                    </Heading>
                    <TextBlock size="base" className="text-gray-700 whitespace-pre-line">
                      Deutsche Bank PGK{'\n'}IBAN: DE05 7007 0024 0696 0140 00
                    </TextBlock>
                  </div>
                </div>
              </div>
            </Stack>
          </div>
        </SectionContainer>
      </section>
    </main>
  );
}
