export interface RegisterFormState {
    email: string,
    password: string,
    address: string,
    phone: string
  }

export interface RegisterErrorState{
    email?: string,
    password?: string,
    address?: string,
    phone?: string
  }