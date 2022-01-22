import Link from 'next/link';
import { Key, ReactChild, ReactFragment, ReactPortal } from 'react';
import { client } from '../../libs/client';
import type { Blog } from '../../types/blog';
import Layout from '../components/layout';
import 'dayjs/locale/ja';
import dayjs from 'dayjs';
import Seo from '../components/seo';
import { Category } from '../../types/category';

dayjs.locale('ja');

const Blog = ({ blogs }: { blogs: Blog[] }) => {
  return (
    <Layout isHome={false}>
      <Seo
        pageTitle={'noriyu app'}
        pageDescription={'個人ブログです'}
        pageImg={''}
        pageImgWidth={1280}
        pageImgHeight={960}
      ></Seo>
      <div className='m-4'>色々なジャンルで投稿</div>
      <ul className='m-4'>
        {blogs.map((blog: Blog) => (
          <li key={blog.id} className='m-1 mt-4'>
            <Link href={`/blog/${blog.id}`}>
              <a className=' font-bold'>
                <p className='text-gray-400 ml-2'>
                  {dayjs(blog.publishedAt).format('YYYY年MM月DD日 (dd)')}
                </p>
                <p className='text-3xl ml-2'>{blog.title}</p>
              </a>
            </Link>
            {/* カテゴリー */}
            {blog.category.length > 0 && (
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
            )}
          </li>
        ))}
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
