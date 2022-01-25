import Link from 'next/link';
import { Key, ReactChild, ReactFragment, ReactPortal } from 'react';
import { client } from '../../libs/client';
import type { Blog } from '../../types/blog';
import Layout from '../components/layout';
import 'dayjs/locale/ja';
import dayjs from 'dayjs';
import Seo from '../components/seo';
import { Category } from '../../types/category';
import CustomEmoji from '../components/Atom/customEmoji';

dayjs.locale('ja');
const baseUrl = process.env.NEXT_PUBLIC_HOST;

const BlogLink = ({ blog }: { blog: Blog }) => {
  const icon = blog.category.length > 0 ? blog.category[0].icon[0] : '';
  return (
    <Link href={`/blog/${blog.id}`}>
      <a className=' font-bold'>
        <div className='flex flex-row'>
          <div className='bg-gray-300 bg-opacity-50 w-20 h-20 rounded-2xl flex items-center justify-center'>
            <div className='text-center mt-1'>
              {' '}
              <CustomEmoji icon={icon}></CustomEmoji>
            </div>
          </div>
          <div className=' flex-col'>
            <p className='text-gray-400 ml-2'>
              {dayjs(blog.publishedAt).format('YYYY年MM月DD日 (dd)')}
            </p>
            <p className='text-2xl ml-2'>{blog.title}</p>
          </div>
        </div>
      </a>
    </Link>
  );
};

const Blog = ({ blogs }: { blogs: Blog[] }) => {
  return (
    <Layout isHome={false}>
      <Seo
        pageTitle={'noriyu dev blog'}
        pageDescription={'noriyu no blog'}
        pagePath={`${baseUrl}/blog`}
        pageImg={`${baseUrl}/images/small/my_home_1mb.jpg`}
        pageImgWidth={1280}
        pageImgHeight={960}
      ></Seo>
      <div className='m-4'>色々なジャンルで投稿</div>
      <ul className='m-4'>
        {blogs.map((blog: Blog) => {
          if (blog.category.length <= 0) {
            return (
              <li key={blog.id} className='m-1 mt-4 '>
                <BlogLink blog={blog}></BlogLink>
              </li>
            );
          } else {
            return (
              <li key={blog.id} className='m-1 mt-4 '>
                <BlogLink blog={blog}></BlogLink>
                {/* カテゴリー */}

                <div className='m-2'>
                  {blog.category.map((category: Category) => (
                    <span
                      key={category.id}
                      className={
                        'rounded-md text-sm p-1 m-1 text-gray-50 ' +
                        (category.id == 'mfonvfqwuj8' ? 'bg-blue-500' : 'bg-gray-500')
                      }
                    >
                      {category.name}
                    </span>
                  ))}
                </div>
              </li>
            );
          }
        })}
      </ul>
    </Layout>
  );
};
export default Blog;

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: 'blog' });

  return {
    props: {
      blogs: data.contents,
    },
  };
};
