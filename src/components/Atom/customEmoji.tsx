import { Emoji } from 'emoji-mart';

const DIARY = 'diary';
const DEVELOP = 'develop';
const GAME = 'game';
const MUSIC = 'music';

const CustomEmoji = ({ icon = '' }: { icon?: string }) => {
  let emoji = '';
  switch (icon) {
    case DIARY:
      emoji = 'books';
      break;
    case DEVELOP:
      emoji = 'technologist';
      break;
    case GAME:
      emoji = 'video_game';
      break;
    case MUSIC:
      emoji = 'headphones';
      break;
    default:
      emoji = 'smile';
      break;
  }
  return <Emoji emoji={emoji} size={64}></Emoji>;
};

export default CustomEmoji;
