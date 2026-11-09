import { IAtlasDirectoryInfo } from "./IAtlasDirectoryInfo"
import { IAtlasFileInfo } from "./IAtlasFileInfo"

export interface IDirectory {  
  path: string
  metadata: IAtlasDirectoryInfo

  files: { [ftName: string]: IAtlasFileInfo }
  subdirs: { [ftName: string]: IAtlasDirectoryInfo }
  objects: string[]
}