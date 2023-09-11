import React from 'react';
import styles from './Hero.module.css';
import Jordan from '../../images/jordan.jpg'

// this is the parallax background effect with random photos from both portrait and landscape

const Hero = () => {
    return (
        <div className={styles.hero}>
            <div className={styles.about}>
                <p>yo I'm jordan</p>
                <div className={styles.cropper}>
                    <img src={Jordan} alt="alt" className={styles.jordan_phto}></img>
                </div>
                
            </div>
        </div>
    )
}

export default Hero