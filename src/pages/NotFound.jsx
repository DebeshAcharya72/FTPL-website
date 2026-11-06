import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import SEO from '../components/SEO';
import Button from '../components/Button';

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found (404)" description="The requested page could not be found on FTPL." />
      <div className="min-h-[70vh] flex items-center justify-center px-4 py-20 text-center">
        <div className="max-w-md mx-auto space-y-6">
          <div className="w-20 h-20 mx-auto rounded-3xl bg-accent/10 text-accent flex items-center justify-center font-extrabold text-3xl font-heading shadow-soft">
            404
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-heading text-primary-950 dark:text-white">
            Page Not Found
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            The link you followed may be broken or the page may have been moved within our digital network.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button to="/" variant="accent" size="md" icon={Home} iconPosition="left">
              Back to Home
            </Button>
            <Button to="/contact" variant="outline" size="md">
              Contact Support
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
