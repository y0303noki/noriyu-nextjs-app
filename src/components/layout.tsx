import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';
import SnsLink from './sns';

const name = 'Noriyu!';
const selfIntroduction: string =
  'このサイトでは私のポートフォリオと開発兼日常のブログを投稿します。アイコンは実家で飼っているミニチュアダックスです。';
export const siteTitle = 'Next.js Sample Website';
// トップに戻る
const returnTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

const Layout = ({ children, isHome }: { children: any; isHome: boolean }) => {
  return (
    <>
      {
        <>
          {/* <div className='h-8 bg-gradient-to-r from-orange-400 via-red-500 to-pink-500'></div> */}
          <nav className='border-b -top-0 sticky z-50 bg-white'>
            <ul className='flex space-x-4 justify-center text-sm md:text-base tracking-wider'>
              <li
                className={
                  (isHome ? 'text-blue-400 font-bold border-b-4 border-blue-400 ' : '') +
                  'p-4 list-none'
                }
              >
                <Link href={'/'}>
                  <a className='p-4 m-4'>Home</a>
                </Link>
              </li>
              <li
                className={
                  (!isHome ? 'text-blue-400 font-bold border-b-4 border-blue-400 ' : '') +
                  'p-4 list-none'
                }
              >
                <Link href={'/blog'}>
                  <a className='p-4 m-4'>Blog</a>
                </Link>
              </li>
            </ul>
          </nav>

          {/* home以外は自己紹介らへんを消す */}
          {isHome && (
            <div className='flex h-full justify-center pt-8 items-center flex-col lg:flex-row'>
              <div className='text-centerx m-4'>
                <Image
                  src='/images/me/mydog.jpg'
                  className='rounded-full'
                  height={144}
                  width={144}
                  alt={name}
                ></Image>
              </div>
              <div className=''>
                <p className='text-5xl text-center lg:text-left'>{name}</p>
                <p className='max-w-sm p-4'>{selfIntroduction}</p>
                <ul className='text-center'>
                  <li className='inline-block px-4'>
                    <a
                      href={'https://www.instagram.com/noriyu_tataero'}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='w-4'
                    >
                      <FaInstagram size={40}></FaInstagram>
                    </a>

                    {/* <SnsLink
                      name={'instagram'}
                      imagePath={'/images/logo/Instagram_Glyph_Gradient_RGB.png'}
                      url={'https://www.instagram.com/noriyu_tataero'}
                    ></SnsLink> */}
                  </li>
                  <li className='inline-block px-4'>
                    <a
                      href={'https://twitter.com/noriyuttey'}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='w-4'
                    >
                      <FaTwitter size={40}></FaTwitter>
                    </a>
                    {/* <SnsLink
                      name={'twitter'}
                      imagePath={'/images/logo/2021 Twitter logo - blue.png'}
                      url={'https://twitter.com/noriyuttey'}
                    ></SnsLink> */}
                  </li>
                  <li className='inline-block px-4'>
                    <a
                      href={'https://github.com/y0303noki'}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='w-4'
                    >
                      <FaGithub size={40}></FaGithub>
                    </a>

                    {/* <SnsLink
                      name={'github'}
                      imagePath={'/images/logo/GitHub-Mark-32px.png'}
                      url={'https://github.com/y0303noki'}
                    ></SnsLink> */}
                  </li>
                </ul>
              </div>
            </div>
          )}
        </>
      }
      <main>{children}</main>
      {/* <div className='text-center mb-4' onClick={returnTop}>
        To Top{' '}
      </div> */}
      {/* <footer className='flex flex-grow flex-shrink p-4 border-solid border-t justify-center items-center bg-gray-100 footer'> */}
      {/* <footer>Noriyu site</footer> */}
    </>
  );
};

export default Layout;
