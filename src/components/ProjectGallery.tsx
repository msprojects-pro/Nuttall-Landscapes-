import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, MapPin } from 'lucide-react';
import { GALLERY_PROJECTS } from '../data/landscapingData';
import { GalleryProject } from '../types';
import { LightboxModal } from './LightboxModal';

interface ProjectGalleryProps {
  onOpenQuote: (service?: string) => void;
}

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({ onOpenQuote }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<GalleryProject | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'transformations', label: 'Transformations' },
    { id: 'driveways', label: 'Resin Driveways' },
    { id: 'patios', label: 'Porcelain Patios' },
    { id: 'lawns', label: 'Turf & Artificial Grass' },
    { id: 'fencing', label: 'Fencing & Walls' },
  ];

  const filteredProjects =
    activeCategory === 'all'
      ? GALLERY_PROJECTS
      : GALLERY_PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 bg-[#101211] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-widest text-[#24CB33] uppercase mb-3">
              <span className="inline-block w-2 h-0.5 bg-[#24CB33]" />
              <span>OUR RECENT WORK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight mb-4">
              Outdoor Spaces Worth Showing Off.
            </h2>
            <p className="text-base sm:text-lg text-[#F5F7F4]/75 leading-relaxed">
              Take a look at the kind of garden transformations and landscaping finishes that can completely change an outdoor space.
            </p>
          </div>

          {/* Interactive Filter Tabs (Buttons conforming to anti-slop rules) */}
          <div className="flex flex-wrap gap-2 p-1.5 bg-[#191C1A] border border-[#242725] rounded-xl self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-all duration-200 whitespace-nowrap cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#24CB33] text-black shadow-md'
                    : 'text-[#F5F7F4]/70 hover:text-white hover:bg-[#242725]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetric Gallery Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project, index) => {
              // Asymmetric span for marquee visual cadence
              const isLarge = index === 0 || index === 4;

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => setSelectedProject(project)}
                  className={`group relative rounded-2xl overflow-hidden bg-[#191C1A] border border-[#242725] hover:border-[#24CB33]/60 cursor-pointer transition-all duration-300 hover:shadow-2xl ${
                    isLarge ? 'md:col-span-2 lg:col-span-2' : 'col-span-1'
                  }`}
                >
                  {/* Photo Container */}
                  <div className={`relative w-full ${isLarge ? 'h-80 sm:h-96' : 'h-72 sm:h-80'} overflow-hidden`}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#101211] via-[#101211]/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                    {/* Quick Lightbox Action Icon */}
                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#101211]/80 backdrop-blur-md border border-[#242725] flex items-center justify-center text-[#24CB33] opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100">
                      <Maximize2 className="w-4 h-4" />
                    </div>

                    {/* Bottom Info Block */}
                    <div className="absolute bottom-0 inset-x-0 p-6 flex flex-col justify-end">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#24CB33]">
                          {project.categoryLabel}
                        </span>
                        <span className="text-[#4D4D4D]">·</span>
                        <span className="flex items-center gap-1 text-[11px] text-[#F5F7F4]/70">
                          <MapPin className="w-3 h-3 text-[#24CB33]" />
                          {project.location}
                        </span>
                      </div>

                      <h3 className="text-lg sm:text-xl font-display font-bold text-white group-hover:text-[#24CB33] transition-colors leading-snug">
                        {project.title}
                      </h3>
                      <p className="text-xs text-[#F5F7F4]/70 mt-1 line-clamp-2">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenQuote={onOpenQuote}
      />
    </section>
  );
};
