//  MyAppのコンポーネント
import { appInfo } from '../../../types/appInfo';
import AppCard from '../appCard';

const ZasetuApp = () => {
  const minwariApp: appInfo = {
    name: 'みんわり',
    appDescription: 'flutterで初めて製作したアプリ。通信機能はなく、Todo機能があるだけ',
    iconPath: '/images/appIcon/minwariAppIcon.png',
    tags: ['flutter'],
    githubUrl: 'https://github.com/y0303noki/minwari',
    webUrl: '',
    appStoreUrl: 'https://apps.apple.com/jp/app/%E3%81%BF%E3%82%93%E3%82%8F%E3%82%8A/id1551614318',
    zasetuReason: '機能が無さすぎた。状態かんりをよく理解しないまま作った。',
  };
  const drinkMemoApp: appInfo = {
    name: 'Drink Memo',
    appDescription: '飲み物のメモアプリ。普段コーヒーをよく飲むので記録しようと思った。',
    iconPath: '/images/appIcon/drinkMemoAppIcon.png',
    tags: ['flutter', 'firebase'],
    githubUrl: 'https://github.com/y0303noki/DrinkMemo',
    webUrl: '',
    appStoreUrl:
      'https://apps.apple.com/jp/app/%E3%83%89%E3%83%AA%E3%83%B3%E3%82%AF%E3%83%A1%E3%83%A2/id1591784673',
    zasetuReason:
      'firebaseを使って認証機能とdbを使ってみた。画像追加もやってみた。作ってるうちに「他のアプリの下位互換では・・？」と思って続かなくなった',
  };
  return (
    <>
      <ul className='grid grid-cols-2 sm:grid-cols-3'>
        <li>
          <AppCard appCard={minwariApp}></AppCard>
        </li>
        <li>
          <AppCard appCard={drinkMemoApp}></AppCard>
        </li>
      </ul>
    </>
  );
};

export default ZasetuApp;
