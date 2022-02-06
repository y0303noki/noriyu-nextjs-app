//  AppCardのコンポーネント
import Image from 'next/image';
import { FaAppStore, FaGithub } from 'react-icons/fa';
import { appInfo } from '../../types/appInfo';
import React, { useState } from 'react';

const AppCard = ({ appCard }: { appCard: appInfo }) => {
  const [zasetuShow, setZasetuShow] = useState(false);

  // 挫折アプリなら理由が含まれている
  const isZasetApp = appCard.zasetuReason != '';
  const logoWidth = 40;

  // アプリのアイコン　なければ表示しない
  const appIcon = (
    <div className='ml-4 h-24 w-24  min-h-24 min-w-24'>
      <Image
        height={80}
        width={80}
        src={appCard.iconPath}
        alt='My avatar'
        className='rounded-2xl'
      />
    </div>
  );
  return (
    <>
      <div className='flex flex-col rounded-2xl bg-blue-100 mx-1'>
        {/* アイコン、あれば */}
        {appCard.iconPath && (
          <div className='mx-auto mt-2'>
            <Image
              height={80}
              width={80}
              src={appCard.iconPath}
              alt='My App'
              className='rounded-2xl'
            />
          </div>
        )}
        {/* アプリの名前 */}
        <div className='text-center font-bold dark:text-black'>{appCard.name}</div>
        {/* アプリの場所 */}
        <ul className='p-1 bg-white dark:bg-gray-500'>
          {appCard.githubUrl && (
            <li className='inline-block px-4'>
              <a href={appCard.githubUrl} target='_blank' rel='noopener noreferrer' className='w-4'>
                <FaGithub size={20}></FaGithub>
              </a>
            </li>
          )}
          {appCard.appStoreUrl && (
            <li className='inline-block px-4'>
              <a
                href={appCard.appStoreUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='w-4'
              >
                <FaAppStore size={20}></FaAppStore>
              </a>
            </li>
          )}
        </ul>
        {/* 説明 */}
        <div className='bg-white dark:bg-gray-500 px-1 text-sm '>
          <p className='m-2'>{appCard.appDescription}</p>
        </div>

        {/* タグ */}
        <div className={'px-1 bg-white dark:bg-gray-500 ' + (isZasetApp ? '' : 'rounded-b-2xl')}>
          {appCard.tags.map((tag: string) => (
            <span
              key={tag}
              className={'inline-block rounded text-xs m-1 px-1 bg-gray-300 dark:bg-gray-700'}
            >
              {tag}
            </span>
          ))}
        </div>
        {/* 挫折理由 */}
        {isZasetApp && (
          <div className={'bg-white dark:bg-gray-500 ' + 'rounded-b-2xl'}>
            <p
              className={'text-xs text-right px-1 pt-1'}
              onClick={() => setZasetuShow(!zasetuShow)}
            >
              {!zasetuShow ? '挫折理由 ▼' : '挫折理由 ▲'}
            </p>
            {zasetuShow && (
              <p
                className='border-t-2 text-gray-600 dark:text-white p-1 text-sm'
                onClick={() => setZasetuShow(!zasetuShow)}
              >
                {appCard.zasetuReason}
              </p>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default AppCard;

// export const getStaticProps = async () => {
//   console.log('start');
//   const url = 'https://qiita.com/ksyunnnn/items/bfe2b9c568e97bb6b494';
//   let data;

//   fetch(url)
//     .then((res) => res.text())
//     .then((text) => {
//       const el = new DOMParser().parseFromString(text, 'text/html');
//       const headEls = el.head.children;
//       Array.from(headEls).map((v) => {
//         const prop = v.getAttribute('property');
//         if (!prop) return;
//         console.log(prop, v.getAttribute('content'));
//       });
//     });

//   // const data = await client.get({ endpoint: 'blog' });

//   return {
//     props: {
//       blogs: 'data.contents',
//     },
//   };
// };
