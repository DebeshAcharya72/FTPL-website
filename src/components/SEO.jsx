import { Helmet } from 'react-helmet-async';
import { companyInfo } from '../data/company';

export default function SEO({
  title,
  description = companyInfo.description,
  canonical = "",
  ogType = "website",
  ogImage = "/favicon.svg",
}) {
  // If title is explicitly passed, use it directly (or format cleanly)
  const fullTitle = title || companyInfo.name;
  const currentUrl = typeof window !== 'undefined' ? window.location.href : companyInfo.website;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content="Flasho Tech, Flasho Tech Private Limited, FTPL, FTCS, BootUp360, JSJ Card, BYER, Bhubaneswar, Odisha, business consulting, technology consulting, industrial monitoring, predictive maintenance, practical training, digital identity" />
      <meta name="author" content="Flasho Tech Private Limited" />
      <meta name="robots" content="index, follow" />

      {/* Canonical */}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Flasho Tech Private Limited" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={currentUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
    </Helmet>
  );
}
