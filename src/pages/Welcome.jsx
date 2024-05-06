import { Link } from 'react-router-dom'
import {
  AnimatePresence,
  motion,
  useAnimate,
  useScroll,
  useTransform,
} from 'framer-motion'
import cityImg from '../assets/city.jpg'
import heroImg from '../assets/hero.png'
import { Fragment, useContext, useRef } from 'react'
import { ThemeContext } from '../context/ThemeContext'
export default function WelcomePage() {
  const { theme, toggleTheme } = useContext(ThemeContext)
  const { scrollY } = useScroll()
  const [scope, animate] = useAnimate()
  async function imgClick() {
    if (theme === 'light') {
      const animation = animate(
        'button',
        {
          scale: [1, 120], // 2, 1
          x: [0, 2000], // -1, 0
          opacity: [1, 0.2], // 1
        },
        { duration: 1 },

        { type: 'tween' }
      )
      await animation
      document.querySelector('body').setAttribute('class', 'dark-theme')
      const secondAnimation = animate(
        'button',
        {
          scale: [70, 2, 1], // 2, 1
          x: [-150, -1, 0], // -1, 0
          opacity: [0, 0.25, 1], // 1
          // scale: 0.5,
        },
        { duration: 1 },

        { type: 'tween' }
      )

      await secondAnimation
    } else {
      const animation = animate(
        'button',
        {
          scale: [1, 80], // 2, 1
          x: [0, -150], // -1, 0
          opacity: [1, 0.25], // 1
        },
        { duration: 1 },

        { type: 'tween' }
      )
      await animation
      document.querySelector('body').setAttribute('class', 'light-theme')
      const secondAnimation = animate(
        'button',
        {
          scale: [70, 2, 1], // 2, 1
          x: [-150, -1, 0], // -1, 0
          opacity: [0, 0.25, 1], // 1
          // scale: 0.5,
        },
        { duration: 1 },

        { type: 'tween' }
      )

      await secondAnimation
    }

    toggleTheme()
  }

  const yCity = useTransform(scrollY, [0, 200], [0, -100])
  const opacityCity = useTransform(
    scrollY,
    [0, 200, 300, 500],
    [1, 0.5, 0.5, 0]
  )
  const yHero = useTransform(scrollY, [0, 200], [0, -150])
  const opacityHero = useTransform(scrollY, [0, 300, 500], [1, 1, 0])
  const yText = useTransform(scrollY, [0, 200, 300, 500], [0, 50, 50, 300])
  const scaleText = useTransform(scrollY, [0, 300], [1, 1.5])
  return (
    <>
      <header id="welcome-header">
        <motion.div
          id="welcome-header-content"
          style={{ scale: scaleText, y: yText }}
        >
          <h1>Ready for a challenge?</h1>
          <Link id="cta-link" to="/challenges">
            Get Started
          </Link>
        </motion.div>
        <motion.img
          style={{ opacity: opacityCity, y: yCity }}
          src={cityImg}
          alt="A city skyline touched by sunlight"
          id="city-image"
        />
        <motion.img
          style={{ y: yHero, opacity: opacityHero }}
          src={heroImg}
          alt="A superhero wearing a cape"
          id="hero-image"
        />
      </header>
      <main id="welcome-content">
        <section>
          <h2>There&apos;s never been a better time.</h2>
          <p>
            With our platform, you can set, track, and conquer challenges at
            your own pace. Whether it&apos;s personal growth, professional
            achievements, or just for fun, we&apos;ve got you covered.
          </p>
        </section>

        <section>
          <h2>Why Challenge Yourself?</h2>
          <p>
            Challenges provide a framework for growth. They push boundaries,
            test limits, and result in genuine progress. Here, we believe
            everyone has untapped potential, waiting to be unlocked.
          </p>
        </section>

        <section>
          <h2>Features</h2>
          <ul>
            <li>Custom challenge creation: Set the rules, define your pace.</li>
            <li>
              Track your progress: See your growth over time with our analytics
              tools.
            </li>
            <li>
              Community Support: Join our community and get motivated by peers.
            </li>
          </ul>
        </section>

        <section>
          <h2>Join Thousands Embracing The Challenge</h2>
          <p>
            “I never realized what I was capable of until I set my first
            challenge here. It&apos;s been a transformative experience!” - Alex
            P.
          </p>
        </section>
        <AnimatePresence>
          <section className="section-button" ref={scope}>
            {theme === 'light' && (
              <motion.button
                className="themebtn"
                onClick={imgClick}
                variants={{
                  initial: { rotate: -180 },
                  animate: { rotate: 0 },
                }}
                initial="initial"
                animate="animate"
                transition={{ type: 'tween', duration: 1 }}
              >
                <motion.span className="light-theme-img">
                  <img
                    key="img"
                    className="themeimg"
                    src="https://icomoon.io/images/ultimate/contrast.png"
                  ></img>
                </motion.span>
              </motion.button>
            )}
            {theme === 'dark' && (
              <motion.button
                className="themebtn"
                onClick={imgClick}
                variants={{
                  initial: { rotate: 0 },
                  animate: { rotate: 180 },
                }}
                initial="initial"
                animate="animate"
                transition={{ type: 'tween', duration: 1 }}
              >
                <span className="dark-theme-img">
                  <img
                    key="img"
                    className="themeimg"
                    src="https://icomoon.io/images/ultimate/contrast.png"
                  ></img>
                </span>
              </motion.button>
            )}
          </section>
        </AnimatePresence>
      </main>
    </>
  )
}
