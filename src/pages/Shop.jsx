import { PRODUCTS } from "../product.js";
import { Product } from "../components/products";


const Shop = () => {
  return (
    <main className="min-h-screen bg-black px-4 pb-16 pt-28 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        {/* <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50">The collection</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">Crystal Studios</h1>
        <p className="mt-4 max-w-xl text-base leading-7 text-white/60">Everyday pieces designed with a little more character.</p> */}
        <div className="mt-12 grid gap-8">
          {PRODUCTS.map((product) => <Product key={product.id} data={product} />)}
        </div>
      </div>
    </main>
  );
};

export default Shop;




//  <div key={PRODUCTS.id}>
//             <h2>{PRODUCTS.productName}</h2>
//             <p>{PRODUCTS.description}</p>
//             <p>{PRODUCTS.price}</p>
//             <img src={PRODUCTS.image} alt={PRODUCTS.productName} />
//           </div>