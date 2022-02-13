import { useTheme } from 'next-themes';
import { FaMoon, FaSun } from 'react-icons/fa';

const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();

  // lightとdarkを入れ替え
  const handleSetTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className='pr-4 pt-4 dark:bg-gray-800'>
      <button
        className='block p-1 bg-black dark:bg-white rounded-full ml-auto'
        onClick={handleSetTheme}
      >
        {theme === 'light' || !theme ? (
          <FaMoon className='w-5 h-5 text-white' />
        ) : (
          <FaSun className='w-5 h-5 text-black' />
        )}
      </button>
    </div>
  );
};
export default ThemeChanger;
