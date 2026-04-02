export type Lang = 'es' | 'ca' | 'en';
export const defaultLang: Lang = 'es';
export const supportedLangs: Lang[] = ['es', 'ca', 'en'];

export const langNames: Record<Lang, string> = {
  es: 'Español',
  ca: 'Català',
  en: 'English',
};

export const ui = {
  es: {
    // Nav
    'nav.home': 'Inicio',
    'nav.schedules': 'Horarios',
    'nav.news': 'Noticias',
    'nav.oils': 'Aceites Esenciales',
    'nav.contact': 'Contacto',
    'nav.menu': 'Menú',

    // Hero
    'hero.title': 'Encuentra Tu Equilibrio',
    'hero.subtitle': 'Un espacio acogedor para todos los niveles — desde tu primera respiración hasta tu práctica más profunda.',
    'hero.cta_schedules': 'Ver Horarios',
    'hero.cta_contact': 'Contáctanos',

    // About Yoga
    'yoga.title': 'El Camino del Yoga',
    'yoga.p1': 'El yoga es una práctica milenaria originada en India hace más de 5.000 años. La palabra "yoga" significa unión — unión del cuerpo, la mente y el espíritu. A través de las posturas (asanas), la respiración consciente (pranayama) y la meditación, el yoga ofrece un camino completo hacia la salud y la paz interior.',
    'yoga.p2': 'La ciencia moderna confirma lo que los yoguis siempre han sabido: la práctica regular reduce el estrés, mejora la flexibilidad y la fuerza, cuida el corazón y cultiva una profunda sensación de calma y presencia.',
    'yoga.cta': 'Comienza Tu Viaje',

    // Benefits
    'benefit.mindfulness': 'Atención Plena',
    'benefit.mindfulness.desc': 'Cultiva la presencia y la calma en cada momento de la vida cotidiana.',
    'benefit.strength': 'Fuerza',
    'benefit.strength.desc': 'Desarrolla fuerza funcional que te sostiene dentro y fuera de la esterilla.',
    'benefit.wellness': 'Bienestar',
    'benefit.wellness.desc': 'Cuida tu salud integral — cuerpo, mente y espíritu — a través de la práctica.',
    'benefit.breathwork': 'Respiración',
    'benefit.breathwork.desc': 'Aprende técnicas de pranayama para regular tu sistema nervioso.',

    // Kundalini
    'kundalini.title': 'Yoga Kundalini',
    'kundalini.subtitle': 'La Energía del Despertar',
    'kundalini.p1': 'El Yoga Kundalini es considerado el "yoga de la conciencia". A diferencia de otras formas de yoga que se centran principalmente en la forma física, el Kundalini trabaja con la energía vital que reside en la base de la columna vertebral — la energía Kundalini — y la guía hacia arriba a través de los chakras para alcanzar estados de consciencia más elevados.',
    'kundalini.p2': 'Esta antigua práctica, introducida en Occidente por Yogi Bhajan en 1969, combina posturas dinámicas (kriyas), respiración de fuego (Breath of Fire), mantras sagrados, mudras y meditación. Su efecto es profundamente transformador: activa el sistema nervioso, equilibra el sistema endocrino y expande la percepción de uno mismo.',
    'kundalini.p3': 'No se necesita ser flexible para practicar Kundalini. Se necesita estar dispuesto a transformarse. Cada sesión es una oportunidad de liberar bloqueos emocionales, aumentar la vitalidad y reconectar con tu esencia más auténtica.',
    'kundalini.benefit1': 'Activa y equilibra los 7 chakras',
    'kundalini.benefit2': 'Reduce el estrés y la ansiedad profundamente',
    'kundalini.benefit3': 'Potencia la claridad mental y la intuición',
    'kundalini.benefit4': 'Fortalece el sistema nervioso e inmune',
    'kundalini.benefit5': 'Libera bloqueos emocionales acumulados',
    'kundalini.benefit6': 'Conecta con tu propósito de vida',

    // About
    'about.title': '¿Quién Soy?',
    'about.cta_contact': 'Escríbeme',
    'about.cta_schedule': 'Ver Horarios',

    // News
    'news.title': 'Noticias y Eventos',
    'news.subtitle': 'Mantente al día con todo lo que ocurre en el estudio.',
    'news.empty': 'Aún no hay publicaciones. ¡Vuelve pronto!',
    'news.read_more': 'Leer más →',
    'news.all': 'Todas las Noticias',
    'news.back': '← Volver a Noticias',
    'news.instagram_title': 'Síguenos en Instagram',
    'news.instagram_cta': 'Ver en Instagram',

    // Home news
    'home.news.title': 'Últimas Noticias',
    'home.news.all': 'Ver Todas',

    // Schedules
    'schedules.title': 'Horarios de Clases',
    'schedules.subtitle': 'Encuentra la clase perfecta para tu nivel, horario y objetivos. Todos son bienvenidos.',
    'schedules.legend': 'Niveles',
    'schedules.new_title': '¿Nuevo en el yoga?',
    'schedules.new_text': 'Nuestras clases para principiantes y todos los niveles son el lugar perfecto para comenzar. No se necesita experiencia — ¡solo ven como eres!',
    'schedules.new_cta': 'Haznos una Pregunta',
    'schedules.with': 'con',

    // Oils
    'oils.title': 'Aceites Esenciales',
    'oils.subtitle': 'La sabiduría de la naturaleza en un frasco — descubre cómo los aceites esenciales pueden profundizar tu práctica y apoyar tu bienestar.',
    'oils.intro_title': 'Aceites y Yoga — Una Unión Natural',
    'oils.intro_p1': 'Los aceites esenciales y el yoga comparten raíces antiguas en las tradiciones de bienestar holístico. Cuando se combinan con consciencia, crean una experiencia multisensorial que amplifica los beneficios de tu práctica.',
    'oils.intro_p2': 'Utilizamos únicamente aceites esenciales puros y de grado terapéutico en nuestro estudio. A continuación encontrarás nuestra colección seleccionada, cada uno elegido por su sinergia con el yoga y la meditación.',
    'oils.benefits': 'Beneficios',
    'oils.prev': '‹ Anterior',
    'oils.next': 'Siguiente ›',
    'oils.disclaimer': 'Aviso: Los aceites esenciales se utilizan con fines aromáticos y tópicos como parte de una práctica de bienestar. Diluir siempre antes de aplicar en la piel. Consultar a un profesional de salud antes del uso si está embarazada, lactando o gestionando una condición médica.',

    // Contact
    'contact.title': 'Contáctanos',
    'contact.subtitle': 'Nos encantaría saber de ti. Escríbenos con preguntas, reservas o simplemente para saludar.',
    'contact.form_title': 'Envíanos un Mensaje',
    'contact.name': 'Nombre Completo',
    'contact.name_placeholder': 'Tu nombre',
    'contact.email': 'Correo Electrónico',
    'contact.subject': 'Asunto',
    'contact.subject_placeholder': 'Selecciona un tema…',
    'contact.subject_class': 'Información sobre Clases',
    'contact.subject_workshop': 'Inscripción a Taller',
    'contact.subject_private': 'Sesiones Privadas',
    'contact.subject_oils': 'Aceites Esenciales',
    'contact.subject_other': 'Otro',
    'contact.message': 'Mensaje',
    'contact.message_placeholder': '¿En qué podemos ayudarte?',
    'contact.send': 'Enviar Mensaje',
    'contact.info_title': 'Información del Estudio',
    'contact.location': 'Ubicación',
    'contact.phone': 'Teléfono',
    'contact.hours': 'Horario del Estudio',
    'contact.hours_weekdays': 'Lunes – Viernes: 6:30 – 20:00',
    'contact.hours_saturday': 'Sábados: 8:00 – 18:00',
    'contact.hours_sunday': 'Domingos: 9:00 – 17:00',
    'contact.follow': 'Síguenos',
    'contact.follow_text': 'Mantente conectado para inspiración diaria.',

    // Success
    'success.title': '¡Mensaje Enviado!',
    'success.heading': '¡Gracias!',
    'success.text': 'Tu mensaje ha sido enviado. Te responderemos en menos de 24 horas.',
    'success.home': 'Volver al Inicio',
    'success.schedules': 'Ver Horarios',

    // CTA
    'cta.title': '¿Listo para Empezar?',
    'cta.text': 'Tu primera clase te espera. Ven como eres.',
    'cta.btn': 'Contáctanos',

    // Footer
    'footer.rights': 'Todos los derechos reservados.',
    'footer.contact': 'Contacto',

    // Days
    'day.Monday': 'Lunes',
    'day.Tuesday': 'Martes',
    'day.Wednesday': 'Miércoles',
    'day.Thursday': 'Jueves',
    'day.Friday': 'Viernes',
    'day.Saturday': 'Sábado',
    'day.Sunday': 'Domingo',
  },

  ca: {
    'nav.home': 'Inici',
    'nav.schedules': 'Horaris',
    'nav.news': 'Notícies',
    'nav.oils': 'Olis Essencials',
    'nav.contact': 'Contacte',
    'nav.menu': 'Menú',

    'hero.title': 'Troba el Teu Equilibri',
    'hero.subtitle': 'Un espai acollidor per a tots els nivells — des del teu primer alè fins a la teva pràctica més profunda.',
    'hero.cta_schedules': 'Veure Horaris',
    'hero.cta_contact': 'Contacta\'ns',

    'yoga.title': 'El Camí del Ioga',
    'yoga.p1': 'El ioga és una pràctica mil·lenària originada a l\'Índia fa més de 5.000 anys. La paraula "yoga" significa unió — unió del cos, la ment i l\'esperit. A través de les postures (asanes), la respiració conscient (pranayama) i la meditació, el ioga ofereix un camí complet cap a la salut i la pau interior.',
    'yoga.p2': 'La ciència moderna confirma el que els ioguis sempre han sabut: la pràctica regular redueix l\'estrès, millora la flexibilitat i la força, cuida el cor i cultiva una profunda sensació de calma i presència.',
    'yoga.cta': 'Comença el Teu Viatge',

    'benefit.mindfulness': 'Atenció Plena',
    'benefit.mindfulness.desc': 'Conrea la presència i la calma en cada moment de la vida quotidiana.',
    'benefit.strength': 'Força',
    'benefit.strength.desc': 'Desenvolupa força funcional que et sosté dins i fora del tapís.',
    'benefit.wellness': 'Benestar',
    'benefit.wellness.desc': 'Cuida la teva salut integral — cos, ment i esperit — a través de la pràctica.',
    'benefit.breathwork': 'Respiració',
    'benefit.breathwork.desc': 'Aprèn tècniques de pranayama per regular el teu sistema nerviós.',

    'kundalini.title': 'Ioga Kundalini',
    'kundalini.subtitle': 'L\'Energia del Despertar',
    'kundalini.p1': 'El Ioga Kundalini és considerat el "ioga de la consciència". A diferència d\'altres formes de ioga que es centren principalment en la forma física, el Kundalini treballa amb l\'energia vital que resideix a la base de la columna vertebral i la guia cap amunt a través dels chakres per assolir estats de consciència més elevats.',
    'kundalini.p2': 'Aquesta antiga pràctica, introduïda a Occident per Yogi Bhajan el 1969, combina postures dinàmiques (kriyas), respiració de foc, mantres sagrats, mudres i meditació. El seu efecte és profundament transformador: activa el sistema nerviós, equilibra el sistema endocrí i expandeix la percepció d\'un mateix.',
    'kundalini.p3': 'No cal ser flexible per practicar Kundalini. Cal estar disposat a transformar-se. Cada sessió és una oportunitat d\'alliberar bloquejos emocionals, augmentar la vitalitat i reconnectar amb la teva essència més autèntica.',
    'kundalini.benefit1': 'Activa i equilibra els 7 chakres',
    'kundalini.benefit2': 'Redueix l\'estrès i l\'ansietat profundament',
    'kundalini.benefit3': 'Potencia la claredat mental i la intuïció',
    'kundalini.benefit4': 'Enforteix el sistema nerviós i immune',
    'kundalini.benefit5': 'Allibera bloquejos emocionals acumulats',
    'kundalini.benefit6': 'Connecta amb el teu propòsit de vida',

    'about.title': 'Qui Sóc?',
    'about.cta_contact': 'Escriu-me',
    'about.cta_schedule': 'Veure Horaris',

    'news.title': 'Notícies i Esdeveniments',
    'news.subtitle': 'Mantés-te al dia amb tot el que passa a l\'estudi.',
    'news.empty': 'Encara no hi ha publicacions. Torna aviat!',
    'news.read_more': 'Llegir més →',
    'news.all': 'Totes les Notícies',
    'news.back': '← Tornar a Notícies',
    'news.instagram_title': 'Segueix-nos a Instagram',
    'news.instagram_cta': 'Veure a Instagram',

    'home.news.title': 'Últimes Notícies',
    'home.news.all': 'Veure Totes',

    'schedules.title': 'Horaris de Classes',
    'schedules.subtitle': 'Troba la classe perfecta per al teu nivell, horari i objectius. Tothom és benvingut.',
    'schedules.legend': 'Nivells',
    'schedules.new_title': 'Nou al ioga?',
    'schedules.new_text': 'Les nostres classes per a principiants i tots els nivells són el lloc perfecte per començar. No cal experiència — vine tal com ets!',
    'schedules.new_cta': 'Fes-nos una Pregunta',
    'schedules.with': 'amb',

    'oils.title': 'Olis Essencials',
    'oils.subtitle': 'La saviesa de la natura en un flascó — descobreix com els olis essencials poden aprofundir la teva pràctica i recolzar el teu benestar.',
    'oils.intro_title': 'Olis i Ioga — Una Unió Natural',
    'oils.intro_p1': 'Els olis essencials i el ioga comparteixen arrels antigues en les tradicions de benestar holístic. Quan es combinen amb consciència, creen una experiència multisensorial que amplifica els beneficis de la teva pràctica.',
    'oils.intro_p2': 'Utilitzem únicament olis essencials purs i de grau terapèutic al nostre estudi. A continuació trobaràs la nostra col·lecció seleccionada, cada un escollit per la seva sinergia amb el ioga i la meditació.',
    'oils.benefits': 'Beneficis',
    'oils.prev': '‹ Anterior',
    'oils.next': 'Següent ›',
    'oils.disclaimer': 'Avís: Els olis essencials s\'utilitzen amb fins aromàtics i tòpics com a part d\'una pràctica de benestar. Diluir sempre abans d\'aplicar a la pell. Consultar a un professional de salut abans d\'usar si estàs embarassada, alletant o gestionant una condició mèdica.',

    'contact.title': 'Contacta\'ns',
    'contact.subtitle': 'Ens encantaria saber de tu. Escriu-nos amb preguntes, reserves o simplement per saludar.',
    'contact.form_title': 'Envia\'ns un Missatge',
    'contact.name': 'Nom Complet',
    'contact.name_placeholder': 'El teu nom',
    'contact.email': 'Correu Electrònic',
    'contact.subject': 'Assumpte',
    'contact.subject_placeholder': 'Selecciona un tema…',
    'contact.subject_class': 'Informació sobre Classes',
    'contact.subject_workshop': 'Inscripció a Taller',
    'contact.subject_private': 'Sessions Privades',
    'contact.subject_oils': 'Olis Essencials',
    'contact.subject_other': 'Altre',
    'contact.message': 'Missatge',
    'contact.message_placeholder': 'En què podem ajudar-te?',
    'contact.send': 'Enviar Missatge',
    'contact.info_title': 'Informació de l\'Estudi',
    'contact.location': 'Ubicació',
    'contact.phone': 'Telèfon',
    'contact.hours': 'Horari de l\'Estudi',
    'contact.hours_weekdays': 'Dilluns – Divendres: 6:30 – 20:00',
    'contact.hours_saturday': 'Dissabtes: 8:00 – 18:00',
    'contact.hours_sunday': 'Diumenges: 9:00 – 17:00',
    'contact.follow': 'Segueix-nos',
    'contact.follow_text': 'Mantés-te connectat per a inspiració diària.',

    'success.title': 'Missatge Enviat!',
    'success.heading': 'Gràcies!',
    'success.text': 'El teu missatge ha estat enviat. Et respondrem en menys de 24 hores.',
    'success.home': 'Tornar a l\'Inici',
    'success.schedules': 'Veure Horaris',

    'cta.title': 'Preparat per Començar?',
    'cta.text': 'La teva primera classe t\'espera. Vine tal com ets.',
    'cta.btn': 'Contacta\'ns',

    'footer.rights': 'Tots els drets reservats.',
    'footer.contact': 'Contacte',

    'day.Monday': 'Dilluns',
    'day.Tuesday': 'Dimarts',
    'day.Wednesday': 'Dimecres',
    'day.Thursday': 'Dijous',
    'day.Friday': 'Divendres',
    'day.Saturday': 'Dissabte',
    'day.Sunday': 'Diumenge',
  },

  en: {
    'nav.home': 'Home',
    'nav.schedules': 'Schedules',
    'nav.news': 'News',
    'nav.oils': 'Essential Oils',
    'nav.contact': 'Contact',
    'nav.menu': 'Menu',

    'hero.title': 'Find Your Balance',
    'hero.subtitle': 'A welcoming space for all levels — from your very first breath to your deepest practice.',
    'hero.cta_schedules': 'View Schedules',
    'hero.cta_contact': 'Get in Touch',

    'yoga.title': 'The Path of Yoga',
    'yoga.p1': 'Yoga is an ancient practice originating in India over 5,000 years ago. The word "yoga" means union — a union of body, mind, and spirit. Through postures (asanas), conscious breathing (pranayama), and meditation, yoga offers a complete path to health and inner peace.',
    'yoga.p2': 'Modern science confirms what yogis have always known: regular practice reduces stress, improves flexibility and strength, supports heart health, and cultivates a profound sense of calm and presence.',
    'yoga.cta': 'Start Your Journey',

    'benefit.mindfulness': 'Mindfulness',
    'benefit.mindfulness.desc': 'Cultivate presence and stillness in every moment of daily life.',
    'benefit.strength': 'Strength',
    'benefit.strength.desc': 'Build functional strength that supports you on and off the mat.',
    'benefit.wellness': 'Wellness',
    'benefit.wellness.desc': 'Support your whole health — body, mind, and spirit — through practice.',
    'benefit.breathwork': 'Breathwork',
    'benefit.breathwork.desc': 'Learn pranayama techniques to regulate your nervous system.',

    'kundalini.title': 'Kundalini Yoga',
    'kundalini.subtitle': 'The Energy of Awakening',
    'kundalini.p1': 'Kundalini Yoga is considered the "yoga of awareness." Unlike other forms of yoga that focus primarily on physical form, Kundalini works with the vital energy that resides at the base of the spine — the Kundalini energy — guiding it upward through the chakras to reach higher states of consciousness.',
    'kundalini.p2': 'This ancient practice, introduced to the West by Yogi Bhajan in 1969, combines dynamic postures (kriyas), Breath of Fire, sacred mantras, mudras, and meditation. Its effect is profoundly transformative: it activates the nervous system, balances the endocrine system, and expands one\'s self-perception.',
    'kundalini.p3': 'You don\'t need to be flexible to practice Kundalini. You need to be willing to transform. Each session is an opportunity to release emotional blockages, increase vitality, and reconnect with your most authentic self.',
    'kundalini.benefit1': 'Activates and balances the 7 chakras',
    'kundalini.benefit2': 'Deeply reduces stress and anxiety',
    'kundalini.benefit3': 'Enhances mental clarity and intuition',
    'kundalini.benefit4': 'Strengthens the nervous and immune systems',
    'kundalini.benefit5': 'Releases accumulated emotional blockages',
    'kundalini.benefit6': 'Connects you with your life\'s purpose',

    'about.title': 'Who Am I?',
    'about.cta_contact': 'Write to Me',
    'about.cta_schedule': 'View Schedules',

    'news.title': 'News & Events',
    'news.subtitle': 'Stay connected with what\'s happening at the studio.',
    'news.empty': 'No posts yet. Check back soon!',
    'news.read_more': 'Read more →',
    'news.all': 'All News',
    'news.back': '← Back to News',
    'news.instagram_title': 'Follow us on Instagram',
    'news.instagram_cta': 'View on Instagram',

    'home.news.title': 'Latest News',
    'home.news.all': 'View All',

    'schedules.title': 'Class Schedules',
    'schedules.subtitle': 'Find the perfect class for your level, time, and goals. All are welcome.',
    'schedules.legend': 'Levels',
    'schedules.new_title': 'New to yoga?',
    'schedules.new_text': 'Our Beginner and All-levels classes are the perfect place to start. No experience needed — just come as you are!',
    'schedules.new_cta': 'Ask a Question',
    'schedules.with': 'with',

    'oils.title': 'Essential Oils',
    'oils.subtitle': 'Nature\'s wisdom in a bottle — discover how essential oils can deepen your practice and support your wellbeing.',
    'oils.intro_title': 'Oils & Yoga — A Natural Union',
    'oils.intro_p1': 'Essential oils and yoga share ancient roots in holistic wellness traditions. When combined mindfully, they create a multi-sensory experience that amplifies the benefits of your practice.',
    'oils.intro_p2': 'We use only pure, therapeutic-grade essential oils in our studio. Below you will find our curated collection, each selected for its synergy with yoga and meditation.',
    'oils.benefits': 'Benefits',
    'oils.prev': '‹ Previous',
    'oils.next': 'Next ›',
    'oils.disclaimer': 'Disclaimer: Essential oils are used for aromatic and topical purposes as part of a wellness practice. Always dilute before skin application. Consult a healthcare professional before use if pregnant, nursing, or managing a medical condition.',

    'contact.title': 'Get In Touch',
    'contact.subtitle': 'We\'d love to hear from you. Reach out with questions, bookings, or just to say hello.',
    'contact.form_title': 'Send Us a Message',
    'contact.name': 'Full Name',
    'contact.name_placeholder': 'Your name',
    'contact.email': 'Email Address',
    'contact.subject': 'Subject',
    'contact.subject_placeholder': 'Select a topic…',
    'contact.subject_class': 'Class Information',
    'contact.subject_workshop': 'Workshop Registration',
    'contact.subject_private': 'Private Sessions',
    'contact.subject_oils': 'Essential Oils',
    'contact.subject_other': 'Other',
    'contact.message': 'Message',
    'contact.message_placeholder': 'How can we help you?',
    'contact.send': 'Send Message',
    'contact.info_title': 'Studio Info',
    'contact.location': 'Location',
    'contact.phone': 'Phone',
    'contact.hours': 'Studio Hours',
    'contact.hours_weekdays': 'Monday – Friday: 6:30 AM – 8:00 PM',
    'contact.hours_saturday': 'Saturday: 8:00 AM – 6:00 PM',
    'contact.hours_sunday': 'Sunday: 9:00 AM – 5:00 PM',
    'contact.follow': 'Follow Us',
    'contact.follow_text': 'Stay connected for daily inspiration.',

    'success.title': 'Message Sent!',
    'success.heading': 'Thank You!',
    'success.text': 'Your message has been sent. We\'ll get back to you within 24 hours.',
    'success.home': 'Back to Home',
    'success.schedules': 'View Schedules',

    'cta.title': 'Ready to Begin?',
    'cta.text': 'Your first class is waiting. Come as you are.',
    'cta.btn': 'Contact Us',

    'footer.rights': 'All rights reserved.',
    'footer.contact': 'Contact us',

    'day.Monday': 'Monday',
    'day.Tuesday': 'Tuesday',
    'day.Wednesday': 'Wednesday',
    'day.Thursday': 'Thursday',
    'day.Friday': 'Friday',
    'day.Saturday': 'Saturday',
    'day.Sunday': 'Sunday',
  },
} as const;

type TranslationKey = keyof typeof ui.es;

export function t(lang: Lang, key: TranslationKey): string {
  return (ui[lang] as Record<string, string>)[key] ?? (ui.es as Record<string, string>)[key] ?? key;
}

export function getLocalizedPath(lang: Lang, path: string): string {
  const clean = path.replace(/^\/?(es|ca|en)/, '').replace(/^\//, '') || '';
  if (lang === defaultLang) return `/${clean}`;
  return `/${lang}${clean ? `/${clean}` : ''}`;
}

export function getLangFromUrl(url: URL): Lang {
  const [, first] = url.pathname.split('/');
  if (supportedLangs.includes(first as Lang)) return first as Lang;
  return defaultLang;
}
