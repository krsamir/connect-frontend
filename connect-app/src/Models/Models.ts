export interface IData {
  email: string;
  password: string;
}

export type LoginInput = {
  email: string;
  password: string;
};

export interface ILoginResponse {
  message: string;
  status: number;
  token: string;
}
