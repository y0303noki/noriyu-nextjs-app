//  AppCardのコンポーネント
import Image from 'next/image';

const AppCard = ({
  appName,
  appDescription,
  tags,
  githubUrl,
}: {
  appName: string;
  appDescription: string;
  tags: string[];
  githubUrl: string;
}) => {
  return (
    <div className='flex flex-col h-full m-4 min-w-max w-96 max-w-md'>
      <div className='max-w-sm shadow-lg'>
        <div className='flex flex-row pt-4'>
          <div className='ml-4 h-24 w-24  min-h-24 min-w-24'>
            <Image
              height={80}
              width={80}
              src='/images/dogsample.jpg'
              alt='My avatar'
              className='rounded-2xl'
            />
          </div>
          <div className='ml-4'>
            <div className='font-bold text-xl mb-2'>{appName}</div>
            <p className='text-gray-700 text-base'>{appDescription}</p>
          </div>
        </div>
        {/* githubのurl */}
        <div className='m-4'>
          <a href={githubUrl}>{githubUrl}</a>
        </div>

        {/* タグ */}
        <div className='px-6 pt-4 pb-2'>
          {tags.map((tag) => (
            <span
              key={tag}
              className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'
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
