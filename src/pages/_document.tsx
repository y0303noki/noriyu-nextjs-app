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
      <body className='dark:bg-gray-800'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default MyDocument;
