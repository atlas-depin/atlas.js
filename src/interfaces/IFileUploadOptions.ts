import { IFileMetadata } from "./IAtlasFileInfo";
import { IEncryptionOptions } from "./IEncryptionOptions"

export interface IFileUploadOptions {
  metadata?: IFileMetadata;
  replicas?: number
  encryption?: IEncryptionOptions
}