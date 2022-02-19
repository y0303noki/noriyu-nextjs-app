import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';

const SpotifyDescription = ({
  title,
  titleJa,
  lastUpdateAt,
}: {
  title: string;
  titleJa: string;
  lastUpdateAt: string;
}) => {
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
        を利用しています。
        <div className='text-gray-500 text-center'>
          last update <span>{lastUpdateAt}</span>
        </div>
      </div>
    </>
  );
};

export default SpotifyDescription;
