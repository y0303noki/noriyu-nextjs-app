//  MyAppのコンポーネント
import AppCard from './appCard';

const MyApp = () => {
  return (
    <>
      <div className='flex flex-row overflow-scroll'>
        <AppCard appName={'アプリA'} appDescription={'アプリAの説明です。説明説明！！！'}></AppCard>
        <AppCard
          appName={'アプリB'}
          appDescription={'アプリbの説明です。説明説明アプリBですよ〜！！！！あはは'}
        ></AppCard>
        <AppCard appName={'アプリC'} appDescription={'アプリCの説明'}></AppCard>
      </div>
    </>
  );
};

export default MyApp;
