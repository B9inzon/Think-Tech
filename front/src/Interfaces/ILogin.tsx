export interface LoginFormState {
    email: string;
    password: string;
  }

export interface LoginErrorState {
    email?: string;
  password?: string;
}