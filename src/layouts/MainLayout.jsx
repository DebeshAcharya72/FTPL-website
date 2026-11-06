import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import FloatingWhatsApp from '../components/FloatingWhatsApp';

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-background dark:bg-dark-bg text-slate-800 dark:text-slate-100 transition-colors duration-200">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
