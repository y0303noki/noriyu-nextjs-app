import { GetStaticProps } from 'next';
import Link from 'next/link';
import Seo from '../components/seo';
import type { Issue } from '../../types/issue';
import { FaArrowAltCircleRight, FaArrowLeft } from 'react-icons/fa';
import Layout from '../components/layout';

const baseUrl = process.env.NEXT_PUBLIC_HOST;

// 改善一覧
const issueUrl = 'https://api.github.com/repos/y0303noki/noriyu-nextjs-app/issues';
const Kaizen = ({ issues }: { issues: Issue[] }) => {
  if (issues.length <= 0) {
    return (
      <>
        <Layout isHome={false}>
          <Seo
            pageTitle={`kaizen`}
            pageDescription={`改善一覧です`}
            pagePath={`${baseUrl}/kaizen`}
            pageImg={`${baseUrl}/images/small/my_home_1mb.jpg`}
            pageImgWidth={1280}
            pageImgHeight={960}
          ></Seo>
          <p>issueなし</p>
        </Layout>
      </>
    );
  } else {
    return (
      <>
        <Layout isHome={false}>
          <Seo
            pageTitle={`kaizen`}
            pageDescription={`改善一覧です`}
            pagePath={`${baseUrl}/kaizen`}
            pageImg={`${baseUrl}/images/small/my_home_1mb.jpg`}
            pageImgWidth={1280}
            pageImgHeight={960}
          ></Seo>
          <ul className='m-4'>
            {issues.map((issue: Issue) => (
              <li key={issue.id.toString()}>
                <a href={issue.url} target={'_blank'} rel='noreferrer'>
                  <div className='flex flex-row justify-between items-center text-2xl font-bold border-b'>
                    <p className=''>{issue.title}</p>
                    <FaArrowAltCircleRight className='' />
                  </div>
                </a>
                <div className='m-2 overfrow-3'>{issue.body}</div>
                <div className='m-2'>
                  {issue.labels.length > 0 &&
                    issue.labels.map((label: string) => (
                      <span
                        key={label}
                        className={
                          'rounded-md text-sm p-1 m-1 text-gray-50 ' +
                          (label == 'bug' ? 'bg-red-500' : 'bg-gray-500')
                        }
                      >
                        {label}
                      </span>
                    ))}
                </div>
              </li>
            ))}
          </ul>
        </Layout>
      </>
    );
  }
};
export default Kaizen;

// issueのデータを取得する
export const getServerSideProps: GetStaticProps = async (context) => {
  const res = await fetch(issueUrl);
  const datas = await res.json();

  const issues: Issue[] = datas.map((data: any) => {
    const issue: Issue = {
      id: data.id,
      url: data.html_url,
      title: data.title,
      body: data.body,
      state: data.state,
      labels: data.labels.map((label: any) => label.name),
      author_association: data.author_association,
      createdAt: data.created_at,
      updatedAt: data.updated_at,
    };
    return issue;
  });

  // 必要なissueだけにする
  issues.filter((issue) => issue.author_association === 'OWNER');

  // createdAtの降順に並び替え
  issues.sort((a, b) => (a.createdAt > b.createdAt ? 1 : -1));

  return { props: { issues: issues } };
};
