export interface userData {
  _id: string;
  username: string;
  email: string;
  isAdmin: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
  accessToken: string;
}
export interface userState {
  data: {
    username: string;
    email: string;
    isAdmin: boolean;
    createdAt: string;
    updatedAt: string;
    _id: string;
    __v: number;
    accessToken: string;
  };
}
