import Layout from '../components/layout';
import Seo from '../components/seo';
const baseUrl = process.env.NEXT_PUBLIC_HOST;
const Spotify = () => {
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
      <p className='m-2'>2021のプレイリスト</p>
      <iframe
        className='rounded-xl'
        src='https://open.spotify.com/embed/playlist/6T3HukAcMyOEg5sxWblbks?utm_source=generator&theme=0'
        width='100%'
        height='380'
        frameBorder='0'
        allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
      ></iframe>
    </>
  );
};
export default Spotify;
