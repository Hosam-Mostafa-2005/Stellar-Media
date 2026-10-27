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
      conceptNotice: 'أعمال مختارة',
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
      discussProject: 'لنتحدث عن مشروعك',
      conceptProject: 'دراسة حالة استوديو',
      abuDhabi: 'أبوظبي، دولة الإمارات العربية المتحدة',
      rightsReserved: 'جميع الحقوق محفوظة لستيلار ميديا.',
      officialCapabilities: 'مجالات الاختصاص والخدمات',
      agencyPrinciple: 'فلسفة الوكالة',
      coordinates: 'أبوظبي، دولة الإمارات العربية المتحدة',
      statusActive: 'متاح لاستقبال المشاريع الجديدة',
    },
    home: {
      heroEyebrow: 'وكالة إبداع وتسويق رقمي · أبوظبي',
      heroHeadline: 'حيث تلتقي الرؤية الإبداعية بالأثر الاستراتيجي.',
      heroSub: 'وكالة متخصصة في بناء الهويات المؤسسية، وتصميم العبوات الفاخرة، والحملات التسويقية، والتجارب الرقمية المبتكرة للعلامات الطموحة.',
      primaryCta: 'اكتشف خدماتنا',
      secondaryCta: 'تواصل معنا',
      trustText: 'مقرّنا أبوظبي، الإمارات العربية المتحدة',
      partnerText: 'شريك إبداعي واستراتيجي متكامل للعلامات التجارية الرائدة',
      aboutTag: 'عن الوكالة',
      aboutHeadline: 'نمنح الأفكار الطموحة حضوراً استثنائياً.',
      aboutBody: 'وكالة ستيلار ميديا هي وكالة تسويق وإبداع متخصصة تتخذ من أبوظبي مقراً لها. نعمل عند تقاطع التفكير الاستراتيجي المدروس والإنتاج الإبداعي المعاصر، لنصمم تجارب وهوية بصرية تلهم وتترك أثراً حقيقياً ومستداماً.',
      aboutSecondary: 'نؤمن بأن كل علامة تمتلك شخصية فريدة، ومهمتنا هي ترجمة هذا الطموح إلى هوية متكاملة تبرز مكانتها وتخاطب جمهورها بأعلى معايير الإتقان.',
      quoteTitle: 'فلسفة العمل',
      quoteText: '«الإبداع ليس مجرد أن تكون مختلفًا، بل أن تمنح الاختلاف معنى وأثراً ملموساً.»',
      servicesTag: 'مجالات الاختصاص',
      servicesTitle: 'الخدمات الإبداعية والتسويقية',
      servicesSub: 'حلول متكاملة تُصاغ بعناية لتعزيز الحضور وبناء تأثير استراتيجي لعلامتك.',
      workTag: 'معرض الأعمال',
      workTitle: 'أعمال مختارة ودراسات حالة',
      workSub: 'نماذج إبداعية تعكس منهجيتنا في بناء الهويات، تصميم العبوات، والمنصات الرقمية الراقية.',
      approachTag: 'منهجيتنا',
      approachTitle: 'من الفكرة إلى الأثر',
      approachSub: 'خطوات متسلسلة ودقيقة تمزج بين الاستكشاف العميق والإنتاج عالي المهارة لتحقيق النتائج المرجوة.',
      contactTag: 'الخطوة التالية',
      contactTitle: 'كل فكرة طموحة تبدأ بحوار.',
      contactSub: 'سواء كنت تضع حجر الأساس لمشروع جديد أو ترغب في تطوير حضور علامتك، يسعدنا التفكير والتعاون معك.',
    },
    about: {
      heroEyebrow: 'عن ستيلار ميديا // ABOUT US',
      heroTitle: 'نمنح الأفكار الطموحة حضوراً استثنائياً.',
      heroSub: 'نؤمن أن كل فكرة استثنائية تستحق استراتيجية واضحة، ورؤية إبداعية، وتجربة تترك أثراً في السوق.',
      heroCta: 'اكتشف ما نؤمن به',
      perspectiveTag: 'المنظور الاستراتيجي // STRATEGIC PERSPECTIVE',
      perspectiveTitle: 'ما وراء كل علامة ناجحة، هناك رؤية واستراتيجية.',
      perspectiveBody1: 'ننظر إلى العلامات التجارية باعتبارها أكثر من مجرد شعار أو حملة إعلانية. إنها منظومة متكاملة تحتاج إلى فهم عميق، واستراتيجية تمنحها اتجاهاً واضحاً، وإبداع يحوّلها إلى تجارب حقيقية يثق بها الجمهور.',
      perspectiveBody2: 'من قلب العاصمة أبوظبي، نصمم سرديات تلتقي فيها الأصالة الثقافية بأحدث أساليب التصميم والتسويق العالمي، متجاوزين الصيحات المؤقتة نحو قيمة راسخة ومستدامة.',
      metric1Val: '100%',
      metric1Label: 'توجيه استراتيجي دقيق',
      metric2Val: '360°',
      metric2Label: 'تكامل إعلامي وإبداعي',
      corePillarsTag: 'فلسفة العمل // CORE PILLARS',
      corePillarsTitle: 'ثلاثة مبادئ توجّه كل ما نصنعه.',
      p1Title: 'الوضوح قبل الضجيج',
      p1Sub: 'CLARITY OVER NOISE',
      p1Desc: 'نبدأ بفهم الفكرة والهدف التجاري، ثم نصنع حلولًا إبداعية واضحة المعنى والاتجاه، بعيداً عن المبالغات البصرية العابرة.',
      p2Title: 'الاستراتيجية والإبداع معًا',
      p2Sub: 'STRATEGY MEETS CREATIVITY',
      p2Desc: 'نربط التفكير الاستراتيجي بالخيال الإبداعي لنحوّل الأفكار إلى تجارب متماسكة، موثوقة، ومحكمة التنفيذ تجاريًا وإنسانيًا.',
      p3Title: 'الأثر أهم من المظهر',
      p3Sub: 'IMPACT BEYOND APPEARANCE',
      p3Desc: 'نهتم بأن تخدم كل تفصيلة هدفاً تسويقياً واضحاً. نقيس النجاح بمدى رسوخ الهوية وتأثيرها الملموس لدى الفئات المستهدفة.',
      statement: '«الإبداع ليس مجرد أن تكون مختلفًا، بل أن تمنح الاختلاف معنى وأثراً حقيقياً.»',
      statementSub: 'نبحث دائمًا عن الرسائل التي تستحق أن تُروى، والتصاميم التي تجعلها راسخة، والتجارب التي تبني الثقة والولاء.',
      statementAuthor: 'رؤية ستيلار ميديا • أبوظبي',
      methodologyTag: 'منهجية العمل // METHODOLOGY',
      methodologyTitle: 'مسار مدروس لتحقيق الأثر.',
      methodologySub: 'خطوات متسلسلة ودقيقة تمزج بين الاستكشاف المعمق والإنتاج عالي المهارة لتحقيق النتائج المنشودة.',
      s1Title: 'اكتشف',
      s1Sub: 'DISCOVER',
      s1Desc: 'ندرس أهداف المشروع، تحديات السوق، وسلوك الجمهور المستهدف لبناء قاعدة استراتيجية متينة.',
      s2Title: 'حدّد',
      s2Sub: 'DEFINE',
      s2Desc: 'نحدد التموضع التنافسي للعلامة، ورسائلها الأساسية، ونرسم خارطة طريق واضحة لكافة التطبيقات.',
      s3Title: 'ابتكر',
      s3Sub: 'CREATE',
      s3Desc: 'نحوّل الاستراتيجية إلى تصاميم وتجارب بصرية ملهمة تجمع بين التوجيه الفني الرفيع والإنتاج المتقن.',
      s4Title: 'نفّذ',
      s4Sub: 'DELIVER',
      s4Desc: 'نصقل كافة المخرجات وندير الإطلاق عبر القنوات المختارة لضمان أعلى مستويات الجودة والتأثير.',
      bridgeTag: 'الخطوة القادمة // NEXT STEPS',
      bridgeTitle: 'كل نجاح يحتاج إلى الشريك الإبداعي المناسب.',
      bridgeSub: 'اكتشف كيف نحوّل التفكير الاستراتيجي والإبداع إلى خدمات وتجارب متكاملة تُحدث فارقاً حقيقياً لعلامتك.',
      bridgeCta: 'استكشف خدماتنا',
    },
    services: {
      heroEyebrow: 'خدماتنا // AGENCY SERVICES',
      heroTitle: 'من الرؤية الاستراتيجية إلى التجربة،',
      heroTitleHighlight: 'نصنع ما يترك أثراً مستداماً.',
      heroSub: 'نجمع بين استراتيجية العلامة، الإنتاج الإبداعي، التسويق الرقمي، والتجارب التفاعلية لدعم نمو العلامات الطموحة في أبوظبي والمنطقة.',
      capabilitiesTitle: 'نطاق العمل والإمكانات',
      capabilitiesDesc: 'منهجيات دقيقة تُصمم خصيصاً لكل مشروع وفقاً لأهدافه الاستراتيجية ومتطلبات جمهوره المستهدف.',
      keyDeliverables: 'أبرز المخرجات',
      strategicValue: 'القيمة الاستراتيجية',
      processTitle: 'مسار التنفيذ',
      inquireService: 'طلب استشارة لهذه الخدمة',
    },
    work: {
      heroEyebrow: 'معرض الأعمال // PORTFOLIO',
      heroTitle: 'أفكار نمنحها شكلاً، وتجارب نمنحها معنى.',
      heroSub: 'استكشف مختارات من دراسات الحالة الإبداعية التي تمزج بين الاستراتيجية، الهوية البصرية، تصميم العبوات الفاخرة، والتجارب الرقمية من أبوظبي.',
      conceptArchiveTitle: 'أعمال ودراسات حالة الاستوديو',
      conceptArchiveDesc: 'مشاريع متكاملة طُوّرت داخل استوديو ستيلار ميديا لتجسيد خبراتنا في صياغة الهويات والتجارب الراقية.',
      chapterTag: 'أعمال مختارة // SELECTED WORKS',
      chapterTitle: 'رؤى إبداعية، مجالات متنوعة.',
      chapterSub: 'دراسات حالة تعكس قدرتنا على مواجهة مختلف التحديات الإبداعية والتسويقية بحلول استثنائية.',
      disclaimerTitle: 'توثيق وشفافية معرض الأعمال',
      disclaimerBody: 'المشاريع المعروضة تمثل دراسات حالة ونماذج إبداعية أُعدت داخل استوديو ستيلار ميديا لاستعراض قدراتنا في بناء الهويات الاستراتيجية، تصميم العبوات، والتجارب الرقمية، ونقدمها بكل أمانة وشفافية مهنية.',
      projectOverview: 'نظرة عامة على المشروع',
      strategicContext: 'السياق والأهداف التسويقية',
      creativeExecution: 'التوجه الإبداعي والتنفيذ',
      keyDisciplines: 'التخصصات المدمجة',
    },
    contact: {
      heroEyebrow: 'لنتحدث // LET\'S TALK',
      heroTitle: 'كل فكرة طموحة تبدأ بحوار.',
      heroSub1: 'سواء كانت لديك رؤية واضحة أو ما زلت تستكشف الاحتمالات، يسعدنا أن نبدأ الحديث معك.',
      heroSub2: 'شاركنا أهداف علامتك، ولنكتشف معًا الحلول الإبداعية الأنسب.',
      inquiryTitle: 'أخبرنا عن مشروعك',
      inquirySub: 'املأ التفاصيل الأساسية، وساعدنا على فهم ما تريد تحقيقه بدقة عبر هذا النموذج التمهيدي.',
      privacyCardTitle: 'نهج الخصوصية والحوار الهادف',
      privacyCardBody: 'في ستيلار ميديا، نتعامل مع كل نقاش بأعلى درجات السرية والاحترافية. لا نشارك معلوماتك أو تفاصيل أعمالك مع أي طرف ثالث، ونهدف دائمًا لبناء شراكات إعلامية مبنية على الثقة التامة والنتائج الملموسة.',
      slaItem1: 'مراجعة معمقة لكل استفسار خلال ٢٤-٤٨ ساعة عمل',
      slaItem2: 'جلسة استكشافية متخصصة مع فريق الاستراتيجية والإبداع',
      hubTitle: 'استجابة تنفيذية مباشرة',
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
      successNote: 'تم إرسال الاستفسار بنجاح إلى فريق الوكالة.',
      errorTitle: 'تعذر إتمام الإرسال',
      errorMessage: 'حدث خطأ أثناء محاولة إرسال النموذج. يرجى التحقق من صحة المدخلات وإعادة المحاولة.',
      retryBtn: 'إعادة المحاولة',
      newInquiryBtn: 'إرسال استفسار جديد',
      noticeTitle: 'آلية التواصل المباشر',
      noticeDesc: 'يتم تسليم النموذج عبر خادم المراسلات الآمن. للتواصل المباشر مع مكتبنا في أبوظبي يمكن استخدام القنوات الرسمية.',
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
      title: 'الصفحة المطلوبة غير موجودة.',
      description: 'الصفحة التي تحاول الوصول إليها غير موجودة أو تم نقلها إلى عنوان آخر.',
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
      conceptNotice: 'Selected Work',
    },
    common: {
      viewAll: 'View All',
      learnMore: 'Learn More',
      explore: 'Explore',
      exploreService: 'Explore Capability',
      exploreProject: 'Explore Project',
      backToServices: 'Back to All Services',
      backToWork: 'Back to Selected Work',
      getInTouch: 'Get in Touch',
      discussProject: 'Discuss Your Project',
      conceptProject: 'Studio Case Study',
      abuDhabi: 'Abu Dhabi, United Arab Emirates',
      rightsReserved: 'All rights reserved to Stellar Media.',
      officialCapabilities: 'Agency Capabilities',
      agencyPrinciple: 'Agency Principle',
      coordinates: 'Abu Dhabi, United Arab Emirates',
      statusActive: 'Active & accepting selected engagements',
    },
    home: {
      heroEyebrow: 'Creative & Digital Marketing Agency · Abu Dhabi',
      heroHeadline: 'Where Bold Ideas Ignite Market Impact.',
      heroSub: 'A specialized agency crafting enduring brand identities, luxury packaging, high-impact campaigns, and bespoke digital experiences for ambitious brands.',
      primaryCta: 'Explore Services',
      secondaryCta: 'Contact Us',
      trustText: 'Based in Abu Dhabi, United Arab Emirates',
      partnerText: 'Integrated creative and strategic partner for visionary institutions',
      aboutTag: 'The Agency',
      aboutHeadline: 'Giving Ambitious Ideas Space to Shine.',
      aboutBody: 'Stellar Media is a specialized creative and marketing agency based in Abu Dhabi. We operate at the intersection of measured strategic thinking and contemporary creative craft, designing brands and experiences that inspire lasting market resonance.',
      aboutSecondary: 'We believe every brand has a distinct voice and market opportunity. Our mandate is to chart that trajectory with exceptional clarity and artful precision.',
      quoteTitle: 'Agency Philosophy',
      quoteText: '«Creativity is not just about being different, but giving difference meaning and measurable resonance.»',
      servicesTag: 'Disciplines',
      servicesTitle: 'Creative & Marketing Capabilities',
      servicesSub: 'Comprehensive solutions architected to elevate market presence and build sustainable brand equity.',
      workTag: 'Selected Work',
      workTitle: 'Selected Work & Studio Case Studies',
      workSub: 'Curated case studies demonstrating our capabilities across brand identity, luxury packaging, and digital experiences.',
      approachTag: 'Our Approach',
      approachTitle: 'From Idea to Impact',
      approachSub: 'A disciplined, sequential methodology blending deep discovery with master-grade production execution.',
      contactTag: 'Next Steps',
      contactTitle: 'Every Ambitious Idea Begins with a Dialogue.',
      contactSub: 'Whether establishing a new brand foundation or elevating an existing presence, we look forward to the conversation.',
    },
    about: {
      heroEyebrow: 'ABOUT US // STELLAR MEDIA',
      heroTitle: 'Giving Ambitious Ideas Space to Shine.',
      heroSub: 'We believe exceptional ideas deserve clear strategy, visionary creative craft, and experiences that leave an enduring mark in the marketplace.',
      heroCta: 'Discover What We Believe',
      perspectiveTag: 'STRATEGIC PERSPECTIVE',
      perspectiveTitle: 'Behind Every Enduring Brand, There is Strategy and Vision.',
      perspectiveBody1: 'We view brands as far more than visual emblems or isolated marketing campaigns. They are living systems that demand deep comprehension, strategy that grants them direction, and craft that turns them into experiences audiences genuinely trust.',
      perspectiveBody2: 'From the heart of Abu Dhabi, we craft narratives where authentic regional prestige converges with the frontier of global design and marketing excellence, eschewing fleeting trends in favor of lasting brand equity.',
      metric1Val: '100%',
      metric1Label: 'Strategic Rigor',
      metric2Val: '360°',
      metric2Label: 'Media & Creative Synergy',
      corePillarsTag: 'CORE PILLARS // PHILOSOPHY',
      corePillarsTitle: 'Three Principles Guiding Everything We Create.',
      p1Title: 'Clarity Over Noise',
      p1Sub: 'CLARITY OVER NOISE',
      p1Desc: 'We begin by diagnosing the core objective and commercial goal, building solutions with clear purpose rather than superficial aesthetic spectacle.',
      p2Title: 'Strategy Meets Creativity',
      p2Sub: 'STRATEGY MEETS CREATIVITY',
      p2Desc: 'We unite analytical thinking with unbound creative imagination to forge cohesive, commercially astute, and humanly resonant brand experiences.',
      p3Title: 'Impact Beyond Appearance',
      p3Sub: 'IMPACT BEYOND APPEARANCE',
      p3Desc: 'Every detail must fulfill a strategic intent. We measure true success by enduring market resonance, client stature, and tangible business impact.',
      statement: '«Creativity is not just about being different, but giving difference meaning and impact.»',
      statementSub: 'We seek the narratives worth telling, the precision that renders them undeniable, and the platform that allows them to lead.',
      statementAuthor: 'Stellar Media Vision • Abu Dhabi',
      methodologyTag: 'METHODOLOGY // HOW WE DELIVER',
      methodologyTitle: 'From Insight to Market Impact.',
      methodologySub: 'A disciplined sequence merging comprehensive exploration with exacting production standards.',
      s1Title: 'Discover',
      s1Sub: 'DISCOVER',
      s1Desc: 'We immerse ourselves in your vision, commercial challenges, and audience dynamics to build an unshakeable strategic foundation.',
      s2Title: 'Define',
      s2Sub: 'DEFINE',
      s2Desc: 'We calibrate the strategic trajectory, message architecture, and primary brand tenets with absolute clarity.',
      s3Title: 'Create',
      s3Sub: 'CREATE',
      s3Desc: 'We translate strategy into bespoke creative systems, intertwining striking visual identities with innovative craft and packaging.',
      s4Title: 'Deliver',
      s4Sub: 'DELIVER',
      s4Desc: 'We refine every touchpoint to world-class benchmarks, orchestrating seamless rollout across physical and digital channels.',
      bridgeTag: 'NEXT STEPS',
      bridgeTitle: 'Every Vision Requires the Right Creative Partner.',
      bridgeSub: 'Explore how we translate high-order strategic thought and creative courage into integrated capabilities.',
      bridgeCta: 'Explore Our Services',
    },
    services: {
      heroEyebrow: 'CAPABILITIES // AGENCY SERVICES',
      heroTitle: 'From Vision to Experience,',
      heroTitleHighlight: 'We Shape What Endures.',
      heroSub: 'We synthesize brand strategy, world-class design, creative production, and digital experiences to elevate visionary regional and global leaders.',
      capabilitiesTitle: 'Scope of Engagement',
      capabilitiesDesc: 'Tailored methodologies calibrated to distinct commercial mandates and audience expectations.',
      keyDeliverables: 'Key Deliverables',
      strategicValue: 'Strategic Value',
      processTitle: 'Execution Pathway',
      inquireService: 'Inquire About This Capability',
    },
    work: {
      heroEyebrow: 'PORTFOLIO // SELECTED WORK',
      heroTitle: 'Giving form to ideas, and resonance to experiences.',
      heroSub: 'Explore an editorial spectrum of creative case studies harmonizing brand strategy, luxury packaging, and interactive digital platforms from Abu Dhabi.',
      conceptArchiveTitle: 'Studio Portfolio & Case Studies',
      conceptArchiveDesc: 'Curated projects developed by Stellar Media demonstrating our methodology across brand systems, packaging, and digital platforms.',
      chapterTag: 'SELECTED CASE STUDIES',
      chapterTitle: 'Diverse Challenges, Singular Craft.',
      chapterSub: 'Each case study represents a dedicated domain for testing bold hypotheses, refined aesthetics, and seamless audience immersion.',
      disclaimerTitle: 'Portfolio Integrity & Attribution',
      disclaimerBody: 'The projects presented below are self-initiated studio case studies produced internally by Stellar Media to showcase our methodology in brand identity, packaging architecture, and digital flagships, presented with full professional transparency.',
      projectOverview: 'Project Overview',
      strategicContext: 'Strategic Context & Objectives',
      creativeExecution: 'Creative Strategy & Execution',
      keyDisciplines: 'Integrated Disciplines',
    },
    contact: {
      heroEyebrow: 'LET\'S TALK // CONTACT',
      heroTitle: 'Every Ambitious Idea Begins with a Dialogue.',
      heroSub1: 'Whether you possess a definitive roadmap or are exploring emergent possibilities, we welcome the initial conversation.',
      heroSub2: 'Share your vision, and together we will map the subsequent steps.',
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
      successNote: 'Inquiry transmitted successfully to our team.',
      errorTitle: 'Submission Error',
      errorMessage: 'An error occurred while processing the form. Please check your inputs and try again.',
      retryBtn: 'Retry Submission',
      newInquiryBtn: 'Submit Another Inquiry',
      noticeTitle: 'Direct Communications & Delivery',
      noticeDesc: 'This form delivers your message directly to our server. For direct communication with our Abu Dhabi office, formal channels remain available.',
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
      tag: '404 // PAGE NOT FOUND',
      title: 'The page you are looking for does not exist.',
      description: 'The link you followed may be broken or the page may have been removed.',
      backHome: 'Return to Home',
      exploreServices: 'Explore Capabilities',
    },
  },
};
