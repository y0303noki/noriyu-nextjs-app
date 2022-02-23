import { SpotifyTopTraks } from './spotify_top_traks';

export type SpotifyTopTrakInfo = {
  lastUpdateAt: string; // 最終更新日時
  spotifyTopArtist: SpotifyTopTraks[];
};
