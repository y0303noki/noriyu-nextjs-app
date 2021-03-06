import Layout from '../components/layout';
import Seo from '../components/seo';
import { useState } from 'react';
import Link from 'next/link';

//  // フォームに入力された値をtodoに登録するまでに入れておくためのstate
//  const [tmpTodo, setTmpTodo] = useState("");

//  const addTodo = () => {
//    setTodos([...todos, tmpTodo]);
//    setTmpTodo("");
//  };

const baseUrl = process.env.NEXT_PUBLIC_HOST;
const Spotify = () => {
  const [isExpand2020, setIsExpand2020] = useState(false);
  const [isExpand2021, setIsExpand2021] = useState(false);
  const contentClassname2020 = isExpand2020 ? '600' : '100';
  const contentClassname2021 = isExpand2021 ? '600' : '100';
  const buttonName2020 = isExpand2020 ? '閉じる' : 'もっとみる';
  const buttonName2021 = isExpand2021 ? '閉じる' : 'もっとみる';

  return (
    <>
      <Layout isHome={false}>
        <Seo
          pageTitle={`spotify`}
          pageDescription={`spotify`}
          pagePath={`${baseUrl}/spotify`}
          pageImg={`${baseUrl}/images/small/my_home_1mb.jpg`}
          pageImgWidth={1280}
          pageImgHeight={960}
        ></Seo>

        <Link href={'/spotify/myTopTraks'}>
          <a className='p-4 underline text-blue-400'>トラック一覧へ</a>
        </Link>
        <Link href={'/spotify/myTopArtists'}>
          <a className='p-4 underline text-blue-400'>アーティスト一覧へ</a>
        </Link>
        <p className='p-2 text-2xl font-bold'>2021</p>
        <iframe
          className='p-2'
          src='https://open.spotify.com/embed/playlist/37i9dQZF1EUMDoJuT8yJsl'
          width='100%'
          height={contentClassname2021}
          allow='encrypted-media'
        ></iframe>
        <p className='px-2 text-right' onClick={() => setIsExpand2021(!isExpand2021)}>
          {buttonName2021}
        </p>
        <p className='p-2 text-2xl font-bold'>2020</p>
        <iframe
          className='p-2'
          src='https://open.spotify.com/embed/playlist/37i9dQZF1EM6hTgxpQrzmx'
          width='100%'
          height={contentClassname2020}
          allow='encrypted-media'
        ></iframe>
        <p className='px-2 text-right' onClick={() => setIsExpand2020(!isExpand2020)}>
          {buttonName2020}
        </p>
      </Layout>
    </>
  );
};
export default Spotify;
