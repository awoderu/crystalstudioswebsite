import { useContext } from "react";
import { ShopContext } from "../context/shopcontext";

export const Product = ({ data }) => {
  const { productName, description, price, image, id } = data;
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemCount = cartItems[id];

  return (

    <article className="flex w-full flex-col overflow-hidden rounded-2xl shadow-2xl 
    shadow-black/30 md:min-h-[620px] md:flex-row space-x-8 gap-0 md:gap-8">
      <div className="flex min-h-[350px] md:min-h-[600px] w-full pt-0 items-center justify-start p-1 md:w-[58%] md:p-6">
        <img
          src={image}
          alt={productName}
          className="h-full max-h-[1000px] w-full object-contain transition-transform duration-500 hover:scale-105 p-0"
        />
      </div>
      <div className="flex w-full flex-col items-center justify-start p-10 pt-16 text-center text-white sm:p-2 sm:pt-12 md:w-[42%] md:items-start md:justify-start md:pt-24 md:text-left">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-white/50">
          Crystal Studios
        </p>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{productName}</h2>
        <p className="mt-2 text-xl font-semibold">N{price.toLocaleString()}</p>
        <p className="mt-5 max-w-md text-base leading-7 text-white/65">{description}</p>
        
        <button type="button" className="mt-[20px] flex h-[48px] w-[150px] z-50 items-center 
          justify-center bg-white gap-2 rounded-[4px] text-[14px] font-medium tracking-[1px] text-black 
          shadow-[0_6px_15px_rgba(16,39,112,0.15)] transition-all 
          duration-300 hover:bg-grey-500 cursor-pointer hover:shadow-[0_12px_35px_rgba(16,39,112,0.25)] 
          max-[991px]:mx-auto" onClick={() => addToCart(id)} >
          ADD TO CART
          {cartItemCount > 0 && <> ({cartItemCount})</>}
        </button>
      </div>
    </article>
  );
}





// export default function ProductPage() {
//   const [selectedChair] = useState(1);
//   const [activeTab, setActiveTab] = useState("description");

//   const { dispatch } = useCart();

//   const chair = chairs.find((item) => item.id === selectedChair);

//   return (
//     <div
//       className="relative min-h-screen w-full overflow-hidden bg-black py-[100px] font-poppins text-white md:py-[100px]"
//       // style={{
//       //   background: chair.background,
//       // }}
//     >
//       {/* Main container */}
//       <div className="relative z-10 mx-auto flex min-h-screen w-[calc(100%_-_40px)] max-w-[860px] flex-wrap">

//         <div className="relative z-10 h-[410px] w-full max-w-[500px] transition-all duration-500">

//           <img
//             key={selectedChair}
//             src={chair.image}
//             alt="Modern chair"
//             className="h-full w-full mt-0 object-contain animate-[shake_0.7s_ease-in-out]"
//           />
//         </div>

//         {/* Product information */}
//         <div className="relative  mt-[20px] gap-x-7 block text-left max-[991px]:ml-0 
//          max-[991px]:w-full max-[991px]:text-center">

//           <p className="mb-[10px] mt-[40px] text-[13px] font-bold uppercase leading-tight 
//           tracking-[1px]">
//             Girl Hoodie
//           </p>

//           <h2 className="mb-[10px] text-[34px] font-extrabold leading-tight max-[575px]:text-[28px]">
            
//           </h2>

//           <h4 className="mb-[30px] text-[26px] font-medium leading-tight">
//             25,000{" "}
//             <span className="pl-[15px] text-[20px] opacity-60 line-through">
//               50,000
//             </span>
//           </h4>

//           {/* Description / Details */}
//           <div className="relative w-full">

//             {/* Tabs */}
//             <div className="flex gap-[25px] max-[991px]:justify-center max-[575px]:gap-[15px]">

