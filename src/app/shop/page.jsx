import { products } from "../components/data"
import king from "../components/product.module.css"
import Image from "next/image";

export default function Shop() {
    const productCat = products.map(product => (
        <section key={product.id} className="flex flex-col items-center hover:shadow-2xl">
            <Image src={product.imageUrl} alt={product.description} width={'100'} height={'100'}/>
            <p>SKU: {product.id}</p>
            <h2>{product.name}</h2>
            <p>Colour: {product.colour}</p>
        </section>
    ))
  return (
    <div className={king.prod}>
        {productCat}
    </div>
  )
}
