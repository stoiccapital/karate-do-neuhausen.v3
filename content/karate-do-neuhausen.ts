// Centralized copy module for Karate Do Neuhausen landing page
// Single source of truth for all locale-specific content

export type Locale = 'en' | 'de';

export interface NavbarCopy {
  brand: string;
  links: Array<{ label: string; href: string }>;
  primaryCta: string;
}

export interface HeroCopy {
  h1: string;
  body: string;
  primaryCta: string;
  secondaryCta: string;
  mediaAlt: string;
}

export interface SocialProofCopy {
  heading: string;
  googleRating: {
    label: string;
    rating: string;
  };
  cards: Array<{ title: string; body: string }>;
}

export interface ValuePropsCopy {
  heading: string;
  cards: Array<{ title: string; body: string }>;
}

export interface FeaturesCopy {
  heading: string;
  items: Array<{ title: string; body: string; visualLabel: string }>;
}

export interface DeepDivesCopy {
  heading: string;
  intro: string;
  blockA: {
    title: string;
    paragraph: string;
    bullets: string[];
    visualLabel: string;
  };
  blockB: {
    title: string;
    paragraph: string;
    schedules: Array<{ title: string; text: string }>;
  };
  blockC: {
    title: string;
    paragraph: string;
    bullets: string[];
  };
}

export interface UseCasesCopy {
  heading: string;
  cards: Array<{ title: string; body: string }>;
}

export interface TestimonialsCopy {
  heading: string;
  intro: string;
  items: Array<{ quote: string; name: string; role: string }>;
}

export interface PricingCopy {
  heading: string;
  intro: string;
  plans: Array<{
    title: string;
    subtitle: string;
    priceLine: string;
    bullets: string[];
    ctaLabel: string;
  }>;
}

export interface FaqCopy {
  heading: string;
  intro: string;
  qaItems: Array<{ question: string; answer: string }>;
}

export interface FinalCtaCopy {
  heading: string;
  paragraph: string;
  primaryCta: string;
  secondaryCta: string;
}

export interface FooterCopy {
  brandTitle: string;
  brandText: string;
  nav: Array<{ label: string; href: string }>;
  contactLabels: {
    addressLabel: string;
    emailLabel: string;
    phoneLabel: string;
  };
  legal: {
    impressum: string;
    datenschutz: string;
  };
  copyright: string;
}

export interface HeadCopy {
  title: string;
  description: string;
}

export interface KarateDoNeuhausenCopy {
  head: HeadCopy;
  navbar: NavbarCopy;
  hero: HeroCopy;
  socialProof: SocialProofCopy;
  valueProps: ValuePropsCopy;
  features: FeaturesCopy;
  deepDives: DeepDivesCopy;
  useCases: UseCasesCopy;
  testimonials: TestimonialsCopy;
  pricing: PricingCopy;
  faq: FaqCopy;
  finalCta: FinalCtaCopy;
  footer: FooterCopy;
}

