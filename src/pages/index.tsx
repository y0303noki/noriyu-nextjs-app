import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/layout';
import MyApp from '../components/MyApp/myApp';
import Seo from '../components/seo';
import ZasetuApp from '../components/ZasetuApp/zasetuApp';

const Home: NextPage = () => {
  return (
    <>
      <Layout isHome={true}>
        <Seo
          pageTitle={'noriyu app'}
          pageDescription={'個人ブログです'}
          pageImg={'https://noriyu-nextjs-app.vercel.app/images/me/mydog.jpg'}
          pageImgWidth={1280}
          pageImgHeight={960}
        ></Seo>

        {/* コンテンツ */}
        <div className='p-4'>
          {/* 自分のアプリ一覧 */}
          <div className='m-2'>
            <h2 className='text-3xl font-bold'>My App</h2>
            <p className='m-2'>リリースしたアプリ</p>
            <MyApp></MyApp>
          </div>
          {/* 挫折したアプリ */}
          <div className='m-2'>
            <h2 className='text-3xl font-bold'>Zasetu</h2>
            <p className='m-2'>
              作ってみたけどリリースまで至らなかったり、途中で放棄してしまったアプリ
            </p>
            <ZasetuApp></ZasetuApp>
          </div>
          {/* 自分の記事一覧 */}
          <div className='m-2'>
            <h2 className='text-3xl font-bold'>Article</h2>
            <p className='m-2'>ZennやQitaに投稿した記事</p>
          </div>

          {/* なんか適当に画像 */}
          <div className='m-2'>
            <h2 className='text-3xl font-bold'>Images</h2>
            <p className='m-2'>画像をおく</p>
          </div>
          <div className='m-2'>
            <h2 className='text-3xl font-bold'>Develop</h2>
            <p className='m-2'>開発機能。自分用</p>
          </div>
        </div>

        {/* <div className='flex items-center justify-center flex-wrap max-w-screen-md'>
            <a
              href='https://nextjs.org/docs'
              className='m-4 p-6 text-left no-underline border-solid border border-gray-200 rounded-lg max-w-xs transition-colors duration-150 ease-linear hover:border-blue-600 hover:text-blue-600 '
            >
              <h2>Documentation &rarr;</h2>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>

            <a
              href='https://nextjs.org/learn'
              className='m-4 p-6 text-left no-underline border-solid border border-gray-200 rounded-lg max-w-xs transition-colors duration-150 ease-linear hover:border-blue-600 hover:text-blue-600 '
            >
              <h2>Learn &rarr;</h2>
              <p>Learn about Next.js in an interactive course with quizzes!</p>
            </a>

            <a
              href='https://github.com/vercel/next.js/tree/canary/examples'
              className='m-4 p-6 text-left no-underline border-solid border border-gray-200 rounded-lg max-w-xs transition-colors duration-150 ease-linear hover:border-blue-600 hover:text-blue-600 '
            >
              <h2>Examples &rarr;</h2>
              <p>Discover and deploy boilerplate example Next.js projects.</p>
            </a>

            <a
              href='https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
              className='m-4 p-6 text-left no-underline border-solid border border-gray-200 rounded-lg max-w-xs transition-colors duration-150 ease-linear hover:border-blue-600 hover:text-blue-600 '
            >
              <h2>Deploy &rarr;</h2>
              <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
            </a>
          </div> */}

        {/* <footer className='flex flex-grow flex-shrink p-8 border-solid border-t justify-center items-center'>
          <a
            href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
            target='_blank'
            rel='noopener noreferrer'
          >
            Powered by{' '}
            <span className='h-4 ml-2'>
              <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
            </span>
          </a>
        </footer> */}
      </Layout>
    </>
  );
};

export default Home;
