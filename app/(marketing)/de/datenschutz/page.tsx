// Privacy Policy Page (German)
// Single responsibility: Privacy policy and cookie policy (DE)

import type { Metadata } from 'next';
import SectionContainer from '@/components/ui/section-container';
import Heading from '@/components/ui/heading';
import TextBlock from '@/components/ui/text-block';
import Stack from '@/components/ui/stack';

const locale = 'de' as const;

export const metadata: Metadata = {
  title: 'Datenschutzerklärung | Karate Do Neuhausen',
  description: 'Datenschutzerklärung und Cookie-Richtlinie von Karate Do Neuhausen e. V.',
};

export default function DatenschutzPageDE() {
  return (
    <main>
      <section className="py-20 md:py-24 lg:py-32">
        <SectionContainer>
          <div className="max-w-4xl mx-auto">
            <Stack gap="xl">
              {/* German Privacy Policy */}
              <div className="space-y-8">
                <div>
                  <Heading level={1} className="text-black mb-4">
                    Datenschutzerklärung
                  </Heading>
                  <TextBlock size="base" className="text-gray-700 mb-6">
                    Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Diese Datenschutzerklärung informiert Sie darüber, wie wir personenbezogene Daten erheben, verarbeiten und speichern.
                  </TextBlock>
                </div>

                <div className="space-y-6">
                  {/* Verantwortliche Stelle */}
                  <div>
                    <Heading level={3} className="text-black mb-2">
                      Verantwortliche Stelle
                    </Heading>
                    <TextBlock size="base" className="text-gray-700 whitespace-pre-line">
                      Karate Do Neuhausen e. V.{'\n'}Winthirpl. 6{'\n'}80639 München{'\n'}Deutschland{'\n'}Telefon: +49 179 1226471
                    </TextBlock>
                  </div>

                  {/* Erhebung und Speicherung personenbezogener Daten */}
                  <div>
                    <Heading level={3} className="text-black mb-2">
                      Erhebung und Speicherung personenbezogener Daten
                    </Heading>
                    <TextBlock size="base" className="text-gray-700 mb-2">
                      Wir verarbeiten personenbezogene Daten ausschließlich gemäß den geltenden gesetzlichen Bestimmungen. Dazu gehören:
                    </TextBlock>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 text-base ml-4">
                      <li>Name, Anschrift, Kontaktdaten</li>
                      <li>Vereinsbezogene Daten (Mitgliedschaft, Teilnahme an Kursen)</li>
                      <li>Kommunikationsdaten (E-Mails, Anfragen)</li>
                    </ul>
                  </div>

                  {/* Zweck der Datenverarbeitung */}
                  <div>
                    <Heading level={3} className="text-black mb-2">
                      Zweck der Datenverarbeitung
                    </Heading>
                    <TextBlock size="base" className="text-gray-700 mb-2">
                      Wir verarbeiten personenbezogene Daten zu folgenden Zwecken:
                    </TextBlock>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 text-base ml-4">
                      <li>Verwaltung von Vereinsmitgliedschaften</li>
                      <li>Organisation von Trainings, Kursen und Veranstaltungen</li>
                      <li>Beantwortung von Kontaktanfragen</li>
                      <li>Erfüllung gesetzlicher Verpflichtungen</li>
                    </ul>
                  </div>

                  {/* Rechtsgrundlagen */}
                  <div>
                    <Heading level={3} className="text-black mb-2">
                      Rechtsgrundlagen
                    </Heading>
                    <TextBlock size="base" className="text-gray-700 mb-2">
                      Die Verarbeitung erfolgt gemäß:
                    </TextBlock>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 text-base ml-4">
                      <li>Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung)</li>
                      <li>Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)</li>
                      <li>Art. 6 Abs. 1 lit. c DSGVO (gesetzliche Verpflichtungen)</li>
                    </ul>
                  </div>

                  {/* Weitergabe von Daten */}
                  <div>
                    <Heading level={3} className="text-black mb-2">
                      Weitergabe von Daten
                    </Heading>
                    <TextBlock size="base" className="text-gray-700 mb-2">
                      Eine Weitergabe personenbezogener Daten erfolgt nur, wenn:
                    </TextBlock>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 text-base ml-4">
                      <li>dies zur Erfüllung der Vereinszwecke erforderlich ist,</li>
                      <li>eine gesetzliche Verpflichtung besteht, oder</li>
                      <li>Sie ausdrücklich eingewilligt haben.</li>
                    </ul>
                  </div>

                  {/* Speicherdauer */}
                  <div>
                    <Heading level={3} className="text-black mb-2">
                      Speicherdauer
                    </Heading>
                    <TextBlock size="base" className="text-gray-700">
                      Wir speichern personenbezogene Daten nur so lange, wie dies erforderlich ist oder gesetzliche Aufbewahrungsfristen bestehen.
                    </TextBlock>
                  </div>

                  {/* Rechte der Betroffenen */}
                  <div>
                    <Heading level={3} className="text-black mb-2">
                      Rechte der Betroffenen
                    </Heading>
                    <TextBlock size="base" className="text-gray-700 mb-2">
                      Betroffene Personen haben folgende Rechte:
                    </TextBlock>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 text-base ml-4 mb-2">
                      <li>Auskunft</li>
                      <li>Berichtigung</li>
                      <li>Löschung</li>
                      <li>Einschränkung der Verarbeitung</li>
                      <li>Datenübertragbarkeit</li>
                      <li>Widerspruch</li>
                    </ul>
                    <TextBlock size="base" className="text-gray-700">
                      Zur Ausübung dieser Rechte wenden Sie sich bitte an die oben genannte Kontaktstelle.
                    </TextBlock>
                  </div>

                  {/* Datensicherheit */}
                  <div>
                    <Heading level={3} className="text-black mb-2">
                      Datensicherheit
                    </Heading>
                    <TextBlock size="base" className="text-gray-700">
                      Wir setzen technische und organisatorische Maßnahmen ein, um personenbezogene Daten vor Verlust, Missbrauch und unbefugtem Zugriff zu schützen.
                    </TextBlock>
                  </div>

                  {/* Änderungen dieser Datenschutzerklärung */}
                  <div>
                    <Heading level={3} className="text-black mb-2">
                      Änderungen dieser Datenschutzerklärung
                    </Heading>
                    <TextBlock size="base" className="text-gray-700">
                      Wir behalten uns vor, Änderungen vorzunehmen. Die aktuelle Version ist jederzeit auf unserer Website verfügbar.
                    </TextBlock>
                  </div>
                </div>
              </div>

              {/* German Cookie Policy */}
              <div className="pt-8 border-t border-gray-200 space-y-8">
                <div>
                  <Heading level={2} className="text-black mb-4">
                    Cookie-Richtlinie
                  </Heading>
                  <TextBlock size="base" className="text-gray-700 mb-6">
                    Diese Cookie-Richtlinie informiert Sie darüber, wie und zu welchen Zwecken Cookies und ähnliche Technologien auf unserer Website eingesetzt werden. Cookies ermöglichen Funktionalität, verbessern die Nutzung und unterstützen bestimmte Features.
                  </TextBlock>
                </div>

                <div className="space-y-6">
                  {/* Verantwortliche Stelle */}
                  <div>
                    <Heading level={3} className="text-black mb-2">
                      Verantwortliche Stelle
                    </Heading>
                    <TextBlock size="base" className="text-gray-700 whitespace-pre-line">
                      Karate Do Neuhausen e. V.{'\n'}Winthirpl. 6{'\n'}80639 München{'\n'}Deutschland{'\n'}Telefon: +49 179 1226471{'\n'}{'\n'}Weitere Informationen zur Datenverarbeitung finden Sie in unserer Datenschutzerklärung.
                    </TextBlock>
                  </div>

                  {/* Was sind Cookies? */}
                  <div>
                    <Heading level={3} className="text-black mb-2">
                      Was sind Cookies?
                    </Heading>
                    <TextBlock size="base" className="text-gray-700">
                      Cookies sind kleine Textdateien, die beim Besuch der Website auf Ihrem Gerät gespeichert werden. Sie können Einstellungen speichern oder eine Wiedererkennung ermöglichen.
                    </TextBlock>
                  </div>

                  {/* Arten von Cookies */}
                  <div>
                    <Heading level={3} className="text-black mb-2">
                      Arten von Cookies
                    </Heading>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 text-base ml-4">
                      <li>
                        <strong>Technisch notwendige Cookies</strong>
                        <br />
                        Erforderlich für Basisfunktionen, Navigation und Sicherheit.
                      </li>
                      <li>
                        <strong>Funktionale Cookies</strong>
                        <br />
                        Ermöglichen Komfortfunktionen wie Spracheinstellungen oder Anzeigepräferenzen.
                      </li>
                      <li>
                        <strong>Statistik- / Analyse-Cookies (falls eingesetzt)</strong>
                        <br />
                        Dienen der anonymisierten oder pseudonymisierten Auswertung des Nutzerverhaltens.
                      </li>
                    </ul>
                  </div>

                  {/* Zwecke der Cookie-Nutzung */}
                  <div>
                    <Heading level={3} className="text-black mb-2">
                      Zwecke der Cookie-Nutzung
                    </Heading>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 text-base ml-4">
                      <li>Bereitstellung technischer Funktionalität</li>
                      <li>Verbesserung der Benutzerfreundlichkeit</li>
                      <li>Optional: Analyse der Nutzung (nur bei tatsächlichem Einsatz von Analyse-Tools)</li>
                    </ul>
                  </div>

                  {/* Rechtsgrundlagen */}
                  <div>
                    <Heading level={3} className="text-black mb-2">
                      Rechtsgrundlagen
                    </Heading>
                    <TextBlock size="base" className="text-gray-700 whitespace-pre-line">
                      - Notwendige Cookies: Art. 6 Abs. 1 lit. f DSGVO{'\n'} - Funktionale/Analyse-Cookies: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)
                    </TextBlock>
                  </div>

                  {/* Speicherdauer und Löschung */}
                  <div>
                    <Heading level={3} className="text-black mb-2">
                      Speicherdauer und Löschung
                    </Heading>
                    <TextBlock size="base" className="text-gray-700 whitespace-pre-line">
                      Session-Cookies werden beim Schließen des Browsers gelöscht.{'\n'}Persistente Cookies bleiben gespeichert, bis sie ablaufen oder gelöscht werden.
                    </TextBlock>
                  </div>

                  {/* Cookie-Verwaltung */}
                  <div>
                    <Heading level={3} className="text-black mb-2">
                      Cookie-Verwaltung
                    </Heading>
                    <TextBlock size="base" className="text-gray-700 whitespace-pre-line">
                      Browser bieten Optionen, um Cookies zu:{'\n'}– deaktivieren{'\n'}– zulassen{'\n'}– automatisch löschen{'\n'}{'\n'}Bei Deaktivierung können Funktionen eingeschränkt sein.{'\n'}{'\n'}Falls ein Cookie-Banner genutzt wird, können Einwilligungen dort angepasst oder widerrufen werden.
                    </TextBlock>
                  </div>

                  {/* Dienste Dritter */}
                  <div>
                    <Heading level={3} className="text-black mb-2">
                      Dienste Dritter (falls zutreffend)
                    </Heading>
                    <TextBlock size="base" className="text-gray-700">
                      Durch externe Dienste gesetzte Cookies werden in der Datenschutzerklärung erläutert.
                    </TextBlock>
                  </div>

                  {/* Änderungen dieser Cookie-Richtlinie */}
                  <div>
                    <Heading level={3} className="text-black mb-2">
                      Änderungen dieser Cookie-Richtlinie
                    </Heading>
                    <TextBlock size="base" className="text-gray-700">
                      Aktualisierungen erfolgen bei Bedarf. Die gültige Version ist jederzeit auf unserer Website abrufbar.
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
