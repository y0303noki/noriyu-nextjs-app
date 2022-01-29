//  AppCardのコンポーネント
import Image from 'next/image';
import { FaAppStore, FaGithub } from 'react-icons/fa';

const AppCard = ({
  appName,
  appDescription,
  iconPath = '',
  tags,
  webUrl = '',
  githubUrl = '',
  appStoreUrl = '',
  zasetuReason = '',
}: {
  appName: string;
  appDescription: string;
  iconPath?: string;
  tags: string[];
  webUrl?: string;
  githubUrl?: string;
  appStoreUrl?: string;
  zasetuReason?: string;
}) => {
  // 挫折アプリなら理由が含まれている
  const isZasetApp = zasetuReason != '';
  const logoWidth = 40;

  // アプリのアイコン　なければ表示しない
  const appIcon = (
    <div className='ml-4 h-24 w-24  min-h-24 min-w-24'>
      <Image height={80} width={80} src={iconPath} alt='My avatar' className='rounded-2xl' />
    </div>
  );
  return (
    <div className='flex flex-col h-full m-4 min-w-max w-96 '>
      <div className=' max-w-80 shadow-lg dark:bg-gray-600'>
        <div className='flex flex-row pt-4'>
          {iconPath && appIcon}
          <div className='ml-4'>
            <div className='font-bold text-xl mb-2'>{appName}</div>
            <p className='text-base mx-2 text-gray-700 dark:text-gray-200'>{appDescription}</p>
          </div>
        </div>
        <ul className='m-2'>
          {/* <li className='inline-block px-4'>
            {webUrl != '' && (
              <a className='h-4 ml-2' href={webUrl} target={'_blank'} rel='noreferrer'>
                <Image
                  src='/images/logo/web-icon.png'
                  alt='web Logo'
                  width={logoWidth}
                  height={logoWidth}
                />
              </a>
            )}
          </li> */}
          <li className='inline-block px-4'>
            <a href={githubUrl} target='_blank' rel='noopener noreferrer' className='w-4'>
              <FaGithub size={40}></FaGithub>
            </a>
          </li>
          <li className='inline-block px-4'>
            <a href={appStoreUrl} target='_blank' rel='noopener noreferrer' className='w-4'>
              <FaAppStore size={40}></FaAppStore>
            </a>
          </li>
        </ul>

        {/* 挫折理由 */}
        {isZasetApp && (
          <>
            <p className='ml-4'>挫折理由</p>
            <div className='bg-gray-200 dark:bg-gray-700 rounded-2xl m-2 p-4 text-sm'>
              {zasetuReason}
            </div>
          </>
        )}
        {/* タグ */}
        <div className='px-6 pt-4 pb-2'>
          {tags.map((tag: string) => (
            <span
              key={tag}
              className={
                'inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-200 mr-2 mb-2 '
              }
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
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
