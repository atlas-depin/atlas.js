import { INodeContents } from "./INodeContents"

export interface IAtlasDirectoryInfo extends INodeContents {
  id: string
  name: string
  itemCount: number
}
