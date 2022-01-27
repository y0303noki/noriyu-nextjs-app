import { Emoji } from 'emoji-mart';
import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import ReturnTopButton from '../components/Common/returnTopButton';
import Layout from '../components/layout';
import MyApp from '../components/MyApp/myApp';
import Seo from '../components/seo';
import SkillSet from '../components/SkilSet/skillSet';
import ZasetuApp from '../components/ZasetuApp/zasetuApp';

const Home: NextPage = () => {
  const baseUrl = process.env.NEXT_PUBLIC_HOST;
  return (
    <>
      <Layout isHome={true}>
        <Seo
          pageTitle={'noriyu dev'}
          pageDescription={'noriyuの個人サイト'}
          pagePath={`${baseUrl}`}
          pageImg={`${baseUrl}/images/small/my_dog_1mb.jpg`}
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
            <p className='m-2'>ZennやQiitaに投稿した記事</p>
          </div>

          {/* スキルセット */}
          <div className='m-2'>
            <h2 className='text-3xl font-bold'>Skill</h2>
            <p className='m-2'>スキルセット</p>
            <div className='grid grid-cols-4 gap-4 sm:flex'>
              <SkillSet imagePath='/images/logo/ionicframework-icon.svg'></SkillSet>
              <SkillSet imagePath='/images/logo/typescript.svg'></SkillSet>
              <SkillSet imagePath='/images/logo/angular-icon-1.svg'></SkillSet>
              <SkillSet imagePath='/images/logo/firebase-1.svg'></SkillSet>
              <SkillSet imagePath='/images/logo/next-js.svg'></SkillSet>
            </div>
          </div>

          {/* なんか適当に画像 */}
          <div className='m-2'>
            <h2 className='text-3xl font-bold'>Kaizen</h2>
            <p className='m-2'>改善</p>

            <Link href={'/kaizen'}>
              <a className='m-2 underline'>Kaizenへ</a>
            </Link>
          </div>

          {/* なんか適当に画像 */}
          <div className='m-2'>
            <h2 className='text-3xl font-bold'>Images</h2>
            <p className='m-2'>画像をおく</p>
          </div>
          {/* 開発用 */}
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
