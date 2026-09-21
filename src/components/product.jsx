import React, { useState } from "react";
import { ShoppingCart } from "lucide-react";
import girlHoodie from "../assets/girl_hoodie.png";

const chairs = [
  {
    id: 1,
    image: girlHoodie,
    material: "https://assets.codepen.io/1462889/mat1.jpg",
    background: "linear-gradient(196deg, #f1a9a9, #e66767)",
    button: "#944852",
  },
  {
    id: 2,
    image: "./assets/ch2.png",
    material: "https://assets.codepen.io/1462889/mat2.jpg",
    background: "linear-gradient(196deg, #4c4c4c, #262626)",
    button: "#1a1a1a",
  },
  {
    id: 3,
    image: "https://assets.codepen.io/1462889/ch3.png",
    material: "https://assets.codepen.io/1462889/mat3.jpg",
    background: "linear-gradient(196deg, #8a9fb2, #5f7991)",
    button: "#40566e",
  },
  {
    id: 4,
    image: "https://assets.codepen.io/1462889/ch4.png",
    material: "https://assets.codepen.io/1462889/mat4.jpg",
    background: "linear-gradient(196deg, #97afc3, #6789a7)",
    button: "#5e89b2",
  },
  {
    id: 5,
    image: "https://assets.codepen.io/1462889/ch5.png",
    material: "https://assets.codepen.io/1462889/mat5.jpg",
    background: "linear-gradient(196deg, #afa6a0, #8c7f76)",
    button: "#8c7f76",
  },
  {
    id: 6,
    image: "https://assets.codepen.io/1462889/ch6.png",
    material: "https://assets.codepen.io/1462889/mat6.jpg",
    background: "linear-gradient(196deg, #aaadac, #838786)",
    button: "#5d6160",
  },
];

export default function ProductPage() {
  const [selectedChair, setSelectedChair] = useState(1);
  const [activeTab, setActiveTab] = useState("description");

  const chair = chairs.find((item) => item.id === selectedChair);

  return (
    <div
      className="elative min-h-screen w-full overflow-hidden font-poppins text-white bg-black scroll-padding-top-[100px]"
      style={{
        background: chair.background,
      }}
    >
      {/* Background */}
      <div
        className="fixed inset-0 z-0 transition-all duration-500 bg-black"
        // style={{
        //   background: chair.background,
        // }}
      />

      {/* Main container */}
      <div className="relative mx-auto flex min-h-screen w-[calc(100%-40px)] max-w-[860px] flex-wrap py-[100px]">

        {/* Product information */}
        <div className="relative z-20 ml-[500px] block text-left max-[991px]:ml-0 
        max-[991px]:mt-[320px] max-[991px]:w-full max-[991px]:text-center">

          <p className="mb-[10px] text-[13px] font-bold uppercase leading-tight 
          tracking-[1px]">
            Girl Hoodie
          </p>

          <h2 className="mb-[10px] text-[34px] font-extrabold leading-tight max-[575px]:text-[28px]">
            
          </h2>

          <h4 className="mb-[30px] text-[26px] font-medium leading-tight">
            $30{" "}
            <span className="pl-[15px] text-[20px] opacity-60 line-through">
              $65
            </span>
          </h4>

          {/* Description / Details */}
          <div className="relative w-full">

            {/* Tabs */}
            <div className="flex gap-[25px] max-[991px]:justify-center max-[575px]:gap-[15px]">

              <button
                onClick={() => setActiveTab("description")}
                className={`text-[18px] font-semibold transition-all duration-200 ${
                  activeTab === "description"
                    ? "opacity-100"
                    : "opacity-50 hover:opacity-80"
                }`}
              >
                Description
              </button>

              <button
                onClick={() => setActiveTab("details")}
                className={`text-[18px] font-semibold transition-all duration-200 ${
                  activeTab === "details"
                    ? "opacity-100"
                    : "opacity-50 hover:opacity-80"
                }`}
              >
                Details
              </button>

            </div>

            {/* Description */}
            {activeTab === "description" && (
              <div className="pt-[20px] pb-[30px] transition-all duration-300">
                <p className="text-[16px] leading-[1.7]">
                  The chair construction is made of ash tree.
                  Upholstery and wood color at customer's request.
                </p>
              </div>
            )}

            {/* Details */}
            {activeTab === "details" && (
              <div className="flex gap-[20px] pt-[20px] pb-[30px] max-[575px]:gap-[10px]">

                <div className="inline-block">
                  <p className="text-[15px]">
                    <span className="text-[30px] leading-none max-[575px]:text-[24px]">
                      76
                    </span>
                    <br />
                    Length
                  </p>
                </div>

                <div className="inline-block">
                  <p className="text-[15px]">
                    <span className="text-[30px] leading-none max-[575px]:text-[24px]">
                      68
                    </span>
                    <br />
                    Width
                  </p>
                </div>

                <div className="inline-block">
                  <p className="text-[15px]">
                    <span className="text-[30px] leading-none max-[575px]:text-[24px]">
                      87
                    </span>
                    <br />
                    Height
                  </p>
                </div>

                <div className="inline-block">
                  <p className="text-[15px]">
                    <span className="text-[30px] leading-none max-[575px]:text-[24px]">
                      10
                    </span>
                    <br />
                    Weight
                  </p>
                </div>

              </div>
            )}
          </div>

          {/* Upholstery */}
          <h5 className="mb-[20px] text-[18px] font-semibold">
            Choose upholstery:
          </h5>
        </div>

        {/* Color selectors */}
        <div className="relative z-20 ml-[500px] flex gap-[10px] max-[991px]:mx-auto max-[991px]:ml-0 max-[991px]:justify-center">

          {chairs.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedChair(item.id)}
              className={`h-[40px] w-[40px] rounded-[4px] bg-cover bg-center transition-all duration-200 max-[575px]:h-[30px] max-[575px]:w-[30px] ${
                selectedChair === item.id
                  ? "scale-110 border-[3px] border-[#434343]"
                  : "border-[3px] border-transparent"
              }`}
              style={{
                backgroundImage: `url(${item.material})`,
              }}
              aria-label={`Choose upholstery ${item.id}`}
            />
          ))}

        </div>

        {/* Add to cart */}
        <div className="relative z-20 ml-[500px] max-[991px]:mx-auto max-[991px]:ml-0 items-center justify-center pl-18">

          <button
            className="mt-[50px] flex h-[48px] w-[210px] items-center justify-center  gap-2 rounded-[4px] text-[14px] font-medium tracking-[1px] text-white shadow-[0_6px_15px_rgba(16,39,112,0.15)] transition-all duration-300 hover:bg-black hover:shadow-[0_12px_35px_rgba(16,39,112,0.25)] max-[991px]:mx-auto"
            style={{
              backgroundColor: chair.button,
            }}
          >
            <ShoppingCart size={20} />
            Add To Cart
          </button>

        </div>

        {/* Chair image */}
        <div className="pointer-events-none absolute left-0 top-[100px] z-10 h-[410px] w-[500px] transition-all duration-500 max-[991px]:left-1/2 max-[991px]:top-[100px] max-[991px]:h-[308px] max-[991px]:w-[375px] max-[991px]:-translate-x-1/2 max-[575px]:w-[280px]">

          <img
            key={selectedChair}
            src={chair.image}
            alt="Modern chair"
            className="h-full w-full object-contain animate-[shake_0.7s_ease-in-out]"
          />

        </div>

      </div>
    </div>
  );
}
