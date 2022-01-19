import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import SnsLink from './sns';

const name = 'Noriyu!';
const selfIntroduction: string =
  '自己紹介です。僕は僕です。頑張ります。人生！人生！あああああああああああああえええええええええええええええええええええ';
export const siteTitle = 'Next.js Sample Website';

const Layout = ({ children }: { children: any }) => {
  return (
    <div className=''>
      <header className=''>
        {
          <>
            <div className='flex h-full justify-center pt-8'>
              <div className='w-48 h-48'>
                <Image
                  priority
                  src='/images/dogsample.jpg'
                  className='rounded-full '
                  height={144}
                  width={144}
                  alt={name}
                />
              </div>
              <div>
                <p className='text-5xl'>{name}</p>
                <p className='max-w-sm p-4'>{selfIntroduction}</p>
                <ul>
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
