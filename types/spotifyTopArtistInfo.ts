import { SpotifyTopArtist } from './spotify_top_artist';

export type SpotifyTopArtistInfo = {
  lastUpdateAt: string; // 最終更新日時
  spotifyTopArtist: SpotifyTopArtist[];
};
