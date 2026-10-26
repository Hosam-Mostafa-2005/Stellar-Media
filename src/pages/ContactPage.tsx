import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useLanguage } from '../i18n/LanguageContext';
import { servicesData } from '../data/services';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import backgroundAsset from '../assets/background.png';
import {
  Sparkles,
  MapPin,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  Send,
  Loader2,
  RefreshCw,
  Info,
  Server,
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const { language, t } = useLanguage();
  const [searchParams] = useSearchParams();
  const preselectedService = searchParams.get('service') || '';

  // Form submission state
  type SubmissionStatus = 'idle' | 'submitting' | 'success' | 'error';
  const [status, setStatus] = useState<SubmissionStatus>('idle');
  const [submissionFeedback, setSubmissionFeedback] = useState<string | null>(null);
  const [confirmedMessageId, setConfirmedMessageId] = useState<string | null>(null);

  // Live Gateway Provider status
  const [gatewayStatus, setGatewayStatus] = useState<{
    configured: boolean;
    provider: string;
    status: string;
  } | null>(null);

  // Query server status on mount
  useEffect(() => {
    fetch('/api/contact/status')
      .then((res) => res.json())
      .then((data) => {
        setGatewayStatus(data);
      })
      .catch(() => {
        // Fallback if status endpoint is unreachable
      });
  }, []);

  // Dynamic Zod Schema based on current language
  const contactSchema = z.object({
    fullName: z
      .string()
      .min(1, t.contact.errors.nameRequired)
      .min(3, t.contact.errors.nameMin),
    email: z
      .string()
      .min(1, t.contact.errors.emailRequired)
      .email(t.contact.errors.emailInvalid),
    company: z.string().optional(),
    service: z.string().optional(),
    message: z
      .string()
      .min(1, t.contact.errors.messageRequired)
      .min(10, t.contact.errors.messageMin),
  });

  type ContactFormData = z.infer<typeof contactSchema>;

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    getValues,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: '',
      email: '',
      company: '',
      service: preselectedService,
      message: '',
    },
  });

  useEffect(() => {
    if (preselectedService) {
      setValue('service', preselectedService);
    }
  }, [preselectedService, setValue]);

  // Real submission to the server endpoint
  const onSubmit = async (data: ContactFormData) => {
    setStatus('submitting');
    setSubmissionFeedback(null);
    setConfirmedMessageId(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: data.fullName.trim(),
          email: data.email.trim(),
          company: data.company?.trim(),
          service: data.service?.trim(),
          message: data.message.trim(),
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        // Confirmed real acceptance by the server/provider
        setStatus('success');
        setConfirmedMessageId(result.messageId || null);
        setSubmissionFeedback(
          language === 'ar'
            ? 'تم استلام وتأكيد طلب الاستشارة بنجاح عبر بوابة الرسائل المعتمدة. سيقوم فريق الاستراتيجية بمراجعة التفاصيل والتواصل معك.'
            : 'Your consultation request was successfully dispatched and confirmed by the transactional gateway. Our strategy team will review and reply within two business days.'
        );
        reset();
      } else if (response.status === 503 && result.code === 'PROVIDER_NOT_CONFIGURED') {
        // Truthful notice: server received and validated, but RESEND_API_KEY is awaiting configuration
        setStatus('error');
        setSubmissionFeedback(
          language === 'ar'
            ? 'تم التحقق من صحة بياناتك من قبل الخادم بنجاح، لكن بوابة الإرسال بانتظار إدخال المفتاح البرمجي RESEND_API_KEY في ملف .env بالخادم. تم الاحتفاظ ببياناتك لتفادي إعادة الكتابة.'
            : 'Your inquiry was validated successfully by the server, but live outbound dispatch requires RESEND_API_KEY in the server environment (.env). Your form inputs have been preserved.'
        );
      } else {
        // Other server-side rejection or provider error
        setStatus('error');
        setSubmissionFeedback(
          result.error ||
            (language === 'ar'
              ? 'تعذر إتمام الإرسال عبر البوابة. يرجى مراجعة المدخلات وإعادة المحاولة.'
              : 'The gateway was unable to complete message delivery. Please verify inputs and retry.')
        );
      }
    } catch (networkErr: any) {
      setStatus('error');
      setSubmissionFeedback(
        language === 'ar'
          ? 'تعذر الاتصال بخادم إرسال الرسائل. يرجى التحقق من اتصال الشبكة وإعادة المحاولة.'
          : 'Unable to reach the server endpoint. Please verify your network connection and retry.'
      );
    }
  };

  return (
    <div className="relative overflow-hidden star-bg text-start">
      {/* 1. HERO SECTION WITH LAYERED COSMIC BACKGROUND */}
      <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-24 border-b border-[#AEBBD0]/10 overflow-hidden">
        {/* Layered subtle background */}
        <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
          <img
            src={backgroundAsset}
            alt="Stellar Media Cosmic Background"
            className="w-full h-full object-cover object-[center_bottom]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#080D1B]/95 via-[#080D1B]/85 to-[#080D1B]" />
        </div>
        <div className="absolute -top-32 right-1/4 w-96 h-96 rounded-full bg-[#48D9E8]/10 blur-[120px] pointer-events-none" />

        <Container className="relative z-10">
          <div className="max-w-4xl space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#101E38]/90 border border-[#48D9E8]/30 text-xs font-semibold text-[#48D9E8]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#48D9E8] animate-pulse" />
                <span>{t.contact.heroEyebrow}</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-[#AEBBD0] font-mono">
                <MapPin className="w-3.5 h-3.5 text-[#48D9E8]" />
                <span>AUH • 24.4539° N, 54.3773° E</span>
              </div>
            </div>

            <h1 className="headline-font text-4xl sm:text-6xl font-bold tracking-tight text-[#F5F7FC] leading-tight max-w-3xl">
              {t.contact.heroTitle}
            </h1>

            <div className="space-y-2 text-base sm:text-xl text-[#AEBBD0] max-w-2xl leading-relaxed font-light">
              <p>{t.contact.heroSub1}</p>
              <p className="text-[#48D9E8] font-normal">{t.contact.heroSub2}</p>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. FORM & ADVISORY GUIDANCE — EDITORIAL BALANCED SPLIT */}
      <section className="relative py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Start Column: Guidance, Server Gateway Status & Protocol */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <span className="text-xs font-mono text-[#48D9E8] uppercase tracking-wider block font-semibold">
                  CONSULTATION PROTOCOL
                </span>
                <h2 className="headline-font text-2xl sm:text-3xl font-bold text-[#F5F7FC]">
                  {t.contact.inquiryTitle}
                </h2>
                <p className="text-sm sm:text-base text-[#AEBBD0] leading-relaxed">
                  {t.contact.inquirySub}
                </p>
              </div>

              {/* Live Delivery Gateway Status Card */}
              <div className="p-6 rounded-2xl bg-[#080D1B] border border-[#AEBBD0]/20 space-y-3 shadow-md">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="flex items-center gap-2 text-[#F5F7FC] font-semibold">
                    <Server className="w-4 h-4 text-[#48D9E8]" />
                    <span>API Endpoint // /api/contact</span>
                  </span>
                  <span
                    className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${
                      gatewayStatus?.configured
                        ? 'bg-[#48D9E8]/15 text-[#48D9E8] border border-[#48D9E8]/30'
                        : 'bg-amber-400/10 text-amber-300 border border-amber-400/30'
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        gatewayStatus?.configured ? 'bg-[#48D9E8]' : 'bg-amber-400'
                      }`}
                    />
                    <span>
                      {gatewayStatus?.configured
                        ? (language === 'ar' ? 'البوابة نشطة (Resend)' : 'Resend Live')
                        : (language === 'ar' ? 'بانتظار مفتاح RESEND_API_KEY' : 'Awaiting RESEND_API_KEY')}
                    </span>
                  </span>
                </div>
                <p className="text-xs text-[#AEBBD0] leading-relaxed font-light">
                  {gatewayStatus?.configured
                    ? (language === 'ar'
                        ? 'الخادم مهيأ مع مفتاح Resend المعتمد. سيتم إرسال الرسائل مباشرة إلى البريد المخصص.'
                        : 'Server is configured with active Resend credentials. Submissions dispatch directly to the designated inbox.')
                    : (language === 'ar'
                        ? 'بوابة الإرسال تعمل وتتحقق من صحة الحقول عبر الخادم. لتفعيل التسليم الفعلي إلى بريدك، أضف المفتاح في ملف .env بالخادم.'
                        : 'Server endpoint is operational and validates all payloads. To dispatch live emails to your inbox, configure RESEND_API_KEY in .env.')}
                </p>
              </div>

              {/* Advisory Guidance Card */}
              <div className="p-8 rounded-2xl bg-[#101E38]/50 border border-[#AEBBD0]/15 space-y-4 shadow-sm">
                <div className="flex items-center gap-2.5 text-[#168BFF]">
                  <ShieldCheck className="w-5 h-5 text-[#48D9E8]" />
                  <h3 className="headline-font text-base font-semibold text-[#F5F7FC]">
                    {t.contact.privacyCardTitle}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#AEBBD0] leading-relaxed">
                  {t.contact.privacyCardBody}
                </p>

                <div className="pt-3 space-y-2 border-t border-[#AEBBD0]/10 text-xs text-[#AEBBD0]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#48D9E8]" />
                    <span>{t.contact.slaItem1}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#48D9E8]" />
                    <span>{t.contact.slaItem2}</span>
                  </div>
                </div>
              </div>

              {/* Direct Office Address & Details */}
              <div className="p-6 rounded-2xl bg-[#101E38]/30 border border-[#AEBBD0]/10 space-y-2 text-xs text-[#AEBBD0]">
                <span className="font-mono text-[#48D9E8] font-bold block uppercase tracking-wider">
                  ABU DHABI HEADQUARTERS
                </span>
                <p className="leading-relaxed">
                  {t.common.coordinates}
                </p>
                <p className="text-[11px] text-[#AEBBD0]/70">
                  {t.common.officialCapabilities}
                </p>
              </div>
            </div>

            {/* End Column: Real Form Canvas */}
            <div className="lg:col-span-7 bg-[#101E38]/50 border border-[#AEBBD0]/15 rounded-3xl p-8 sm:p-12 shadow-2xl relative min-h-[540px]">
              {/* SUCCESS STATE */}
              {status === 'success' ? (
                <div className="py-12 flex flex-col items-start space-y-6">
                  <div className="w-16 h-16 rounded-2xl bg-[#48D9E8]/10 border border-[#48D9E8]/40 flex items-center justify-center text-[#48D9E8] shadow-[0_0_30px_rgba(72,217,232,0.3)]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="headline-font text-2xl sm:text-3xl font-bold text-[#F5F7FC]">
                    {t.contact.successTitle}
                  </h3>
                  <p className="text-sm sm:text-base text-[#AEBBD0] leading-relaxed">
                    {submissionFeedback}
                  </p>
                  {confirmedMessageId && (
                    <div className="p-3 rounded-xl bg-[#080D1B] border border-[#48D9E8]/30 text-xs font-mono text-[#48D9E8]">
                      <span>DISPATCH CONFIRMATION ID: </span>
                      <strong className="text-white">{confirmedMessageId}</strong>
                    </div>
                  )}
                  <div className="pt-4">
                    <Button
                      type="button"
                      variant="secondary"
                      onClick={() => {
                        setStatus('idle');
                        setSubmissionFeedback(null);
                        setConfirmedMessageId(null);
                      }}
                      icon={<RefreshCw className="w-4 h-4" />}
                    >
                      {t.contact.newInquiryBtn}
                    </Button>
                  </div>
                </div>
              ) : (
                /* ACTIVE FORM CANVAS */
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
                  {/* Feedback alert banner for server error or unconfigured provider */}
                  {status === 'error' && submissionFeedback && (
                    <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-3 text-xs text-amber-200">
                      <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                      <div className="space-y-1">
                        <strong className="block text-amber-300 font-semibold">
                          {language === 'ar' ? 'تنبيه الخادم:' : 'Server Notice:'}
                        </strong>
                        <p className="leading-relaxed">{submissionFeedback}</p>
                      </div>
                    </div>
                  )}

                  {/* Full Name */}
                  <div className="space-y-2">
                    <label
                      htmlFor="fullName"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#F5F7FC] font-mono"
                    >
                      <span>{t.contact.nameLabel}</span>
                      <span className="text-[#48D9E8] ms-1">*</span>
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      placeholder={t.contact.namePlaceholder}
                      className={`w-full bg-[#080D1B] text-[#F5F7FC] placeholder-[#AEBBD0]/40 rounded-xl px-4 py-3.5 text-sm outline-none border transition-all ${
                        errors.fullName
                          ? 'border-red-500/60 focus:ring-2 focus:ring-red-500/30'
                          : 'border-[#AEBBD0]/20 focus:border-[#168BFF] focus:ring-2 focus:ring-[#168BFF]/20'
                      }`}
                      {...register('fullName')}
                      disabled={status === 'submitting'}
                    />
                    {errors.fullName && (
                      <p className="text-xs text-red-400 flex items-center gap-1.5 mt-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.fullName.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Email Address */}
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#F5F7FC] font-mono"
                    >
                      <span>{t.contact.emailLabel}</span>
                      <span className="text-[#48D9E8] ms-1">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      dir="ltr"
                      placeholder={t.contact.emailPlaceholder}
                      className={`w-full bg-[#080D1B] text-[#F5F7FC] placeholder-[#AEBBD0]/40 rounded-xl px-4 py-3.5 text-sm outline-none border transition-all ${
                        errors.email
                          ? 'border-red-500/60 focus:ring-2 focus:ring-red-500/30'
                          : 'border-[#AEBBD0]/20 focus:border-[#168BFF] focus:ring-2 focus:ring-[#168BFF]/20'
                      }`}
                      {...register('email')}
                      disabled={status === 'submitting'}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-400 flex items-center gap-1.5 mt-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.email.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Company / Brand (Optional) */}
                  <div className="space-y-2">
                    <label
                      htmlFor="company"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#F5F7FC] font-mono"
                    >
                      <span>{t.contact.companyLabel}</span>
                      <span className="text-[#AEBBD0]/60 text-[11px] ms-1 font-normal">
                        ({t.contact.companyPlaceholder})
                      </span>
                    </label>
                    <input
                      id="company"
                      type="text"
                      placeholder={t.contact.companyPlaceholder}
                      className="w-full bg-[#080D1B] text-[#F5F7FC] placeholder-[#AEBBD0]/40 rounded-xl px-4 py-3.5 text-sm outline-none border border-[#AEBBD0]/20 focus:border-[#168BFF] focus:ring-2 focus:ring-[#168BFF]/20 transition-all"
                      {...register('company')}
                      disabled={status === 'submitting'}
                    />
                  </div>

                  {/* Service Interest (Optional Dropdown) */}
                  <div className="space-y-2">
                    <label
                      htmlFor="service"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#F5F7FC] font-mono"
                    >
                      <span>{t.contact.serviceLabel}</span>
                    </label>
                    <select
                      id="service"
                      className="w-full bg-[#080D1B] text-[#F5F7FC] rounded-xl px-4 py-3.5 text-sm outline-none border border-[#AEBBD0]/20 focus:border-[#168BFF] focus:ring-2 focus:ring-[#168BFF]/20 transition-all cursor-pointer"
                      {...register('service')}
                      disabled={status === 'submitting'}
                    >
                      <option value="">{t.contact.servicePlaceholder}</option>
                      {servicesData.map((s) => (
                        <option key={s.slug} value={s.slug} className="bg-[#080D1B]">
                          {s.number} — {s.title[language]}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Project Description (Required) */}
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#F5F7FC] font-mono"
                    >
                      <span>{t.contact.messageLabel}</span>
                      <span className="text-[#48D9E8] ms-1">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder={t.contact.messagePlaceholder}
                      className={`w-full bg-[#080D1B] text-[#F5F7FC] placeholder-[#AEBBD0]/40 rounded-xl px-4 py-3.5 text-sm outline-none border transition-all resize-y ${
                        errors.message
                          ? 'border-red-500/60 focus:ring-2 focus:ring-red-500/30'
                          : 'border-[#AEBBD0]/20 focus:border-[#168BFF] focus:ring-2 focus:ring-[#168BFF]/20'
                      }`}
                      {...register('message')}
                      disabled={status === 'submitting'}
                    />
                    {errors.message && (
                      <p className="text-xs text-red-400 flex items-center gap-1.5 mt-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.message.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button with Duplicate Prevention */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full py-4 rounded-xl bg-[#168BFF] hover:bg-[#2e9aff] text-[#F5F7FC] font-semibold text-sm transition-all duration-300 shadow-[0_0_25px_rgba(22,139,255,0.35)] hover:shadow-[0_0_35px_rgba(72,217,232,0.4)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-[#48D9E8]"
                    >
                      {status === 'submitting' ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin text-[#48D9E8]" />
                          <span>{t.contact.submittingBtn}</span>
                        </>
                      ) : (
                        <>
                          <span>{t.contact.submitBtn}</span>
                          <Send className="w-4 h-4 rtl:rotate-180" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};
