import Head from 'next/head'

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import NextLink from 'next/link';


function Home() {
  const { t } = useTranslation();
  return (
    <div className='row'>
      <Head>
        <title>{ t('home') }</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='col-lg-12'>
        <h1 >
        { t('welcome') }  <a href="https://nextjs.org">Next.js</a>
        </h1>

        <p>
      
          <code>{ t('word') }</code>
        </p>

        <div className='flex-button'>
          <a  href="/en" className='btn  btn-outline-dark'>
            
            <h2>English</h2>
            </a>

          <a href='/' className='btn  btn-outline-warning'>
          <h2> العربية </h2>
            </a>    
            
          
        </div>
      </div>

  
    </div>
  )
}
export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common', 'footer']),
  },
})
export default Home