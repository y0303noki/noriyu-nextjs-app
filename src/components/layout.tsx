import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import utilStyles from '../../styles/utils.module.css';

const name = 'Noriyu!';
export const siteTitle = 'Next.js Sample Website';

const Layout = ({ children, home }: { children: any; home: any }) => {
  return (
    <div className=''>
      <header className=''>
        {home ? (
          <>
            <div className='flex justify-center'>
              <Image
                priority
                src='/images/dogsample.jpg'
                className='rounded-full'
                height={144}
                width={144}
                alt={name}
              />
              <div className=''>
                {name}
                <div>ここに自己紹介を書く</div>
                <div>ここにSNSのアカウントを並べる</div>
              </div>
            </div>
          </>
        ) : (
          <>
            <Link href='/'>
              <a>
                <Image
                  priority
                  src='/images/dogsample.jpg'
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href='/'>
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className=''>
          <Link href='/'>
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Layout;
