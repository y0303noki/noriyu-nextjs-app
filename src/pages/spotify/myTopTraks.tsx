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
const MyTopTraks = ({ infos }: { infos: SpotifyTopTraks[] }) => {
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

        <Link href={'/spotify/myTopArtists'}>
          <a className='p-4 underline text-blue-400'>アーティスト一覧へ</a>
        </Link>
        <Link href={'/spotify'}>
          <a className='p-4 underline text-blue-400'>Best 2022 2021</a>
        </Link>

        <SpotifyDescription title='My Top Traks' titleJa='トップトラック'></SpotifyDescription>

        <ul className='m-4 my-1'>
          {infos.map((info: SpotifyTopTraks, index: number) => (
            <li key={info.id}>
              <a href={info.music_url} target={'_blank'} rel='noreferrer'>
                <div className='flex flex-row m-2 justify-between'>
                  <p className='items-center pr-2'>{index + 1}</p>
                  <div className='w-10 h-10'>
                    <Image
                      height={40}
                      width={40}
                      src={info.image_url}
                      alt={info.music_name + 'の画像'}
                      className='object-cover'
                    />
                  </div>
                  <div className='mx-2 grow'>
                    <p className='font-bold'>{info.music_name} </p>
                    <p className=''>{info.artist_name} </p>
                  </div>
                  <FaArrowAltCircleRight className='mt-auto mb-auto' />
                </div>
              </a>
            </li>
          ))}
        </ul>
      </Layout>
    </>
  );
};
export default MyTopTraks;

// ビルド時にspotifyリスト更新する
export const getStaticProps: GetStaticProps = async () => {
  const api = new SpotifyApi();
  let result: SpotifyTopTraks[] = [];

  const token = await api.getAccessToken();
  if (token != 'ERROR getAccsessToken') {
    result = await api.getTopTracksByUser();
  }

  return {
    props: { infos: result },
  };
};
