import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import SnsLink from './sns';

const name = 'Noriyu!';
const selfIntroduction: string =
  'アイコンは実家で飼っているミニチュアダックスです。自己紹介です。僕は僕です。頑張ります。人生！人生！あああああああああああああえええええええええええええええええええええ';
export const siteTitle = 'Next.js Sample Website';
// トップに戻る
const returnTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

const Layout = ({ children }: { children: any }) => {
  return (
    <div className=''>
      <header className=''>
        {
          <>
            <div className='h-8 bg-gradient-to-r from-orange-400 via-red-500 to-pink-500'></div>
            <div className='flex h-full justify-center pt-8 items-center flex-col lg:flex-row'>
              <div className='text-centerx rounded-full m-4 border-red-4 '>
                <img
                  src='/images/me/mydog.jpg'
                  className='rounded-full border-white-2'
                  height={144}
                  width={144}
                  alt={name}
                ></img>
                {/* <Image
                  priority
                  src='/images/me/mydog.jpg'
                  className='rounded-full border-red'
                  height={144}
                  width={144}
                  alt={name}
                /> */}
              </div>
              <div className=''>
                <p className='text-5xl text-center lg:text-left'>{name}</p>
                <p className='max-w-sm p-4'>{selfIntroduction}</p>
                <ul className='text-center'>
                  <li className='inline px-4'>
                    <SnsLink
                      name={'instagram'}
                      imagePath={'/images/logo/Instagram_Glyph_Gradient_RGB.png'}
                      url={'aaa'}
                    ></SnsLink>
                  </li>
                  <li className='inline px-4'>
                    <SnsLink
                      name={'twitter'}
                      imagePath={'/images/logo/2021 Twitter logo - blue.png'}
                      url={'aaa'}
                    ></SnsLink>
                  </li>
                  <li className='inline px-4'>
                    <SnsLink
                      name={'github'}
                      imagePath={'/images/logo/GitHub-Mark-32px.png'}
                      url={'https://github.com/y0303noki'}
                    ></SnsLink>
                  </li>
                </ul>
              </div>
            </div>
          </>
        }
      </header>
      <main>{children}</main>
      <div className='text-center mb-4' onClick={returnTop}>
        To Top{' '}
      </div>
      <footer className='flex flex-grow flex-shrink p-8 border-solid border-t justify-center items-center'>
        Noriyu site
        {/* <span className='h-4 ml-2'>
            <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
          </span> */}
      </footer>

      {/* {!home && (
        <div className=''>
          <Link href='/'>
            <a>← Back to home</a>
          </Link>
        </div>
      )} */}
    </div>
  );
};

export default Layout;
