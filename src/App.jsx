import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { AppProvider } from "./context/AppContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import CustomCursor from "./components/CustomCursor";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import Cart from "./pages/Cart";
import Login from "./pages/Login";

// Enhanced page transition variants
const pageVariants = {
  initial: {
    opacity: 0,
    y: 30,
    scale: 0.98,
  },
  in: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
  out: {
    opacity: 0,
    y: -30,
    scale: 1.02,
  },
};

const pageTransition = {
  type: "tween",
  ease: [0.25, 0.46, 0.45, 0.94],
  duration: 0.6,
};

// Enhanced wrapper component for page transitions
const PageWrapper = ({ children }) => (
  <motion.div
    initial="initial"
    animate="in"
    exit="out"
    variants={pageVariants}
    transition={pageTransition}
    className="relative">
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.2 }}>
      {children}
    </motion.div>
  </motion.div>
);

function App() {
  return (
    <AppProvider>
      <Router
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
          <Navbar />

          <main className="relative">
            <AnimatePresence mode="wait">
              <Routes>
                <Route
                  path="/"
                  element={
                    <PageWrapper>
                      <Home />
                    </PageWrapper>
                  }
                />
                <Route
                  path="/courses"
                  element={
                    <PageWrapper>
                      <Courses />
                    </PageWrapper>
                  }
                />
                <Route
                  path="/course/:id"
                  element={
                    <PageWrapper>
                      <CourseDetail />
                    </PageWrapper>
                  }
                />
                <Route
                  path="/cart"
                  element={
                    <PageWrapper>
                      <Cart />
                    </PageWrapper>
                  }
                />
                <Route
                  path="/login"
                  element={
                    <PageWrapper>
                      <Login />
                    </PageWrapper>
                  }
                />
                {/* Catch all route */}
                <Route
                  path="*"
                  element={
                    <PageWrapper>
                      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16 flex items-center justify-center">
                        <div className="text-center">
                          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            404 - Page Not Found
                          </h1>
                          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                            The page you're looking for doesn't exist.
                          </p>
                          <motion.a
                            href="/"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200">
                            Go Home
                          </motion.a>
                        </div>
                      </div>
                    </PageWrapper>
                  }
                />
              </Routes>
            </AnimatePresence>
          </main>

          <Footer />
          <ScrollToTop />
          <CustomCursor />
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;
