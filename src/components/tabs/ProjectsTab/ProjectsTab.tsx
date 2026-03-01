import { useState } from 'react';
import { Modal } from '../../Modal/Modal';
import styles from './ProjectsTab.module.css';


import project1 from '../../../assets/Project1.mov';
import project2 from '../../../assets/Project2.mov';
import project4 from '../../../assets/Screen Recording 2026-01-08 at 10.48.43 AM (online-video-cutter.com).mp4';
import project5 from '../../../assets/Project5.mp4';
import screenshot1 from '../../../assets/ugo.png';  
import screenshot2 from '../../../assets/Screenshot 2025-12-29 at 3.30.58 PM.png';  
import screenshot3 from '../../../assets/Screenshot 2025-12-29 at 3.31.15 PM.png';
import screenshot4 from '../../../assets/Screenshot 2025-12-29 at 3.31.27 PM.png';

interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  tags: string[];
  gradient: string;
  size?: 'small' | 'medium' | 'large' | 'tall';
  video?: string;
  imagePreview?: string;
  images?: string[];
  link?: string;
  access?: 'private' | 'public'|'no access';
}

  const projects: Project[] = [
    {
      id: 1,
      title: 'Brand Identity Generator',
      description: 'AI-powered brand identity platform',
      fullDescription:
        'Collaborative AI platform for generating brand identity elements including visuals, tone, and messaging. Worked in a team and led frontend development, defining UI architecture, reusable components, and state management.',
      tags: ['React', 'TypeScript', 'Redux', 'AI'],
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      size: 'large',
      link: 'https://simpleecreate.com/',
      video: project1,
      images: [screenshot3, screenshot4],
      access: 'public',
    },
    
    {
      id: 2,
      title: 'Game Script Generator',
      description: 'Blueprint-based game script generator',
      fullDescription:
        'Frontend application for generating game scripts based on blueprint-style logic. Focused on UI logic, state flow, and interactive configuration of game scenarios.',
      tags: ['Vue.js', 'TypeScript', 'Game Dev', 'AI'],
      gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
      size: 'small',
      video: project2,
      access: 'no access',
    },
     
 
    {
      id: 3,
      title: 'Snack Bar E-commerce Website',
      description: 'Online store for healthy snack bars',
      fullDescription:
        'Designed and developed a full-stack e-commerce website for selling healthy snack bars. Implemented frontend, backend, and UI/UX design, including product catalog, user flows, and purchase logic.',
      tags: ['Next.js', 'TypeScript', 'Stripe','Resend'],
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      size: 'tall',
      imagePreview: screenshot1,
      images: [screenshot1],
      access: 'public',
      link: 'https://ugo-foods.com/',
    },
  
    {
      id: 3,
      title: 'Content Generation Platform v2',
      description: 'AI content generation for social media',
      fullDescription:
        'Second version of a content generation platform combining AI text and image generation into ready-to-publish social media posts. Includes an advanced photo editor. Worked in a team and led frontend development.',
      tags: ['React', 'AI', 'Image Editor', 'Team Leadership'],
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      size: 'small',
      imagePreview: screenshot3,
      images: [screenshot3, screenshot2],
      access: 'no access',
    },
 
    {
      id:5,
      title: 'Real-time Image Filters Library',
      description: 'WebGL-based image filters for React',
      fullDescription:
        'A lightweight React library for real-time image filtering using WebGL shaders. Developers can apply pre-built filters or manually adjust image colors and visual parameters. Documented with Storybook and optimized for performance.',
      tags: ['React', 'TypeScript', 'WebGL', 'Storybook'],
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      size: 'large',
      video: project4,
      link: 'https://mariarass.github.io/image-filters-demo/',
      access: 'public',
    },
  
    {
      id: 6,
      title: 'AI Content For Social Networks',
      description: 'Generate and repost AI content',
      fullDescription:
        'Platform for AI-based social media content generation (text & images) with post editing, scheduling, and cross-platform reposting. Led frontend development and worked in a collaborative team.',
      tags: ['React', 'TypeScript', 'AI', 'Frontend'],
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      size: 'large',
      video: project5,
      access: 'private',
      images: [screenshot3, screenshot4],
    },

  

  
  

  
  ];
  

