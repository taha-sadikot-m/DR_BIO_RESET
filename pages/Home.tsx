
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  ArrowRight, Activity, Heart, Brain, ShieldCheck, 
  Utensils, Zap, Play, Star, Check, Microscope, AlertCircle,
  FileText, Thermometer, ClipboardCheck, Dna, Pill, Smile, User, Sun, ChevronRight, CheckCircle, Apple, Briefcase, TrendingUp, Battery, Moon, Flame
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button, Section, FadeInView, ProblemCapsule, ProgramCapsule, BioMetricResultCard, ImpactMetricCard } from '../components/UI';
import { PROGRAMS, TESTIMONIALS, HERO_CONTENT, TRUST_METRICS, SOLUTION_STEPS, BUSINESS_IMPACT_DATA } from '../constants';

// --- Hero DNA Visuals ---
const DNARow: React.FC<{ index: number }> = ({ index }) => {
  const duration = 5; 
  const delay = index * 0.2; 
  const width = 140; 

  return (
    <div className="relative flex items-center justify-center w-[300px] h-2">
       {/* Rung */}
       <motion.div
          animate={{
            width: [width, 0, width],
            opacity: [0.3, 0.1, 0.3],
            height: ["1px", "2px", "1px"]
          }}
          transition={{
             duration: duration / 2,
             repeat: Infinity,
             ease: "easeInOut",
             delay: -delay
          }}
          className="absolute bg-gradient-to-r from-primary-teal to-secondary-wellness"
       />

       {/* Strand A */}
       <motion.div
         animate={{
           x: [-width/2, width/2, -width/2],
           scale: [0.8, 1.3, 0.8],
           opacity: [0.6, 1, 0.6],
           zIndex: [0, 20, 0]
         }}
         transition={{
           duration,
           repeat: Infinity,
           ease: "easeInOut",
           delay: -delay
         }}
         className="absolute w-4 h-4 rounded-full bg-[#1ABC9C] shadow-md border border-white"
       />

       {/* Strand B */}
       <motion.div
         animate={{
           x: [width/2, -width/2, width/2],
           scale: [1.3, 0.8, 1.3],
           opacity: [1, 0.6, 1],
           zIndex: [20, 0, 20]
         }}
         transition={{
           duration,
           repeat: Infinity,
           ease: "easeInOut",
           delay: -delay
         }}
         className="absolute w-4 h-4 rounded-full bg-[#3498DB] shadow-md border border-white"
       />
    </div>
  )
};

const SlantedDNAHelix = () => {
  const rows = 35; 
  
  return (
    <div className="relative h-[800px] w-full flex items-center justify-center perspective-1000">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[300px] h-[700px] bg-gradient-to-b from-secondary-energy/5 to-secondary-wellness/5 blur-[80px] rotate-[-25deg] rounded-full" />
      </div>
      <div className="relative flex flex-col items-center gap-5 transform -rotate-[25deg] scale-110 origin-center z-10">
         {Array.from({ length: rows }).map((_, i) => (
            <DNARow key={i} index={i} />
         ))}
      </div>
    </div>
  );
};

const BioDashboardCard = ({ label, value, trend, delay, className }: { label: string, value: string, trend: 'up' | 'down' | 'neutral', delay: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.8, type: "spring" }}
    className={`absolute bg-white/90 backdrop-blur-lg border border-gray-100 p-4 rounded-xl flex flex-col gap-1 min-w-[150px] shadow-[0_8px_30px_rgb(0,0,0,0.06)] ${className} z-20`}
  >
    <div className={`absolute w-2 h-2 rounded-full -left-1 top-6 ${trend === 'down' ? 'bg-secondary-energy' : 'bg-secondary-wellness'}`}></div>
    <div className="flex items-center justify-between mb-1">
       <p className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold">{label}</p>
    </div>
    <p className="text-primary-navy font-heading font-bold text-2xl tracking-tight">{value}</p>
    <div className="flex items-center gap-2 mt-1">
        <span className={`text-xs font-bold px-1.5 py-0.5 rounded-md ${trend === 'down' ? 'bg-secondary-energy/10 text-secondary-energy' : 'bg-secondary-wellness/10 text-secondary-wellness'}`}>
            {trend === 'down' ? '▼' : '▲'} {trend === 'down' ? 'Optimized' : 'Increased'}
        </span>
    </div>
  </motion.div>
);

