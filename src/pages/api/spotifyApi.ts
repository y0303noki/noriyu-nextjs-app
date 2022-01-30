// SpotifyApi.js

import axios from 'axios';
import { SpotifyTopArtist } from '../../../types/spotify_top_artist';
// import config from '../config';

export class SpotifyApi {
  private timeRangeShort = 'short_term';
  private meTopArtistUrl = `https://api.spotify.com/v1/me/top/artists?time_range=${this.timeRangeShort}`;
  private accessToken: string = '';

  private header = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer BQA9VRGPV-l0LYFYj42aTTPytg9EU_vOXdnAQ9OO1oN8NR3ChQl4xf3r0P0UMEvSx6SsQkqHgbZU7UPQvH62AkGCSV6omFS2x3GyLisZThQmKh2V8b1tkZNzsgW8hAb9wCLw5eCKSSU-LTW6B8ocTuuj0N6zkIRB4_h6lnHKVbpw-w`,
  };

  //   constructor() {
  //     this.accessToken = localStorage.getItem('accessToken');
  //     this.headers = {
  //       'Content-Type': 'application/json',
  //       Authorization: `Bearer ${this.accessToken}`,
  //     };
  //     this.userId = null;
  //     this.playlistId = null;
  //   }

  async getAccessToken(): Promise<String> {
    const client_id = '819c0f3377804966bfd8193ae2aeb2ce';
    const client_secret = '8e45cab23f4c430782565e06f34ca052';
    const getTokenUrl = 'https://accounts.spotify.com/api/token?scope=';

    // token or error
    const result: string = await axios({
      url: getTokenUrl,
      method: 'post',
      params: {
        grant_type: 'client_credentials',
      },
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      auth: {
        username: client_id,
        password: client_secret,
      },
    })
      .then((response) => {
        console.log(response);
        console.log(response.data);
        return response.data.access_token;
      })
      .catch((error) => {
        console.log('ERROR!');
        return 'ERROR';
      });

    this.accessToken = result;
    console.log(this.accessToken.length);

    return result;
  }

  // ユーザーのTop Tracks取得
  async getTopTracksByUser(): Promise<SpotifyTopArtist[]> {
    console.log(this.accessToken);
    let items: SpotifyTopArtist[];
    return await axios
      .get(`${this.meTopArtistUrl}`, { headers: this.header })
      .then((res: any) => {
        // console.log('then');
        // console.log(res.data.items[0]);
        items = res.data.items.map((item: any) => {
          const info: SpotifyTopArtist = {
            external_urls: { spotify: item.external_urls.spotify },
            id: item.id,
            name: item.name,
          };
          return info;
        });
        return items;
      })
      .catch((error: any) => {
        console.log('error');
        // console.log(error);
        return error.response.data;
      });
  }
}
