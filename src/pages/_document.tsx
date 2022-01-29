import { Html, Head, Main, NextScript } from 'next/document';
import Seo from '../components/seo';

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
      </Head>
      <body className='dark:bg-gray-800'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default MyDocument;
