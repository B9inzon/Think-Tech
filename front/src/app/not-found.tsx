import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>No se pudo encontrar la página solicitada</p>
      <Link href="/">Regresar a Home</Link>
    </div>
  )
}