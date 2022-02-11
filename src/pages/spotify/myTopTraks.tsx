import { GetStaticProps } from 'next';
import Image from 'next/image';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { SpotifyTopArtist } from '../../../types/spotify_top_artist';
import { SpotifyTopTraks } from '../../../types/spotify_top_traks';
import Layout from '../../components/layout';
import Seo from '../../components/seo';
import { SpotifyApi } from '../api/spotifyApi';

const baseUrl = process.env.NEXT_PUBLIC_HOST;
const MyTopTraks = ({ infos }: { infos: SpotifyTopTraks[] }) => {
  //   console.log(infos);
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
      <p className='mx-4 text-5xl font-bold'>My Top Traks</p>
      <div className='m-4'>
        直近1ヶ月以内の私のトップトラックを表示します。 取得は
        <a
          className='text-blue-500'
          href='https://developer.spotify.com/documentation/web-api/reference/#/operations/get-users-top-artists-and-tracks'
        >
          Spotify API
        </a>
        を利用しています。<br></br>
        ビルドのタイミングで取得し直しているためリアルタイムではないです。
      </div>

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

                {/* <div className='flex flex-row justify-between items-center text-2xl font-bold border-b'> */}
                <div className='mx-2 grow'>
                  <p className='font-bold'>{info.music_name} </p>
                  <p className=''>{info.artist_name} </p>
                </div>
                {/* <p>{info.release_date}</p> */}
                <FaArrowAltCircleRight className='' />
              </div>
            </a>
            {/* <div className='m-2 overfrow-3'>{issue.body}</div>
                <div className='m-2'>
                  {issue.labels.length > 0 &&
                    issue.labels.map((label: string) => (
                      <span
                        key={label}
                        className={
                          'rounded-md text-sm p-1 m-1 text-gray-50 ' +
                          (label == 'bug' ? 'bg-red-500' : 'bg-gray-500')
                        }
                      >
                        {label}
                      </span>
                    ))}
                </div> */}
          </li>
        ))}
      </ul>
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
