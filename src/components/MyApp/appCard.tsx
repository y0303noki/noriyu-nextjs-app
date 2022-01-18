//  AppCardのコンポーネント
import Image from 'next/image';

const AppCard = ({ appName, appDescription }: { appName: string; appDescription: string }) => {
  return (
    <div className='flex flex-col h-full m-4 min-w-max w-96 max-w-md'>
      <div className='max-w-sm rounded overflow-hidden shadow-lg '>
        <div className='flex flex-row pt-4'>
          <img
            height={80}
            width={80}
            className='rounded-2xl ml-4 h-24 w-24'
            src='/images/dogsample.jpg'
          />
          {/* <Image
            src='/images/dogsample.jpg'
            alt='My avatar'
            className='rounded-2xl py-4 ml-4 h-24 w-24 object-cover'
          /> */}
          {/* </div> */}
          <div className='ml-4'>
            <div className='font-bold text-xl mb-2'>{appName}</div>
            <p className='text-gray-700 text-base'>{appDescription}</p>
          </div>
        </div>
        {/* タグ */}
        <div className='px-6 pt-4 pb-2'>
          <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
            #flutter
          </span>
          <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
            #firebase
          </span>
        </div>
      </div>
    </div>
  );
};

export default AppCard;
