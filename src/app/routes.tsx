import { createBrowserRouter } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { lazy, Suspense } from "react";
import { Navigation } from "./components/Navigation";
import ScrollToTop from "./components/ScrollToTop";
import CustomCursor from "./components/CustomCursor";
import { Toaster } from "./components/ui/sonner";

const HomePage = lazy(() => import("./pages/HomePage"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));
const SkillsPage = lazy(() => import("./pages/SkillsPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CustomCursor />
      <ScrollToTop />
      
      {/* Global Noise Overlay */}
      <div className="fixed inset-0 z-[9998] pointer-events-none opacity-[0.03] mix-blend-overlay">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>

      <AnimatePresence mode="wait">
        <motion.main
          key={window.location.pathname}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <Suspense fallback={<div className="bg-black min-h-screen" />}>
            {children}
          </Suspense>
        </motion.main>
      </AnimatePresence>
      <Navigation />
      <Toaster />
    </>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <HomePage />
      </Layout>
    ),
  },
  {
    path: "/projects",
    element: (
      <Layout>
        <ProjectsPage />
      </Layout>
    ),
  },
  {
    path: "/skills",
    element: (
      <Layout>
        <SkillsPage />
      </Layout>
    ),
  },
  {
    path: "/about",
    element: (
      <Layout>
        <AboutPage />
      </Layout>
    ),
  },
  {
    path: "*",
    element: (
      <Layout>
        <NotFoundPage />
      </Layout>
    ),
  },
]);

