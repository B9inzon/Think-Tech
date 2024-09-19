export interface RegisterFormState {
    email: string,
    name: string
    password: string,
    address: string,
    phone: string
  }

export interface RegisterErrorState{
    email?: string,
    name?: string,
    password?: string,
    address?: string,
    phone?: string
  }