
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Section, FadeInView, ProgramCapsule, Button } from '../components/UI';
import { PROGRAMS } from '../constants';
import { Clock, CheckCircle, ClipboardList, ArrowRight } from 'lucide-react';

const Programs: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white pt-20">
      {/* HERO */}
      <Section pattern="light" className="pb-12 pt-16">
        <div className="text-center max-w-4xl mx-auto">
          <FadeInView>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-navy mb-6">
              Expert-Led Biohacking for Every Stage
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-sans">
              Whether you need a 5-week metabolic reset or a fully managed concierge service, we have a protocol designed for your lifestyle.
            </p>
          </FadeInView>
        </div>
      </Section>

      {/* PROGRAMS GRID */}
      <Section pattern="grid" className="pt-8 pb-24">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* 1️⃣ Metabolic Reset Cohort */}
              <div className="w-full h-full cursor-pointer" onClick={() => navigate(`/programs/${PROGRAMS[0].id}`)}>
                 <FadeInView delay={0.1} className="w-full h-full">
                   <ProgramCapsule {...PROGRAMS[0]} />
                 </FadeInView>
              </div>
              
              {/* 2️⃣ CXO Reset */}
              <div className="w-full h-full cursor-pointer" onClick={() => navigate(`/programs/${PROGRAMS[1].id}`)}>
                 <FadeInView delay={0.2} className="w-full h-full">
                   <ProgramCapsule {...PROGRAMS[1]} />
                 </FadeInView>
              </div>

              {/* 3️⃣ Concierge */}
              <div className="w-full h-full cursor-pointer" onClick={() => navigate(`/programs/${PROGRAMS[2].id}`)}>
                 <FadeInView delay={0.3} className="w-full h-full">
                   <ProgramCapsule {...PROGRAMS[2]} />
                 </FadeInView>
              </div>
          </div>
        </div>
      </Section>

      {/* FOOTER CTA */}
      <Section pattern="navy" className="text-center py-20">
         <FadeInView>
             <h2 className="text-3xl font-heading font-bold text-white mb-6">Not sure where to start?</h2>
             <Button variant="elite" icon={<ArrowRight className="w-4 h-4" />}>
                 Book a Discovery Call
             </Button>
         </FadeInView>
      </Section>
    </div>
  );
};

export default Programs;
