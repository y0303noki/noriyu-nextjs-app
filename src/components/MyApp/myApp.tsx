import AppCard from '../appCard';
import { appInfo } from '../../../types/appInfo';

const MyApp = () => {
  const appInfo: appInfo = {
    name: '個人サイト',
    appDescription: 'このサイト',
    iconPath: '/images/me/mydog.jpg',
    tags: ['Next.js', 'tailwind', 'microCMS'],
    githubUrl: 'https://github.com/y0303noki/noriyu-nextjs-app',
    webUrl: '',
    appStoreUrl: '',
    zasetuReason: '',
  };
  const appInfo2: appInfo = {
    name: 'プレイリスト作成アプリ',
    appDescription: 'SpotifyのAPIを使ってプレイリストを作成します',
    iconPath: '/images/logo/Spotify_Icon_Green_Coated.png',
    tags: ['Next.js', 'tailwind', 'SpotifyAPI'],
    githubUrl: '',
    webUrl: 'https://spotify-app-y0303noki.vercel.app/',
    appStoreUrl: '',
    zasetuReason: '',
  };
  return (
    <>
      <ul className='grid grid-cols-2 sm:grid-cols-3'>
        <li>
          <AppCard appCard={appInfo}></AppCard>
        </li>
        <li>
          <AppCard appCard={appInfo2}></AppCard>
        </li>
      </ul>
    </>
  );
};

export default MyApp;
