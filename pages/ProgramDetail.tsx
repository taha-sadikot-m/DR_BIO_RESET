
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { PROGRAMS } from '../constants';
import { Section, FadeInView, Button, CurriculumCard, ImpactMetricCard } from '../components/UI';
import { CheckCircle, Clock, Calendar, ShieldCheck, ArrowRight, Brain, Battery, Briefcase, Zap, Map, ChevronRight, PlayCircle } from 'lucide-react';

const ProgramDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [activePhaseIndex, setActivePhaseIndex] = useState(0);
  
  // Find program
  const program = PROGRAMS.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!program) {
    return <Navigate to="/programs" replace />;
  }

  // Smooth scroll handler for the roadmap navigation
  const handlePhaseClick = (index: number) => {
    setActivePhaseIndex(index);
    const element = document.getElementById(`phase-${index}`);
    if (element) {
      const offset = 100; // adjust for sticky header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-white pt-20">
        {/* HERO SECTION */}
        <div className="relative min-h-[70vh] flex items-center bg-primary-navy text-white overflow-hidden">
             {/* Background Image with Overlay */}
             <div className="absolute inset-0">
                 <img src={program.heroImage} alt={program.title} className="w-full h-full object-cover opacity-20 transform scale-105" />
                 <div className="absolute inset-0 bg-gradient-to-r from-primary-navy via-primary-navy/95 to-primary-navy/40"></div>
                 <div className="absolute inset-0 bg-[linear-gradient(rgba(26,188,156,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(26,188,156,0.05)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30"></div>
             </div>
             
             <div className="container mx-auto px-6 relative z-10 py-20">
                 <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <FadeInView>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-energy/20 text-secondary-energy text-xs font-bold uppercase tracking-widest mb-6 border border-secondary-energy/20 backdrop-blur-md">
                            <Zap className="w-3 h-3" /> {program.tagline}
                        </div>
                        <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-[1.1] tracking-tight">
                            {program.title}
                        </h1>
                        <p className="text-xl text-gray-300 mb-8 leading-relaxed font-sans max-w-xl">
                            {program.description}
                        </p>
                        
                        <div className="flex flex-wrap items-center gap-4 mb-10 text-sm font-bold text-white/90">
                            <div className="flex items-center gap-2 bg-white/10 px-4 py-2.5 rounded-lg backdrop-blur-md border border-white/5">
                                <Clock className="w-4 h-4 text-secondary-energy" />
                                <span>{program.duration}</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/10 px-4 py-2.5 rounded-lg backdrop-blur-md border border-white/5">
                                <ShieldCheck className="w-4 h-4 text-secondary-energy" />
                                <span>{program.format}</span>
                            </div>
                            <div className="px-4 py-2.5 rounded-lg bg-gradient-to-r from-secondary-energy/20 to-secondary-wellness/20 text-secondary-energy border border-secondary-energy/20">
                                {program.price}
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <Button variant="elite" size="lg" className="px-8 shadow-xl shadow-secondary-energy/20">
                                {program.cta} <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                        </div>
                    </FadeInView>
                 </div>
             </div>
        </div>

        {/* OVERVIEW SECTION */}
        <Section pattern="light" className="py-24">
            <div className="container mx-auto max-w-6xl">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    <FadeInView>
                        <h2 className="text-3xl font-heading font-bold text-primary-navy mb-6">Program Philosophy</h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                            {program.longDescription}
                        </p>
                        
                        <div className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100 relative overflow-hidden">
                             <div className="absolute top-0 right-0 w-32 h-32 bg-primary-teal/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                             <h4 className="font-bold text-primary-navy mb-4 flex items-center gap-2 relative z-10">
                                 <Brain className="w-5 h-5 text-secondary-energy" /> 
                                 Ideal Candidate Profile
                             </h4>
                             <ul className="space-y-4 relative z-10">
                                 {program.idealFor?.map((item, i) => (
                                     <li key={i} className="flex items-start gap-3 text-gray-700 text-sm">
                                         <CheckCircle className="w-4 h-4 text-primary-teal flex-shrink-0 mt-0.5" />
                                         <span className="font-medium">{item}</span>
                                     </li>
                                 ))}
                             </ul>
                        </div>
                    </FadeInView>
                    
                    <FadeInView delay={0.2}>
                         <div className="bg-white shadow-xl shadow-gray-200/50 rounded-[2rem] p-8 border border-gray-100">
                             <h3 className="text-xl font-heading font-bold text-primary-navy mb-6 flex items-center gap-2">
                                <ShieldCheck className="w-5 h-5 text-primary-teal" /> Core Deliverables
                             </h3>
                             <ul className="space-y-4">
                                 {program.deliverables?.map((item, i) => (
                                     <li key={i} className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-primary-teal/5 transition-colors border border-gray-100 hover:border-primary-teal/20 group">
                                         <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-400 group-hover:text-primary-teal group-hover:bg-primary-teal/10 shadow-sm border border-gray-100 transition-all">
                                             <CheckCircle className="w-5 h-5" />
                                         </div>
                                         <span className="font-semibold text-primary-navy text-sm group-hover:text-primary-teal transition-colors">{item}</span>
                                     </li>
                                 ))}
                             </ul>
                         </div>
                    </FadeInView>
                </div>
            </div>
        </Section>

        {/* BIOLOGICAL ROADMAP (THE STICKY CURRICULUM) */}
        {program.timeline && program.timeline.length > 0 && (
            <div className="bg-gray-50 py-24 relative" id="curriculum">
                <div className="container mx-auto max-w-7xl px-4 md:px-8">
                    <div className="text-center mb-20">
                        <FadeInView>
                            <span className="text-primary-teal font-heading font-bold tracking-widest uppercase text-xs mb-2 block">The Protocol</span>
                            <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary-navy mb-4">Your Biological Roadmap</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">A clinically structured transformation designed to respect individuality, time, and biology.</p>
                        </FadeInView>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-12 relative">
                        {/* STICKY NAV (Desktop) */}
                        <div className="hidden lg:block lg:col-span-4 relative">
                            <div className="sticky top-32 space-y-4">
                                {program.timeline.map((phase, i) => (
                                    <div 
                                        key={i}
                                        onClick={() => handlePhaseClick(i)}
                                        className={`p-5 rounded-2xl cursor-pointer transition-all duration-300 border group ${
                                            activePhaseIndex === i 
                                            ? 'bg-primary-navy text-white shadow-lg border-primary-navy scale-105' 
                                            : 'bg-white text-gray-500 hover:bg-white border-gray-200 hover:border-primary-teal/30 hover:shadow-md'
                                        }`}
                                    >
                                        <div className="flex justify-between items-center mb-1">
                                            <span className={`text-[10px] font-bold uppercase tracking-widest ${activePhaseIndex === i ? 'text-secondary-energy' : 'text-gray-400'}`}>
                                                {phase.week}
                                            </span>
                                            {activePhaseIndex === i && <motion.div layoutId="activeDot" className="w-2 h-2 bg-secondary-energy rounded-full" />}
                                        </div>
                                        <h3 className={`font-heading font-bold text-lg leading-tight ${activePhaseIndex === i ? 'text-white' : 'text-gray-800'}`}>
                                            {phase.phaseName}
                                        </h3>
                                        <p className={`text-xs mt-2 line-clamp-1 ${activePhaseIndex === i ? 'text-gray-400' : 'text-gray-400'}`}>
                                            {phase.title}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CONTENT SCROLL */}
                        <div className="lg:col-span-8 space-y-24">
                            {program.timeline.map((phase, i) => (
                                <div key={i} id={`phase-${i}`} className="scroll-mt-32 relative">
                                    {/* Phase Header */}
                                    <FadeInView className="mb-8">
                                        <div className="flex items-center gap-4 mb-4">
                                            <span className="px-3 py-1 bg-secondary-energy/10 text-secondary-energy font-bold text-xs uppercase rounded-full">
                                                {phase.week}
                                            </span>
                                            <div className="h-px bg-gray-200 flex-grow"></div>
                                        </div>
                                        <h3 className="text-3xl font-heading font-bold text-primary-navy mb-2">{phase.phaseName}: {phase.title}</h3>
                                        <p className="text-gray-600 text-lg mb-6">{phase.objective}</p>
                                        
                                        <div className="flex gap-2 mb-8">
                                            {phase.domains.map((d, idx) => (
                                                <span key={idx} className="px-3 py-1 bg-white border border-gray-200 rounded-lg text-xs font-bold text-gray-500 uppercase shadow-sm">
                                                    {d}
                                                </span>
                                            ))}
                                        </div>
                                    </FadeInView>

                                    {/* Daily Blocks Grid */}
                                    <div className="grid gap-6">
                                        {phase.dailyBlocks ? (
                                            phase.dailyBlocks.map((block, bIdx) => (
                                                <CurriculumCard 
                                                    key={bIdx}
                                                    index={bIdx}
                                                    range={block.range}
                                                    title={block.title}
                                                    goal={block.goal}
                                                    methods={block.methods}
                                                    why={block.why}
                                                    icon={block.icon}
                                                />
                                            ))
                                        ) : (
                                            <div className="bg-white p-8 rounded-2xl border border-gray-200 text-center text-gray-500 italic">
                                                Customized daily protocols are generated after initial consultation.
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        )}

        {/* BUSINESS IMPACT SECTION (From PDF Page 5) */}
        <Section pattern="navy" className="py-24">
             <div className="container mx-auto max-w-6xl">
                 <div className="grid lg:grid-cols-2 gap-16 items-start">
                     <FadeInView className="sticky top-32">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-widest mb-6 border border-white/10">
                            <Briefcase className="w-3 h-3" /> Business Case
                        </div>
                         <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
                            The ROI of Biology
                         </h2>
                         <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                            When your biology is optimized, your business performs better. Every great decision, strategy, and innovation starts with a clear, energized mind.
                         </p>
                         <div className="p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                            <p className="text-white italic text-lg font-medium">"I gained 10-12 productive hours a day with no burnout."</p>
                            <p className="text-secondary-energy text-sm font-bold mt-2">— Founder, Series A Tech Startup</p>
                         </div>
                     </FadeInView>
                     
                     <div className="grid gap-4">
                         {program.impacts?.map((impact, i) => (
                             <ImpactMetricCard 
                                key={i}
                                title={impact.title}
                                description={impact.description}
                                result={impact.result}
                                icon={impact.icon || Zap}
                                delay={i * 0.1}
                             />
                         ))}
                     </div>
                 </div>
             </div>
        </Section>

        {/* FINAL CTA */}
        <Section pattern="light" className="py-24 text-center relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary-teal/5 rounded-full blur-[100px] pointer-events-none"></div>
            <FadeInView className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-navy mb-6">Ready to reset your biology?</h2>
                <p className="text-gray-600 mb-10 max-w-xl mx-auto">
                    Join the top 1% of founders who have upgraded their operating system.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                     <Button variant="elite" size="lg" className="px-10 py-4 text-lg">
                        Apply for Cohort
                     </Button>
                     <Button variant="outline" size="lg" className="px-10 py-4 text-lg">
                        Book Consultation
                     </Button>
                </div>
            </FadeInView>
        </Section>
    </div>
  );
};

export default ProgramDetail;
