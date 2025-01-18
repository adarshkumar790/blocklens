// pages/index.tsx
import Image from "next/image";

const Container = () => {
  const shopItems = [
    { src: "/shop1.png", alt: "Shop Print", label: "SHOP PRINT" },
    { src: "/shop2.png", alt: "Shop Now", label: "SHOP NOW" },
    { src: "/shop3.png", alt: "Shop Hardware", label: "SHOP HARDWARE" },
    { src: "/shop4.png", alt: "Shop Merch", label: "SHOP MERCH" },
    { src: "/shop5.png", alt: "Shop Cards", label: "SHOP CARDS" },
    { src: "/shop6.png", alt: "Shop Little Hodler", label: "SHOP LITTLE HODLER" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl">
        {shopItems.map((item, index) => (
          <div
            key={index}
            className="relative hover:border border-[#000000] hover:p-2 hover:border-2"
          >
            <div className="relative border bg-white shadow-md overflow-hidden">
              <Image
                src={item.src}
                alt={item.alt}
                width={347}
                height={362}
                className="w-full h-auto object-cover"
              />
              <div className="absolute flex justify-center bottom-0 left-1/2 transform -translate-x-1/2 bg-[#FFFFFF] text-xs px-2 py-2 w-[150px] z-10 text-black">
                {item.label}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Container;
