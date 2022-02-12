import { GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { SpotifyTopArtist } from '../../../types/spotify_top_artist';
import { SpotifyTopTraks } from '../../../types/spotify_top_traks';
import Layout from '../../components/layout';
import Seo from '../../components/seo';
import SpotifyDescription from '../../components/Spotify/description';
import { SpotifyApi } from '../api/spotifyApi';

const baseUrl = process.env.NEXT_PUBLIC_HOST;
const MyTopArtists = ({ infos }: { infos: SpotifyTopArtist[] }) => {
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
      </Layout>
      <Link href={'/spotify/myTopTraks'}>
        <a className='p-4 underline text-blue-400'>トラック一覧へ</a>
      </Link>
      <SpotifyDescription title='My Top Artists' titleJa='トップアーティスト'></SpotifyDescription>

      <ul className='m-4 my-1'>
        {infos.map((info: SpotifyTopArtist, index: number) => (
          <li key={info.id}>
            <a href={info.artist_url} target={'_blank'} rel='noreferrer'>
              <div className='flex flex-row m-2 justify-between'>
                <p className='items-center pr-2'>{index + 1}</p>
                <div className='w-10 h-10'>
                  <Image
                    height={40}
                    width={40}
                    src={info.image_url}
                    alt={info.image_url + 'の画像'}
                    className='object-cover'
                  />
                </div>
                <div className='mx-2 grow'>
                  <p className='font-bold'>{info.name} </p>
                </div>
                <FaArrowAltCircleRight className='mt-auto mb-auto' />
              </div>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};
export default MyTopArtists;

// ビルド時にspotifyリスト更新する
export const getStaticProps: GetStaticProps = async () => {
  const api = new SpotifyApi();
  let result: SpotifyTopArtist[] = [];

  const token = await api.getAccessToken();
  if (token != 'ERROR getAccsessToken') {
    result = await api.getTopArtistByUser();
  }

  return {
    props: { infos: result },
  };
};
