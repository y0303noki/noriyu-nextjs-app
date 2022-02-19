// SpotifyApi.js

import axios from 'axios';
import { SpotifyTopArtist } from '../../../types/spotify_top_artist';
import { SpotifyTopTraks } from '../../../types/spotify_top_traks';
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import { SpotifyTopArtistInfo } from '../../../types/spotifyTopArtistInfo';
import { SpotifyTopTrakInfo } from '../../../types/spotifyTopTrakInfo';

export class SpotifyApi {
  private client_id = process.env.SPOTIFY_CLIENT_ID;
  private client_secret = process.env.SPOTIFY_CLIENT_SECRET;
  private refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

  private timeRangeShort = 'short_term';
  private type = 'tracks'; // artists or tracks
  private meTopArtistUrl = `https://api.spotify.com/v1/me/top/artists?time_range=${this.timeRangeShort}&limit=50`;
  private meTopTraksUrl = `https://api.spotify.com/v1/me/top/tracks?time_range=${this.timeRangeShort}&limit=50`;
  private accessToken = '';

  private tokenEndpoint = 'https://accounts.spotify.com/api/token';

  private header = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: '',
  };

  constructor() {
    dayjs.extend(timezone);
    dayjs.tz.setDefault('Asia/Tokyo');
  }

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

  // ユーザーのTop Artist取得
  public async getTopArtistByUser(): Promise<SpotifyTopArtistInfo> {
    let items: SpotifyTopArtist[];
    const lastUpdatedAt = dayjs().format('YYYY-MM-DD');

    let result: SpotifyTopArtistInfo = {
      lastUpdateAt: lastUpdatedAt,
      spotifyTopArtist: [],
    };
    const header = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.accessToken}`,
    };

    return await axios
      .get(`${this.meTopArtistUrl}`, { headers: header })
      .then((res: any) => {
        // console.log(res.data.items[0]);
        items = res.data.items.map((item: any) => {
          const imageUrl = item.images?.length
            ? item.images[item.images.length - 1].url
            : 'noimage';
          const info: SpotifyTopArtist = {
            id: item.id,
            name: item.name,
            artist_url: item.external_urls?.spotify,
            image_url: imageUrl,
          };
          return info;
        });
        result.spotifyTopArtist = items;
        return result;
      })
      .catch((error: any) => {
        console.log('ERROR getTopTracksByUser');
        console.error(error);
        return error.response.data;
      });
  }

  // ユーザーのTop Tracks取得
  async getTopTracksByUser(): Promise<SpotifyTopTrakInfo> {
    let items: SpotifyTopTraks[];
    const lastUpdatedAt = dayjs().format('YYYY-MM-DD');

    let result: SpotifyTopTrakInfo = {
      lastUpdateAt: lastUpdatedAt,
      spotifyTopArtist: [],
    };

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
        result.spotifyTopArtist = items;
        return result;
      })
      .catch((error: any) => {
        console.log('ERROR getTopTracksByUser');
        return error.response.data;
      });
  }
}
