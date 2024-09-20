import { IProduct } from "@/Interfaces/IProduct";

const APIURL = process.env.NEXT_PUBLIC_API_URL;

export async function getProductsFromDb(): Promise<IProduct[]> {
  try {
    const res = await fetch(`${APIURL}/products`, {
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

export async function getProductById(id: string): Promise<IProduct> {
  try {
    const products: IProduct[] = await getProductsFromDb();
    const foundProduct = products.find((product)=>product.id.toString() === id);
    if (!foundProduct) throw new Error ('Producto no encontrado');
    return  foundProduct;

  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("Se produjo un error desconocido");
    }
  }
}
