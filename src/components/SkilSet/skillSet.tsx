import Image from 'next/image';

const SkillSet = ({ imagePath }: { imagePath: string }) => {
  return (
    <>
      <Image src={imagePath} height={50} width={50}></Image>
    </>
  );
};
export default SkillSet;
