import { IProduct } from "@/Interfaces/IProduct";

const APIURL = process.env.NEXT_PUBLIC_API_URL;

export async function purchasesFromDb(): Promise<IProduct[]> {
  try {
    const res = await fetch(`${APIURL}/orders`, {
      next: { revalidate: 1200 },
    });
    const products: IProduct[] = await res.json();
    return products;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("Se produjo un error desconocido");
    }
  }
}


