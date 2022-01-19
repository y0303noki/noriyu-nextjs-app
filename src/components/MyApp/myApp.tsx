//  MyAppのコンポーネント
import AppCard from './appCard';

const MyApp = () => {
  return (
    <>
      <ul className='flex overflow-scroll'>
        <li>
          <AppCard
            appName={'個人サイト'}
            appDescription={'このサイト'}
            tags={['Next.js', 'tailwind css']}
            githubUrl='https://nextjs.org/learn/basics/assets-metadata-css/global-styles'
          ></AppCard>
        </li>
        <li>
          <AppCard
            appName={'アプリA'}
            appDescription={'アプリAの説明です。説明説明！！！'}
            tags={['flutter', 'firebase']}
            githubUrl='https://nextjs.org/learn/basics/assets-metadata-css/global-styles'
          ></AppCard>
        </li>
        <li>
          <AppCard
            appName={'アプリB'}
            appDescription={'アプリbの説明です。説明説明アプリBですよ〜！！！！あはは'}
            tags={['ios']}
            githubUrl='test'
          ></AppCard>
        </li>
        <li>
          <AppCard
            appName={'アプリC'}
            appDescription={'アプリCの説明'}
            tags={['android']}
            githubUrl='test'
          ></AppCard>
        </li>
      </ul>
    </>
  );
};

export default MyApp;
