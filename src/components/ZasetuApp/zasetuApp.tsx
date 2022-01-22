//  MyAppのコンポーネント
import AppCard from '../appCard';

const ZasetuApp = () => {
  return (
    <>
      <ul className='flex overflow-scroll'>
        <li>
          <AppCard
            appName={'みんわり'}
            appDescription={'flutterで初めて製作したアプリ。通信機能はなく、Todo機能があるだけ'}
            tags={['flutter']}
            appStoreUrl='https://apps.apple.com/jp/app/%E3%81%BF%E3%82%93%E3%82%8F%E3%82%8A/id1551614318'
            githubUrl='https://github.com/y0303noki/minwari'
            zasetuReason='機能が無さすぎた。provicerをよく理解しないまま作った。'
          ></AppCard>
        </li>
        <li>
          <AppCard
            appName={'Drink Memo'}
            appDescription={'飲み物のメモアプリ。普段コーヒーをよく飲むので記録しようと思った。'}
            tags={['flutter', 'firebase']}
            appStoreUrl='https://apps.apple.com/jp/app/%E3%83%89%E3%83%AA%E3%83%B3%E3%82%AF%E3%83%A1%E3%83%A2/id1591784673'
            githubUrl='https://github.com/y0303noki/DrinkMemo'
            zasetuReason='firebaseを使って認証機能とdbを使ってみた。画像追加もやってみた。作ってるうちに「他のアプリの下位互換では・・？」と思ってしまった。'
          ></AppCard>
        </li>
      </ul>
    </>
  );
};

export default ZasetuApp;
