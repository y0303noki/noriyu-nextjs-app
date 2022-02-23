import { Html, Head, Main, NextScript } from 'next/document';
import Seo from '../components/seo';
import { GA_TRACKING_ID } from '../../libs/gtag';

const MyDocument = () => {
  const baseUrl = process.env.NEXT_PUBLIC_HOST;

  return (
    <Html lang='ja-JP'>
      <Head>
        <Seo
          pageTitle={'noriyu dev'}
          pageDescription={'noriyuの個人サイト'}
          pagePath={`${baseUrl}`}
          pageImg={`${baseUrl}/images/small/my_dog_1mb.jpg`}
          pageImgWidth={1280}
          pageImgHeight={960}
        ></Seo>
        {/* safari */}
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-status-bar-style' content='#1f2937' />
        <meta name='apple-mobile-web-app-title' content='noriyu_dev' />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/images/pwa/apple-touch-icon-180x180.png'
        />
        {/* 一般 */}
        <meta name='application-name' content='noriyu_dev' />
        <meta name='theme-color' content='#1f2937' />
        <link rel='icon' sizes='192x192' href='/icon-192x192.png' />
        <link rel='icon' href='/favicon.ico' />
        <link rel='manifest' href='/manifest.json' />
        {GA_TRACKING_ID && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
        `,
              }}
            />
          </>
        )}
      </Head>
      <body className='bg-gray-200 dark:bg-gray-800'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default MyDocument;