//               <button
//                 onClick={() => setActiveTab("description")}
//                 className={`text-[18px] font-semibold transition-all duration-200 ${
//                   activeTab === "description"
//                     ? "opacity-100"
//                     : "opacity-50 hover:opacity-80"
//                 }`}
//               >
//                 Description
//               </button>

//               <button
//                 onClick={() => setActiveTab("details")}
//                 className={`text-[18px] font-semibold transition-all duration-200 ${
//                   activeTab === "details"
//                     ? "opacity-100"
//                     : "opacity-50 hover:opacity-80"
//                 }`}
//               >
//                 Details
//               </button>

//             </div>

//             {/* Description */}
//             {activeTab === "description" && (
//               <div className="pt-[20px] pb-[30px] transition-all duration-300">
//                 <p className="text-[16px] leading-[1.7]">
//                   If im a b****, then im the baddest b****
//                 </p>
//               </div>
//             )}

//             {/* Details */}
//             {activeTab === "details" && (
//               <div className="flex gap-[20px] pt-[20px] pb-[30px] max-[575px]:gap-[10px]">

//                 <div className="inline-block">
//                   <p className="text-[15px]">
//                     <span className="text-[30px] leading-none max-[575px]:text-[24px]">
//                       76
//                     </span>
//                     <br />
//                     Length
//                   </p>
//                 </div>

//                 <div className="inline-block">
//                   <p className="text-[15px]">
//                     <span className="text-[30px] leading-none max-[575px]:text-[24px]">
//                       68
//                     </span>
//                     <br />
//                     Width
//                   </p>
//                 </div>

//                 <div className="inline-block">
//                   <p className="text-[15px]">
//                     <span className="text-[30px] leading-none max-[575px]:text-[24px]">
//                       87
//                     </span>
//                     <br />
//                     Height
//                   </p>
//                 </div>

//                 <div className="inline-block">
//                   <p className="text-[15px]">
//                     <span className="text-[30px] leading-none max-[575px]:text-[24px]">
//                       10
//                     </span>
//                     <br />
//                     Weight
//                   </p>
//                 </div>

//               </div>
//             )}
//           </div>

//           {/* Upholstery */}
//           {/* <h5 className="mb-[5px] text-[18px] font-semibold">
//             Choose upholstery:
//           </h5> */}




//           <button
//           onClick={handleAddToCart}
//             className="mt-[20px] flex h-[48px] w-[210px] z-50 items-center 
//             justify-center bg-white gap-2 rounded-[4px] text-[14px] font-medium 
//             tracking-[1px] text-black shadow-[0_6px_15px_rgba(16,39,112,0.15)] transition-all 
//             duration-300 hover:bg-white cursor-pointer hover:shadow-[0_12px_35px_rgba(16,39,112,0.25)] 
//             max-[991px]:mx-auto"
//             // style={{
//             //   backgroundColor: chair.button,
//             // }}
//           >
//             <ShoppingCart size={20} />
//             Add To Cart
//           </button>
//         </div>

//         {/* Color selectors */}
//         {/* <div className="relative z-20 ml-[500px] flex gap-[10px] max-[991px]:mx-auto max-[991px]:ml-0 max-[991px]:justify-center">

//           {chairs.map((item) => (
//             <button
//               key={item.id}
//               onClick={() => setSelectedChair(item.id)}
//               className={`h-[40px] w-[40px] rounded-[4px] bg-cover bg-center transition-all duration-200 max-[575px]:h-[30px] max-[575px]:w-[30px] ${
//                 selectedChair === item.id
//                   ? "scale-110 border-[3px] border-[#434343]"
//                   : "border-[3px] border-transparent"
//               }`}
//               style={{
//                 backgroundImage: `url(${item.material})`,
//               }}
//               aria-label={`Choose upholstery ${item.id}`}
//             />
//           ))}

//         </div> */}

//         {/* Add to cart */}
        

//         {/* Chair image */}
        
//       </div>
//     </div>
//   );
// }
