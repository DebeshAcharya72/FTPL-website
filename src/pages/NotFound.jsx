import { Link } from 'react-router-dom';
import { Home, Mail } from 'lucide-react';
import SEO from '../components/SEO';
import Button from '../components/Button';

export default function NotFound() {
  return (
    <>
      <SEO
        title="We couldn’t find that page"
        description="The page may have moved. Return to the homepage or contact us if you need help finding something."
      />

      <div className="min-h-[70vh] flex items-center justify-center px-4 py-20 text-center bg-white">
        <div className="max-w-md mx-auto space-y-6">
          <div className="w-20 h-20 mx-auto rounded-3xl bg-brandBlue/10 text-brandBlue flex items-center justify-center font-extrabold text-3xl font-heading shadow-soft">
            404
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900">
            We couldn’t find that page
          </h1>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            The page may have moved. Return to the homepage or contact us if you need help finding something.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button to="/" variant="accent" size="md" icon={Home} iconPosition="left">
              Back to Home
            </Button>
            <Button to="/contact" variant="outline" size="md" icon={Mail} iconPosition="left">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
