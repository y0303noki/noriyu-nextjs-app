import Link from 'next/link';
import { Key, ReactChild, ReactFragment, ReactPortal } from 'react';
import { client } from '../../libs/client';
import type { Blog } from '../../types/blog';
import Layout from '../components/layout';

const Blog = ({ blogs }: { blogs: Blog[] }) => {
  return (
    <>
      <Layout isHome={false}>
        <div>
          <ul>
            {blogs.map((blog: Blog) => (
              <li key={blog.id}>
                <Link href={`/blog/${blog.id}`}>
                  <a>{blog.title}</a>
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
