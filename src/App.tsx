import { useState, useRef, useEffect, useCallback } from 'react';
import type { TabId } from './types';
import {
  Navigation,
  ProfileCard,
  HomeTab,
  ProjectsTab,
  EducationTab,
  ExperienceTab,
  ContactTab,
} from './components';
import styles from './App.module.css';

const tabs: TabId[] = ['home', 'experience', 'projects', 'education', 'contact'];

const tabComponents: Record<TabId, React.ReactNode> = {
  home: <HomeTab />,
  experience: <ExperienceTab />,
  projects: <ProjectsTab />,
  education: <EducationTab />,
  contact: <ContactTab />,
};

function App() {
  const [activeTab, setActiveTab] = useState<TabId>('home');
  const [isScrolling, setIsScrolling] = useState(false);
  const sectionRefs = useRef<Record<TabId, HTMLElement | null>>({
    home: null,
    projects: null,
    education: null,
    experience: null,
    contact: null,
  });
  const contentRef = useRef<HTMLDivElement>(null);

  const scrollToSection = useCallback((tabId: TabId) => {
    const section = sectionRefs.current[tabId];
    if (section) {
      setIsScrolling(true);
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setTimeout(() => setIsScrolling(false), 1000);
    }
  }, []);

  const handleTabChange = useCallback((tabId: TabId) => {
    setActiveTab(tabId);
    scrollToSection(tabId);
  }, [scrollToSection]);

  const handleContactClick = useCallback(() => {
    handleTabChange('contact');
  }, [handleTabChange]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    
    tabs.forEach((tabId) => {
      const section = sectionRefs.current[tabId];
      if (!section) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !isScrolling) {
              const ratio = entry.intersectionRatio;
              if (ratio > 0.3) {
                setActiveTab(tabId);
              }
            }
          });
        },
        {
          root: null,
          rootMargin: '-100px 0px -40% 0px',
          threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5],
        }
      );

      observer.observe(section);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [isScrolling]);

  useEffect(() => {
    const content = contentRef.current;
    if (!content) return;

    let scrollTimeout: ReturnType<typeof setTimeout>;

    const handleScroll = () => {
      if (isScrolling) return;

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const sections = tabs.map(tabId => ({
          id: tabId,
          element: sectionRefs.current[tabId],
        })).filter(s => s.element);

        const windowHeight = window.innerHeight;

        for (let i = 0; i < sections.length; i++) {
          const section = sections[i];
          if (!section.element) continue;

          const rect = section.element.getBoundingClientRect();
          const sectionTop = rect.top;
          const sectionBottom = rect.bottom;

          if (sectionTop < windowHeight * 0.5 && sectionBottom > windowHeight * 0.3) {
            if (activeTab !== section.id) {
              setActiveTab(section.id);
            }
            break;
          }
        }
      }, 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [activeTab, isScrolling]);

  return (
    <>
      <Navigation activeTab={activeTab} onTabChange={handleTabChange} />
      <main className={styles.main}>
        <ProfileCard onContactClick={handleContactClick} />
        <div className={styles.content} ref={contentRef}>
          {tabs.map((tabId) => (
            <section
              key={tabId}
              id={tabId}
              ref={(el) => { sectionRefs.current[tabId] = el; }}
              className={styles.section}
            >
              {tabComponents[tabId]}
            </section>
          ))}
        </div>
      </main>
    </>
  );
}

export default App;