export const ProjectsTab = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setActiveSlide(0);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    setActiveSlide(0);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <div className={styles.penIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#a371f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <div className={styles.tabs}>
              <button className={styles.tabActive}>Some of My Recent Projects 2025-2026</button>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`${styles.card} ${styles[project.size || 'small']}`}
              style={{ animationDelay: `${index * 0.08}s` }}
              onClick={() => handleProjectClick(project)}
            >
              <div className={styles.cardImage}>
                {/* Background: gradient or image/video preview */}
                {project.video ? (
                  <video 
                    src={project.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className={styles.previewVideo}
                  />
                ) : project.imagePreview ? (
                  <img 
                    src={project.imagePreview} 
                    alt={project.title}
                    className={styles.previewImage}
                  />
                ) : (
                  <div className={styles.gradientBg} style={{ background: project.gradient }} />
                )}
                
                {/* Hover Overlay */}
                <div className={styles.cardOverlay}>
                  <span className={styles.cardTitle}>{project.title}</span>
                  <div className={styles.cardIcon}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                      <polyline points="15 3 21 3 21 9"/>
                      <line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <Modal isOpen={!!selectedProject} onClose={handleCloseModal}>
        {selectedProject && (
          <div className={styles.modalContent}>
            {/* Media Section */}
            <div className={styles.modalMedia}>
              {/* Video Player */}
              {selectedProject.video && (
                <div className={styles.videoContainer}>
                  <video 
                    src={selectedProject.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls
                    className={styles.videoPlayer}
                  
                  />
                </div>
              )}

              {/* Image Slider - only show if no video */}
              {!selectedProject.video && selectedProject.images && selectedProject.images.length > 0 && (
                <div className={styles.sliderContainer}>
                  <div className={styles.sliderMain}>
                    <img 
                      src={selectedProject.images[activeSlide]} 
                      alt={`${selectedProject.title} slide ${activeSlide + 1}`}
                      className={styles.sliderImage}
                    />
                  </div>
                  
                  {selectedProject.images.length > 1 && (
                    <div className={styles.sliderThumbnails}>
                      {selectedProject.images.map((img, index) => (
                        <button
                          key={index}
                          className={`${styles.thumbnail} ${index === activeSlide ? styles.thumbnailActive : ''}`}
                          onClick={() => setActiveSlide(index)}
                        >
                          <img src={img} alt={`Thumbnail ${index + 1}`} />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Fallback gradient if no video and no images */}
              {!selectedProject.video && (!selectedProject.images || selectedProject.images.length === 0) && (
                <div 
                  className={styles.modalGradient}
                  style={{ background: selectedProject.gradient }}
                />
              )}
            </div>

            {/* Content */}
            <div className={styles.modalInfo}>
              <h2 className={styles.modalTitle}>{selectedProject.title}</h2>
              <p className={styles.modalDescription}>{selectedProject.fullDescription}</p>
              
              <div className={styles.modalTags}>
                {selectedProject.tags.map((tag) => (
                  <span key={tag} className={styles.modalTag}>{tag}</span>
                ))}
              </div>

              <div className={styles.modalActions}>
                {selectedProject.link ? (
                  <a 
                    href={selectedProject.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.modalButton}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                      <polyline points="15 3 21 3 21 9"/>
                      <line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                    View Live
                  </a>
                ) : (
                  <span className={styles.noLinkBadge}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <line x1="12" y1="8" x2="12" y2="12"/>
                      <line x1="12" y1="16" x2="12.01" y2="16"/>
                    </svg>
                   {selectedProject.access === 'no access' ? 'Project is no longer maintained' : 'Project is private'}
                  </span>
                )}
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};