const TrustMetric: React.FC<{ label: string, value: string, sub: string }> = ({ label, value, sub }) => (
  <div className="text-center px-4 py-6 bg-white flex flex-col items-center justify-center h-full">
    <motion.div 
      initial={{ scale: 0.5, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
      viewport={{ once: true }}
      className="font-heading font-bold text-3xl md:text-4xl text-primary-navy mb-2"
    >
      {value}
    </motion.div>
    <div className="text-primary-teal font-semibold text-xs md:text-sm uppercase tracking-wider mb-1">{label}</div>
    <div className="text-gray-400 text-[10px] md:text-xs">{sub}</div>
  </div>
);

// --- PROBLEM SECTION: CAPSULE LAYOUT ---
const OrbitingCoreRefined = () => {
  return (
    <div className="relative w-full max-w-6xl mx-auto min-h-[600px] flex flex-col items-center justify-center py-12">
      
      {/* Mobile Vertical Timeline */}
      <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-dashed border-l-2 border-primary-navy/10 border-dashed lg:hidden h-full z-0"></div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full items-center relative z-10">
        
        {/* Left Column (Cards connect to Right) */}
        <div className="space-y-16 order-2 lg:order-1">
          <ProblemCapsule 
            icon={Battery} 
            title="Shattered Energy?" 
            desc="You rely on caffeine to wake up and screens to wind down, leading to crash-and-burn cycles." 
            delay={0.2}
            quadrant={2}
          />
          <ProblemCapsule 
            icon={Brain} 
            title="Brain Fog & Fatigue?" 
            desc="Struggling to focus during investor meetings or deep work sessions? Your mitochondria are struggling." 
            delay={0.4}
            quadrant={3}
          />
        </div>

        {/* Center Column (Core) */}
        <div className="order-1 lg:order-2 flex justify-center my-8 lg:my-0">
          <div className="relative w-64 h-64">
            <div className="absolute inset-0 rounded-full bg-red-500/5 animate-ping duration-[3s]"></div>
            <div className="absolute inset-8 rounded-full bg-red-500/10 animate-pulse duration-[2s]"></div>
            <div className="absolute inset-0 border border-red-100 rounded-full"></div>
            <div className="absolute inset-12 border border-red-200 rounded-full border-dashed animate-[spin_10s_linear_infinite]"></div>
            
            <div className="relative z-10 bg-white border-4 border-red-50 shadow-[0_0_40px_rgba(239,68,68,0.15)] w-full h-full rounded-full flex flex-col items-center justify-center text-center p-6">
               <AlertCircle className="w-12 h-12 text-red-500 mb-2" />
               <h3 className="font-heading font-bold text-xl text-primary-navy">Hidden<br/>Burnout</h3>
               <p className="text-xs text-red-500 font-bold uppercase tracking-widest mt-1">The Root Cause</p>
            </div>
          </div>
        </div>

        {/* Right Column (Cards connect to Left) */}
        <div className="space-y-16 order-3">
          <ProblemCapsule 
            icon={TrendingUp} 
            title="Stress Weight?" 
            desc="Working out but still gaining belly fat? That's cortisol hijacking your metabolism." 
            delay={0.6}
            quadrant={1}
          />
          <ProblemCapsule 
            icon={ShieldCheck} 
            title="Broken Sleep?" 
            desc="Waking up tired? Without deep sleep, your leadership capability drops by 40%." 
            delay={0.8}
            quadrant={4}
          />
        </div>
      </div>
    </div>
  );
};

// --- PROGRAMS SECTION: CAPSULE GRID ---
const ProgramGridSystem = () => {
    const navigate = useNavigate();

    return (
        <div className="w-full max-w-[1920px] mx-auto px-4 md:px-8">
             {/* Swipe Indicator (Mobile Only) */}
            <div className="md:hidden flex justify-center gap-2 mt-2 mb-6 text-xs text-gray-400 font-bold uppercase tracking-widest animate-pulse">
               <ArrowRight className="w-4 h-4" /> Swipe to Explore
            </div>

            {/* Grid for 3 main programs */}
            <div className="flex flex-col md:grid md:grid-cols-3 gap-6">
                
                {/* Cohort */}
                <div className="w-full h-full cursor-pointer" onClick={() => navigate(`/programs/${PROGRAMS[0].id}`)}>
                   <FadeInView delay={0.1} className="w-full h-full">
                     <ProgramCapsule {...PROGRAMS[0]} />
                   </FadeInView>
                </div>
                
                {/* CXO Reset */}
                <div className="w-full h-full cursor-pointer" onClick={() => navigate(`/programs/${PROGRAMS[1].id}`)}>
                   <FadeInView delay={0.2} className="w-full h-full">
                     <ProgramCapsule {...PROGRAMS[1]} />
                   </FadeInView>
                </div>

                {/* Concierge */}
                <div className="w-full h-full cursor-pointer" onClick={() => navigate(`/programs/${PROGRAMS[2].id}`)}>
                   <FadeInView delay={0.3} className="w-full h-full">
                     <ProgramCapsule {...PROGRAMS[2]} />
                   </FadeInView>
                </div>
            </div>
        </div>
    );
};

// --- Custom Large Impact Card for Bento Grid ---
const LargeImpactCard: React.FC<{
    title: string;
    description: string;
    result: string;
    icon: React.ElementType;
    delay: number;
}> = ({ title, description, result, icon: Icon, delay }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay, duration: 0.5 }}
            className="h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-[2rem] p-8 md:p-10 border border-white/20 hover:border-secondary-energy/50 hover:bg-white/10 transition-all group relative overflow-hidden"
        >
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary-energy/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3"></div>
            
            <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                     <div className="w-16 h-16 rounded-2xl bg-secondary-energy flex items-center justify-center text-primary-navy mb-6 shadow-lg shadow-secondary-energy/30 group-hover:scale-110 transition-transform duration-500">
                        <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-3xl font-heading font-bold text-white mb-4 leading-tight">{title}</h3>
                    <p className="text-gray-300 text-lg leading-relaxed">{description}</p>
                </div>
                
                <div className="mt-8 pt-6 border-t border-white/10">
                     <p className="text-secondary-energy font-bold text-xl flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-secondary-energy animate-pulse"></span>
                        {result}
                     </p>
                </div>
            </div>
        </motion.div>
    );
}

