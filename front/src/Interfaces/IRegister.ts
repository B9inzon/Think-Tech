export interface IRegisterFormState {
    email: string,
    name: string
    password: string,
    address: string,
    phone: string
  }

export interface IRegisterErrorState{
    email?: string,
    name?: string,
    password?: string,
    address?: string,
    phone?: string
  }