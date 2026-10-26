export type Language = 'ar' | 'en';

export interface Translations {
  nav: {
    home: string;
    about: string;
    services: string;
    work: string;
    contact: string;
    contactCta: string;
    conceptNotice: string;
  };
  common: {
    viewAll: string;
    learnMore: string;
    explore: string;
    exploreService: string;
    exploreProject: string;
    backToServices: string;
    backToWork: string;
    getInTouch: string;
    discussProject: string;
    conceptProject: string;
    abuDhabi: string;
    rightsReserved: string;
    officialCapabilities: string;
    agencyPrinciple: string;
    coordinates: string;
    statusActive: string;
  };
  home: {
    heroEyebrow: string;
    heroHeadline: string;
    heroSub: string;
    primaryCta: string;
    secondaryCta: string;
    trustText: string;
    partnerText: string;
    aboutTag: string;
    aboutHeadline: string;
    aboutBody: string;
    aboutSecondary: string;
    quoteTitle: string;
    quoteText: string;
    servicesTag: string;
    servicesTitle: string;
    servicesSub: string;
    workTag: string;
    workTitle: string;
    workSub: string;
    approachTag: string;
    approachTitle: string;
    approachSub: string;
    contactTag: string;
    contactTitle: string;
    contactSub: string;
  };
  about: {
    heroEyebrow: string;
    heroTitle: string;
    heroSub: string;
    heroCta: string;
    perspectiveTag: string;
    perspectiveTitle: string;
    perspectiveBody1: string;
    perspectiveBody2: string;
    metric1Val: string;
    metric1Label: string;
    metric2Val: string;
    metric2Label: string;
    corePillarsTag: string;
    corePillarsTitle: string;
    p1Title: string;
    p1Sub: string;
    p1Desc: string;
    p2Title: string;
    p2Sub: string;
    p2Desc: string;
    p3Title: string;
    p3Sub: string;
    p3Desc: string;
    statement: string;
    statementSub: string;
    statementAuthor: string;
    methodologyTag: string;
    methodologyTitle: string;
    methodologySub: string;
    s1Title: string;
    s1Sub: string;
    s1Desc: string;
    s2Title: string;
    s2Sub: string;
    s2Desc: string;
    s3Title: string;
    s3Sub: string;
    s3Desc: string;
    s4Title: string;
    s4Sub: string;
    s4Desc: string;
    bridgeTag: string;
    bridgeTitle: string;
    bridgeSub: string;
    bridgeCta: string;
  };
  services: {
    heroEyebrow: string;
    heroTitle: string;
    heroTitleHighlight: string;
    heroSub: string;
    capabilitiesTitle: string;
    capabilitiesDesc: string;
    keyDeliverables: string;
    strategicValue: string;
    processTitle: string;
    inquireService: string;
  };
  work: {
    heroEyebrow: string;
    heroTitle: string;
    heroSub: string;
    conceptArchiveTitle: string;
    conceptArchiveDesc: string;
    chapterTag: string;
    chapterTitle: string;
    chapterSub: string;
    disclaimerTitle: string;
    disclaimerBody: string;
    projectOverview: string;
    strategicContext: string;
    creativeExecution: string;
    keyDisciplines: string;
  };
  contact: {
    heroEyebrow: string;
    heroTitle: string;
    heroSub1: string;
    heroSub2: string;
    inquiryTitle: string;
    inquirySub: string;
    privacyCardTitle: string;
    privacyCardBody: string;
    slaItem1: string;
    slaItem2: string;
    hubTitle: string;
    hubDesc: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    companyLabel: string;
    companyPlaceholder: string;
    serviceLabel: string;
    servicePlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitBtn: string;
    submittingBtn: string;
    successTitle: string;
    successMessage: string;
    successNote: string;
    errorTitle: string;
    errorMessage: string;
    retryBtn: string;
    newInquiryBtn: string;
    noticeTitle: string;
    noticeDesc: string;
    errors: {
      nameRequired: string;
      nameMin: string;
      emailRequired: string;
      emailInvalid: string;
      messageRequired: string;
      messageMin: string;
    };
  };
  notFound: {
    tag: string;
    title: string;
    description: string;
    backHome: string;
    exploreServices: string;
  };
}

