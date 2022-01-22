//  MyAppのコンポーネント
import AppCard from '../appCard';

const MyApp = () => {
  return (
    <>
      <ul className='flex overflow-scroll'>
        <li>
          <AppCard
            appName={'個人サイト'}
            appDescription={'このサイト'}
            iconPath='/images/me/mydog.jpg'
            tags={['Next.js', 'tailwind css']}
            githubUrl='https://nextjs.org/learn/basics/assets-metadata-css/global-styles'
          ></AppCard>
        </li>
      </ul>
    </>
  );
};

export default MyApp;
