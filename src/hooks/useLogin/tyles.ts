export interface UserData {
  name: string
  imageUrl: string
  email: string
  tokenId: string
}

export interface UserLogout {
  user: UserData | null
}
