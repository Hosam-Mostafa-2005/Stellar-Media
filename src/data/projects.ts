import qasrAlNourImg from '../assets/portfolio/qasr_al_nour.jpg';
import luminaParfumsImg from '../assets/portfolio/lumina_parfums.jpg';
import alReemImg from '../assets/portfolio/al_reem.jpg';
import digitalCultureImg from '../assets/portfolio/digital_culture.jpg';

export interface ProjectMetadata {
  label: { ar: string; en: string };
  value: { ar: string; en: string };
}

export interface ProjectData {
  slug: string;
  number: string;
  refCode: string;
  title: {
    ar: string;
    en: string;
  };
  subtitle: {
    ar: string;
    en: string;
  };
  category: {
    ar: string;
    en: string;
  };
  locationTag: {
    ar: string;
    en: string;
  };
  heroImage: string;
  imageAlt: {
    ar: string;
    en: string;
  };
  shortDescription: {
    ar: string;
    en: string;
  };
  overview: {
    ar: string;
    en: string;
  };
  objective: {
    ar: string;
    en: string;
  };
  audience: {
    ar: string;
    en: string;
  };
  creativeStrategy: {
    ar: string;
    en: string;
  };
  disciplines: {
    ar: string[];
    en: string[];
  };
  deliverables: {
    ar: string[];
    en: string[];
  };
  metadata: ProjectMetadata[];
}