export const copy: Record<Locale, KarateDoNeuhausenCopy> = {
  en: {
    head: {
      title: 'Karate Do Neuhausen | Mock Title',
      description: 'Mock meta description for Karate Do Neuhausen landing page.',
    },
    navbar: {
      brand: 'Karate Do Neuhausen',
      links: [
        { label: 'Classes', href: '#classes' },
        { label: "Who it's for", href: '#who-its-for' },
        { label: 'Schedule', href: '#schedule' },
        { label: 'FAQ', href: '#faq' },
      ],
      primaryCta: 'Book a Trial Class',
    },
    hero: {
      h1: 'Build confidence through structured Shotokan karate training.',
      body: 'We teach children clear physical and mental skills through a structured karate program. Parents receive a predictable training path with measurable progress.',
      primaryCta: 'Book a trial class',
      secondaryCta: 'View Schedule',
      mediaAlt: 'Hero Image: Dojo Training Scene',
    },
    socialProof: {
      heading: 'Why parents trust us',
      googleRating: {
        label: 'Google',
        rating: '★ 5.0/5 based on Google reviews',
      },
      cards: [
        {
          title: '50+ active members',
          body: 'Families choose consistent training supported by structured programs.',
        },
        {
          title: 'Since 2010',
          body: 'Our long operation provides stability and predictable outcomes.',
        },
        {
          title: 'Certified 7th and 8th Dan instructors',
          body: 'High-rank leadership ensures clear standards and reliable teaching.',
        },
        {
          title: 'Parent testimonials',
          body: 'Parents report visible progress in focus, discipline, and confidence.',
        },
      ],
    },
    valueProps: {
      heading: 'Clear value for parents and children',
      cards: [
        {
          title: 'Certified instructors',
          body: 'Our instructors hold 7th and 8th Dan ranks. This gives children reliable guidance and consistent training standards.',
        },
        {
          title: 'Structured belt system',
          body: 'Students follow a defined progression from white to black belt. This creates clear goals and supports steady confidence growth.',
        },
        {
          title: 'Safe training environment',
          body: 'Training sessions follow controlled techniques and supervised practice. This helps parents ensure safe physical development.',
        },
        {
          title: 'Small group classes',
          body: 'Children train in focused groups with direct instructor attention. This supports individual progress and predictable outcomes.',
        },
      ],
    },
    features: {
      heading: 'Program features',
      items: [
        {
          title: 'Two weekly classes',
          body: 'Students train twice each week with planned lesson structures. This builds consistent habits that reinforce confidence.',
          visualLabel: 'Two weekly classes Visual',
        },
        {
          title: 'Five-year belt progression',
          body: 'Students can reach black belt in five years with consistent practice. This gives parents a clear timeline for measurable progress.',
          visualLabel: 'Five-year belt progression Visual',
        },
        {
          title: 'Shotokan karate style',
          body: 'We teach traditional Shotokan techniques with defined forms and drills. This provides children with a stable foundation for skill growth.',
          visualLabel: 'Shotokan karate style Visual',
        },
        {
          title: '7th and 8th Dan instructors',
          body: 'Classes are led by long-term practitioners with high-level certifications. This ensures reliable instruction that supports student development.',
          visualLabel: '7th and 8th Dan instructors Visual',
        },
      ],
    },
    deepDives: {
      heading: 'Parents need reliable skill development',
      intro: 'Parents want a structured activity that builds discipline and confidence. Karate Do Neuhausen provides a predictable learning path that supports long-term growth.',
      blockA: {
        title: 'Traditional Karate, Modern Pedagogy',
        paragraph:
          'We honor the traditional principles of karate while incorporating modern teaching methods that make learning effective and enjoyable. Our instructors are certified and continuously trained in both martial arts techniques and child development.',
        bullets: [
          'Respect for tradition and sensei',
          'Progressive skill development',
          'Individual attention and support',
          'Safe and structured learning environment',
        ],
        visualLabel: 'Training Methodology Visual',
      },
      blockB: {
        title: 'Class Structure & Schedule',
        paragraph:
          'Our classes are structured to maximize learning while maintaining engagement. Each session includes warm-up, technique practice, forms (kata), and cool-down.',
        schedules: [
          {
            title: 'Kids Classes (6–14)',
            text: 'Tuesdays & Thursdays, 5:00 PM – 7:00 PM',
          },
          {
            title: 'Teenager and Adults Classes (14+)',
            text: 'Tuesdays, 7:00 PM – 10:00 PM',
          },
        ],
      },
      blockC: {
        title: 'Teacher Qualifications',
        paragraph:
          'All our instructors are certified black belts with extensive training in both karate techniques and teaching methodology. Many have additional certifications in child development and safety.',
        bullets: [
          'Minimum 5th degree black belt certification',
          'Child safety and first aid certified',
          'Continuous professional development',
        ],
      },
    },
    useCases: {
      heading: 'What students gain',
      cards: [
        {
          title: 'Confidence through progression',
          body: 'Students see clear results as they advance through each belt stage.',
        },
        {
          title: 'Confidence through discipline',
          body: 'Training routines teach children structure and focus.',
        },
        {
          title: 'Confidence through safe practice',
          body: 'Controlled drills help students develop skills in a secure environment.',
        },
        {
          title: 'Confidence through instructor guidance',
          body: 'Experienced instructors provide steady direction and reinforcement.',
        },
      ],
    },
    testimonials: {
      heading: 'What Parents Say',
      intro: 'Hear from families who have experienced the positive impact of our karate training.',
      items: [
        {
          quote:
            "Karate Do Neuhausen has been amazing for my son. He's learned discipline and respect, and his confidence has grown tremendously. The instructors are patient and knowledgeable.",
          name: 'Sarah M.',
          role: 'Parent of 8-year-old',
        },
        {
          quote:
            'My daughter has been training here for two years and loves it. The dojo emphasizes character development alongside physical skills, which is exactly what we were looking for.',
          name: 'Jennifer L.',
          role: 'Parent of 10-year-old',
        },
        {
          quote:
            'As an adult beginner, I was nervous about starting karate. The welcoming atmosphere and supportive instructors made me feel comfortable from day one.',
          name: 'Michael K.',
          role: 'Adult Student',
        },
        {
          quote:
            "The training philosophy here is excellent. It's not just about learning karate techniques, but about personal growth and respect.",
          name: 'David R.',
          role: 'Adult Student',
        },
      ],
    },
    pricing: {
      heading: 'Membership Options',
      intro: 'Transparent pricing with no hidden fees. All memberships include one free trial class.',
      plans: [
        {
          title: 'Kids Membership (up to 14 years)',
          subtitle: 'Perfect for children ages 6-12',
          priceLine: '€45 per quarter',
          bullets: [
            '2 classes per week',
            'Belt testing included',
            'Age-appropriate curriculum',
            'Shotokan training program',
          ],
          ctaLabel: 'Book a trial class',
        },
        {
          title: 'Teens & Adults Membership (14+)',
          subtitle: 'Designed for teenagers 13-17',
          priceLine: '€60 per quarter',
          bullets: [
            '2 classes per week',
            'Belt testing included',
            'Shotokan training program',
            'Instructor guidance from 7th and 8th Dan',
          ],
          ctaLabel: 'Book a trial class',
        },
      ],
    },
    faq: {
      heading: 'Frequently Asked Questions',
      intro: 'Common questions from parents considering karate training for their children.',
      qaItems: [
        {
          question: 'What age can my child start?',
          answer:
            'Children can start karate training as early as age 6. We have specialized classes designed for different age groups to ensure age-appropriate instruction and safety.',
        },
        {
          question: 'Do I need prior experience?',
          answer:
            'No prior experience is necessary. We welcome complete beginners and provide instruction for all skill levels, from white belt to black belt. Our instructors are trained to work with students at every stage.',
        },
        {
          question: 'What should I wear to my first class?',
          answer:
            "For your first class, comfortable athletic wear is fine. Once you decide to join, we'll provide information about purchasing a karate uniform (gi). We recommend loose-fitting clothing that allows for movement.",
        },
        {
          question: 'How often should I attend classes?',
          answer:
            'We recommend attending 2-3 classes per week for optimal progress. However, you can attend as often as your schedule allows. Consistency is more important than frequency.',
        },
        {
          question: 'Is there a trial period?',
          answer:
            'Yes, we offer a free trial class so you can experience our teaching style and see if karate is right for you before committing to a membership. This gives you a chance to meet the instructors and see our facility.',
        },
        {
          question: 'How long does it take to earn a black belt?',
          answer:
            'The journey to black belt typically takes 3-5 years of consistent training, depending on individual dedication, attendance, and skill development. We focus on quality over speed, ensuring students truly master each level.',
        },
        {
          question: 'Are classes safe for children?',
          answer:
            'Absolutely. Safety is our top priority. All instructors are certified, and we maintain a safe, controlled training environment with proper supervision at all times. We use age-appropriate techniques and emphasize respect and control.',
        },
      ],
    },
    finalCta: {
      heading: "Start your child's confidence journey",
      paragraph: 'Your child learns clear skills through structured Shotokan training.',
      primaryCta: 'Book a trial class',
      secondaryCta: 'View Schedule',
    },
    footer: {
      brandTitle: 'Karate Do Neuhausen',
      brandText: 'Traditional karate training for all ages and skill levels in Neuhausen.',
      nav: [
        { label: 'Home', href: '#hero' },
        { label: 'Classes', href: '#classes' },
        { label: "Who it's for", href: '#who-its-for' },
        { label: 'FAQ', href: '#faq' },
      ],
      contactLabels: {
        addressLabel: 'Address:',
        emailLabel: 'Email:',
        phoneLabel: 'Phone:',
      },
      legal: {
        impressum: 'Impressum',
        datenschutz: 'Datenschutz',
      },
      copyright: '© 2025 Karate Do Neuhausen. All rights reserved.',
    },
  },
  de: {
    head: {
      title: 'Karate Do Neuhausen | Mock Titel',
      description: 'Mock Meta Description für die Karate Do Neuhausen Landingpage.',
    },
    navbar: {
      brand: 'Karate Do Neuhausen',
      links: [
        { label: 'Kurse', href: '#classes' },
        { label: 'Für wen ist es', href: '#who-its-for' },
        { label: 'Trainingszeiten', href: '#schedule' },
        { label: 'FAQ', href: '#faq' },
      ],
      primaryCta: 'Probestunde buchen',
    },
    hero: {
      h1: 'Selbstvertrauen durch strukturiertes Shotokan-Karate aufbauen.',
      body: 'Wir vermitteln Kindern klare körperliche und mentale Fähigkeiten in einem strukturierten Karateprogramm. Eltern erhalten einen planbaren Trainingsweg mit messbarem Fortschritt.',
      primaryCta: 'Probestunde buchen',
      secondaryCta: 'Trainingszeiten ansehen',
      mediaAlt: 'Hero-Bild: Training im Dojo',
    },
    socialProof: {
      heading: 'Warum Eltern uns vertrauen',
      googleRating: {
        label: 'Google',
        rating: '★ 5,0/5 basierend auf Google-Bewertungen',
      },
      cards: [
        {
          title: '50+ aktive Mitglieder',
          body: 'Familien wählen ein kontinuierliches Training mit klar strukturierten Programmen.',
        },
        {
          title: 'Seit 2010',
          body: 'Unsere lange Laufzeit sorgt für Stabilität und planbare Ergebnisse.',
        },
        {
          title: 'Zertifizierte Trainer (7. und 8. Dan)',
          body: 'Hohe Dan-Grade sichern klare Standards und verlässliche Anleitung.',
        },
        {
          title: 'Rückmeldungen von Eltern',
          body: 'Eltern sehen messbare Fortschritte bei Fokus, Disziplin und Selbstvertrauen.',
        },
      ],
    },
    valueProps: {
      heading: 'Klarer Mehrwert für Eltern und Kinder',
      cards: [
        {
          title: 'Zertifizierte Trainer',
          body: 'Unsere Trainer besitzen den 7. und 8. Dan. Das gibt Kindern verlässliche Anleitung und konstante Trainingsqualität.',
        },
        {
          title: 'Strukturiertes Gürtelsystem',
          body: 'Schüler folgen einem klar definierten Weg vom weißen bis zum schwarzen Gürtel. Das schafft klare Ziele und unterstützt einen stetigen Aufbau des Selbstvertrauens.',
        },
        {
          title: 'Sicheres Trainingsumfeld',
          body: 'Das Training folgt kontrollierten Techniken und findet unter Aufsicht statt. So stellen Eltern eine sichere körperliche Entwicklung sicher.',
        },
        {
          title: 'Kleine Trainingsgruppen',
          body: 'Kinder trainieren in fokussierten Gruppen mit direkter Trainerbetreuung. Das unterstützt individuelle Fortschritte und planbare Ergebnisse.',
        },
      ],
    },
    features: {
      heading: 'Programmschwerpunkte',
      items: [
        {
          title: 'Zwei Trainingseinheiten pro Woche',
          body: 'Die Schüler trainieren zweimal pro Woche nach klar strukturierten Unterrichtseinheiten. So entstehen feste Routinen, die das Selbstvertrauen stärken.',
          visualLabel: 'Visual: Zwei Trainingseinheiten pro Woche',
        },
        {
          title: 'Gürtelfortschritt in fünf Jahren',
          body: 'Bei regelmäßigem Training können Schüler den schwarzen Gürtel in etwa fünf Jahren erreichen. Eltern erhalten damit einen klaren Zeitrahmen für messbare Entwicklung.',
          visualLabel: 'Visual: Gürtelfortschritt in fünf Jahren',
        },
        {
          title: 'Shotokan-Karate-Stil',
          body: 'Wir unterrichten traditionellen Shotokan-Karate mit klar definierten Formen und Übungen. Das gibt Kindern eine stabile Grundlage für den weiteren Aufbau ihrer Fähigkeiten.',
          visualLabel: 'Visual: Shotokan-Karate-Stil',
        },
        {
          title: 'Trainer mit 7. und 8. Dan',
          body: 'Das Training wird von langjährigen Karatesportlern mit hohen Dan-Graden geleitet. Das sichert eine verlässliche Anleitung und unterstützt die Entwicklung der Schüler.',
          visualLabel: 'Visual: Trainer mit 7. und 8. Dan',
        },
      ],
    },
    deepDives: {
      heading: 'Eltern brauchen verlässliche Kompetenzentwicklung',
      intro: 'Eltern wünschen sich eine strukturierte Aktivität, die Disziplin und Selbstvertrauen aufbaut. Karate Do Neuhausen bietet einen planbaren Lernweg mit langfristiger Entwicklung.',
      blockA: {
        title: 'Traditionelles Karate, moderne Pädagogik',
        paragraph:
          'Wir verbinden traditionelle Prinzipien des Karate mit modernen Lehrmethoden, die Lernen wirksam und verständlich machen. Unsere Trainer sind zertifiziert und fortlaufend in Karate-Technik und kindgerechter Pädagogik geschult.',
        bullets: [
          'Respekt vor Tradition und Sensei',
          'Schrittweiser Fähigkeitsaufbau',
          'Individuelle Betreuung und Unterstützung',
          'Sicheres und strukturiertes Lernumfeld',
        ],
        visualLabel: 'Visual: Trainingsmethode',
      },
      blockB: {
        title: 'Kursaufbau & Trainingszeiten',
        paragraph:
          'Unsere Trainingseinheiten sind so aufgebaut, dass Lernen strukturiert und gleichzeitig motivierend bleibt. Jede Einheit umfasst Aufwärmen, Techniktraining, Formen (Kata) und einen geordneten Ausklang.',
        schedules: [
          {
            title: 'Kindertraining (6–14 Jahre)',
            text: 'Dienstag & Donnerstag, 17:00 – 19:00 Uhr',
          },
          {
            title: 'Jugendliche & Erwachsene (ab 14 Jahren)',
            text: 'Dienstag, 19:00 – 22:00 Uhr',
          },
        ],
      },
      blockC: {
        title: 'Qualifikation der Trainer',
        paragraph:
          'Alle Trainer sind geprüfte Schwarzgurte mit intensiver Ausbildung in Karate-Technik und Unterrichtsmethodik. Viele besitzen zusätzlich Qualifikationen in kindgerechter Entwicklung und Sicherheit.',
        bullets: [
          'Mindestens 5. Dan Schwarzgurt',
          'Zertifiziert in Kindersicherheit und Erster Hilfe',
          'Fortlaufende Weiterbildung',
        ],
      },
    },
    useCases: {
      heading: 'Was Schüler gewinnen',
      cards: [
        {
          title: 'Selbstvertrauen durch Fortschritt',
          body: 'Schüler sehen klare Ergebnisse, wenn sie jede neue Gürtelstufe erreichen.',
        },
        {
          title: 'Selbstvertrauen durch Disziplin',
          body: 'Regelmäßige Trainingsroutinen vermitteln Struktur und Konzentration.',
        },
        {
          title: 'Selbstvertrauen durch sicheres Üben',
          body: 'Kontrollierte Übungen ermöglichen Lernfortschritte in einem geschützten Rahmen.',
        },
        {
          title: 'Selbstvertrauen durch Trainerbegleitung',
          body: 'Erfahrene Trainer geben klare Orientierung und kontinuierliche Rückmeldung.',
        },
      ],
    },
    testimonials: {
      heading: 'Was Eltern sagen',
      intro: 'Erfahrungen von Familien, die die Wirkung unseres Karatetrainings erlebt haben.',
      items: [
        {
          quote:
            '„Karate Do Neuhausen hat meinem Sohn sehr geholfen. Er hat Disziplin und Respekt gelernt und sein Selbstvertrauen ist deutlich gewachsen. Die Trainer sind geduldig und kompetent."',
          name: 'Sarah M.',
          role: 'Mutter eines 8-jährigen',
        },
        {
          quote:
            '„Meine Tochter trainiert seit zwei Jahren hier und ist begeistert. Im Dojo stehen Charakterentwicklung und Werte genauso im Fokus wie die körperlichen Techniken – genau das haben wir gesucht."',
          name: 'Jennifer L.',
          role: 'Mutter einer 10-jährigen',
        },
        {
          quote:
            '„Als erwachsener Anfänger war ich anfangs unsicher. Die offene Atmosphäre und die unterstützenden Trainer haben mir den Einstieg sehr leicht gemacht."',
          name: 'Michael K.',
          role: 'Erwachsener Schüler',
        },
        {
          quote:
            '„Die Trainingsphilosophie hier überzeugt. Es geht nicht nur um Techniken, sondern auch um persönliche Entwicklung und Respekt."',
          name: 'David R.',
          role: 'Erwachsener Schüler',
        },
      ],
    },
    pricing: {
      heading: 'Mitgliedschaft & Beiträge',
      intro: 'Transparente Beiträge ohne versteckte Kosten. Alle Tarife enthalten eine kostenlose Probestunde.',
      plans: [
        {
          title: 'Kinder-Mitgliedschaft (6–14 Jahre)',
          subtitle: 'Für Kinder von 6–14 Jahren',
          priceLine: '45 € pro Quartal',
          bullets: [
            '2 Trainingseinheiten pro Woche',
            'Altersgerechtes Trainingsprogramm',
            'Shotokan-Trainingsplan',
          ],
          ctaLabel: 'Probestunde buchen',
        },
        {
          title: 'Jugend- & Erwachsenen-Mitgliedschaft (ab 15 Jahren)',
          subtitle: 'Für Jugendliche und Erwachsene ab 15 Jahren',
          priceLine: '60 € pro Quartal',
          bullets: [
            '2 Trainingseinheiten pro Woche',
            'Shotokan-Trainingsprogramm',
            'Anleitung durch Trainer mit 7. und 8. Dan',
          ],
          ctaLabel: 'Probestunde buchen',
        },
      ],
    },
    faq: {
      heading: 'Häufig gestellte Fragen',
      intro: 'Typische Fragen von Eltern, die Karate für ihre Kinder in Betracht ziehen.',
      qaItems: [
        {
          question: 'Ab welchem Alter kann mein Kind starten?',
          answer:
            'Kinder können ab etwa 6 Jahren mit dem Karatetraining beginnen. Wir bieten altersgerechte Gruppen, damit Inhalte und Sicherheit zum Entwicklungsstand passen.',
        },
        {
          question: 'Braucht mein Kind Vorerfahrung?',
          answer:
            'Nein. Wir begrüßen komplette Anfänger und unterrichten alle Leistungsstufen – vom weißen bis zum schwarzen Gürtel. Unsere Trainer sind darauf geschult, Schüler in jeder Phase zu begleiten.',
        },
        {
          question: 'Was soll mein Kind zur ersten Stunde anziehen?',
          answer:
            'Für die erste Stunde reicht bequeme Sportkleidung. Wenn Sie sich für eine Mitgliedschaft entscheiden, informieren wir Sie über den passenden Karateanzug (Gi). Die Kleidung sollte ausreichend Bewegungsfreiheit bieten.',
        },
        {
          question: 'Wie oft sollte mein Kind trainieren?',
          answer:
            'Wir empfehlen 2–3 Trainingseinheiten pro Woche für gute Fortschritte. Wichtig ist vor allem eine regelmäßige Teilnahme, die sich gut in den Alltag integrieren lässt.',
        },
        {
          question: 'Gibt es eine Probestunde?',
          answer:
            'Ja. Wir bieten eine kostenlose Probestunde an, damit Sie unser Training und die Atmosphäre kennenlernen können, bevor Sie sich entscheiden. So haben Sie und Ihr Kind Zeit, Dojo und Trainer in Ruhe zu erleben.',
        },
        {
          question: 'Wie lange dauert es bis zum schwarzen Gürtel?',
          answer:
            'Der Weg zum schwarzen Gürtel dauert in der Regel etwa 3–5 Jahre mit regelmäßigem Training. Dauer und Tempo hängen von Einsatz, Anwesenheit und Lernfortschritten ab.',
        },
        {
          question: 'Ist das Training für Kinder sicher?',
          answer:
            'Ja. Sicherheit hat oberste Priorität. Alle Trainer sind zertifiziert, und das Training findet in einem kontrollierten, überwachten Umfeld statt. Wir verwenden altersgerechte Inhalte und legen Wert auf Respekt und kontrollierte Bewegung.',
        },
      ],
    },
    finalCta: {
      heading: 'Starte die Selbstvertrauens-Reise deines Kindes',
      paragraph: 'Dein Kind erlernt klare Fähigkeiten durch strukturiertes Shotokan-Training.',
      primaryCta: 'Probestunde buchen',
      secondaryCta: 'Trainingszeiten ansehen',
    },
    footer: {
      brandTitle: 'Karate Do Neuhausen',
      brandText: 'Traditionelles Karatetraining für alle Alters- und Leistungsstufen in Neuhausen.',
      nav: [
        { label: 'Start', href: '#hero' },
        { label: 'Kurse', href: '#classes' },
        { label: 'Für wen ist es', href: '#who-its-for' },
        { label: 'FAQ', href: '#faq' },
      ],
      contactLabels: {
        addressLabel: 'Adresse:',
        emailLabel: 'E-Mail:',
        phoneLabel: 'Tel.:',
      },
      legal: {
        impressum: 'Impressum',
        datenschutz: 'Datenschutz',
      },
      copyright: '© 2025 Karate Do Neuhausen. Alle Rechte vorbehalten.',
    },
  },
};
