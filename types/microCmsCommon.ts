import { Common } from './common';

// microCMSで使う共通の型
export type microCmsCommon = Common & {
  createdAt: string; // 作成日時
  updatedAt: string; // 更新日時
  publishedAt: string; // 投稿日時
  revisedAt: string; // 何これ
};