export const projectsData: ProjectData[] = [
  {
    slug: 'qasr-al-nour',
    number: '01',
    refCode: 'SM-CD25',
    title: {
      ar: 'قصر النور — وجهة ثقافية ومعمارية',
      en: 'Qasr Al-Nour — Cultural Destination',
    },
    subtitle: {
      ar: 'الهوية البصرية، التوجيه المكاني وحملة الإطلاق',
      en: 'Visual Identity, Spatial Wayfinding & Launch Campaign',
    },
    category: {
      ar: 'الهوية المؤسسية والتوجيه المكاني',
      en: 'Spatial Branding & Architecture',
    },
    locationTag: {
      ar: 'المنطقة الغربية، أبوظبي',
      en: 'Western Desert, Abu Dhabi',
    },
    heroImage: qasrAlNourImg,
    imageAlt: {
      ar: 'التصميم المعماري والهوية البصرية لوجهة قصر النور الثقافية في صحراء أبوظبي تحت سماء مرصعة بالنجوم',
      en: 'Architectural design and brand identity for Qasr Al-Nour cultural destination in the Abu Dhabi desert under a starry night',
    },
    shortDescription: {
      ar: 'بناء هوية بصرية وتجربة مكانية استثنائية لوجهة ثقافية معاصرة تجمع بين التراث الفلكي العربي والعمارة الصحراوية المستدامة.',
      en: 'Crafting an integrated visual identity and spatial experience for a contemporary cultural landmark harmonizing regional astronomy with modern architecture.',
    },
    overview: {
      ar: 'يمثل قصر النور دراسة حالة متكاملة في بناء هوية الوجهات الثقافية الفاخرة في إمارة أبوظبي. عمل الاستوديو على تطوير سردية بصرية تربط بين تاريخ الملاحة الفلكية العربية وعمارة الصحراء الحديثة، مع تصميم نظام متكامل للعلامات المكانية والمواد الترويجية.',
      en: 'Qasr Al-Nour is a comprehensive agency case study in luxury cultural destination branding. Stellar Media developed a visual narrative connecting ancient Arabian astronomical heritage with modern desert architecture, designing a unified spatial wayfinding system and launch campaign materials.',
    },
    objective: {
      ar: 'ترسيخ مكانة الوجهة كمعلم ثقافي ومعماري عالمي يجمع بين الهدوء التأملي والتفاعل المعرفي، وجذب النخبة الثقافية والزوار الباحثين عن تجارب سياحية غير تقليدية.',
      en: 'Establish the destination as a world-class cultural landmark blending meditative tranquility with intellectual engagement, appealing to cultural travelers and design connoisseurs seeking unhurried depth.',
    },
    audience: {
      ar: 'المهتمون بالعمارة المعاصرة، الفنون، التراث الفلكي، والمسافرون الباحثون عن تجارب الضيافة الثقافية الفاخرة في دولة الإمارات والمنطقة.',
      en: 'Architecture enthusiasts, regional culture curators, astronomy connoisseurs, and international luxury cultural travelers.',
    },
    creativeStrategy: {
      ar: 'تم استلهام لوحة الألوان من درجات سماء الليل في صحراء ليوا مع لمسات الفيروز النيبولا والميتاليك الهادئ. صُممت الخطوط العربية ثنائية اللغة لتعكس التوازن بين الرصانة التراثية والخطوط الحداثية، مع نظام توجيه مكاني يحترم بيئة الظلام الطبيعي.',
      en: 'The color architecture was informed by the deep midnight skies of the Liwa desert paired with delicate turquoise nebula luminescence. Bespoke bilingual typography pairs solemn classical proportions with crisp contemporary geometry, integrated with dark-sky-compliant environmental lighting.',
    },
    disciplines: {
      ar: [
        'استراتيجية وتسمية الوجهة',
        'الهوية البصرية ثنائية اللغة',
        'تصميم التوجيه المكاني والبيئي',
        'التوجيه الفني والتصوير المعماري',
        'مواد حملة الإطلاق والتواصل',
      ],
      en: [
        'Destination Strategy & Nomenclature',
        'Bilingual Visual Identity System',
        'Spatial & Environmental Wayfinding',
        'Art Direction & Architectural Photography',
        'Launch Campaign Collateral',
      ],
    },
    deliverables: {
      ar: [
        'دليل معايير الهوية البصرية الشامل (Brand Book)',
        'نظام التوجيه واللافتات المكانية للموقع بالكامل',
        'حزمة التايبوغرافي العربي والإنجليزي المخصص',
        'تصميم المطبوعات والكتيبات الفاخرة للزوار',
        'المواد الإعلانية لحملة التدشين الرقمية والمطبوعة',
      ],
      en: [
        'Master Brand Architecture & Standards Manual',
        'Complete Spatial Signage & Environmental Wayfinding Plan',
        'Custom Bilingual Typographic Suite',
        'Collector-grade Editorial Visitor Monograph',
        'Integrated Launch Campaign Assets for Print & Digital',
      ],
    },
    metadata: [
      {
        label: { ar: 'نوع العمل', en: 'Project Type' },
        value: { ar: 'دراسة حالة استوديو', en: 'Studio Portfolio Case Study' },
      },
      {
        label: { ar: 'القطاع', en: 'Sector' },
        value: { ar: 'الضيافة والثقافة الفاخرة', en: 'Cultural Luxury & Hospitality' },
      },
      {
        label: { ar: 'الخدمات المقدمة', en: 'Core Services' },
        value: { ar: 'الهوية · التوجيه الفني · التوجيه المكاني', en: 'Branding · Art Direction · Wayfinding' },
      },
      {
        label: { ar: 'نطاق التطبيق', en: 'Scope' },
        value: { ar: 'شامل — بصرية ومكانية ورقمية', en: 'Holistic — Spatial, Print & Digital' },
      },
    ],
  },
  {
    slug: 'lumina-parfums',
    number: '02',
    refCode: 'SM-LP25',
    title: {
      ar: 'عطور لومينا — الفخامة المعاصرة',
      en: 'Lumina Parfums — Haute Parfumerie',
    },
    subtitle: {
      ar: 'تصميم العبوات، التوجيه الفني وحملة الإطلاق التجاري',
      en: 'Packaging Architecture, Art Direction & Commercial Campaign',
    },
    category: {
      ar: 'تصميم العبوات والتوجيه الفني التجاري',
      en: 'Packaging & Commercial Art Direction',
    },
    locationTag: {
      ar: 'أبوظبي · باريس',
      en: 'Abu Dhabi · Paris',
    },
    heroImage: luminaParfumsImg,
    imageAlt: {
      ar: 'زجاجة عطر فاخرة لعلامة لومينا داخل صندوق مخملي كحلي بإضاءة استوديو متقنة وتفاصيل طباعية فضية',
      en: 'Luxury crystal fragrance flacon for Lumina Parfums in a bespoke velvet presentation box with precision silver foil typography',
    },
    shortDescription: {
      ar: 'إعادة ابتكار تجربة الفخامة لعطور النخبة من خلال تصميم هيكلي للعبوات وتوجيه فني سينمائي يبرز نقاء الكريستال ورصانة التفاصيل.',
      en: 'Reimagining luxury fragrance packaging and art direction with crystal flacon geometry, bespoke velvet presentation boxes, and quiet luxury editorial styling.',
    },
    overview: {
      ar: 'تم تطوير مشروع "عطور لومينا" كنموذج ريادي لصناعة العطور الفاخرة المنطلقة من منطقة الخليج نحو الأسواق العالمية. يشمل المشروع التصميم الهيكلي ثلاثي الأبعاد للزجاجة، تصميم صندوق العرض المخملي الفاخر، إلى جانب حملة تصوير تجارية عالية الدقة تم توظيفها عبر نقاط البيع والمنصات الرقمية.',
      en: 'Lumina Parfums serves as a flagship case study in high-end GCC fragrance branding positioned for discerning global boutiques. The scope unified 3D bottle structure, tactile presentation box design, and precision studio still-life photography executed with editorial restraint.',
    },
    objective: {
      ar: 'صياغة تموضع بصري يستهدف سوق العطور النخبوية، وتحويل العبوة إلى تحفة فنية قابلة للاقتناء تعبر عن الأصالة الخليجية بروح عالمية معاصرة.',
      en: 'Carve out an elevated niche in high-end niche perfumery, transforming physical packaging into a sculptural collectible that balances regional olfactory mastery with international aesthetic poise.',
    },
    audience: {
      ar: 'مقتنو العطور النادرة، عملاء المتاجر الفاخرة متعددة الأقسام، وعشاق المنتجات الحرفية ذات التصميم الهندسي المتقن.',
      en: 'Connoisseurs of artisanal niche perfumery, luxury boutique clientele, and design purists who appreciate tactile minimalism.',
    },
    creativeStrategy: {
      ar: 'اعتمد التوجيه الفني على تباين قوي بين أسطح الزجاج الكريستالي المصقول والمخمل الكحلي الليلي غير اللامع. تم استخدام رقائق الفضة المحفورة بدقة للعلامات النصية، مع إضاءة حواف سيان خافتة تمنح المنتج هالة أثيرية فخمة.',
      en: 'The art direction hinges on high tactile contrast: faceted polished crystal against matte midnight-blue velvet. Embossed metallic foil letterforms catch angled light, framed by delicate cyan rim illumination that imparts quiet cosmic gravity.',
    },
    disciplines: {
      ar: [
        'تصميم وتطوير العبوات الهيكلية',
        'التوجيه الفني والتصوير التجاري',
        'اختيار الخامات والتوريد المادي',
        'تصميم هوية المنتج والخطوط',
        'حملة الإعلانات الموجهة للعلامات الفاخرة',
      ],
      en: [
        'Structural Packaging Design & Prototyping',
        'Commercial Still-Life Photography & Art Direction',
        'Tactile Material Curation & Foil Finishes',
        'Product Nomenclature & Typographic System',
        'Luxury Retail & Social Launch Creative',
      ],
    },
    deliverables: {
      ar: [
        'المخططات الهندسية ثلاثية الأبعاد للزجاجة والغطاء',
        'عينات الإنتاج ومواصفات صناديق العرض المخملية',
        'مكتبة صور فوتوغرافية تجارية عالية الدقة للكتالوجات والإعلانات',
        'دليل معايير العرض على منصات المتاجر الكبرى',
        'قوالب الحملة الإعلانية الرقمية متعددة الأبعاد',
      ],
      en: [
        'Production-ready 3D CAD Specifications for Bottle & Cap',
        'Presentation Box Dielines & Velvet Substrate Standards',
        'Commercial Photographic Asset Suite for Print & Lookbook',
        'Department Store Retail Visual Merchandising Manual',
        'Omnichannel Launch Creative Pack for Digital Platforms',
      ],
    },
    metadata: [
      {
        label: { ar: 'نوع العمل', en: 'Project Type' },
        value: { ar: 'دراسة حالة استوديو', en: 'Studio Portfolio Case Study' },
      },
      {
        label: { ar: 'القطاع', en: 'Sector' },
        value: { ar: 'العطور الفاخرة والمنتجات الراقية', en: 'Luxury Goods & Haute Parfumerie' },
      },
      {
        label: { ar: 'الخدمات المقدمة', en: 'Core Services' },
        value: { ar: 'تصميم العبوات · التوجيه الفني · الإنتاج الإبداعي', en: 'Packaging Architecture · Art Direction · Production' },
      },
      {
        label: { ar: 'المخرجات', en: 'Primary Output' },
        value: { ar: 'عبوات مادية ومكتبة صور تجارية', en: 'Physical Packaging & Commercial Photography' },
      },
    ],
  },
  {
    slug: 'al-reem-luxury',
    number: '03',
    refCode: 'SM-AR25',
    title: {
      ar: 'الريم للمجوهرات الراقية — التجربة الرقمية',
      en: 'Al Reem Haute Joaillerie — Digital Flagship',
    },
    subtitle: {
      ar: 'تصميم المنصة الرقمية، التجارة الإلكترونية والسرد البصري',
      en: 'Flagship Digital Experience, E-Commerce & Interactive Storytelling',
    },
    category: {
      ar: 'التجارب الرقمية والتجارة الإلكترونية الفاخرة',
      en: 'Digital Experience & E-Commerce',
    },
    locationTag: {
      ar: 'جزيرة الريم، أبوظبي',
      en: 'Al Reem Island, Abu Dhabi',
    },
    heroImage: alReemImg,
    imageAlt: {
      ar: 'واجهة متجر إلكتروني فاخر معروضة على شاشة حاسوب وهاتف ذكي داخل استوديو بتصميم عصري وأضواء زرقاء أنيقة',
      en: 'Luxury responsive e-commerce web platform for Al Reem Haute Joaillerie displayed on sleek monitor and mobile inside an architectural studio',
    },
    shortDescription: {
      ar: 'بناء منصة رقمية متطورة لتجارة المجوهرات الفاخرة تجمع بين الأداء الفائق والتايبوغرافي ثنائي اللغة وتجربة تصفح غامرة تليق بالعلامة.',
      en: 'Engineering a responsive digital flagship for fine jewelry, pairing high performance with bilingual typographic precision and bespoke e-commerce storytelling.',
    },
    overview: {
      ar: 'تناول مشروع "الريم للمجوهرات الراقية" التحدي المتمثل في نقل فخامة المعارض الحصرية إلى الفضاء الرقمي. صممت ستيلار ميديا تجربة تجارة إلكترونية سلسة تعتمد على الوضع الليلي الداكن، عروض ثلاثية الأبعاد للقطع النادرة، وتدفق اقتناء خاص بالعملاء المميزين.',
      en: 'Al Reem Haute Joaillerie addresses the art of translating high jewelry salons into digital flagships. Stellar Media designed a dark-mode responsive e-commerce environment featuring micro-interactions, high-resolution piece showcases, and private concierge consultation workflows.',
    },
    objective: {
      ar: 'رفع معدلات التحويل والثقة الرقمية لدى المشترين من كبار الشخصيات، وتوفير واجهة تفاعلية سهلة الاستخدام تدعم العربية والإنجليزية بمستوى التميز نفسه.',
      en: 'Elevate digital transaction confidence among high-net-worth clients, providing an intuitive, instantaneous bilingual experience that mirrors in-salon personal advisory.',
    },
    audience: {
      ar: 'نخبة مقتني المجوهرات الراقية، هواة التصاميم الحصرية في دول الخليج، والعملاء الباحثين عن قطع استثمارية نادرة.',
      en: 'Private high-jewelry collectors, luxury fashion patrons in the GCC, and clients seeking bespoke bespoke commission consultations.',
    },
    creativeStrategy: {
      ar: 'بنيت الواجهات على خلفية كحلية عميقة مع تباينات هادئة تبرز بريق الأحجار الكريمة والمعادن الثمينة. تم تطوير نظام حركي خفيف يضفي سلاسة عند التصفح دون إبطاء أوقات التحميل أو تشتيت انتباه الزائر.',
      en: 'Interfaces are anchored in deep midnight backgrounds that allow diamond facets and precious stones to radiate natural brilliance. Restrained motion choreography ensures fluid page transitions while keeping load times blazingly fast.',
    },
    disciplines: {
      ar: [
        'تصميم تجربة وواجهة المستخدم (UI/UX)',
        'هندسة الواجهات الأمامية ثنائية اللغة',
        'تخطيط مسارات التحويل وتجربة الاقتناء',
        'تصميم لوحات وتطبيقات التفاعل الرقمي',
        'تحسين سرعة التصفح ومعايير الأمان الفاخر',
      ],
      en: [
        'Bilingual UI/UX Architecture & Prototyping',
        'Modern Responsive Frontend Engineering',
        'Private VIP Checkout & Concierge Flows',
        'Interactive Product Lookbook Design',
        'Performance Profiling & WCAG Accessibility',
      ],
    },
    deliverables: {
      ar: [
        'نظام تصميم رقمي متكامل ومكتبة مكونات برمجية (Design System)',
        'نموذج أولي تفاعلي كامل ثنائي اللغة لجميع مقاسات الشاشات',
        'واجهات تدفق الطلبات وحجز الاستشارات الشخصية',
        'قوالب البريد الإلكتروني للمراسلات الحصرية',
        'دليل توجيهات تجربة المستخدم للمطورين والمحررين',
      ],
      en: [
        'Complete Design System Token Library in Figma & Code',
        'Fully Responsive Bilingual Web Experience Prototypes',
        'Private Appointment Booking & Concierge Purchasing Flow',
        'Executive Email Communication Templates',
        'Comprehensive UI/UX Governance & Interaction Guide',
      ],
    },
    metadata: [
      {
        label: { ar: 'نوع العمل', en: 'Project Type' },
        value: { ar: 'دراسة حالة استوديو', en: 'Studio Portfolio Case Study' },
      },
      {
        label: { ar: 'القطاع', en: 'Sector' },
        value: { ar: 'المجوهرات الراقية والتجارة الرقمية', en: 'Fine Jewelry & Luxury E-Commerce' },
      },
      {
        label: { ar: 'الخدمات المقدمة', en: 'Core Services' },
        value: { ar: 'التجارب الرقمية · واجهة المستخدم · تطوير الويب', en: 'Digital Experience · UI/UX · Web Engineering' },
      },
      {
        label: { ar: 'التوافق', en: 'Compatibility' },
        value: { ar: 'متوافق تماماً مع الهواتف والشاشات الكبيرة', en: 'Native Bilingual · Responsive Across All Devices' },
      },
    ],
  },
  {
    slug: 'digital-culture',
    number: '04',
    refCode: 'SM-DC25',
    title: {
      ar: 'الثقافة الرقمية — معرض تفاعلي ومنصة تقييم',
      en: 'Digital Culture — Interactive Curatorial Platform',
    },
    subtitle: {
      ar: 'تصميم المنصة الغامرة، الفنون التوليدية وأنظمة التفاعل',
      en: 'Immersive Platform Design, Generative Arts & Interactive UX',
    },
    category: {
      ar: 'المعارض التفاعلية وتصميم المنصات الرقمية',
      en: 'Interactive Exhibition & Curatorial Platform',
    },
    locationTag: {
      ar: 'منطقة السعديات الثقافية، أبوظبي',
      en: 'Saadiyat Cultural District, Abu Dhabi',
    },
    heroImage: digitalCultureImg,
    imageAlt: {
      ar: 'زائر في معرض فني معاصر أمام شاشة جدارية عملاقة تعرض أعمالاً فنية بصرية وتوليدية زرقاء مستوحاة من الخط العربي',
      en: 'Curator standing before a monumental gallery wall displaying deep cosmic blue generative art and digital typography',
    },
    shortDescription: {
      ar: 'منصة رقمية ومعرض تفاعلي يستكشف تقاطع الفنون العربية المعاصرة مع الخوارزميات التوليدية في بيئة رقمية هادئة وغامرة.',
      en: 'An interactive curatorial platform exploring the intersection of modern Arabic calligraphy and algorithmic generative art in a serene digital environment.',
    },
    overview: {
      ar: 'يقدم مشروع "الثقافة الرقمية" تصوراً إبداعياً للمتاحف والمؤسسات الثقافية المعاصرة في أبوظبي. يدمج المشروع بين أرشيف التراث الفني والتقنيات التفاعلية الحديثة لتمكين الجمهور من تصفح المعارض الافتراضية والتفاعل مع الأعمال الفنية عبر واجهات رقمية مبتكرة.',
      en: 'Digital Culture establishes an institutional curatorial archetype for contemporary museums in Abu Dhabi. The platform bridges heritage archives with computational aesthetics, allowing global audiences to experience virtual gallery pavilions and generative Arabic calligraphic installations.',
    },
    objective: {
      ar: 'تمكين المؤسسات الفنية من تقديم معارضها بأسلوب تفاعلي يتجاوز الكتالوجات التقليدية، وبناء جسر حي بين الإبداع المحلي والمنصات الثقافية العالمية.',
      en: 'Empower cultural institutions to present curatorial narratives beyond conventional static catalogues, creating an active bridge between regional artistic craft and global creative audiences.',
    },
    audience: {
      ar: 'القيمون الفنيون، رواد المعارض الثقافية، مجتمعات الفنون التوليدية، والجمهور الباحث عن تجارب فنية رقمية ثرية.',
      en: 'Museum curators, contemporary art patrons, generative media artists, and cultural enthusiasts worldwide.',
    },
    creativeStrategy: {
      ar: 'ارتكز التوجه الإبداعي على لغة بصرية تحريرية توازن بين المساحات السوداء العميقة، والشبكات التيبوغرافية المتقنة، والجسيمات الضوئية المتناسقة. تتيح الواجهة التفاعل السلس عبر المؤشر أو اللمس دون أي تعقيد.',
      en: 'The creative direction is anchored in editorial spatial layouts balancing void space, disciplined typographic grids, and kinetic particles. The user interface allows effortless exploration via touch or cursor without cognitive friction.',
    },
    disciplines: {
      ar: [
        'تصميم المنصات الرقمية التفاعلية',
        'الفن التوليدي والخوارزميات البصرية',
        'التايبوغرافي الرقمي والخط العربي المعاصر',
        'تصميم تجارب المعارض الافتراضية',
        'هندسة المحتوى والسرد الثقافي',
      ],
      en: [
        'Interactive Curatorial Platform Design',
        'Generative Visual Systems & Algorithms',
        'Contemporary Digital Arabic Typography',
        'Virtual Exhibition Experience Journey',
        'Editorial Narrative & Content Architecture',
      ],
    },
    deliverables: {
      ar: [
        'نموذج تفاعلي للمنصة والمعرض الرقمي ثلاثي الأبعاد',
        'نظام بصري متكامل للمعارض الافتراضية والمطبوعات المصاحبة',
        'دليل معايير العرض الرقمي والشاشات التفاعلية',
        'قوالب التواصل الإعلامي ومواد الترويج للمعارض',
        'مكتبة الأصول البصرية عالية الدقة للتغطيات الصحفية',
      ],
      en: [
        'Interactive 3D Virtual Gallery Platform Prototype',
        'Unified Visual Identity Suite for Digital Exhibits & Catalogues',
        'Curatorial Display & Spatial Interactive Screen Guidelines',
        'Institutional Press & Media Campaign Kits',
        'High-Resolution Editorial Asset Repository',
      ],
    },
    metadata: [
      {
        label: { ar: 'نوع العمل', en: 'Project Type' },
        value: { ar: 'دراسة حالة استوديو', en: 'Studio Portfolio Case Study' },
      },
      {
        label: { ar: 'القطاع', en: 'Sector' },
        value: { ar: 'الفنون والمتاحف الثقافية', en: 'Contemporary Arts & Cultural Institutions' },
      },
      {
        label: { ar: 'الخدمات المقدمة', en: 'Core Services' },
        value: { ar: 'المنصات التفاعلية · التوجيه الفني · السرد الثقافي', en: 'Interactive Platforms · Art Direction · Cultural Narrative' },
      },
      {
        label: { ar: 'البيئة المستهدفة', en: 'Deployment' },
        value: { ar: 'المعارض الحية والمنصات السحابية', en: 'Physical Gallery Screens & Global Web' },
      },
    ],
  },
];
