//  AppCardのコンポーネント
import Image from 'next/image';

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
    <div className='flex flex-col h-full m-4 min-w-max w-96'>
      <div className=' max-w-80 shadow-lg'>
        <div className='flex flex-row pt-4'>
          {iconPath && appIcon}
          <div className='ml-4'>
            <div className='font-bold text-xl mb-2'>{appName}</div>
            <p className='text-gray-700 text-base mx-2'>{appDescription}</p>
          </div>
        </div>
        <div className='m-2'>
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
          {githubUrl != '' && (
            <a className='h-4 ml-2' href={githubUrl} target={'_blank'} rel='noreferrer'>
              <Image
                src='/images/logo/github-icon.png'
                alt='Github Logo'
                width={logoWidth}
                height={logoWidth}
              />
            </a>
          )}
          {appStoreUrl != '' && (
            <a className='h-4 ml-2' href={appStoreUrl} target={'_blank'} rel='noreferrer'>
              <Image
                src='/images/logo/aoostore-icon.png'
                alt='AppStore Logo'
                width={logoWidth}
                height={logoWidth}
              />
            </a>
          )}
        </div>

        {/* 挫折理由 */}
        {isZasetApp && (
          <>
            <p className='ml-4'>挫折理由</p>
            <div className='bg-gray-200 rounded-2xl m-2 p-4 text-sm'>{zasetuReason}</div>
          </>
        )}
        {/* タグ */}
        <div className='px-6 pt-4 pb-2'>
          {tags.map((tag, index) => (
            <span
              key={tag}
              className={
                'inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 '
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
