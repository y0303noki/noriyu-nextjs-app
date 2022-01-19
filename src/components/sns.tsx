import Image from 'next/image';

// SNSのアイコンとリンク先
const SnsLink = ({ name, imagePath, url }: { name: string; imagePath: string; url: string }) => {
  return (
    <>
      <a href={url} target='_blank' rel='noopener noreferrer' className='w-4'>
        <Image priority src={imagePath} className='' height={40} width={40} alt={name} />
      </a>
    </>
  );
};
export default SnsLink;