export const translations: Record<Language, Translations> = {
  ar: {
    nav: {
      home: 'الرئيسية',
      about: 'عن ستيلار',
      services: 'الخدمات',
      work: 'أعمال مختارة',
      contact: 'تواصل معنا',
      contactCta: 'ابدأ مشروعك',
      conceptNotice: 'مشاريع تصورية',
    },
    common: {
      viewAll: 'عرض الكل',
      learnMore: 'اعرف المزيد',
      explore: 'استكشف',
      exploreService: 'استكشف الخدمة',
      exploreProject: 'استكشف المشروع',
      backToServices: 'العودة لجميع الخدمات',
      backToWork: 'العودة للأعمال المختارة',
      getInTouch: 'تواصل معنا',
      discussProject: 'لنتحدث عن فكرتك',
      conceptProject: 'مشروع تصوري',
      abuDhabi: 'أبوظبي، الإمارات العربية المتحدة',
      rightsReserved: 'جميع الحقوق محفوظة لستيلار ميديا.',
      officialCapabilities: 'مجالات الاختصاص المعتمدة',
      agencyPrinciple: 'مبدأ الوكالة',
      coordinates: '24.4539° N, 54.3773° E · أبوظبي',
      statusActive: 'نشط ومتاح للمشاريع الجديدة',
    },
    home: {
      heroEyebrow: 'استراتيجية · إبداع · تجارب رقمية',
      heroHeadline: 'أفكار تتجاوز حدود الممكن.',
      heroSub: 'نحوّل الرؤى الطموحة إلى استراتيجيات وتجارب إبداعية تفتح آفاقًا جديدة.',
      primaryCta: 'اكتشف خدماتنا',
      secondaryCta: 'تواصل معنا',
      trustText: 'مقرّنا أبوظبي، الإمارات العربية المتحدة',
      partnerText: 'شريك إبداعي واستراتيجي متكامل للعلامات الطموحة',
      aboutTag: 'عن الوكالة',
      aboutHeadline: 'نمنح الأفكار الطموحة مساحة لتتألّق.',
      aboutBody: 'وكالة ستيلار ميديا هي وكالة تسويق وإبداع متخصصة تتخذ من أبوظبي مقراً لها. نعمل عند تقاطع التفكير الاستراتيجي المدروس والإنتاج الإبداعي المعاصر، لنصمم تجارب وهوية بصرية تلهم وتترك أثراً حقيقياً ومستداماً.',
      aboutSecondary: 'نؤمن بأن كل علامة تمتلك مداراً فريداً، ومهمتنا هي رسم هذا المسار بوضوح استثنائي ودقة فنية تعكس مكانتها وطموحاتها.',
      quoteTitle: 'فلسفة العمل',
      quoteText: '«الإبداع ليس مجرد أن تكون مختلفًا، بل أن تمنح الاختلاف معنى.»',
      servicesTag: 'مجالات الاختصاص',
      servicesTitle: 'الخدمات الإبداعية والاستراتيجية',
      servicesSub: 'حلول متكاملة تُصاغ بعناية لتعزيز الحضور وبناء تأثير ملموس لعلامتك.',
      workTag: 'معرض الأعمال',
      workTitle: 'مفاهيم تصورية من مختبر التصميم',
      workSub: 'ثلاث رؤى إبداعية مستلهمة من طموحات المنطقة، تمزج بين الاستراتيجية والعمارة والتجارب الرقمية.',
      approachTag: 'منهجيتنا',
      approachTitle: 'من الفكرة إلى الأثر',
      approachSub: 'خطوات متسلسلة ودقيقة تمزج بين الاستكشاف العميق والإنتاج عالي المهارة لتحقيق النتائج المرجوة.',
      contactTag: 'الخطوة التالية',
      contactTitle: 'كل فكرة طموحة تبدأ بحوار.',
      contactSub: 'سواء كنت تضع حجر الأساس لمشروع جديد أو ترغب في إعادة صياغة حضور علامتك، يسعدنا التفكير معك.',
    },
    about: {
      heroEyebrow: 'عن ستيلار ميديا // ABOUT US',
      heroTitle: 'نمنح الأفكار الطموحة مساحة لتتألّق.',
      heroSub: 'نؤمن أن كل فكرة استثنائية تستحق استراتيجية واضحة، ورؤية إبداعية، وتجربة تترك أثرًا.',
      heroCta: 'اكتشف ما نؤمن به',
      perspectiveTag: 'المنظور الاستراتيجي // STRATEGIC PERSPECTIVE',
      perspectiveTitle: 'ما وراء كل فكرة، هناك رؤية.',
      perspectiveBody1: 'ننظر إلى العلامات التجارية باعتبارها أكثر من مجرد هوية بصرية أو رسالة تسويقية. إنها أفكار تحتاج إلى فهم، واستراتيجية تمنحها اتجاهًا، وإبداع يحوّلها إلى تجارب يمكن للناس أن يتفاعلوا معها.',
      perspectiveBody2: 'من قلب العاصمة أبوظبي، نصمم سرديات تلتقي فيها الأصالة الثقافية بأحدث مفاهيم الإبداع العالمي، متجاوزين الزخارف المؤقتة نحو قيمة راسخة تُخلّد.',
      metric1Val: '100%',
      metric1Label: 'توجيه استراتيجي دقيق',
      metric2Val: '360°',
      metric2Label: 'تكامل إعلامي وإبداعي',
      corePillarsTag: 'فلسفة العمل // CORE PILLARS',
      corePillarsTitle: 'ثلاثة مبادئ توجّه كل ما نصنعه.',
      p1Title: 'الوضوح قبل الضجيج',
      p1Sub: 'CLARITY OVER NOISE',
      p1Desc: 'نبدأ بفهم الفكرة والهدف، ثم نصنع حلولًا إبداعية لها معنى واتجاه، متجنبين المبالغات البصرية التي لا طائل منها.',
      p2Title: 'الاستراتيجية والإبداع معًا',
      p2Sub: 'STRATEGY MEETS CREATIVITY',
      p2Desc: 'نربط التفكير الاستراتيجي بالخيال الإبداعي لنحوّل الأفكار إلى تجارب متماسكة، موثوقة، ومحكمة التنفيذ تجاريًا وإنسانيًا.',
      p3Title: 'الأثر أهم من المظهر',
      p3Sub: 'IMPACT BEYOND APPEARANCE',
      p3Desc: 'نهتم بأن تخدم كل تفصيلة هدفًا واضحًا، لا أن تكون جميلة فحسب. نقيس النجاح بمدى رسوخ الهوية وتأثيرها الملموس.',
      statement: '«الإبداع ليس مجرد أن تكون مختلفًا، بل أن تمنح الاختلاف معنى.»',
      statementSub: 'نبحث دائمًا عن الفكرة التي تستحق أن تُروى، والطريقة التي تجعلها واضحة، والتجربة التي تمنحها فرصة للتألّق.',
      statementAuthor: 'رؤية ستيلار ميديا • أبوظبي',
      methodologyTag: 'منهجية التفكير // METHODOLOGY',
      methodologyTitle: 'من الفكرة إلى الأثر.',
      methodologySub: 'خطوات متسلسلة ودقيقة تمزج بين الاستكشاف العميق والإنتاج عالي المهارة لتحقيق النتائج المرجوة.',
      s1Title: 'اكتشف',
      s1Sub: 'DISCOVER',
      s1Desc: 'نفهم الفكرة والسياق والهدف، ونغوص في طبيعة الجمهور المستهدف لخلق قاعدة صلبة.',
      s2Title: 'حدّد',
      s2Sub: 'DEFINE',
      s2Desc: 'نرسم الاتجاه والاستراتيجية المناسبة، ونحدد القنوات والرسائل الأساسية بوضوح تام.',
      s3Title: 'ابتكر',
      s3Sub: 'CREATE',
      s3Desc: 'نحوّل الاستراتيجية إلى حلول وتجارب إبداعية، تدمج التصميم البصري بالإنتاج المبتكر.',
      s4Title: 'نفّذ',
      s4Sub: 'DELIVER',
      s4Desc: 'نصقل التفاصيل ونجهّز العمل للتقديم بأعلى معايير الإتقان لضمان التأثير المرجو.',
      bridgeTag: 'الخطوة القادمة // NEXT HORIZON',
      bridgeTitle: 'كل رؤية تحتاج إلى الأدوات المناسبة.',
      bridgeSub: 'اكتشف كيف نحوّل التفكير الاستراتيجي والإبداع إلى خدمات وتجارب متكاملة تُحدث فارقًا حقيقيًا لعلامتك.',
      bridgeCta: 'استكشف خدماتنا',
    },
    services: {
      heroEyebrow: 'خدماتنا // SERVICES',
      heroTitle: 'من الرؤية إلى التجربة،',
      heroTitleHighlight: 'نصنع ما يترك أثرًا.',
      heroSub: 'نجمع بين الاستراتيجية والإبداع والتجارب الرقمية لنحوّل الأفكار الطموحة إلى حلول متكاملة تليق بتطلعات أبوظبي والمنطقة.',
      capabilitiesTitle: 'نطاق العمل والإمكانات',
      capabilitiesDesc: 'منهجيات دقيقة تُصمم خصيصاً لكل مشروع وفقاً لأهدافه الاستراتيجية ومتطلبات جمهوره المستهدف.',
      keyDeliverables: 'المخرجات الرئيسية',
      strategicValue: 'القيمة الاستراتيجية',
      processTitle: 'مسار التنفيذ',
      inquireService: 'طلب استشارة لهذه الخدمة',
    },
    work: {
      heroEyebrow: 'معرض الأعمال // PORTFOLIO',
      heroTitle: 'أفكار نمنحها شكلًا، وتجارب نمنحها معنى.',
      heroSub: 'استكشف مجموعة من المفاهيم الإبداعية التي تجمع بين الاستراتيجية والهوية والتجارب الرقمية، مصممة انطلاقاً من إمارة أبوظبي نحو آفاق عالمية.',
      conceptArchiveTitle: 'مختبر المفاهيم التصورية',
      conceptArchiveDesc: 'مشاريع استكشافية تؤسس لاتجاهات جمالية وتقنية جديدة، صُممت لتجسيد إمكانات الوكالة ورؤيتها المستقبلية.',
      chapterTag: 'الفصل الأول // CHAPTER 01',
      chapterTitle: 'ثلاث رؤى. ثلاثة عوالم مختلفة.',
      chapterSub: 'كل مشروع تصوري هو مساحة لاستكشاف فكرة، وبناء اتجاه بصري، وتخيّل تجربة متكاملة.',
      disclaimerTitle: 'تنويه شفاف حول الأعمال',
      disclaimerBody: 'المشاريع المعروضة أدناه هي مفاهيم إبداعية تصورية (Concept Projects) تم تطويرها داخل مختبر التصميم بوكالة ستيلار ميديا، وليست أعمالاً تجارية فعلية لعملاء قائمين. نلتزم بأعلى معايير الصدق والأمانة المهنية دون ادعاء إنجازات وهمية.',
      projectOverview: 'نظرة عامة على المفهوم',
      strategicContext: 'السياق الاستراتيجي والفكري',
      creativeExecution: 'التنفيذ الفني والبصري',
      keyDisciplines: 'التخصصات المدمجة',
    },
    contact: {
      heroEyebrow: 'لنتحدث // LET\'S TALK',
      heroTitle: 'كل فكرة طموحة تبدأ بحوار.',
      heroSub1: 'سواء كانت لديك رؤية واضحة أو ما زلت تستكشف الاحتمالات، يسعدنا أن نبدأ الحديث معك.',
      heroSub2: 'شاركنا فكرتك، ولنكتشف معًا الخطوة التالية.',
      inquiryTitle: 'أخبرنا عن فكرتك',
      inquirySub: 'املأ التفاصيل الأساسية، وساعدنا على فهم ما تريد تحقيقه بدقة عبر هذا النموذج التمهيدي.',
      privacyCardTitle: 'نهج الخصوصية والحوار الهادف',
      privacyCardBody: 'في ستيلار ميديا، نتعامل مع كل نقاش بأعلى درجات السرية والاحترافية. لا نشارك معلوماتك أو تفاصيل أعمالك مع أي طرف ثالث، ونهدف دائمًا لبناء شراكات إعلامية مبنية على الثقة التامة والنتائج الملموسة.',
      slaItem1: 'مراجعة معمقة لكل استفسار خلال ٢٤-٤٨ ساعة عمل',
      slaItem2: 'جلسة استكشافية متخصصة مع فريق الاستراتيجية والإبداع',
      hubTitle: 'استجابة تنفيذية مركزية',
      hubDesc: 'يتم توجيه كل طلب مباشرة للمسؤول المختص بنوع المشروع المطلوب.',
      nameLabel: 'الاسم الكامل',
      namePlaceholder: 'اكتب اسمك الكريم',
      emailLabel: 'البريد الإلكتروني',
      emailPlaceholder: 'name@example.com',
      companyLabel: 'اسم الشركة أو العلامة التجارية',
      companyPlaceholder: 'اختياري',
      serviceLabel: 'مجال الاهتمام الرئيسي',
      servicePlaceholder: 'اختر مجال الخدمة (اختياري)',
      messageLabel: 'تفاصيل الفكرة أو المشروع',
      messagePlaceholder: 'صف لنا باختصار أهدافك، التحديات الحالية، وما تطمح للوصول إليه...',
      submitBtn: 'إرسال طلب الاستشارة',
      submittingBtn: 'جارٍ التحقق والإرسال...',
      successTitle: 'تم استلام استفسارك بنجاح',
      successMessage: 'شكرًا لتواصلك مع ستيلار ميديا. تم تسجيل طلبك وسيقوم فريق الاستراتيجية بمراجعته والتواصل معك خلال يومي عمل.',
      successNote: 'تم تسجيل الاستفسار محلياً في بيئة العرض التوضيحي للوكالة.',
      errorTitle: 'تعذر إتمام الإرسال',
      errorMessage: 'حدث خطأ أثناء محاولة معالجة النموذج. يرجى التحقق من صحة المدخلات وإعادة المحاولة.',
      retryBtn: 'إعادة المحاولة',
      newInquiryBtn: 'إرسال استفسار جديد',
      noticeTitle: 'آلية تسليم النموذج والاتصال المباشر',
      noticeDesc: 'هذا النموذج يعمل حالياً ضمن واجهة العرض التوضيحي ويوثق متطلبات التحقق عبر React Hook Form و Zod. للتواصل المباشر مع مكتبنا في أبوظبي يمكن استخدام القنوات الرسمية.',
      errors: {
        nameRequired: 'يرجى إدخال الاسم الكامل.',
        nameMin: 'يجب ألا يقل الاسم عن 3 أحرف.',
        emailRequired: 'يرجى إدخال البريد الإلكتروني.',
        emailInvalid: 'يرجى إدخال عنوان بريد إلكتروني صالح (مثال: name@domain.com).',
        messageRequired: 'يرجى كتابة وصف مختصر للفكرة أو المشروع.',
        messageMin: 'يرجى تقديم تفاصيل أكثر (10 أحرف على الأقل).',
      },
    },
    notFound: {
      tag: '404 // صفحة مفقودة',
      title: 'يبدو أنك ابتعدت عن المدار.',
      description: 'الصفحة التي تحاول الوصول إليها غير موجودة أو تم نقلها إلى مسار آخر.',
      backHome: 'العودة للرئيسية',
      exploreServices: 'استكشف خدماتنا',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      work: 'Selected Work',
      contact: 'Contact Us',
      contactCta: 'Start a Project',
      conceptNotice: 'Concept Projects',
    },
    common: {
      viewAll: 'View All',
      learnMore: 'Learn More',
      explore: 'Explore',
      exploreService: 'Explore Capability',
      exploreProject: 'Explore Concept',
      backToServices: 'Back to All Services',
      backToWork: 'Back to Selected Work',
      getInTouch: 'Get in Touch',
      discussProject: 'Discuss Your Project',
      conceptProject: 'Concept Project',
      abuDhabi: 'Abu Dhabi, United Arab Emirates',
      rightsReserved: 'All rights reserved to Stellar Media.',
      officialCapabilities: 'Official Capabilities',
      agencyPrinciple: 'Agency Principle',
      coordinates: '24.4539° N, 54.3773° E · Abu Dhabi',
      statusActive: 'Active & accepting selected engagements',
    },
    home: {
      heroEyebrow: 'Strategy · Creative · Digital Experiences',
      heroHeadline: 'Ideas Beyond Boundaries.',
      heroSub: 'We shape creative experiences and digital strategies for ambitious brands.',
      primaryCta: 'Explore Services',
      secondaryCta: 'Contact Us',
      trustText: 'Based in Abu Dhabi, United Arab Emirates',
      partnerText: 'Integrated creative and strategic partner for visionary institutions',
      aboutTag: 'The Agency',
      aboutHeadline: 'Giving Ambitious Ideas Space to Shine.',
      aboutBody: 'Stellar Media is a specialized creative and marketing consultancy based in Abu Dhabi. We operate at the intersection of measured strategic thinking and contemporary creative craft, designing brands and experiences that inspire lasting resonance.',
      aboutSecondary: 'We believe every brand has a distinct celestial orbit. Our mandate is to chart that trajectory with exceptional clarity and artful precision.',
      quoteTitle: 'Agency Philosophy',
      quoteText: '«Creativity is not just about being different, but giving difference meaning.»',
      servicesTag: 'Disciplines',
      servicesTitle: 'Creative & Strategic Capabilities',
      servicesSub: 'Comprehensive solutions architected to elevate presence and create measurable brand value.',
      workTag: 'Selected Work',
      workTitle: 'Concepts from the Design Laboratory',
      workSub: 'Three visionary monographs rooted in regional ambition, synthesizing strategy, architecture, and digital realms.',
      approachTag: 'Our Approach',
      approachTitle: 'From Idea to Impact',
      approachSub: 'A disciplined, sequential methodology blending deep discovery with master-grade production execution.',
      contactTag: 'Next Horizon',
      contactTitle: 'Every Ambitious Idea Begins with a Dialogue.',
      contactSub: 'Whether establishing a new institutional foundation or reimagining an existing presence, we look forward to the conversation.',
    },
    about: {
      heroEyebrow: 'ABOUT US // STELLAR MEDIA',
      heroTitle: 'Giving Ambitious Ideas Space to Shine.',
      heroSub: 'We believe exceptional ideas deserve clear strategy, visionary creative craft, and experiences that leave an enduring mark.',
      heroCta: 'Discover What We Believe',
      perspectiveTag: 'STRATEGIC PERSPECTIVE',
      perspectiveTitle: 'Behind Every Idea, There is a Vision.',
      perspectiveBody1: 'We view brands as far more than visual emblems or marketing campaigns. They are ideas that demand deep comprehension, strategy that grants them direction, and craft that turns them into experiences people connect with.',
      perspectiveBody2: 'From the heart of Abu Dhabi, we craft narratives where authentic regional heritage converges with the frontier of global design, eschewing fleeting trends in favor of timeless institutional value.',
      metric1Val: '100%',
      metric1Label: 'Strategic Rigor',
      metric2Val: '360°',
      metric2Label: 'Media & Creative Synergy',
      corePillarsTag: 'CORE PILLARS // PHILOSOPHY',
      corePillarsTitle: 'Three Principles Guiding Everything We Create.',
      p1Title: 'Clarity Over Noise',
      p1Sub: 'CLARITY OVER NOISE',
      p1Desc: 'We begin by diagnosing the core essence and objective, building solutions with clear purpose rather than ungrounded visual spectacle.',
      p2Title: 'Strategy Meets Creativity',
      p2Sub: 'STRATEGY MEETS CREATIVITY',
      p2Desc: 'We unite analytical thinking with unbound creative imagination to forge cohesive, commercially astute, and humanly resonant experiences.',
      p3Title: 'Impact Beyond Appearance',
      p3Sub: 'IMPACT BEYOND APPEARANCE',
      p3Desc: 'Every detail must fulfill a strategic intent. We measure true success by enduring resonance, institutional stature, and tangible impact.',
      statement: '«Creativity is not just about being different, but giving difference meaning.»',
      statementSub: 'We seek the narratives worth telling, the precision that renders them undeniable, and the platform that allows them to shine.',
      statementAuthor: 'Stellar Media Vision • Abu Dhabi',
      methodologyTag: 'METHODOLOGY // HOW WE THINK',
      methodologyTitle: 'From Idea to Impact.',
      methodologySub: 'A disciplined sequence merging comprehensive exploration with exacting production standards.',
      s1Title: 'Discover',
      s1Sub: 'DISCOVER',
      s1Desc: 'We immerse ourselves in your vision, cultural context, and audience dynamics to build an unshakeable foundation.',
      s2Title: 'Define',
      s2Sub: 'DEFINE',
      s2Desc: 'We calibrate the strategic trajectory, message architecture, and primary brand tenets with absolute clarity.',
      s3Title: 'Create',
      s3Sub: 'CREATE',
      s3Desc: 'We translate strategy into bespoke creative systems, intertwining striking visual identities with innovative craft.',
      s4Title: 'Deliver',
      s4Sub: 'DELIVER',
      s4Desc: 'We refine every touchpoint to world-class benchmarks, preparing the work for sustained impact.',
      bridgeTag: 'NEXT HORIZON',
      bridgeTitle: 'Every Vision Requires the Right Instruments.',
      bridgeSub: 'Explore how we translate high-order strategic thought and creative courage into integrated capabilities.',
      bridgeCta: 'Explore Our Services',
    },
    services: {
      heroEyebrow: 'CAPABILITIES // SERVICES',
      heroTitle: 'From Vision to Experience,',
      heroTitleHighlight: 'We Shape What Endures.',
      heroSub: 'We synthesize brand strategy, world-class design, and digital experiences to elevate visionary regional and global leaders.',
      capabilitiesTitle: 'Scope of Engagement',
      capabilitiesDesc: 'Tailored methodologies calibrated to distinct institutional mandates and audience expectations.',
      keyDeliverables: 'Key Deliverables',
      strategicValue: 'Strategic Value',
      processTitle: 'Execution Pathway',
      inquireService: 'Inquire About This Capability',
    },
    work: {
      heroEyebrow: 'PORTFOLIO // SELECTED WORK',
      heroTitle: 'Giving form to ideas, and resonance to experiences.',
      heroSub: 'Explore an editorial spectrum of creative concepts harmonizing brand strategy, celestial visual identities, and interactive spatial engineering from Abu Dhabi.',
      conceptArchiveTitle: 'Design Laboratory Monograph',
      conceptArchiveDesc: 'Exploratory projects charting future aesthetic and technological trajectories, embodying our studio\'s creative ambition.',
      chapterTag: 'CHAPTER 01',
      chapterTitle: 'Three Visions. Three Singular Worlds.',
      chapterSub: 'Each concept project is a dedicated domain for testing bold hypotheses, architectural aesthetics, and seamless audience immersion.',
      disclaimerTitle: 'Editorial Integrity & Concept Attribution',
      disclaimerBody: 'The projects presented below are fictional concept projects developed internally within the Stellar Media Design Lab. They represent theoretical explorations of aesthetic, architectural, and spatial communication rather than contracted commercial work for third-party clients.',
      projectOverview: 'Concept Overview',
      strategicContext: 'Strategic Rationale',
      creativeExecution: 'Creative Execution',
      keyDisciplines: 'Integrated Disciplines',
    },
    contact: {
      heroEyebrow: 'LET\'S TALK // CONTACT',
      heroTitle: 'Every Ambitious Idea Begins with a Dialogue.',
      heroSub1: 'Whether you possess a definitive roadmap or are exploring emergent possibilities, we welcome the initial conversation.',
      heroSub2: 'Share your vision, and together we will map the subsequent coordinates.',
      inquiryTitle: 'Tell Us About Your Project',
      inquirySub: 'Provide the foundational details below to help us tailor our initial exploratory perspective.',
      privacyCardTitle: 'Privacy & Meaningful Consultation',
      privacyCardBody: 'At Stellar Media, every engagement is treated under strict institutional discretion. We never disclose your strategic concepts to external parties, prioritizing partnerships rooted in absolute trust.',
      slaItem1: 'Comprehensive review within 24–48 business hours',
      slaItem2: 'Dedicated discovery session with strategic & creative leads',
      hubTitle: 'Direct Executive Assignment',
      hubDesc: 'Each brief is paired directly with the designated creative director matching your industry domain.',
      nameLabel: 'Full Name',
      namePlaceholder: 'Your full name',
      emailLabel: 'Email Address',
      emailPlaceholder: 'name@example.com',
      companyLabel: 'Company / Organization',
      companyPlaceholder: 'Optional',
      serviceLabel: 'Primary Discipline of Interest',
      servicePlaceholder: 'Select an area of interest (optional)',
      messageLabel: 'Project Overview & Objectives',
      messagePlaceholder: 'Briefly outline your ambitions, timeline, and current milestones...',
      submitBtn: 'Submit Consultation Request',
      submittingBtn: 'Validating & Transmitting...',
      successTitle: 'Inquiry Successfully Received',
      successMessage: 'Thank you for reaching out to Stellar Media. Your inquiry has been registered, and our strategy team will review and reply within two business days.',
      successNote: 'Inquiry recorded locally in the agency prototype sandbox environment.',
      errorTitle: 'Submission Error',
      errorMessage: 'An error occurred while processing the form. Please check your inputs and try again.',
      retryBtn: 'Retry Submission',
      newInquiryBtn: 'Submit Another Inquiry',
      noticeTitle: 'Form Delivery Mechanism Notice',
      noticeDesc: 'This form operates on the client-side demonstration boundary, validated through React Hook Form and Zod schemas. To establish direct communication with our Abu Dhabi office, formal channels remain available.',
      errors: {
        nameRequired: 'Please provide your full name.',
        nameMin: 'Name must be at least 3 characters.',
        emailRequired: 'Please provide your email address.',
        emailInvalid: 'Please provide a valid email address (e.g., name@domain.com).',
        messageRequired: 'Please describe your project or inquiry.',
        messageMin: 'Please provide more details (at least 10 characters).',
      },
    },
    notFound: {
      tag: '404 // ORBIT NOT FOUND',
      title: 'It seems you have ventured off orbit.',
      description: 'The celestial coordinate you are looking for does not exist or has been relocated.',
      backHome: 'Return to Orbit (Home)',
      exploreServices: 'Explore Capabilities',
    },
  },
};
