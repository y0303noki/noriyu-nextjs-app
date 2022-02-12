const SpotifyDescription = ({ title, titleJa }: { title: string; titleJa: string }) => {
  return (
    <>
      <p className='mx-4 text-5xl font-bold'>{title}</p>
      <div className='m-4'>
        直近1ヶ月以内の私の{titleJa}を表示します。 取得は
        <a
          className='text-blue-500'
          href='https://developer.spotify.com/documentation/web-api/reference/#/operations/get-users-top-artists-and-tracks'
        >
          Spotify API
        </a>
        を利用しています。<br></br>
        ビルドのタイミングで取得し直しているためリアルタイムではありません。
        また、順番は何が基準かドキュメントに記載されていないためわかりません。
      </div>
    </>
  );
};

export default SpotifyDescription;
