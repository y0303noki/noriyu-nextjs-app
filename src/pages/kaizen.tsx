import { GetStaticProps } from 'next';
import Link from 'next/link';

// 改善一覧
const issueUrl = 'https://api.github.com/repos/y0303noki/noriyu-nextjs-app/issues';
const Kaizen = ({ issues }: { issues: any }) => {
  const issue = issues.length > 0 ? issues[0] : {};

  return (
    <div>
      issues
      <p>title:{issue.title}</p>
      <p>body:{issue.body}</p>
      <Link href={'/'}>Homeに戻る</Link>
    </div>
  );
};
export default Kaizen;

// issueのデータを取得する
export const getServerSideProps: GetStaticProps = async (context) => {
  const res = await fetch(issueUrl);
  const datas = await res.json();
  const issues = datas.map((data: any) => ({ title: data.title, body: data.body }));

  return { props: { issues: issues } };
};
