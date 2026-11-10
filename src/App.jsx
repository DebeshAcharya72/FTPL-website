import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';

// Lazy load pages for optimal bundle splitting and performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Brands = lazy(() => import('./pages/Brands'));
const Contact = lazy(() => import('./pages/Contact'));
const JSJCard = lazy(() => import('./pages/JSJCard'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const Terms = lazy(() => import('./pages/Terms'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Branded loading fallback
function PageLoader() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center p-8">
      <div className="relative">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-accent to-highlight p-0.5 animate-spin shadow-lg">
          <div className="w-full h-full bg-white dark:bg-dark-card rounded-[14px]" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center font-bold text-xs font-heading text-primary-950 dark:text-white">
          FTPL
        </div>
      </div>
      <p className="mt-4 text-xs font-semibold tracking-wider uppercase text-slate-500 dark:text-slate-400 animate-pulse">
        Loading Flasho Tech...
      </p>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route
          index
          element={
            <Suspense fallback={<PageLoader />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="about"
          element={
            <Suspense fallback={<PageLoader />}>
              <About />
            </Suspense>
          }
        />
        <Route
          path="services"
          element={
            <Suspense fallback={<PageLoader />}>
              <Services />
            </Suspense>
          }
        />
        <Route
          path="brands"
          element={
            <Suspense fallback={<PageLoader />}>
              <Brands />
            </Suspense>
          }
        />
        <Route
          path="contact"
          element={
            <Suspense fallback={<PageLoader />}>
              <Contact />
            </Suspense>
          }
        />
        <Route
          path="jsj-card"
          element={
            <Suspense fallback={<PageLoader />}>
              <JSJCard />
            </Suspense>
          }
        />
        <Route
          path="privacy-policy"
          element={
            <Suspense fallback={<PageLoader />}>
              <PrivacyPolicy />
            </Suspense>
          }
        />
        <Route
          path="terms"
          element={
            <Suspense fallback={<PageLoader />}>
              <Terms />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<PageLoader />}>
              <NotFound />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}
