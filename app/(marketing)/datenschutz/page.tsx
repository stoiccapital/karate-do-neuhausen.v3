// Privacy Policy Page (English)
// Single responsibility: Privacy policy and cookie policy (EN)

import type { Metadata } from 'next';
import SectionContainer from '@/components/ui/section-container';
import Heading from '@/components/ui/heading';
import TextBlock from '@/components/ui/text-block';
import Stack from '@/components/ui/stack';

const locale = 'en' as const;

export const metadata: Metadata = {
  title: 'Privacy Policy | Karate Do Neuhausen',
  description: 'Privacy policy and cookie policy of Karate Do Neuhausen e. V.',
};

export default function DatenschutzPage() {
  return (
    <main>
      <section className="py-20 md:py-24 lg:py-32">
        <SectionContainer>
          <div className="max-w-4xl mx-auto">
            <Stack gap="xl">
              {/* English Privacy Policy */}
              <div className="space-y-8">
                <div>
                  <Heading level={1} className="text-black mb-4">
                    Privacy Policy
                  </Heading>
                  <TextBlock size="base" className="text-gray-700 mb-6">
                    We take the protection of your personal data very seriously. This privacy policy explains how we collect, process, and store personal data.
                  </TextBlock>
                </div>

                <div className="space-y-6">
                  {/* Controller */}
                  <div>
                    <Heading level={3} className="text-black mb-2">
                      Controller
                    </Heading>
                    <TextBlock size="base" className="text-gray-700 whitespace-pre-line">
                      Karate Do Neuhausen e. V.{'\n'}Winthirpl. 6{'\n'}80639 Munich{'\n'}Germany{'\n'}Phone: +49 179 1226471
                    </TextBlock>
                  </div>

                  {/* Collection and Storage of Personal Data */}
                  <div>
                    <Heading level={3} className="text-black mb-2">
                      Collection and Storage of Personal Data
                    </Heading>
                    <TextBlock size="base" className="text-gray-700 mb-2">
                      We process personal data exclusively in accordance with applicable legal regulations. This includes:
                    </TextBlock>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 text-base ml-4">
                      <li>Name, address, contact details</li>
                      <li>Membership-related information (participation in courses)</li>
                      <li>Communication data (emails, inquiries)</li>
                    </ul>
                  </div>

                  {/* Purpose of Data Processing */}
                  <div>
                    <Heading level={3} className="text-black mb-2">
                      Purpose of Data Processing
                    </Heading>
                    <TextBlock size="base" className="text-gray-700 mb-2">
                      Personal data is processed for the following purposes:
                    </TextBlock>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 text-base ml-4">
                      <li>Management of club memberships</li>
                      <li>Organization of training sessions, courses, and events</li>
                      <li>Responding to inquiries</li>
                      <li>Compliance with legal obligations</li>
                    </ul>
                  </div>

                  {/* Legal Basis */}
                  <div>
                    <Heading level={3} className="text-black mb-2">
                      Legal Basis
                    </Heading>
                    <TextBlock size="base" className="text-gray-700 mb-2">
                      Processing is carried out according to:
                    </TextBlock>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 text-base ml-4">
                      <li>Art. 6(1)(b) GDPR (contract performance)</li>
                      <li>Art. 6(1)(f) GDPR (legitimate interests of the association)</li>
                      <li>Art. 6(1)(c) GDPR (legal obligations)</li>
                    </ul>
                  </div>

                  {/* Disclosure of Data */}
                  <div>
                    <Heading level={3} className="text-black mb-2">
                      Disclosure of Data
                    </Heading>
                    <TextBlock size="base" className="text-gray-700 mb-2">
                      We do not share personal data with third parties unless:
                    </TextBlock>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 text-base ml-4">
                      <li>It is necessary for club operations,</li>
                      <li>A legal obligation exists, or</li>
                      <li>You have explicitly consented.</li>
                    </ul>
                  </div>

                  {/* Storage Period */}
                  <div>
                    <Heading level={3} className="text-black mb-2">
                      Storage Period
                    </Heading>
                    <TextBlock size="base" className="text-gray-700">
                      Personal data is stored only as long as necessary for the stated purposes or required by legal retention periods.
                    </TextBlock>
                  </div>

                  {/* Rights of Data Subjects */}
                  <div>
                    <Heading level={3} className="text-black mb-2">
                      Rights of Data Subjects
                    </Heading>
                    <TextBlock size="base" className="text-gray-700 mb-2">
                      You have the following rights:
                    </TextBlock>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 text-base ml-4 mb-2">
                      <li>Access to stored data</li>
                      <li>Correction of incorrect data</li>
                      <li>Deletion ("right to be forgotten")</li>
                      <li>Restriction of processing</li>
                      <li>Data portability</li>
                      <li>Objection to processing</li>
                    </ul>
                    <TextBlock size="base" className="text-gray-700">
                      To exercise these rights, please contact the controller listed above.
                    </TextBlock>
                  </div>

                  {/* Data Security */}
                  <div>
                    <Heading level={3} className="text-black mb-2">
                      Data Security
                    </Heading>
                    <TextBlock size="base" className="text-gray-700">
                      We apply technical and organizational measures to protect personal data from loss, misuse, and unauthorized access.
                    </TextBlock>
                  </div>

                  {/* Changes to this Privacy Policy */}
                  <div>
                    <Heading level={3} className="text-black mb-2">
                      Changes to this Privacy Policy
                    </Heading>
                    <TextBlock size="base" className="text-gray-700">
                      We may update this policy as needed. The latest version is always available on our website.
                    </TextBlock>
                  </div>
                </div>
              </div>

              {/* English Cookie Policy */}
              <div className="pt-8 border-t border-gray-200 space-y-8">
                <div>
                  <Heading level={2} className="text-black mb-4">
                    Cookie Policy
                  </Heading>
                  <TextBlock size="base" className="text-gray-700 mb-6">
                    This cookie policy explains how and why cookies and similar technologies are used on the Karate Do Neuhausen e. V. website. Cookies help enable website functionality, improve usability, and provide certain features.
                  </TextBlock>
                </div>

                <div className="space-y-6">
                  {/* Controller */}
                  <div>
                    <Heading level={3} className="text-black mb-2">
                      Controller
                    </Heading>
                    <TextBlock size="base" className="text-gray-700 whitespace-pre-line">
                      Karate Do Neuhausen e. V.{'\n'}Winthirpl. 6{'\n'}80639 Munich{'\n'}Germany{'\n'}Phone: +49 179 1226471{'\n'}{'\n'}Additional information on the processing of personal data can be found in our privacy policy.
                    </TextBlock>
                  </div>

                  {/* What Are Cookies? */}
                  <div>
                    <Heading level={3} className="text-black mb-2">
                      What Are Cookies?
                    </Heading>
                    <TextBlock size="base" className="text-gray-700">
                      Cookies are small text files stored on your device when you visit our website. They can store settings or enable browser recognition.
                    </TextBlock>
                  </div>

                  {/* Types of Cookies We Use */}
                  <div>
                    <Heading level={3} className="text-black mb-2">
                      Types of Cookies We Use
                    </Heading>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 text-base ml-4">
                      <li>
                        <strong>Technically necessary cookies</strong>
                        <br />
                        Required for the website to function properly (navigation, security, basic features).
                      </li>
                      <li>
                        <strong>Functional cookies</strong>
                        <br />
                        Enable extended features and preferences (e.g., language settings, display preferences).
                      </li>
                      <li>
                        <strong>Statistics / analytics cookies (if used)</strong>
                        <br />
                        Help us understand how visitors use the website, usually anonymized or pseudonymized.
                      </li>
                    </ul>
                  </div>

                  {/* Purpose of Cookie Use */}
                  <div>
                    <Heading level={3} className="text-black mb-2">
                      Purpose of Cookie Use
                    </Heading>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 text-base ml-4">
                      <li>Providing and maintaining website functionality</li>
                      <li>Improving usability and presentation</li>
                      <li>Optional: website usage analysis (only if analytics tools are used)</li>
                    </ul>
                  </div>

                  {/* Legal Basis */}
                  <div>
                    <Heading level={3} className="text-black mb-2">
                      Legal Basis
                    </Heading>
                    <TextBlock size="base" className="text-gray-700 whitespace-pre-line">
                      - Necessary cookies: Art. 6(1)(f) GDPR{'\n'} - Functional/analytics cookies: Art. 6(1)(a) GDPR (consent)
                    </TextBlock>
                  </div>

                  {/* Storage Duration */}
                  <div>
                    <Heading level={3} className="text-black mb-2">
                      Storage Duration
                    </Heading>
                    <TextBlock size="base" className="text-gray-700 whitespace-pre-line">
                      Session cookies are deleted when the browser closes.{'\n'}Persistent cookies remain until they expire or are deleted manually.
                    </TextBlock>
                  </div>

                  {/* Managing Cookies */}
                  <div>
                    <Heading level={3} className="text-black mb-2">
                      Managing Cookies
                    </Heading>
                    <TextBlock size="base" className="text-gray-700 whitespace-pre-line">
                      Browser settings allow you to:{'\n'}– Disable cookies{'\n'}– Allow cookies only for specific sites{'\n'}– Automatically delete cookies when closing the browser{'\n'}{'\n'}Disabling certain cookies may restrict website functionality.{'\n'}{'\n'}If a consent tool is used, cookie settings can be changed or withdrawn at any time.
                    </TextBlock>
                  </div>

                  {/* Third-Party Services */}
                  <div>
                    <Heading level={3} className="text-black mb-2">
                      Third-Party Services (if applicable)
                    </Heading>
                    <TextBlock size="base" className="text-gray-700">
                      If third-party services (analytics, embedded content) are used, they may set their own cookies. Details can be found in the privacy policy.
                    </TextBlock>
                  </div>

                  {/* Changes to this Cookie Policy */}
                  <div>
                    <Heading level={3} className="text-black mb-2">
                      Changes to this Cookie Policy
                    </Heading>
                    <TextBlock size="base" className="text-gray-700">
                      We may update this policy as required. The current version is available on our website.
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
