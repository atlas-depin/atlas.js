import { Privacy } from "../types"

export interface INodeContents {
  owner: string
  encryption: Privacy
  dateUpdated: number
  dateCreated: number
}