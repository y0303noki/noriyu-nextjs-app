import { client } from '../../../libs/client';
import Layout from '../../components/layout';
import type { Blog } from '../../../types/blog';
import dayjs from 'dayjs';

export default function BlogId({ blog }: { blog: Blog }) {
  return (
    <Layout isHome={false}>
      <p className='text-2xl font-bold m-2 '>{blog.title}</p>
      <p className='text-gray-400 ml-2'>{dayjs(blog.publishedAt).format('YYYY年MM月DD日 (dd)')}</p>
      {/* ここから本文 */}
      <div
        className='prose m-2 '
        dangerouslySetInnerHTML={{
          __html: `${blog.body}`,
        }}
      />
    </Layout>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getServerSideProps = async (context: { params: { id: any } }) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: 'blog', contentId: id });

  return {
    props: {
      blog: data,
    },
  };
};
