import { GetStaticProps } from 'next';
import { SpotifyTopArtist } from '../../types/spotify_top_artist';
import Layout from '../components/layout';
import Seo from '../components/seo';
import { SpotifyApi } from './api/spotifyApi';

const spotifyApiUrl = '';
const baseUrl = process.env.NEXT_PUBLIC_HOST;
const Spotify = ({ infos }: { infos: SpotifyTopArtist[] }) => {
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
        <p>spotify</p>
      </Layout>
    </>
  );
};
export default Spotify;

export const getStaticProps: GetStaticProps = async () => {
  const api = new SpotifyApi();
  let result: SpotifyTopArtist[] = [];

  const token = await api.getAccessToken();
  if (token != 'ERROR') {
    result = await api.getTopTracksByUser();
  }

  return {
    props: { infos: result },
  };
};
