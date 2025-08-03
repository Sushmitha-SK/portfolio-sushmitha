import { useEffect, useState } from "react"
import About from "./components/About"
import Contact from "./components/Contact"
import Experience from "./components/Experience"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import { IoMdArrowDropup } from "react-icons/io"
import { AnimatePresence, motion } from 'framer-motion';
import Header from "./components/Header"
import { getAnalytics, logEvent } from "firebase/analytics"
import { app } from "./firebase"


function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const analytics = getAnalytics(app);
      logEvent(analytics, 'page_view', { page_title: 'Home', page_path: '/' });
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };



  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };


  return (
    <>
      <Header />
      <div className='min-h-[70vh]'>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          variants={sectionVariants}
        >
          <Hero />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          variants={sectionVariants}
        >
          <About />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          variants={sectionVariants}
        >
          <Skills />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          variants={sectionVariants}
        >
          <Experience />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          variants={sectionVariants}
        >
          <Projects />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          variants={sectionVariants}
        >
          <Contact />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          variants={sectionVariants}
        >
          <Footer />
        </motion.div>

        <AnimatePresence>
          {showScrollTop && (
            <motion.a
              key="scrollTopBtn"
              href="#scrolltop"
              id="scrolltop"
              onClick={(e) => {
                e.preventDefault();
                handleScrollToTop();
              }}
              aria-label="Scroll to top"
              className={`scrolltop ${showScrollTop ? "scrolltop--show" : ""} cursor-pointer`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.3 }}
            >
              <IoMdArrowDropup />
            </motion.a>
          )}
        </AnimatePresence>


      </div>


    </>
  )
}

export default App
