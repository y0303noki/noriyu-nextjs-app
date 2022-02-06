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
  return (
    <>
      <ul className='grid grid-cols-2'>
        <li>
          <AppCard appCard={appInfo}></AppCard>
        </li>
      </ul>
    </>
  );
};

export default MyApp;
