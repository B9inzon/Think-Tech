import { IProduct } from "./IProduct";

export interface IPurchase {
    id: number;
    status: string;
    date: Date;
    products: IProduct[];
  }
  