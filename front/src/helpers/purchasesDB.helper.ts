
const APIURL = process.env.NEXT_PUBLIC_API_URL;

export async function createPurchase(products: number[], token: string) {
  try {
    const res = await fetch(`${APIURL}/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token
      },
      body: JSON.stringify({ 
        products
       })
      });
      const purchases = await res.json();
      return purchases;
    
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("Se produjo un error desconocido");
    }
  }
}

export async function getPurchases( token: string) {
  try {
    const res = await fetch(`${APIURL}/users/orders`, {
      method: 'GET',
      cache: "no-cache",
      headers: {
        'Content-Type': 'application/json',
        Authorization: token
      },     
      });
      const purchases = await res.json();
      return purchases;
    
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("Se produjo un error desconocido");
    }
  }
}


