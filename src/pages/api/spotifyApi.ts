// SpotifyApi.js

import axios from 'axios';
import { SpotifyTopArtist } from '../../../types/spotify_top_artist';
import { SpotifyTopTraks } from '../../../types/spotify_top_traks';

export class SpotifyApi {
  private client_id = process.env.SPOTIFY_CLIENT_ID;
  private client_secret = process.env.SPOTIFY_CLIENT_SECRET;
  private refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

  private timeRangeShort = 'short_term';
  private type = 'tracks'; // artists or tracks
  private meTopArtistUrl = `https://api.spotify.com/v1/me/top/${this.type}?time_range=${this.timeRangeShort}`;
  private meTopTraksUrl = `https://api.spotify.com/v1/me/top/tracks?time_range=${this.timeRangeShort}&limit=50`;
  private accessToken = '';

  private tokenEndpoint = 'https://accounts.spotify.com/api/token';

  private header = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: '',
  };

  //   constructor() {
  //     this.accessToken = localStorage.getItem('accessToken');
  //     this.headers = {
  //       'Content-Type': 'application/json',
  //       Authorization: `Bearer ${this.accessToken}`,
  //     };
  //     this.userId = null;

  // refresh_tokenを利用してasscess_tokenを取得する
  async getAccessToken(): Promise<string> {
    // base64変換
    const encode = Buffer.from(`${this.client_id}:${this.client_secret}`).toString('base64');

    const result: string = await axios({
      url: this.tokenEndpoint,
      method: 'post',
      params: {
        grant_type: 'refresh_token',
        refresh_token: this.refresh_token,
      },
      headers: {
        Authorization: 'Basic ' + encode,
      },
    })
      .then((response) => {
        return response.data.access_token;
      })
      .catch((error) => {
        return 'ERROR getAccsessToken';
      });

    this.accessToken = result;
    return result;
  }

  // ユーザーのTop Tracks取得
  async getTopTracksByUser(): Promise<SpotifyTopTraks[]> {
    let items: SpotifyTopTraks[];

    const header = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.accessToken}`,
    };
    return await axios
      .get(`${this.meTopTraksUrl}`, { headers: header })
      .then((res: any) => {
        items = res.data.items.map((item: any) => {
          const artistName = item.artists.length > 0 ? item.artists[0].name : 'unknown';
          const imageUrl = item.album?.images?.length
            ? item.album.images[item.album.images.length - 1].url
            : 'noimage';
          const releaseDate = item.album?.release_date ? item.album.release_date : 'unknown';
          const info: SpotifyTopTraks = {
            id: item.id,
            music_name: item.name,
            release_date: releaseDate,
            artist_name: artistName,
            music_url: item.external_urls.spotify,
            image_url: imageUrl,
          };
          return info;
        });
        return items;
      })
      .catch((error: any) => {
        console.log('ERROR getTopTracksByUser');
        return error.response.data;
      });
  }
}