// --- Standard Impact Card for Bento Grid ---
const BentoImpactCard: React.FC<{
    title: string;
    description: string;
    result: string;
    icon: React.ElementType;
    delay: number;
    accentColor?: string;
}> = ({ title, description, result, icon: Icon, delay, accentColor = "text-secondary-wellness" }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 0.5 }}
            className="h-full bg-primary-navy/50 backdrop-blur-md rounded-[2rem] p-6 md:p-8 border border-white/10 hover:bg-primary-navy/80 transition-all group hover:-translate-y-1"
        >
            <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white border border-white/10 group-hover:bg-white/10 transition-colors">
                    <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-lg text-white leading-tight">{title}</h3>
            </div>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed flex-grow">{description}</p>
            <div className="pt-4 border-t border-white/5">
                 <p className={`${accentColor} font-bold text-sm flex items-start gap-2`}>
                     <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                     {result}
                 </p>
            </div>
        </motion.div>
    );
}


// --- Main Page ---

const Home: React.FC = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const navigate = useNavigate();

  return (
    <div className="overflow-x-hidden bg-white font-sans selection:bg-primary-teal/20 selection:text-primary-navy">
      
      {/* HERO SECTION */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
        <div className="absolute inset-0 w-full h-full bg-[linear-gradient(rgba(53,147,141,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(53,147,141,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] rounded-full bg-primary-teal/5 blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-secondary-wellness/5 blur-[80px]" />

        {/* MOBILE HERO BACKGROUND: DNA HELIX */}
        <div className="absolute inset-0 lg:hidden flex items-center justify-center z-0 pointer-events-none overflow-hidden opacity-100">
             <div className="scale-[0.6] origin-center blur-[0.5px]">
                <SlantedDNAHelix />
             </div>
             <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-secondary-wellness/10 to-white/40"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center mt-16 md:mt-20">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl relative z-20"
          >
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-primary-navy leading-[1.1] mb-6 tracking-tight">
              We Rebuild the Biology of <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-teal to-secondary-wellness">High-Performing Leaders.</span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed font-normal font-sans">
              {HERO_CONTENT.subheadline}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" size="lg" className="text-lg px-8 shadow-lg shadow-primary-teal/20" onClick={() => navigate('/programs/cxo-reset')}>
                {HERO_CONTENT.ctaPrimary}
              </Button>
                <Button variant="outline" size="lg" className="border-gray-300 text-gray-600 hover:text-primary-navy hover:border-primary-navy" onClick={() => { window.location.href = 'https://drbioreset.involve.me/personal-wellness-intake-form'; }}>
                 {HERO_CONTENT.ctaSecondary}
              </Button>
            </div>

            <div className="mt-12 flex items-center gap-8 border-t border-gray-100 pt-8">
               <div>
                 <p className="text-3xl font-bold text-primary-navy font-heading">1M+</p>
                 <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mt-1 font-heading">Vision 2030</p>
               </div>
               <div className="h-8 w-px bg-gray-200"></div>
               <div>
                 <p className="text-3xl font-bold text-primary-navy font-heading">Top 1%</p>
                 <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mt-1 font-heading">Founders & CXOs</p>
               </div>
            </div>
          </motion.div>

          <motion.div 
            style={{ y }}
            className="relative hidden lg:flex items-center justify-center h-[800px] w-full"
          >
             <SlantedDNAHelix />
             <BioDashboardCard label="Cognitive Score" value="98/100" trend="up" delay={1.2} className="top-[20%] right-[15%]" />
             <BioDashboardCard label="Deep Sleep" value="2hr 15m" trend="up" delay={1.5} className="top-[50%] left-[10%]" />
             <BioDashboardCard label="Cortisol" value="Optimized" trend="down" delay={1.8} className="bottom-[25%] right-[20%]" />
          </motion.div>
        </div>
      </section>

      {/* SECTION 1: TRUST BAR - Bento Lite */}
      <div className="bg-gray-100 border-y border-gray-100 z-20 relative py-0">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-px bg-gray-100 border-x border-gray-100">
          {TRUST_METRICS.map((m, i) => (
             <TrustMetric key={i} label={m.label} value={m.value} sub={m.sub} />
          ))}
        </div>
      </div>

      {/* SECTION 2: THE PROBLEM (Orbiting Core) */}
      <Section pattern="grid" className="bg-[#F9FAFB] min-h-[800px] flex items-center">
        <div className="w-full">
           <div className="text-center max-w-3xl mx-auto mb-16">
             <FadeInView>
               <span className="text-red-500 font-heading font-bold tracking-widest uppercase text-xs mb-2 block">The Founder's Dilemma</span>
               <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-navy">"I'm Successful, But I Feel Broken."</h2>
               <p className="text-gray-600 mt-4 font-sans">You don't treat diseases one by one. You fix the root systems of the body that control everything.</p>
             </FadeInView>
           </div>
           <OrbitingCoreRefined />
        </div>
      </Section>

      {/* SECTION 3: THE SOLUTION (BioReset Model - 5 Systems) - REFACTORED FOR 5 CARDS */}
      <Section pattern="light" className="py-24">
        <div className="container mx-auto max-w-6xl">
           <div className="text-center mb-16">
              <FadeInView>
                 <span className="text-primary-teal font-heading font-bold tracking-widest uppercase text-xs mb-2 block">The BioReset Model</span>
                 <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-navy">We Don't Just Treat Symptoms.<br/>We Rebuild 5 Core Systems.</h2>
              </FadeInView>
           </div>
           
           {/* Grid for 5 Items: 3 on top, 2 on bottom (centered) */}
           <div className="flex flex-wrap justify-center gap-6">
              {SOLUTION_STEPS.map((step, i) => (
                 <FadeInView key={step.id} delay={i * 0.1} className="w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.33%-1.5rem)] flex-grow-0">
                    <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-xl relative group hover:-translate-y-2 transition-transform duration-300 h-full flex flex-col min-h-[300px]">
                       <div className="w-16 h-16 rounded-2xl bg-primary-teal/10 flex items-center justify-center text-primary-teal mb-6 group-hover:bg-primary-teal group-hover:text-white transition-colors duration-500">
                          <step.icon className="w-8 h-8" />
                       </div>
                       <h3 className="text-xl font-heading font-bold text-primary-navy mb-3">{step.title}</h3>
                       <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">{step.description}</p>
                       <div className="mt-auto w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-300 group-hover:border-primary-teal group-hover:text-primary-teal transition-all">
                           <ArrowRight className="w-4 h-4" />
                       </div>
                    </div>
                 </FadeInView>
              ))}
           </div>
        </div>
      </Section>

      {/* SECTION 4: BUSINESS IMPACT (ROI Matrix) - BENTO GRID REDESIGN */}
      <Section pattern="navy" className="py-24 overflow-hidden relative">
         {/* Background Glows */}
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-secondary-wellness/5 rounded-full blur-[150px] pointer-events-none"></div>

         <div className="container mx-auto max-w-7xl relative z-10">
            <div className="text-center mb-16">
                 <FadeInView>
                    <span className="text-secondary-energy font-heading font-bold tracking-widest uppercase text-xs mb-2 block">ROI of Health</span>
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">How Biology Translates to Business.</h2>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        When your biology is optimized, your business performs better. Every great decision starts with a clear, energized mind.
                    </p>
                </FadeInView>
            </div>

            {/* BENTO GRID LAYOUT */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 h-auto lg:h-[600px]">
                
                {/* 1. HERO CARD (Sharper Mental Clarity) - Spans 4 cols on LG */}
                <div className="lg:col-span-8 md:col-span-2 h-full">
                    <LargeImpactCard 
                        title={BUSINESS_IMPACT_DATA[0].title}
                        description={BUSINESS_IMPACT_DATA[0].description}
                        result={BUSINESS_IMPACT_DATA[0].result}
                        icon={BUSINESS_IMPACT_DATA[0].icon || Brain}
                        delay={0}
                    />
                </div>

                {/* 2. Sustained Energy - Spans 4 cols on LG */}
                <div className="lg:col-span-4 md:col-span-1 h-full">
                     <BentoImpactCard 
                        title={BUSINESS_IMPACT_DATA[1].title}
                        description={BUSINESS_IMPACT_DATA[1].description}
                        result={BUSINESS_IMPACT_DATA[1].result}
                        icon={BUSINESS_IMPACT_DATA[1].icon || Battery}
                        delay={0.1}
                        accentColor="text-secondary-energy"
                     />
                </div>

                {/* ROW 2 */}
                
                {/* 3. Improved Sleep - Spans 4 cols */}
                <div className="lg:col-span-4 md:col-span-1 h-full">
                     <BentoImpactCard 
                        title={BUSINESS_IMPACT_DATA[2].title}
                        description={BUSINESS_IMPACT_DATA[2].description}
                        result={BUSINESS_IMPACT_DATA[2].result}
                        icon={BUSINESS_IMPACT_DATA[2].icon || Moon}
                        delay={0.2}
                        accentColor="text-blue-300"
                     />
                </div>

                {/* 4. Balanced Hormones - Spans 4 cols */}
                <div className="lg:col-span-4 md:col-span-1 h-full">
                     <BentoImpactCard 
                        title={BUSINESS_IMPACT_DATA[3].title}
                        description={BUSINESS_IMPACT_DATA[3].description}
                        result={BUSINESS_IMPACT_DATA[3].result}
                        icon={BUSINESS_IMPACT_DATA[3].icon || Activity}
                        delay={0.3}
                        accentColor="text-purple-300"
                     />
                </div>

                {/* 5. Lower Stress - Spans 4 cols */}
                <div className="lg:col-span-4 md:col-span-1 h-full">
                     <BentoImpactCard 
                        title={BUSINESS_IMPACT_DATA[4].title}
                        description={BUSINESS_IMPACT_DATA[4].description}
                        result={BUSINESS_IMPACT_DATA[4].result}
                        icon={BUSINESS_IMPACT_DATA[4].icon || ShieldCheck}
                        delay={0.4}
                        accentColor="text-green-300"
                     />
                </div>
            </div>
         </div>
      </Section>

      {/* SECTION 5: PROGRAMS */}
      <Section pattern="light" id="programs" className="py-24">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <FadeInView>
            <span className="text-primary-teal font-heading font-bold tracking-widest uppercase text-xs mb-2 block">Our Product Structure</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-navy mb-4">Select Your Transformation Tier</h2>
            <p className="text-gray-600 font-sans">From our 5-week metabolic reset cohort to annual concierge care.</p>
          </FadeInView>
        </div>
        <ProgramGridSystem />
      </Section>

      {/* SECTION 6: SOCIAL PROOF */}
      <Section pattern="grid" className="py-20 bg-gray-50">
         <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-heading font-bold text-primary-navy">Real People. Real Results.</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <BioMetricResultCard 
                quote="I never thought diabetes could be reversed without medicine."
                author="Meena S"
                metric="HbA1c 6.4 -> 5.7"
                image="/images/meena_s.jpeg"
                delay={0}
              />
              <BioMetricResultCard 
                quote="No medicine, no crazy workout, he gave some hacks."
                author="Megha Rathore"
                metric="Cycle Normalised"
                image="/images/megha_rathore.jpeg"
                delay={0.1}
              />
              <BioMetricResultCard 
                quote="He’s less like a doctor and more like that one friend who knows exactly what your body needs."
                author="Vaishnavi Suthar"
                metric="Better Recovery | Energy High"
                image="/images/vaishnavi_suthar.jpeg"
                delay={0.2}
              />
            </div>
            <div className="mt-10 flex justify-center">
              <Button variant="outline" size="lg" className="border-gray-300 text-primary-navy hover:border-primary-teal hover:text-primary-teal" onClick={() => {
                const msg = encodeURIComponent("Hi, can you share more client results?");
                window.location.href = `https://wa.me/918824000316?text=${msg}`;
              }}>
                 View More Results
              </Button>
            </div>
         </div>
      </Section>

      {/* SECTION 7: FINAL CTA */}
      <Section pattern="light" className="text-center py-32 relative border-t border-gray-100">
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary-teal/5 rounded-full blur-[120px] pointer-events-none"></div>
         <div className="max-w-4xl mx-auto relative z-10">
           <motion.div
             initial={{ scale: 0.9, opacity: 0 }}
             whileInView={{ scale: 1, opacity: 1 }}
             transition={{ duration: 0.5 }}
           >
             <h2 className="text-4xl md:text-6xl font-heading font-bold mb-8 leading-tight text-primary-navy">
               "Reset your biology.<br/>Reclaim your edge."
             </h2>
             <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Button variant="elite" size="lg" className="px-12 py-5 text-xl shadow-xl shadow-secondary-energy/20" onClick={() => {
                  const msg = encodeURIComponent("Hi, I'd like to join the Metabolic Reset Cohort. Please guide me through the next steps.");
                  window.location.href = `https://wa.me/918824000316?text=${msg}`;
                }}>
                   Join the Metabolic Reset Cohort
                </Button>
             </div>
           </motion.div>
         </div>
      </Section>
    </div>
  );
};

export default Home;
