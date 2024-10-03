import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

import styles from '../assets/styles/header.module.scss';

const Header = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [limitedPosition, setLimitedPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const screenWidth = window.innerWidth;

    const cursorRange = screenWidth * 0.1;

    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const cursorRange = screenWidth * 0.65;
    const cursorRangeY = screenHeight * 0.4;

    const limitedX =
      mousePosition.x < cursorRange
        ? 170
        : Math.min(Math.max(mousePosition.x, 175), 180);

    const limitedY =
      mousePosition.y < cursorRangeY
        ? 175
        : Math.min(Math.max(mousePosition.y, 175), 180);

    setLimitedPosition({ x: limitedX, y: limitedY });
  }, [mousePosition]);

  const pupilsAnimation = useSpring({
    to: { left: limitedPosition.x, top: limitedPosition.y },
  });

  return (
    <div className={styles.about}>
      <div className={styles.aboutMe}>
        <h1>Welcome,</h1>
        <p>to Front-End Developer L. Bielskus portfolio website.</p>
      </div>

      <div className={styles.ideas}>
        <div className={styles.screenshot}>
          <img
            className={styles.myScreen}
            src='/images/Screenshot1000px.png'
            alt='Screenshot'
          />
        </div>
        <div className={styles.faceContainer}>
          <div className={styles.faceContent}>
            <img
              className={styles.myFace}
              src='/images/myface2.png'
              alt='My Face'
            />
            <animated.img
              className={styles.pupils}
              src='/images/pupils2.png'
              alt='Pupils'
              style={pupilsAnimation}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
