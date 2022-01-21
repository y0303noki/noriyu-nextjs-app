import Link from 'next/link';
import { Key, ReactChild, ReactFragment, ReactPortal } from 'react';
import { client } from '../../libs/client';
import type { Blog } from '../../types/blog';
import Layout from '../components/layout';
import 'dayjs/locale/ja';
import dayjs from 'dayjs';

dayjs.locale('ja');

const Blog = ({ blogs }: { blogs: Blog[] }) => {
  return (
    <>
      <Layout isHome={false}>
        <div>
          <div className='m-4'>develop関係、プライベート関係なしに書きます。</div>
          <ul className='m-4'>
            {blogs.map((blog: Blog) => (
              <li key={blog.id} className='m-1'>
                <Link href={`/devBlog/${blog.id}`}>
                  <a className=' font-bold'>
                    {blog.title}
                    <p className='text-gray-400 ml-2'>
                      {dayjs(blog.publishedAt).format('YYYY年MM月DD日 (dd)')}
                    </p>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Layout>
    </>
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
