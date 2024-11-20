import React, { useState, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import LoadingScreen from './LoadingScreen.jsx';
import './index.css'
import InicioPage from './assets/Pages/InicioPage.jsx';
import ProductosPage from './assets/Pages/ProductosPage.jsx';
import SobreNosotrosPage from './assets/Pages/SobreNosotrosPage.jsx';
import ContactanosPage from './assets/Pages/ContactanosPage.jsx';
import LogeoPage from './assets/Pages/LogeoPage.jsx';
import RegistroPage from './assets/Pages/RegistroPage.jsx';
import ApiPage from './assets/Pages/Api.jsx';
import 'semantic-ui-css/semantic.min.css';


const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

const pageTransition = {
  duration: 0.5,
};

const AnimatedRoute = ({ element }) => (
  <motion.div
    initial="initial"
    animate="in"
    exit="out"
    variants={pageVariants}
    transition={pageTransition}
  >
    {element}
  </motion.div>
);

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); // Ajusta la duración según sea necesario

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {loading && <LoadingScreen />}
      <AnimatePresence mode="wait" onExitComplete={() => setLoading(false)}>
      <Routes location={location} key={location.pathname}>
          <Route path="/" element={<AnimatedRoute element={<InicioPage />} />} /> 
          <Route path="/productos" element={<AnimatedRoute element={<ProductosPage />} />} /> 
          <Route path="/sobre-nosotros" element={<AnimatedRoute element={<SobreNosotrosPage />} />} />
          <Route path="/contactanos" element={<AnimatedRoute element={<ContactanosPage />} />} />
          <Route path="/login" element={<AnimatedRoute element={<LogeoPage />} />} />
          <Route path="/registro" element={<AnimatedRoute element={<RegistroPage />} />} />
          <Route path="/api" element={<AnimatedRoute element={<ApiPage />} />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
