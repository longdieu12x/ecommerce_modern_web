export interface userProps {
  _id: string;
  username: string;
  email: string;
  isAdmin: boolean;
  createdAt: string;
  updatedAt: string;
  __v: boolean;
  accessToken: string;
}
export interface userRegister {
  username: string;
  password: string;
  email: string;
}
