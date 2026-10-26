export interface ServiceData {
  slug: string;
  number: string;
  iconName: 'Compass' | 'Sparkles' | 'Film' | 'TrendingUp' | 'Layers';
  title: {
    ar: string;
    en: string;
  };
  tagline: {
    ar: string;
    en: string;
  };
  shortDescription: {
    ar: string;
    en: string;
  };
  fullDescription: {
    ar: string;
    en: string;
  };
  capabilities: {
    ar: string[];
    en: string[];
  };
  deliverables: {
    ar: string[];
    en: string[];
  };
  strategicValue: {
    ar: string;
    en: string;
  };
  process: Array<{
    step: string;
    title: { ar: string; en: string };
    desc: { ar: string; en: string };
  }>;
}

export const servicesData: ServiceData[] = [
  {
    slug: 'strategy-consulting',
    number: '01',
    iconName: 'Compass',
    title: {
      ar: 'الاستراتيجية والاستشارات',
      en: 'Strategy & Consulting',
    },
    tagline: {
      ar: 'تحديد المسار والتموضع الاستراتيجي للعلامات الطموحة',
      en: 'Defining trajectory and strategic positioning for ambitious institutions',
    },
    shortDescription: {
      ar: 'تحديد المسارات الاستراتيجية وتموضع العلامة، ودراسة الجمهور المستهدف لصياغة خارطة طريق إعلامية ورقمية واضحة.',
      en: 'Formulating clear strategic roadmaps, brand positioning frameworks, and deep audience intelligence.',
    },
    fullDescription: {
      ar: 'نقدم استشارات استراتيجية معمقة تساعد المؤسسات والعلامات التجارية الرائدة على صياغة هويتها الفكرية، وفهم تحولات السوق، وتحديد مكانتها الفريدة في المشهد الإقليمي والعالمي.',
      en: 'We provide rigorous strategic counsel helping institutional leaders and modern brands articulate their foundational rationale, navigate market shifts, and command a distinctive position in regional and international ecosystems.',
    },
    capabilities: {
      ar: [
        'أبحاث السوق والتحليل التنافسي المعمق',
        'بناء التموضع المؤسسي وركائز العلامة',
        'تحديد الجمهور المستهدف وتخطيط رحلة العميل',
        'صياغة الرسائل المؤسسية وخارطة الطريق الاتصالية',
        'استراتيجيات النمو الرقمي والتوسع الإقليمي',
      ],
      en: [
        'Market Intelligence & Competitive Auditing',
        'Institutional Brand Positioning & Pillar Architecture',
        'Audience Profiling & Experience Journey Mapping',
        'Narrative Hierarchy & Strategic Communications Playbook',
        'Regional Expansion & Scalability Roadmaps',
      ],
    },
    deliverables: {
      ar: [
        'وثيقة التموضع الاستراتيجي الشاملة',
        'دليل معمارية العلامة والرسائل الأساسية',
        'خطة العمل التنفيذية وجدول الأولويات',
      ],
      en: [
        'Comprehensive Strategic Positioning Monograph',
        'Brand Architecture & Key Narrative Playbook',
        'Phased Operational Implementation Matrix',
      ],
    },
    strategicValue: {
      ar: 'وضوح فكري وتنفيذي يمنح قيادة المؤسسة بوصلة موثوقة تضمن توافق كافة المبادرات التسويقية والإبداعية مع الأهداف طويلة المدى.',
      en: 'Intellectual and operational clarity providing leadership with an unshakeable navigational compass, aligning all downstream creative initiatives with enterprise goals.',
    },
    process: [
      {
        step: '01',
        title: { ar: 'الاستكشاف والتحليل', en: 'Discovery & Audit' },
        desc: { ar: 'فهم الوضع الحالي، تحديات السوق، ومكامن القوة الاستراتيجية.', en: 'Diagnosing baseline realities, competitive dynamics, and institutional strengths.' },
      },
      {
        step: '02',
        title: { ar: 'صياغة التموضع', en: 'Positioning Calibration' },
        desc: { ar: 'تحديد البصمة الفريدة ونقاط التمايز غير القابلة للتقليد.', en: 'Articulating unique white-space opportunities and non-replicable differentiators.' },
      },
      {
        step: '03',
        title: { ar: 'هندسة الرسائل', en: 'Message Architecture' },
        desc: { ar: 'بناء سرديات متماسكة تخاطب مختلف أصحاب المصلحة بدقة.', en: 'Developing cohesive narratives addressing diverse stakeholder segments.' },
      },
      {
        step: '04',
        title: { ar: 'خارطة التفعيل', en: 'Activation Framework' },
        desc: { ar: 'تحويل الرؤية الاستراتيجية إلى مؤشرات أداء ومسارات تنفيذية محددة.', en: 'Translating strategy into discrete milestones, KPIs, and operational mandates.' },
      },
    ],
  },
  {
    slug: 'branding-identity',
    number: '02',
    iconName: 'Sparkles',
    title: {
      ar: 'الهوية البصرية والعلامة',
      en: 'Branding & Visual Identity',
    },
    tagline: {
      ar: 'تصميم أنظمة بصرية استثنائية تعكس العمق والأناقة المؤسسية',
      en: 'Architecting celestial design systems that embody institutional grace',
    },
    shortDescription: {
      ar: 'بناء هويات متكاملة تشمل الرموز والطباعة، ولوحات الألوان، والأدلة الإرشادية لضمان حضور متسق وراسخ عبر كافة نقاط التفاعل.',
      en: 'Crafting holistic identity systems encompassing bespoke logomarks, typography, color tokens, and rigorous design guidelines.',
    },
    fullDescription: {
      ar: 'نصمم هويات بصرية تتجاوز التوقعات التقليدية، مستلهمة من روح الهدوء الفاخر والدقة المعمارية. نبتكر لغة بصرية ثنائية اللغة تتوازن فيها الحروف العربية الأصيلة مع التايبوغرافي العالمي.',
      en: 'We craft visual identities that transcend routine design tropes, rooted in quiet luxury and architectural discipline. We establish native bilingual typographic harmony honoring both classic Arabic letterforms and contemporary global typography.',
    },
    capabilities: {
      ar: [
        'تصميم الشعار والرموز المؤسسية المعاصرة',
        'تطوير أنظمة الحروف والتايبوغرافي ثنائي اللغة',
        'صياغة فلسفة الألوان والتدرجات الضوئية الفضائية',
        'تصميم تطبيقات الهوية الرقمية والمطبوعة والبيئية',
        'إعداد أدلة الهوية البصرية الشاملة (Brand Guidelines)',
      ],
      en: [
        'Contemporary Emblem & Logomark Design',
        'Bilingual Arabic-English Typographic Systems',
        'Atmospheric Color Systems & Celestial Lighting Palettes',
        'Spatial, Environmental & Collateral Identity Applications',
        'Exhaustive Interactive Brand Guidelines & Design Tokens',
      ],
    },
    deliverables: {
      ar: [
        'مكتبة ملفات الهوية المفتوحة وعالية الدقة',
        'دليل معايير الهوية البصرية الرقمي المتكامل',
        'نماذج التطبيقات والقرطاسية وأنظمة التواصل',
      ],
      en: [
        'Master Production Asset Suite (Vector & Native Formats)',
        'Comprehensive Interactive Brand Standards Manual',
        'Modular Collateral & Signage Presentation Templates',
      ],
    },
    strategicValue: {
      ar: 'حضور بصري مهيب يرسخ مكانة علامتك ككيان ريادي موثوق يترك انطباعاً أولياً خالداً ويوحد كافة نقاط الاتصال.',
      en: 'Commanding visual poise that elevates enterprise prestige, building instant credibility and unifying touchpoints across physical and digital frontiers.',
    },
    process: [
      {
        step: '01',
        title: { ar: 'الإلهام والتوجه البصري', en: 'Visual Direction' },
        desc: { ar: 'استكشاف المفاهيم التجريدية وبناء لوحات الإلهام (Moodboards).', en: 'Curating moodboards and exploring conceptual aesthetic territories.' },
      },
      {
        step: '02',
        title: { ar: 'الرسم والتطوير الأولي', en: 'Form Synthesis' },
        desc: { ar: 'تطوير المسودات الهندسية وموازنة الرموز والنسب الذهبية.', en: 'Drafting geometric proportions, golden-ratio alignment, and iconography.' },
      },
      {
        step: '03',
        title: { ar: 'المعايرة ثنائية اللغة', en: 'Bilingual Pairing' },
        desc: { ar: 'موازنة الحروف العربية مع المقابل الإنجليزي في الوزن والسماكة.', en: 'Tuning stroke weight, rhythm, and diacritic harmony between scripts.' },
      },
      {
        step: '04',
        title: { ar: 'نظام الأدلة والتوثيق', en: 'Codification' },
        desc: { ar: 'إعداد كتاب المعايير وقواعد الاستخدام لضمان سلامة التطبيق.', en: 'Compiling usage rules, grid governance, and scale boundaries.' },
      },
    ],
  },
  {
    slug: 'creative-production',
    number: '03',
    iconName: 'Film',
    title: {
      ar: 'الإنتاج الإبداعي والمحتوى',
      en: 'Creative Production & Content',
    },
    tagline: {
      ar: 'سرد بصري وسينمائي يحوّل الأفكار إلى لحظات لا تُنسى',
      en: 'Cinematic storytelling transmuting ideas into memorable moments',
    },
    shortDescription: {
      ar: 'إنتاج محتوى بصري وسردي سينمائي يشمل التصوير الفوتوغرافي، الأفلام القصيرة، والموشن جرافيكس بما يخدم الرسالة الإعلامية.',
      en: 'Producing cinematic visual storytelling, executive films, architectural photography, and celestial motion graphics.',
    },
    fullDescription: {
      ar: 'نجمع بين التوجيه الفني الرفيع وأحدث تقنيات التصوير السينمائي لإنتاج محتوى إعلامي يأسر الحواس. نروي قصص الإنجاز والابتكار في دولة الإمارات والمنطقة بأسلوب يحترم ذكاء المتلقي.',
      en: 'We unite high art direction with cutting-edge cinematography to craft narrative experiences that captivate sophisticated audiences. We celebrate innovation, regional heritage, and national achievement with poetic restraint.',
    },
    capabilities: {
      ar: [
        'كتابة السيناريو وصياغة المعالجات الفنية',
        'إنتاج الأفلام الوثائقية والترويجية للمؤسسات',
        'التصوير المعماري والفوتوغرافي الفاخر',
        'تصميم الرسوم المتحركة والموشن جرافيكس المتطور',
        'المعالجة الصوتية والتأليف الموسيقي الحصري',
      ],
      en: [
        'Narrative Screenwriting & Editorial Concept Treatment',
        'Institutional Brand Films & High-Impact Documentaries',
        'Architectural, Spatial & Fine Editorial Photography',
        'Advanced Celestial Motion Graphics & Title Sequence Design',
        'Custom Soundscapes & Orchestral Audio Engineering',
      ],
    },
    deliverables: {
      ar: [
        'نسخ الأفلام بجودة سينمائية 4K لكافة المنصات',
        'مكتبة صور فوتوغرافية حصرية ومحققة الحقوق',
        'حزم رسومية متحركة متكاملة ومعدّة للتطبيق الفوري',
      ],
      en: [
        'Master 4K Cinematic Cuts & Social Cut-downs',
        'Exclusive High-Resolution Editorial Photo Library',
        'Motion Graphic Kits & Animated Title Templates',
      ],
    },
    strategicValue: {
      ar: 'ربط وجداني عميق بين العلامة وجمهورها من خلال قصص حقيقية ومحتوى بصري يرتقي بالمعايير وينشر أثرًا طويل المدى.',
      en: 'Cultivating emotional resonance between your institution and constituents through honest narratives that transcend commercial advertising.',
    },
    process: [
      {
        step: '01',
        title: { ar: 'التطوير السردي', en: 'Narrative Framing' },
        desc: { ar: 'بلورة الفكرة الرئيسية والسيناريو واللوحات التخطيطية (Storyboards).', en: 'Developing overarching narrative concepts, script drafts, and storyboards.' },
      },
      {
        step: '02',
        title: { ar: 'الإنتاج الميداني', en: 'Principal Production' },
        desc: { ar: 'تنفيذ جلسات التصوير بإشراف نخبة من المخرجين والمصورين.', en: 'Capturing visuals with world-class cameras, lighting, and art crews.' },
      },
      {
        step: '03',
        title: { ar: 'المونتاج والتلوين', en: 'Post-Production' },
        desc: { ar: 'المونتاج الدقيق وتصحيح الألوان بصبغة سينمائية تليق بالهوية.', en: 'Precision editorial pacing, celestial color grading, and VFX passes.' },
      },
      {
        step: '04',
        title: { ar: 'المكساج والتسليم', en: 'Sound Design & Mastering' },
        desc: { ar: 'دمج المؤثرات الصوتية والموسيقى وتصدير النسخ بمختلف المقاسات.', en: 'Atmospheric audio mixing, multi-aspect-ratio formatting, and delivery.' },
      },
    ],
  },
  {
    slug: 'digital-marketing',
    number: '04',
    iconName: 'TrendingUp',
    title: {
      ar: 'التسويق الرقمي والنمو',
      en: 'Digital Marketing & Growth',
    },
    tagline: {
      ar: 'إدارة الحملات وبناء الوصول المستدام للجمهور النخبوي',
      en: 'Campaign architecture and sustainable audience resonance',
    },
    shortDescription: {
      ar: 'تخطيط وإدارة الحملات الإعلانية الموجهة، وتحسين الحضور عبر محركات البحث، وتنمية التفاعل المبني على التحليلات الدقيقة.',
      en: 'Targeted media orchestration, search presence optimization, and data-informed engagement strategies.',
    },
    fullDescription: {
      ar: 'نصمم حملات رقمية مدروسة لا تكتفي بجمع الأرقام العابرة، بل تستهدف بناء علاقات مستدامة مع أصحاب القرار والجمهور المستهدف بدقة واحترافية عالية.',
      en: 'We engineer precision digital campaigns that transcend vanity metrics. We construct durable awareness, measured engagement, and strategic influence among discerning regional and global stakeholders.',
    },
    capabilities: {
      ar: [
        'تخطيط وشراء الوسائط الإعلانية الرقمية المتقدمة',
        'استراتيجيات تحسين الظهور عبر محركات البحث (SEO)',
        'إدارة حضور العلامة عبر المنصات المهنية والرقمية',
        'التسويق عبر المحتوى التخصصي والتقارير البيضاء',
        'لوحات قياس الأداء والتحليلات البيانية اللحظية',
      ],
      en: [
        'Strategic Paid Media Planning & Programmatic Optimization',
        'Technical & Editorial Search Engine Optimization (SEO)',
        'Executive Social Media Architecture & Thought Leadership',
        'Whitepaper & Specialized Industry Thought-Content Marketing',
        'Real-time Performance Analytics Dashboards & Executive Reporting',
      ],
    },
    deliverables: {
      ar: [
        'خطة الحملات الرقمية وجدول الإنفاق والمراحل',
        'لوحة معلومات تفاعلية لمتابعة مؤشرات النجاح',
        'تقارير تحليلية دورية تتضمن توصيات التحسين المستمر',
      ],
      en: [
        'Comprehensive Multi-Channel Media & Budget Blueprint',
        'Custom Interactive Analytics Dashboard',
        'Monthly Strategic Intelligence Reports with Actionable Directives',
      ],
    },
    strategicValue: {
      ar: 'كفاءة إنفاق عالية ووصول دقيق يضمن وصول رسالتك للأطراف الفاعلة دون هدر للموارد الإعلامية.',
      en: 'Maximum capital efficiency ensuring your organizational narrative connects with verified decision-makers without budget dissipation.',
    },
    process: [
      {
        step: '01',
        title: { ar: 'تحديد المعايير والجمهور', en: 'Audience Mapping' },
        desc: { ar: 'رسم الشريحة المستهدفة ونقاط تواجدها واهتماماتها الرقمية.', en: 'Profiling high-value personas and their primary media discovery habits.' },
      },
      {
        step: '02',
        title: { ar: 'بناء الحملة والرسائل', en: 'Campaign Build' },
        desc: { ar: 'إعداد المحتوى الإعلاني وتحديد معايير الاستهداف المتقدم.', en: 'Configuring creative assets, copy variations, and audience parameters.' },
      },
      {
        step: '03',
        title: { ar: 'الإطلاق والتحسين المستمر', en: 'Flighting & Tuning' },
        desc: { ar: 'متابعة المؤشرات وإجراء التعديلات الفورية لتحقيق أعلى عائد.', en: 'Monitoring velocity and reallocating resources toward highest-performing vectors.' },
      },
      {
        step: '04',
        title: { ar: 'التحليل الاستراتيجي', en: 'Intelligence Review' },
        desc: { ar: 'استخلاص الدروس وتطوير استراتيجية طويلة الأجل للنمو المستمر.', en: 'Synthesizing learnings into enduring institutional competitive advantages.' },
      },
    ],
  },
  {
    slug: 'digital-experiences',
    number: '05',
    iconName: 'Layers',
    title: {
      ar: 'التجارب والمنصات الرقمية',
      en: 'Digital Experiences & Platforms',
    },
    tagline: {
      ar: 'هندسة منصات ويب وتطبيقات تفاعلية متطورة تجمع بين الأناقة والسرعة',
      en: 'Architecting fast, elegant interactive web platforms and portals',
    },
    shortDescription: {
      ar: 'تصميم وتطوير المواقع والمنصات الرقمية التفاعلية بمعايير عالمية في تجربة المستخدم والأداء وسرعة الاستجابة.',
      en: 'Designing and engineering responsive websites, editorial portals, and immersive interactive brand experiences.',
    },
    fullDescription: {
      ar: 'نحوّل الهوية البصرية إلى منصات وتطبيقات رقمية حية تتفاعل بسلاسة مع المستخدم. نحرص على معايير الأداء الفائق والوصولية العالية والدعم الأصيل للغتين العربية والإنجليزية.',
      en: 'We translate brand architecture into living digital environments. We deliver blazingly fast, accessible, responsive platforms with flawless native bilingual typography and restrained motion dynamics.',
    },
    capabilities: {
      ar: [
        'تصميم واجهات وتجربة المستخدم (UI/UX) ثنائية اللغة',
        'تطوير الواجهات الأمامية باستخدام أحدث تقنيات الويب',
        'تطوير أنظمة إدارة المحتوى المخصصة والآمنة',
        'هندسة التفاعلات الحركية الهادئة والمتقنة',
        'تحسين سرعة التصفح ومعايير الأمان وقابلية الوصول (WCAG)',
      ],
      en: [
        'Native Bilingual UI/UX Wireframing & Prototyping',
        'Modern Frontend Engineering (React, Vite, TypeScript, Tailwind)',
        'Headless Content Architecture & API Integrations',
        'Quiet Celestial Interactive Micro-animations',
        'Peak Performance Optimization, Security & WCAG Accessibility',
      ],
    },
    deliverables: {
      ar: [
        'موقع أو منصة إلكترونية كاملة البرمجة وقابلة للتوسع',
        'نظام تصميم رقمي موحد ومكتبة مكونات برمجية قابلة لإعادة الاستخدام',
        'وثائق الدعم الفني ودليل إدارة المحتوى للمسؤولين',
      ],
      en: [
        'Production-ready, Fully Tested Responsive Web Application',
        'Modular Reusable Component Library & Design System Tokens',
        'Comprehensive Architecture Documentation & Handover Guides',
      ],
    },
    strategicValue: {
      ar: 'واجهة رقمية فخمة تمثل مركز الثقل لعلامتك على الإنترنت، توفر تجربة مستخدم لا تضاهى وتلبي أعلى المتطلبات التقنية.',
      en: 'A flagship digital headquarters commanding audience trust, ensuring seamless bilingual fluidity, instantaneous load times, and effortless scale.',
    },
    process: [
      {
        step: '01',
        title: { ar: 'هندسة المعلومات والنماذج', en: 'UX Architecture' },
        desc: { ar: 'تخطيط خريطة الموقع وتدفق الصفحات وبناء النماذج التفاعلية.', en: 'Mapping site hierarchies, user user flows, and low-fidelity wireframes.' },
      },
      {
        step: '02',
        title: { ar: 'التصميم التفاعلي الرفيع', en: 'UI Art Direction' },
        desc: { ar: 'تصميم الواجهات بأسلوب Cosmic Editorial وتطبيق أنظمة التباين.', en: 'Applying deep cosmic palettes, razor hairlines, and typography.' },
      },
      {
        step: '03',
        title: { ar: 'التطوير البرمجي المتقن', en: 'Frontend Engineering' },
        desc: { ar: 'كتابة أكواد نظيفة وسريعة تدعم RTL وLTR بشكل أصيل.', en: 'Coding responsive interfaces with strict typing and accessibility.' },
      },
      {
        step: '04',
        title: { ar: 'الفحص والتدشين الرسمي', en: 'Auditing & Launch' },
        desc: { ar: 'اختبار التوافق والأمان والسرعة قبل الإطلاق على النطاق الحي.', en: 'Comprehensive cross-device validation, speed profiling, and deployment.' },
      },
    ],
  },
];
