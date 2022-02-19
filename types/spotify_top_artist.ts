import { Common } from './common';

export type SpotifyTopArtist = Common & {
  name: string;
  artist_url: string;
  image_url: string;
};
