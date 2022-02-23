import { Common } from './common';

export type SpotifyTopTraks = Common & {
  music_name: string;
  artist_name: string;
  music_url: string;
  image_url: string;
  release_date: string;
};
