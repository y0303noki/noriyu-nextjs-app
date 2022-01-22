import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import ReturnTopButton from '../components/Common/returnTopButton';
import Layout from '../components/layout';
import MyApp from '../components/MyApp/myApp';
import Seo from '../components/seo';
import ZasetuApp from '../components/ZasetuApp/zasetuApp';

const Home: NextPage = () => {
  const baseUrl = process.env.NEXT_PUBLIC_HOST;
  return (
    <>
      <Layout isHome={true}>
        <Seo
          pageTitle={'noriyu app'}
          pageDescription={'個人ブログです'}
          pageImg={`${baseUrl}/images/me/mydog.jpg`}
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
        <div className='text-center mb-12'>
          <ReturnTopButton></ReturnTopButton>
        </div>
      </Layout>
    </>
  );
};

export default Home;
