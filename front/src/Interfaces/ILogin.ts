export interface ILoginFormState {
    email: string;
    password: string;
  }

export interface ILoginErrorState {
    email?: string;
  password?: string;
}