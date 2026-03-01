import styles from './EducationTab.module.css';

const education = [
  {
    id: 1,
    date: '2017 - 2021',
    title: 'Computer Science',
    institution: 'Moscow State Technical University of Civil Aviation',
    description:  'Technical education in information technology focused on algorithms, application architecture, network systems, and database design.',
  },
  {
    id: 2,
    date: '2021 - 2022',
    title: 'Frontend Development Program',
    institution: 'IT-Incubator',
    description: 'Intensive frontend development program covering React,Next.js,JavaScript, TypeScript, Redux,RTK,ReactQuery,Storybook and modern web technologies.',
  }
];
export const FrontendIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 4h16v16H4z" />
    <path d="M8 8h8M8 12h6M8 16h4" />
  </svg>
);

export const LanguageIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 5h16v14H4z" />
    <path d="M8 9h8M8 13h6" />
  </svg>
);

export const StateIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
  </svg>
);

export const ToolsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M14.7 6.3a4 4 0 0 0-5.7 5.7l-6 6 2 2 6-6a4 4 0 0 0 5.7-5.7z" />
  </svg>
);


const skillCategories = [
  {
    title: 'Frontend',
    icon: <FrontendIcon />,
    skills: ['React', 'Vue.js', 'Next.js', 'Electron', 'HTML5', 'CSS3', 'SASS']
  },
  {
    title: 'Languages',
    icon: <LanguageIcon />,
    skills: ['TypeScript', 'JavaScript','Python']
  },
  {
    title: 'State & Data',
    icon: <StateIcon />,
    skills: ['Redux/RTK', 'Vuex', 'GraphQL', 'REST API', 'WebSockets']
  },
  {
    title: 'Tools & Testing',
    icon: <ToolsIcon />,
    skills: ['Git', 'Jest', 'Storybook', 'Webpack', 'Vite', 'Figma','Storybook']
  }
];

export const EducationTab = () => {
  return (
    <div className={styles.container}>
   
      <section className={styles.section}>
        <div className={styles.header}>
          <h2 className={styles.title}>Education</h2>
          <p className={styles.subtitle}>My academic background and certifications</p>
        </div>

        <div className={styles.timeline}>
          {education.map((edu, index) => (
            <div 
              key={edu.id} 
              className={styles.timelineItem}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
       
              
              <div className={styles.timelineContent}>
                <span className={styles.date}>{edu.date}</span>
                <h3 className={styles.degree}>{edu.title}</h3>
                <span className={styles.institution}>{edu.institution}</span>
                <p className={styles.description}>{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.header}>
          <h2 className={styles.title}>Skills & Technologies</h2>
          <p className={styles.subtitle}>Technologies I work with on a daily basis</p>
        </div>

        <div className={styles.skillCategories}>
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title} 
              className={styles.skillCategory}
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <div className={styles.categoryHeader}>
                <span className={styles.categoryIcon}>{category.icon}</span>
                <h3 className={styles.categoryTitle}>{category.title}</h3>
              </div>
              <div className={styles.skillTags}>
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skill} 
                    className={styles.skillTag}
                    style={{ animationDelay: `${categoryIndex * 0.1 + skillIndex * 0.03}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

