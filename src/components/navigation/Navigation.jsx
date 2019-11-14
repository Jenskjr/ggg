import React from 'react';
import { Link } from 'react-router-dom';
// css
import styles from './Navigation.module.css'

const Navigation = () => {
    
    return (<div className={styles.navigation}>
      <div className={styles.navButton}>
        <Link className={styles.link} to="/alle-ngoer">
          <span>Alle NGOer</span>
        </Link>
      </div>
      <div className={styles.navButton}>
        <Link className={styles.link} to="/tidligere-søgte">
          <span>Tidligere søgte</span>
        </Link>
      </div>
      <div className={styles.navButton}>
        <Link className={styles.link} to="/støttet-før">
          <span>Støttet Før</span>
        </Link>
      </div>
    </div>)
}

export default Navigation;