import styles from './ContactTab.module.css';

export const ContactTab = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Let's Work Together</h2>
        <p className={styles.subtitle}>
          Have a project in mind? I'd love to hear about it. 
          Choose the most convenient way to reach me.
        </p>
      </div>

      <div className={styles.contactCards}>
        {/* Email Card */}
        <a 
          href="mailto:mariarass2001@gmail.com" 
          className={styles.contactCard}
        >
          <div className={styles.cardIcon}>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
          </div>
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>Email Me</h3>
            <span className={styles.cardValue}>mariarass2001@gmail.com</span>
            <span className={styles.cardHint}>Click to send an email</span>
          </div>
          <div className={styles.cardArrow}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </div>
        </a>

        {/* LinkedIn Card */}
        <a 
         href="https://www.linkedin.com/in/maria-raspopova-992a77263/"
          target="_blank" 
          rel="noopener noreferrer"
          className={styles.contactCard}
        >
          <div className={styles.cardIcon}>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect x="2" y="9" width="4" height="12"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
          </div>
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>LinkedIn</h3>
            <span className={styles.cardValue}>@mariaraspopova</span>
            <span className={styles.cardHint}>Let's connect</span>
          </div>
          <div className={styles.cardArrow}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </div>
        </a>
      </div>

     
    </div>
  );
};
