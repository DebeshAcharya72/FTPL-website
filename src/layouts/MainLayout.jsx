import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import FloatingWhatsApp from '../components/FloatingWhatsApp';

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 overflow-x-hidden w-full">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow w-full">
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
