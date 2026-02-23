import { Helmet } from 'react-helmet-async'
import { Hero, ServicesHighlight, AboutPreview, Stats, Clients } from '../components/home'
import { seoData, siteConfig, localBusinessSchema } from '../data/seoData'

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>{seoData.home.title}</title>
        <meta name="description" content={seoData.home.description} />
        <meta name="keywords" content={seoData.home.keywords} />
        
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${siteConfig.url}/`} /> 
        <meta property="og:title" content={seoData.home.title} />
        <meta property="og:description" content={seoData.home.description} />
        <meta property="og:image" content={`${siteConfig.url}${siteConfig.defaultImage}`} />
        
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={siteConfig.url} />
        <meta property="twitter:title" content={seoData.home.title} />
        <meta property="twitter:description" content={seoData.home.description} />
        <meta property="twitter:image" content={`${siteConfig.url}${siteConfig.defaultImage}`} />
        
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
        
        <meta name="geo.region" content="AR-N" />
        <meta name="geo.placename" content="Posadas" />
        <meta name="geo.position" content="-27.3621;-55.9009" />
        <meta name="ICBM" content="-27.3621, -55.9009" />
      </Helmet>

      <Hero />
      <ServicesHighlight />
      <Stats />
      <AboutPreview />
      <Clients /> 
    </>
  )
}

export default HomePage