export interface UserData {
  name: string
  imageUrl: string
  email: string
  tokenId: string
  loginHint: string
}

export interface UserLogout {
  user: UserData | null
}
