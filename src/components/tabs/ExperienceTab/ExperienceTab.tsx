import styles from './ExperienceTab.module.css';

const experiences = [
  {
    id: 1,
    date: 'Sep 2023 - Present',
    title: 'Frontend Developer',
    company: 'SimpleeCreate',
    description: 'Led frontend architecture across multiple large-scale AI-driven projects, coordinating team efforts, conducting code reviews, and ensuring high-quality, on-time delivery.Built scalable web applications featuring real-time communication, advanced content editors, authentication, and social media API integrations.',
    technologies: ['React','Vue.js','Electron','Vuex','RTK','Webpack','Vite','Figma','Storybook','TypeScript',  'OpenAI API', ],
    isActive: true
  },
  {
    id: 2,
    date: 'Dec 2022 - Sep 2023',
    title: 'Frontend Developer',
    company: 'MAX Drive',
    description: 'Built and maintained Vue.js-based frontend components, contributing to product architecture and scalable application structure.Implemented core features such as booking, e-commerce flows, search, and user interactions, and integrated Mapbox for interactive mapping.',
    technologies: ['Vue','Vuex','GraphQL'],
    isActive: false
  },
  {
    id: 3,
    date: 'Feb 2022 - Dec 2022',
    title: 'Frontend Developer',
    company: 'Freelance',
    description: 'Developed a Next.js frontend in a team-based environment, focusing on secure authentication, user profiles, and content publishing.',
    technologies: ['Next.js', 'TypeScript','RTK'],
    isActive: false
  },
  {
    id: 4,
    date: 'Jul 2021 - Jun 2022',
    title: 'QA Engineer',
    company: 'QuickResto',
    description: 'Conducted comprehensive testing for restaurant management software. Developed automated test scripts, performed regression testing, and collaborated with developers on bug fixes.',
    technologies: ['Selenium', 'Jest', 'Python', 'Jira', ],
    isActive: false
  }
];

export const ExperienceTab = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Work Experience</h2>
        <p className={styles.subtitle}>My professional journey in software development</p>
      </div>

      <div className={styles.timeline}>
        
        {experiences.map((exp, index) => (
          <div 
            key={exp.id} 
            className={`${styles.timelineItem} ${exp.isActive ? styles.active : ''}`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
          
            <div className={styles.timelineContent}>
              <span className={styles.date}>{exp.date}</span>
              <h3 className={styles.role}>{exp.title}</h3>
              <span className={styles.company}>{exp.company}</span>
              <p className={styles.description}>{exp.description}</p>
              
              <div className={styles.technologies}>
                {exp.technologies.map((tech) => (
                  <span key={tech} className={styles.techTag}>{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

