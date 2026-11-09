import { QueryFileStatsResponse, QueryStorageStatsResponse } from "@atlasdepin/atlas.js-protos/storage/query";
import { TreeNode as AtlasTreeNode } from "@atlasdepin/atlas.js-protos/filetree";
import { IAesBundle } from "../interfaces";

export enum Privacy {
  PUBLIC,
  ENCRYPTED,
  PASSWORD_PROTECTED,
}

export type FileStats = QueryFileStatsResponse
export type StorageStats = QueryStorageStatsResponse

export type TreeNode = AtlasTreeNode & {
  encryption: Privacy
  aesBundle?: IAesBundle
}
