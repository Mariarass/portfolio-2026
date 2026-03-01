import { useEffect, useState } from 'react';
import styles from './HomeTab.module.css';

const skills = ['React', 'Vue.js', 'TypeScript', 'RTK', 'GraphQL','Next.js'];

export const SpeedIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
  </svg>
);

export const ChatIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 15a4 4 0 0 1-4 4H7l-4 4V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
  </svg>
);

export const MobileIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="7" y="2" width="10" height="20" rx="2" />
    <circle cx="12" cy="18" r="1" />
  </svg>
);

export const CodeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

export const HomeTab = () => {
  const [currentSkill, setCurrentSkill] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const whyMeItems = [
    { icon: <SpeedIcon />, title: 'Fast Development', desc: 'Optimized performance' },
    { icon: <ChatIcon />, title: 'Good Communication', desc: 'Easy to communicate' },
    { icon: <MobileIcon />, title: 'Fully Responsive', desc: 'All devices supported' },
    { icon: <CodeIcon />, title: 'Clean Code', desc: 'Maintainable & scalable' },
  ];
  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className={`${styles.container} ${isVisible ? styles.visible : ''}`}>
      <div className={styles.heroSection}>
        {/* Badge */}
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          <span>Open to work</span>
        </div>

        {/* Main Heading */}
        <h1 className={styles.heroTitle}>
          <span className={styles.line}>
            <span className={styles.word}>Crafting</span>{' '}
            <span className={styles.word} style={{ animationDelay: '0.1s' }}>Digital</span>
          </span>
        
        </h1>

        {/* Dynamic Subtitle */}
        <div className={styles.subtitle}>
          <span className={styles.subtitleStatic}>Frontend Developer specializing in</span>
          <span className={styles.skillRotator}>
            <span key={currentSkill} className={styles.currentSkill}>
              {skills[currentSkill]}
            </span>
          </span>
        </div>

        {/* Description */}
        <p className={styles.heroDescription}>
          With <span className={styles.accentText}>4+ years</span> of commercial experience, 
          I transform complex ideas into seamless, high-performance web applications. 
          Passionate about clean code, pixel-perfect UI, and exceptional user experiences.
        </p>

        <div className={styles.whyMeSection}>
        <div className={styles.whyMeHeader}>
          <span className={styles.whyMeTag}>Why Choose Me</span>
          <h3 className={styles.whyMeTitle}>Building products that matter</h3>
        </div>
        
        <div className={styles.whyMeGrid}>
          {whyMeItems.map((item, index) => (
            <div 
              key={item.title} 
              className={styles.whyMeCard}
              style={{ animationDelay: `${0.6 + index * 0.1}s` }}
            >
              <div className={styles.whyMeIconWrapper}>
                <span className={styles.whyMeIcon}>{item.icon}</span>
              </div>
              <div className={styles.whyMeContent}>
                <span className={styles.whyMeCardTitle}>{item.title}</span>
                <span className={styles.whyMeCardDesc}>{item.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>


        {/* CTA Buttons */}
        <div className={styles.ctaGroup}>
          <button 
            className={styles.ctaButtonPrimary}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className={styles.buttonContent}>
              <span>Start a Project</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </span>
            <span className={styles.buttonGlow} />
          </button>
          <button 
            className={styles.ctaButtonSecondary}
            onClick={scrollToProjects}
          >
            <span>View My Work</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </button>
        </div>
      </div>

    </div>
  );
};
