import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../i18n/LanguageContext';
import { ProjectData } from '../../data/projects';
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

interface ProjectCarouselProps {
  projects: ProjectData[];
  className?: string;
}

interface PointerSample {
  x: number;
  time: number;
}

export const ProjectCarousel: React.FC<ProjectCarouselProps> = ({
  projects,
  className = '',
}) => {
  const { language, isRTL, t } = useLanguage();
  const total = projects.length;

  // Continuous track position: integer values correspond to centered cards.
  // Can grow positively or negatively without bound for seamless circular wrapping.
  const [currentPos, setCurrentPos] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [hoveredSlot, setHoveredSlot] = useState<number | null>(null);

  const currentPosRef = useRef<number>(0);
  const targetPosRef = useRef<number>(0);
  const velocityRef = useRef<number>(0); // in slide units per second
  const rafIdRef = useRef<number | null>(null);
  const lastFrameTimeRef = useRef<number | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  // Pointer drag state refs
  const isPointerDownRef = useRef<boolean>(false);
  const isDraggingRef = useRef<boolean>(false);
  const hasDraggedRef = useRef<boolean>(false);
  const dragStartXRef = useRef<number>(0);
  const dragStartYRef = useRef<number>(0);
  const dragStartPosRef = useRef<number>(0);
  const dragSamplesRef = useRef<PointerSample[]>([]);
  const prefersReducedMotionRef = useRef<boolean>(false);

  // Direction multiplier: +1 in LTR, -1 in RTL so physical drag direction always matches screen movement
  const dirFactor = isRTL ? -1 : 1;
  const dirFactorRef = useRef<number>(dirFactor);
  dirFactorRef.current = dirFactor;

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
      prefersReducedMotionRef.current = mq.matches;
      const handler = (e: MediaQueryListEvent) => {
        prefersReducedMotionRef.current = e.matches;
      };
      mq.addEventListener?.('change', handler);
      return () => mq.removeEventListener?.('change', handler);
    }
  }, []);

  const stopAnimation = useCallback(() => {
    if (rafIdRef.current !== null) {
      cancelAnimationFrame(rafIdRef.current);
      rafIdRef.current = null;
    }
    lastFrameTimeRef.current = null;
  }, []);

  // Critically damped spring animation loop for smooth, natural settling without bounce
  const startSpringAnimation = useCallback(() => {
    if (prefersReducedMotionRef.current) {
      stopAnimation();
      currentPosRef.current = targetPosRef.current;
      velocityRef.current = 0;
      setCurrentPos(targetPosRef.current);
      return;
    }

    if (rafIdRef.current !== null) return;

    const stiffness = 175;
    const damping = 26.5; // ~2 * sqrt(stiffness) for critical damping (no overshoot bounce)

    const step = (now: number) => {
      if (lastFrameTimeRef.current === null) {
        lastFrameTimeRef.current = now;
      }
      // Clamp dt to avoid huge jumps if tab was backgrounded
      const dt = Math.min((now - lastFrameTimeRef.current) / 1000, 0.032);
      lastFrameTimeRef.current = now;

      const displacement = currentPosRef.current - targetPosRef.current;
      const springForce = -stiffness * displacement;
      const dampingForce = -damping * velocityRef.current;
      const acceleration = springForce + dampingForce;

      velocityRef.current += acceleration * dt;
      currentPosRef.current += velocityRef.current * dt;

      if (
        Math.abs(targetPosRef.current - currentPosRef.current) < 0.0012 &&
        Math.abs(velocityRef.current) < 0.008
      ) {
        currentPosRef.current = targetPosRef.current;
        velocityRef.current = 0;
        setCurrentPos(targetPosRef.current);
        rafIdRef.current = null;
        lastFrameTimeRef.current = null;
        return;
      }

      setCurrentPos(currentPosRef.current);
      rafIdRef.current = requestAnimationFrame(step);
    };

    rafIdRef.current = requestAnimationFrame(step);
  }, [stopAnimation]);

  useEffect(() => {
    return () => stopAnimation();
  }, [stopAnimation]);

  const animateToSlot = useCallback(
    (slotIndex: number, initialVelocitySlidesPerSec?: number) => {
      targetPosRef.current = slotIndex;
      if (typeof initialVelocitySlidesPerSec === 'number') {
        velocityRef.current = initialVelocitySlidesPerSec;
      }
      startSpringAnimation();
    },
    [startSpringAnimation]
  );

  const nextSlide = useCallback(() => {
    animateToSlot(targetPosRef.current + 1);
  }, [animateToSlot]);

  const prevSlide = useCallback(() => {
    animateToSlot(targetPosRef.current - 1);
  }, [animateToSlot]);

  const goToProjectIndex = useCallback(
    (targetProjectIdx: number) => {
      const currentTargetSlot = Math.round(targetPosRef.current);
      const currentMod = ((currentTargetSlot % total) + total) % total;
      let diff = targetProjectIdx - currentMod;
      if (diff > total / 2) diff -= total;
      if (diff < -total / 2) diff += total;
      animateToSlot(currentTargetSlot + diff);
    },
    [animateToSlot, total]
  );

  // Compute pixel width equivalent to 1 full slide drag
  const getDragSpanPx = useCallback(() => {
    const stageWidth = stageRef.current?.clientWidth || 840;
    return Math.min(400, Math.max(220, stageWidth * 0.36));
  }, []);

  // Pointer Down handler (supports mouse & touch)
  const handlePointerDown = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      // Only respond to primary mouse button or touch/pen
      if (e.pointerType === 'mouse' && e.button !== 0) return;
      // Ignore if clicking directly on navigation buttons
      if ((e.target as HTMLElement).closest('button')) return;

      stopAnimation();
      isPointerDownRef.current = true;
      isDraggingRef.current = false;
      hasDraggedRef.current = false;
      dragStartXRef.current = e.clientX;
      dragStartYRef.current = e.clientY;
      dragStartPosRef.current = currentPosRef.current;
      velocityRef.current = 0;
      dragSamplesRef.current = [{ x: e.clientX, time: performance.now() }];
    },
    [stopAnimation]
  );

  useEffect(() => {
    const handleWindowPointerMove = (e: PointerEvent) => {
      if (!isPointerDownRef.current) return;

      const dx = e.clientX - dragStartXRef.current;
      const dy = e.clientY - dragStartYRef.current;

      if (!isDraggingRef.current) {
        // If user is scrolling vertically on touch before horizontal threshold, cancel carousel drag
        if (Math.abs(dy) > Math.abs(dx) && Math.abs(dy) > 10) {
          isPointerDownRef.current = false;
          animateToSlot(Math.round(currentPosRef.current));
          return;
        }
        if (Math.abs(dx) > 6) {
          isDraggingRef.current = true;
          hasDraggedRef.current = true;
          setIsDragging(true);
        } else {
          return;
        }
      }

      const now = performance.now();
      dragSamplesRef.current.push({ x: e.clientX, time: now });
      // Keep samples from last 90ms for accurate release velocity
      const cutoff = now - 90;
      while (
        dragSamplesRef.current.length > 2 &&
        dragSamplesRef.current[0].time < cutoff
      ) {
        dragSamplesRef.current.shift();
      }

      const dragSpan = getDragSpanPx();
      const rawSlideDelta = -(dx / dragSpan) * dirFactorRef.current;
      // Subtle progressive resistance if dragging beyond 1.15 slides in one gesture
      const clampedDelta =
        Math.abs(rawSlideDelta) > 1.15
          ? Math.sign(rawSlideDelta) *
            (1.15 + (Math.abs(rawSlideDelta) - 1.15) * 0.35)
          : rawSlideDelta;

      const nextPos = dragStartPosRef.current + clampedDelta;
      currentPosRef.current = nextPos;
      targetPosRef.current = nextPos;
      setCurrentPos(nextPos);
    };

    const handleWindowPointerUp = () => {
      if (!isPointerDownRef.current) return;
      isPointerDownRef.current = false;

      if (!isDraggingRef.current) {
        // If we interrupted a mid-flight animation without dragging, settle to nearest slot
        if (
          Math.abs(
            currentPosRef.current - Math.round(currentPosRef.current)
          ) > 0.001
        ) {
          animateToSlot(Math.round(currentPosRef.current));
        }
        return;
      }

      isDraggingRef.current = false;
      setIsDragging(false);

      // Compute release velocity from pointer samples
      const samples = dragSamplesRef.current;
      let vxPxPerMs = 0;
      if (samples.length >= 2) {
        const first = samples[0];
        const last = samples[samples.length - 1];
        const dtMs = Math.max(1, last.time - first.time);
        if (performance.now() - last.time < 120) {
          vxPxPerMs = (last.x - first.x) / dtMs;
        }
      }

      const dragSpan = getDragSpanPx();
      const releaseVelocitySlidesPerSec =
        ((-vxPxPerMs * 1000) / dragSpan) * dirFactorRef.current;

      const baseSlot = Math.round(dragStartPosRef.current);
      const offsetFromBase = currentPosRef.current - baseSlot;
      const projectedOffset =
        offsetFromBase + releaseVelocitySlidesPerSec * 0.16;

      let targetSlot = baseSlot;
      if (
        Math.abs(projectedOffset) > 0.2 ||
        Math.abs(offsetFromBase) > 0.22 ||
        Math.abs(releaseVelocitySlidesPerSec) > 0.55
      ) {
        const direction =
          Math.abs(projectedOffset) > 0.05
            ? Math.sign(projectedOffset)
            : Math.sign(offsetFromBase);
        targetSlot = baseSlot + direction;
      }

      animateToSlot(
        targetSlot,
        Math.max(-6, Math.min(6, releaseVelocitySlidesPerSec))
      );

      // Clear hasDragged flag after click phase completes
      setTimeout(() => {
        hasDraggedRef.current = false;
      }, 60);
    };

    window.addEventListener('pointermove', handleWindowPointerMove, {
      passive: true,
    });
    window.addEventListener('pointerup', handleWindowPointerUp);
    window.addEventListener('pointercancel', handleWindowPointerUp);

    return () => {
      window.removeEventListener('pointermove', handleWindowPointerMove);
      window.removeEventListener('pointerup', handleWindowPointerUp);
      window.removeEventListener('pointercancel', handleWindowPointerUp);
    };
  }, [animateToSlot, getDragSpanPx]);

  // Prevent accidental link activation or side-card clicks after a drag release
  const handleClickCapture = useCallback((e: React.MouseEvent) => {
    if (hasDraggedRef.current) {
      e.preventDefault();
      e.stopPropagation();
      hasDraggedRef.current = false;
    }
  }, []);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      if (isRTL) {
        prevSlide();
      } else {
        nextSlide();
      }
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      if (isRTL) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  };

  // Active slot and normalized project index (0 .. total - 1)
  const nearestSlot = Math.round(currentPos);
  const activeIndex = ((nearestSlot % total) + total) % total;
  const activeProject = projects[activeIndex];

  // Render a continuous 5-slot virtual window around nearestSlot so cards
  // keep stable DOM keys and smoothly interpolate across the stage.
  const virtualSlots = [
    nearestSlot - 2,
    nearestSlot - 1,
    nearestSlot,
    nearestSlot + 1,
    nearestSlot + 2,
  ];

  return (
    <div
      ref={containerRef}
      onKeyDown={handleKeyDown}
      onClickCapture={handleClickCapture}
      tabIndex={0}
      role="region"
      aria-label={
        language === 'ar' ? 'معرض الأعمال المميزة' : 'Featured Works Carousel'
      }
      className={`relative w-full focus:outline-none focus:ring-1 focus:ring-[#48D9E8]/40 rounded-3xl select-none ${className}`}
    >
      {/* Top Meta Indicator Bar (Compact & Minimal) */}
      <div className="flex items-center justify-between mb-3 px-2 sm:px-4 max-w-[840px] mx-auto text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="font-bold text-[#48D9E8] text-sm transition-all duration-300">
            {String(activeIndex + 1).padStart(2, '0')}
          </span>
          <span className="text-[#AEBBD0]/30">/</span>
          <span className="text-[#AEBBD0]/60 text-xs">
            {String(total).padStart(2, '0')}
          </span>
          <span className="inline-block w-5 h-px bg-[#AEBBD0]/20 mx-1" />
          <span className="uppercase tracking-wider text-[#AEBBD0]/80 truncate max-w-[180px] sm:max-w-none">
            {activeProject.category[language]}
          </span>
        </div>

        <span className="text-[#AEBBD0]/50 hidden sm:inline tracking-wider">
          {activeProject.locationTag[language]}
        </span>
      </div>

      {/* Coverflow Carousel Stage — Continuous Draggable & Layered Track */}
      <div
        ref={stageRef}
        onPointerDown={handlePointerDown}
        onDragStart={(e) => e.preventDefault()}
        className={`relative w-full overflow-hidden py-2 sm:py-4 touch-pan-y ${
          isDragging ? 'cursor-grabbing' : 'cursor-grab'
        }`}
      >
        {/* Ambient Nebula Glow Behind Outer Edges */}
        <div className="absolute start-0 top-1/2 -translate-y-1/2 w-48 sm:w-64 h-64 bg-[#168BFF]/12 rounded-full blur-[90px] pointer-events-none" />
        <div className="absolute end-0 top-1/2 -translate-y-1/2 w-48 sm:w-64 h-64 bg-[#48D9E8]/12 rounded-full blur-[90px] pointer-events-none" />

        {/* Single-Cell CSS Grid Stage so all virtual cards share the exact center origin */}
        <div className="grid grid-cols-1 place-items-center w-full">
          {virtualSlots.map((slotIndex) => {
            const projIdx = ((slotIndex % total) + total) % total;
            const proj = projects[projIdx];

            // Relative logical distance from current continuous position
            const relDiff = slotIndex - currentPos;
            // Signed screen offset: negative = Left on screen, positive = Right on screen
            const visualOffset = relDiff * dirFactor;
            const absOffset = Math.abs(visualOffset);
            const signOffset = Math.sign(visualOffset);

            // Continuous horizontal translation (% of card width)
            // At 0 -> 0%, at ±1 -> ±27% (with a subtle Coverflow parting arc around ±0.5)
            const translateXPercent =
              absOffset <= 1
                ? signOffset *
                  (absOffset * 27 + Math.sin(absOffset * Math.PI) * 5)
                : signOffset * (27 + (absOffset - 1) * 24);

            // Continuous scale: 1.0 at center -> 0.87 at ±1 -> 0.77 at ±2
            const scale =
              absOffset <= 1
                ? 1 - absOffset * 0.13
                : Math.max(0.74, 0.87 - (absOffset - 1) * 0.1);

            // Continuous opacity: 1.0 at center -> 0.44 at ±1 -> 0.0 at ±1.85
            const baseOpacity =
              absOffset <= 1
                ? 1 - absOffset * 0.56
                : Math.max(0, 0.44 * (1 - (absOffset - 1) / 0.85));

            const isSlotHovered =
              hoveredSlot === slotIndex && absOffset > 0.4 && !isDragging;
            const opacity = isSlotHovered
              ? Math.min(1, baseOpacity + 0.22)
              : baseOpacity;

            // Continuous depth layering: center card sits strictly above side cards,
            // and the incoming side card sits strictly above the outgoing side card
            const zIndex =
              slotIndex === nearestSlot
                ? 30
                : absOffset <= 1.5
                ? Math.round(25 - absOffset * 8)
                : 5;

            // Is this card the primary centered card?
            const isCenterCard = absOffset < 0.35;
            const isClickableSideCard =
              absOffset >= 0.35 && absOffset < 1.45;

            // Directional edge-fade gradient intensity (0 at center, 1 at side preview)
            const leftEdgeFadeOpacity =
              visualOffset < -0.02
                ? Math.min(1, Math.abs(visualOffset) * 1.15)
                : 0;
            const rightEdgeFadeOpacity =
              visualOffset > 0.02
                ? Math.min(1, Math.abs(visualOffset) * 1.15)
                : 0;
            const sideTintOpacity = Math.min(1, absOffset * 1.1);

            return (
              <div
                key={slotIndex}
                aria-hidden={!isCenterCard}
                onMouseEnter={() => setHoveredSlot(slotIndex)}
                onMouseLeave={() =>
                  setHoveredSlot((prev) => (prev === slotIndex ? null : prev))
                }
                onClick={() => {
                  if (hasDraggedRef.current) return;
                  if (isClickableSideCard) {
                    animateToSlot(slotIndex);
                  }
                }}
                style={{
                  transform: `translate3d(${translateXPercent.toFixed(3)}%, 0, 0) scale(${scale.toFixed(4)})`,
                  opacity: Number(opacity.toFixed(4)),
                  zIndex,
                  visibility: opacity <= 0.01 ? 'hidden' : 'visible',
                  willChange: 'transform, opacity',
                }}
                className={`col-start-1 row-start-1 w-full max-w-[calc(100vw-48px)] sm:max-w-[760px] md:max-w-[800px] lg:max-w-[840px] xl:max-w-[860px] mx-auto ${
                  isClickableSideCard && !isDragging ? 'cursor-pointer' : ''
                } ${opacity <= 0.02 ? 'pointer-events-none' : ''}`}
              >
                <article
                  className={`relative rounded-3xl bg-[#101E38]/85 backdrop-blur-xl border transition-colors duration-300 overflow-hidden md:h-[405px] lg:h-[420px] flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.6)] ${
                    isCenterCard
                      ? 'border-[#AEBBD0]/25 hover:border-[#48D9E8]/40'
                      : 'border-[#AEBBD0]/15'
                  }`}
                >
                  {/* Side-Card Coverflow Atmospheric Overlays (Smoothly dissolve as card approaches center) */}
                  <div
                    style={{ opacity: leftEdgeFadeOpacity }}
                    className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-r from-[#080D1B] via-[#080D1B]/70 to-transparent"
                  />
                  <div
                    style={{ opacity: rightEdgeFadeOpacity }}
                    className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-l from-[#080D1B] via-[#080D1B]/70 to-transparent"
                  />
                  <div
                    style={{ opacity: sideTintOpacity }}
                    className="absolute inset-0 z-15 pointer-events-none bg-gradient-to-tr from-[#168BFF]/15 via-[#080D1B]/30 to-[#48D9E8]/15"
                  />

                  {/* Image Showcase: Proportionate Height */}
                  <div className="relative w-full h-[200px] sm:h-[225px] md:h-[245px] lg:h-[255px] overflow-hidden bg-[#080D1B] shrink-0">
                    <img
                      src={proj.heroImage}
                      alt={isCenterCard ? proj.imageAlt[language] : ''}
                      draggable={false}
                      className="w-full h-full object-cover object-center select-none pointer-events-none"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#101E38] via-[#101E38]/20 to-transparent pointer-events-none" />

                    {/* Category Pill on Image */}
                    <div className="absolute top-3 start-3 flex items-center gap-2 z-10 pointer-events-none">
                      <span className="px-2.5 py-1 rounded-full bg-[#080D1B]/85 backdrop-blur-md border border-[#48D9E8]/30 text-[11px] font-semibold text-[#48D9E8] flex items-center gap-1.5 shadow-md">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#48D9E8] animate-pulse" />
                        <span>{proj.category[language]}</span>
                      </span>
                    </div>

                    {/* Ref Code on Image */}
                    <div className="absolute top-3 end-3 z-10 pointer-events-none">
                      <span className="px-2 py-0.5 rounded-full bg-[#080D1B]/75 backdrop-blur-md border border-[#AEBBD0]/20 text-[10px] font-mono text-[#AEBBD0] shadow-sm">
                        {proj.refCode}
                      </span>
                    </div>
                  </div>

                  {/* Narrative Content Body: Compact & Elegant */}
                  <div
                    className={`p-4 sm:p-5 lg:p-6 flex-1 flex flex-col justify-between space-y-3 ${
                      !isCenterCard ? 'pointer-events-none' : ''
                    }`}
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5 text-xs font-mono text-[#48D9E8]">
                        <Sparkles className="w-3.5 h-3.5 text-[#48D9E8] shrink-0" />
                        <span className="truncate">
                          {proj.subtitle[language]}
                        </span>
                      </div>
                      <h3 className="headline-font text-lg sm:text-xl lg:text-2xl font-bold text-[#F5F7FC] tracking-tight">
                        <Link
                          to={`/work/${proj.slug}`}
                          tabIndex={isCenterCard ? 0 : -1}
                          draggable={false}
                          className="hover:text-[#48D9E8] transition-colors"
                        >
                          {proj.title[language]}
                        </Link>
                      </h3>
                    </div>

                    <p className="text-xs sm:text-[13px] text-[#AEBBD0] leading-relaxed max-w-2xl line-clamp-2 font-light">
                      {proj.shortDescription[language]}
                    </p>

                    {/* Selected Deliverables & Footer Action Row */}
                    <div className="pt-3 border-t border-[#AEBBD0]/15 flex flex-wrap items-center justify-between gap-3">
                      <div className="flex items-center gap-1.5">
                        {proj.deliverables[language]
                          .slice(0, 2)
                          .map((item, idx) => (
                            <span
                              key={idx}
                              className="text-[10px] sm:text-[11px] px-2 py-0.5 rounded-md bg-[#080D1B]/70 border border-[#AEBBD0]/15 text-[#AEBBD0] hidden sm:inline-block"
                            >
                              {item}
                            </span>
                          ))}
                        <div className="flex items-center gap-1 text-[11px] text-[#AEBBD0]/70 font-mono sm:hidden">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#168BFF]" />
                          <span>{proj.locationTag[language]}</span>
                        </div>
                      </div>

                      <Link
                        to={`/work/${proj.slug}`}
                        tabIndex={isCenterCard ? 0 : -1}
                        draggable={false}
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-[#168BFF] hover:bg-[#168BFF]/90 text-white font-semibold text-xs transition-all duration-300 shadow-[0_0_12px_rgba(22,139,255,0.25)] hover:shadow-[0_0_18px_rgba(22,139,255,0.45)] group cursor-pointer"
                      >
                        <span>{t.common.exploreProject}</span>
                        <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </article>
              </div>
            );
          })}
        </div>

        {/* Previous Button (Side Left in LTR, Side Right in RTL) */}
        <button
          type="button"
          onClick={prevSlide}
          aria-label={language === 'ar' ? 'المشروع السابق' : 'Previous Project'}
          className="absolute start-1 sm:start-3 lg:start-4 top-1/2 -translate-y-1/2 z-40 w-9 h-9 sm:w-10 sm:h-10 lg:w-11 lg:h-11 rounded-full bg-[#101E38]/90 hover:bg-[#168BFF] text-[#F5F7FC] hover:text-white border border-[#AEBBD0]/20 hover:border-[#168BFF] flex items-center justify-center transition-all duration-300 shadow-[0_4px_16px_rgba(0,0,0,0.5)] hover:shadow-[0_0_20px_rgba(22,139,255,0.45)] focus:outline-none focus:ring-2 focus:ring-[#48D9E8] cursor-pointer"
        >
          {isRTL ? (
            <ChevronRight className="w-5 h-5 rtl:rotate-0" />
          ) : (
            <ChevronLeft className="w-5 h-5" />
          )}
        </button>

        {/* Next Button (Side Right in LTR, Side Left in RTL) */}
        <button
          type="button"
          onClick={nextSlide}
          aria-label={language === 'ar' ? 'المشروع التالي' : 'Next Project'}
          className="absolute end-1 sm:end-3 lg:end-4 top-1/2 -translate-y-1/2 z-40 w-9 h-9 sm:w-10 sm:h-10 lg:w-11 lg:h-11 rounded-full bg-[#101E38]/90 hover:bg-[#168BFF] text-[#F5F7FC] hover:text-white border border-[#AEBBD0]/20 hover:border-[#168BFF] flex items-center justify-center transition-all duration-300 shadow-[0_4px_16px_rgba(0,0,0,0.5)] hover:shadow-[0_0_20px_rgba(22,139,255,0.45)] focus:outline-none focus:ring-2 focus:ring-[#48D9E8] cursor-pointer"
        >
          {isRTL ? (
            <ChevronLeft className="w-5 h-5 rtl:rotate-0" />
          ) : (
            <ChevronRight className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Pagination Navigation Dots (Centered Horizontally Below Carousel) */}
      <div className="flex items-center justify-center gap-2 mt-4 sm:mt-5">
        {projects.map((proj, idx) => {
          const isActive = idx === activeIndex;
          return (
            <button
              key={proj.slug}
              type="button"
              onClick={() => goToProjectIndex(idx)}
              aria-label={`${
                language === 'ar' ? 'الانتقال إلى المشروع' : 'Go to project'
              } ${idx + 1}: ${proj.title[language]}`}
              className={`transition-all duration-300 rounded-full focus:outline-none focus:ring-1 focus:ring-[#48D9E8] cursor-pointer ${
                isActive
                  ? 'w-6 sm:w-7 h-2 bg-[#48D9E8] shadow-[0_0_10px_rgba(72,217,232,0.6)]'
                  : 'w-2 h-2 bg-[#AEBBD0]/30 hover:bg-[#AEBBD0]/60'
              }`}
            />
          );
        })}
      </div>
    </div>
  );
};
