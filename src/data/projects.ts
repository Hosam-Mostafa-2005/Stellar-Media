import futureMobilityAsset from '../assets/Autonomous Car Over a Neon Skyline.png';

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
  imageAlt?: {
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
  strategicRationale: {
    ar: string;
    en: string;
  };
  creativeExecution: {
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
  stats: Array<{
    label: { ar: string; en: string };
    value: string;
  }>;
}

export const projectsData: ProjectData[] = [
  {
    slug: 'cultural-destination',
    number: '01',
    refCode: 'REF: SM-CD24',
    title: {
      ar: 'وجهة ثقافية — قصر النور',
      en: 'Cultural Destination — Qasr Al-Nour',
    },
    subtitle: {
      ar: 'العمارة & الهوية · هوية بصرية وتجربة مكانية استثنائية',
      en: 'Architecture & Identity · Spatial Experience & Celestial Systems',
    },
    category: {
      ar: 'العمارة والتوجيه المكاني',
      en: 'Spatial Design & Architecture',
    },
    locationTag: {
      ar: 'المنطقة الغربية، إمارة أبوظبي',
      en: 'Western Desert, Abu Dhabi',
    },
    heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC_S4Kq9DmeDf4CBOO4Pajy5u4NvEYTpZNA_G_D9FvLVIQveNc5YOL848IsQsfiO0gQ4DMxKq7qMeEGyypQT3NE6PnXN26HfrH6uz8_HEqGBar4gBNjDrJ_ieBUfw9QqhxPruRUrprah6bpbkZ0CBo9snxqb0LBBR1278fgicqN_nAdhcDcJGTntNnZyUBIN3Ptt80jW3s0k3QPOrpeeIwx6ufxVw07Y4a661u5OJyX',
    imageAlt: {
      ar: 'تصميم معماري تصوري لقصر النور ومرصد فلكي في صحراء أبوظبي',
      en: 'Conceptual architectural design for Qasr Al-Nour astronomical observatory in the Abu Dhabi desert',
    },
    shortDescription: {
      ar: 'مفهوم لوجهة ثقافية معاصرة تجمع بين العمارة والفن والتجارب المحلية ضمن هوية بصرية متكاملة، مستوحاة من مرصد فلكي صحراوي يقيس حركة النجوم ويعيد تقديم التراث المعماري بلغة المستقبل.',
      en: 'A contemporary cultural landmark concept synthesizing monumental desert architecture, astrophotography, and regional heritage into an ethereal brand world.',
    },
    overview: {
      ar: 'مشروع "قصر النور" هو دراسة تصميمية تصورية لمجمع ثقافي وفلكي يقع في صحراء أبوظبي الشاسعة. يستكشف المشروع كيف يمكن للعمارة المستدامة والخط العربي المعاصر أن يتفاعلا مع ضوء النجوم وسكون الليل لخلق تجربة تأملية فريدة من نوعها.',
      en: 'Qasr Al-Nour is an exploratory conceptual monograph for a monumental astronomical and cultural observatory in the desert expanse of Abu Dhabi. It investigates how sustainable architectural massing and contemporary Arabic typography converge with celestial lights to craft an unhurried, contemplative sanctuary.',
    },
    strategicRationale: {
      ar: 'استهدف البحث تقديم نموذج للهوية المؤسسية الثقافية يبتعد عن الأنماط السياحية التقليدية، ويُبرز عمق العلاقة التاريخية بين أهل الجزيرة العربية وعلم الفلك ورصد الكواكب، مع تقديم هذا الإرث بأدوات التصميم المعاصر فائق الدقة.',
      en: 'The strategic mandate was to establish a benchmark for cultural institutional identity that shuns touristic superficiality, anchoring instead in the Arabian Peninsula\'s profound astronomical heritage and astronomical navigation legacy expressed in disciplined modern geometry.',
    },
    creativeExecution: {
      ar: 'تم تطوير لغة بصرية ترتكز على خطوط مدارية رفيعة وتدرجات السيان النيبولا، مدمجة مع خط عربي مخصص مستوحى من كتابات المرصد القديمة. شمل النظام الإرشادي علامات مكانية مدمجة بأحواض الماء العاكسة وأنظمة إضاءة تحافظ على سماء الليل نقية.',
      en: 'The visual execution features hairline orbital geometry and muted nebula cyan luminescence, paired with bespoke geometric Arabic typography. Spatial wayfinding incorporates water reflection channels and low-lux astronomical lighting ensuring zero light pollution.',
    },
    disciplines: {
      ar: ['توجيه مكاني وبيئي', 'أنظمة خطية عربية مخصصة', 'سينوغرافيا ضوئية', 'هندسة معمارية تصورية', 'تصميم تجربة الزائر'],
      en: ['Spatial & Environmental Wayfinding', 'Custom Arabic Typography System', 'Celestial Light Scenography', 'Conceptual Architecture', 'Visitor Experience Journey'],
    },
    deliverables: {
      ar: [
        'دليل معايير الهوية المكانية والعلامات الإرشادية',
        'مخططات التوزيع المعماري والتجربة الحسية',
        'نظام الإضاءة الفلكية والألوان التفاعلية',
      ],
      en: [
        'Spatial Branding & Environmental Signage Manual',
        'Sensory Visitor Experience & Architectural Flow Blueprint',
        'Dark-Sky Compliant Architectural Lighting System',
      ],
    },
    stats: [
      { label: { ar: 'مساحة المجمع المقترحة', en: 'Footprint Area' }, value: '45,000 m²' },
      { label: { ar: 'التحكم بالتلوث الضوئي', en: 'Dark-Sky Compliance' }, value: '100%' },
      { label: { ar: 'المسار الزمني للدراسة', en: 'Exploration Timeline' }, value: '6 Months' },
    ],
  },
  {
    slug: 'future-mobility',
    number: '02',
    refCode: 'REF: SM-FM25',
    title: {
      ar: 'حركة نحو المستقبل',
      en: 'Future Mobility Systems',
    },
    subtitle: {
      ar: 'التقنية & التنقل · واجهات تنقل ذاتي وهوية مستقبلية متكاملة',
      en: 'Autonomy & Speed · Autonomous Cockpit & Kinetic Brand Identity',
    },
    category: {
      ar: 'التنقل الذكي والتجارب الرقمية',
      en: 'Smart Mobility & UI Systems',
    },
    locationTag: {
      ar: 'جزيرة ياس وسوق أبوظبي العالمي',
      en: 'Yas Island & ADGM, Abu Dhabi',
    },
    heroImage: futureMobilityAsset,
    imageAlt: {
      ar: 'مركبة ذاتية القيادة متطورة تحلق فوق أفق مدينة نيون مستقبلي في أبوظبي',
      en: 'Autonomous concept vehicle navigating over a futuristic neon skyline in Abu Dhabi',
    },
    shortDescription: {
      ar: 'مشروع تصوري لمنظومة تنقل ذاتي ذكية في أبوظبي، يربط بين التصميم الصناعي للمركبات وواجهات القيادة التفاعلية وهوية العلامة الحركية.',
      en: 'A visionary concept exploring autonomous mobility networks, integrating aerodynamic kinetic identity, cockpit interfaces, and telemetry ergonomics.',
    },
    overview: {
      ar: 'يستشرف مشروع "حركة نحو المستقبل" طبيعة العلاقة بين الإنسان ووسائل النقل الذكية في مدن الغد. يتناول المشروع الهوية البصرية الحركية للمركبات الكهربائية ذاتية القيادة، إلى جانب واجهات التفاعل الرقمية في المقصورة الداخلية وتطبيقات الحجز اللحظي.',
      en: 'Future Mobility explores the human-vehicle relationship within tomorrow\'s smart capitals. The monograph models a kinetic visual identity for autonomous electric pods, paired with in-cabin telemetry displays, passenger interfaces, and dispatch coordination.',
    },
    strategicRationale: {
      ar: 'تأكيد جاهزية أبوظبي كمركز عالمي لاحتضان تقنيات الذكاء الاصطناعي والتنقل المتقدم، وتوفير لغة تصميمية تحول التقنية المعقدة إلى تجربة هادئة، آمنة، وممتعة تركز على راحة الراكب.',
      en: 'Demonstrating Abu Dhabi\'s position as an incubator for next-generation transport tech, crafting a design dialect that transforms complex telemetry into quiet, intuitive, and reassuring reassurance.',
    },
    creativeExecution: {
      ar: 'استخدام ألوان الأزرق الكهربائي مع لمسات الكروم الداكن والخطوط الانسيابية المعبرة عن السرعة والديناميكية الهوائية. صُممت الواجهات الرأسية داخل المقصورة لعرض معلومات المسار وحالة الطقس وجودة الهواء بأسلوب تباين عالٍ مريح للعينين.',
      en: 'Engineered with electric blue luminescence against deep void chassis surfaces. The digital cockpit UI presents trajectory data, atmospheric conditions, and journey milestones with dark-adapted contrast.',
    },
    disciplines: {
      ar: ['تصميم واجهات المركبات (HUD/Cockpit)', 'الهوية الحركية للعلامات', 'تطبيقات الأجهزة الذكية', 'هندسة الأنظمة الصوتية التفاعلية'],
      en: ['Cockpit HUD & Telemetry UI', 'Kinetic Brand Identity', 'Passenger Mobile Applications', 'Acoustic Sound Branding'],
    },
    deliverables: {
      ar: [
        'نظام الواجهات الرقمية داخل المقصورة (Figma Prototype)',
        'حزمة الهوية الحركية ثلاثية الأبعاد للمركبة',
        'ميثاق تجربة الراكب ومعايير التفاعل اللمسي والصوتي',
      ],
      en: [
        'Complete Interactive Cockpit UI Architecture',
        '3D Kinetic Motion Branding & Asset Suite',
        'Multisensory Passenger Interaction Guideline',
      ],
    },
    stats: [
      { label: { ar: 'معدل استجابة الواجهة', en: 'Interface Latency' }, value: '< 12ms' },
      { label: { ar: 'مستوى التفاعل الذاتي', en: 'Autonomy Level' }, value: 'Level 5' },
      { label: { ar: 'التحكم الإشاري واللمسي', en: 'Gestural Controls' }, value: '3D LiDAR' },
    ],
  },
  {
    slug: 'digital-culture',
    number: '03',
    refCode: 'REF: SM-DC25',
    title: {
      ar: 'الثقافة الرقمية وفنون المستقبل',
      en: 'Digital Culture & Future Arts',
    },
    subtitle: {
      ar: 'الفن التوليدي & الويب · منصة تفاعلية تجمع بين الفن العربي والتقنيات التوليدية',
      en: 'Generative Media & Web · Interactive Platform Merging Arabic Calligraphy with Computational Art',
    },
    category: {
      ar: 'الفنون التوليدية والمنصات الرقمية',
      en: 'Generative Arts & Digital Platforms',
    },
    locationTag: {
      ar: 'منطقة السعديات الثقافية، أبوظبي',
      en: 'Saadiyat Cultural District, Abu Dhabi',
    },
    heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB1zwA0qbn6QCEXLbFD0xidm9-fMqBaQNXEfTTaVNpcnZtfyIhSGEjuAh3pBeJVPXNtgk29-qv3_XfJtfGPLySBxQ8cnNFcemfj8z7MzuFsenalbUUGg747W_PAJXa7uZ6sCKOTs-3743PsX3VVrgXwrGbgC8klbG9q0XvUI0oAgX0Lu-CHvRdrwFTh_aPyftGmGaC1RFOX_i11jiiRIQogMPjPA15qZzMc3xQB7rWa',
    imageAlt: {
      ar: 'منصة رقمية وفنون توليدية غامرة تمزج الخط العربي المعاصر بالحوسبة الإبداعية',
      en: 'Immersive digital platform and generative art synthesizing contemporary Arabic calligraphy with computational creativity',
    },
    shortDescription: {
      ar: 'مفهوم لمنصة رقمية ومعرض تفاعلي يتيح للفنانين المعاصرين استخدام خوارزميات الفن التوليدي لإعادة استكشاف الزخارف والخطوط العربية في فضاء رقمي غامر.',
      en: 'A digital cultural institution concept exploring algorithmic Arabic calligraphy, kinetic generative patterns, and immersive browser-based spatial exhibits.',
    },
    overview: {
      ar: 'يستكشف مشروع "الثقافة الرقمية" تقاطع التراث الثقافي العريق مع الحوسبة الإبداعية. يقدم المشروع تصميماً لمنصة ويب ثلاثية الأبعاد تتيح للمستخدمين في كافة أنحاء العالم استكشاف معارض فنية افتراضية وتوليد منحوتات خطية بالذكاء الاصطناعي في بيئة تفاعلية هادئة.',
      en: 'Digital Culture investigates the synthesis of ancient geometric calligraphy with computational art. The monograph establishes a 3D browser-based platform where global audiences explore virtual gallery pavilions, interact with generative Arabic script, and curate digital archives.',
    },
    strategicRationale: {
      ar: 'تعزيز مكانة أبوظبي كعاصمة للابتكار الفني والتقني في المنطقة، وإبراز كيف يمكن للتكنولوجيا المتقدمة أن تعيد إحياء الفنون الإسلامية والخط العربي دون التخلي عن رصانتها وأصالتها.',
      en: 'Establishing Abu Dhabi\'s cultural preeminence in computational creativity, proving that high technology can reinvigorate classical Islamic geometric art without diluting its solemn spiritual weight.',
    },
    creativeExecution: {
      ar: 'تصميم تجربة ويب تفاعلية تستخدم إضاءة السطوع الكوني والخطوط المدارية الدقيقة. تم بناء الواجهات بأسلوب تحريري يعتمد على اللون الكحلي الليلي والسيان المشع، مع محرك رسومي خفيف يستجيب لحركة المؤشر والصوت.',
      en: 'Engineered as an editorial digital space utilizing astronomical midnight blue and luminous nebula highlights. Interfaces feature generative canvas shaders responding in real-time to cursor momentum and ambient sound.',
    },
    disciplines: {
      ar: ['تصميم المنصات الرقمية الغامرة', 'الفن التوليدي والخوارزميات', 'الخط العربي الرقمي المعاصر', 'أنظمة التفاعل ثلاثية الأبعاد للويب'],
      en: ['Immersive Web Platform Architecture', 'Generative Algorithms & Shaders', 'Computational Arabic Typography', 'WebGL Spatial Interactions'],
    },
    deliverables: {
      ar: [
        'نموذج تفاعلي للمنصة ثلاثية الأبعاد (Web Prototype)',
        'محرك توليد الأنماط الهندسية والخطية المستمر',
        'دليل الهوية الرقمية للمعارض الفنية الافتراضية',
      ],
      en: [
        'Interactive 3D Web Pavilion Prototype',
        'Custom Procedural Pattern Generation Engine',
        'Virtual Exhibition Identity & Editorial Curation System',
      ],
    },
    stats: [
      { label: { ar: 'معدل الإطارات في الثانية', en: 'Render Performance' }, value: '60 FPS' },
      { label: { ar: 'تطابق معايير الخط العربي', en: 'Calligraphic Purity' }, value: '100%' },
      { label: { ar: 'توافق المنصات والأجهزة', en: 'Cross-Device Reach' }, value: 'Universal' },
    ],
  },
];
