// pages/index.tsx
import Image from 'next/image';

const Container = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl">
        {/* Shop Print */}
        <div className="relative hover:border border-[#000000] hover:p-2 hover:border-2">
          <div className="relative border bg-white shadow-md overflow-hidden">
            <Image
              src="/shop1.png"
              alt="Shop Print"
              width={347}
              height={362}
              className="w-full h-auto object-cover"
            />
            {/* Title on top */}
            <div className="absolute flex justify-center bottom-0 left-1/2 transform -translate-x-1/2 bg-[#FFFFFF] text-xs px-2 py-2 w-[150px] z-10 text-black">
              SHOP PRINT
            </div>
          </div>
        </div>

        {/* Shop Now */}
        <div className="relative hover:border border-[#000000] hover:p-2 hover:border-2">
          <div className="relative border bg-white shadow-md overflow-hidden">
            <Image
              src="/shop2.png"
              alt="Shop Now"
              width={347}
              height={362}
              className="w-full h-auto object-cover"
            />
            {/* Title on top */}
            <div className="absolute flex justify-center bottom-0 left-1/2 transform -translate-x-1/2 bg-[#FFFFFF] text-xs px-2 py-2 w-[150px] z-10 text-black">
              SHOP NOW
            </div>
          </div>
        </div>

        {/* Shop Hardware */}
        <div className="relative  hover:border border-[#000000] hover:p-2 hover:border-2">
          <div className="relative border bg-white shadow-md overflow-hidden">
            <Image
              src="/shop3.png"
              alt="Shop Hardware"
              width={347}
              height={362}
              className="w-full h-auto object-cover"
            />
            {/* Title on top */}
            <div className="absolute bottom-0 text-[#000000]  flex justify-center left-1/2 transform -translate-x-1/2 bg-[#FFFFFF] text-xs px-2 py-2 w-[150px] z-10 text-black">
              SHOP HARDWARE
            </div>
          </div>
        </div>

        {/* Shop Merch */}
        <div className="relative hover:border border-[#000000] hover:p-2 hover:border-2">
          <div className="relative border bg-white shadow-md overflow-hidden">
            <Image
              src="/shop4.png"
              alt="Shop Merch"
              width={347}
              height={362}
              className="w-full h-auto object-cover"
            />
            {/* Title on top */}
            <div className="absolute bottom-0 text-[#000000] flex justify-center left-1/2 transform -translate-x-1/2 bg-[#FFFFFF] text-xs px-2 py-2 w-[150px] z-10 text-black">
              SHOP MERCH
            </div>
          </div>
        </div>

        {/* Shop Cards */}
        <div className="relative hover:border border-[#000000] hover:p-2 hover:border-2">
          <div className="relative border bg-white shadow-md overflow-hidden">
            <Image
              src="/shop5.png"
              alt="Shop Cards"
              width={347}
              height={362}
              className="w-full h-auto object-cover"
            />
            {/* Title on top */}
            <div className="absolute bottom-0 text-[#000000] flex justify-center left-1/2 transform -translate-x-1/2 bg-[#FFFFFF] text-xs px-2 py-2 w-[150px] z-10 text-black">
              SHOP CARDS
            </div>
          </div>
        </div>

        {/* Shop Little Hodler */}
        <div className="relative hover:border border-[#000000] hover:p-2 hover:border-2">
          <div className="relative border bg-white shadow-md overflow-hidden">
            <Image
              src="/shop6.png"
              alt="Shop Little Hodler"
              width={347}
              height={362}
              className="w-full h-auto object-cover"
            />
            {/* Title on top */}
            <div className="absolute bottom-0 text-[#000000] flex justify-center left-1/2 transform -translate-x-1/2 bg-[#FFFFFF] text-xs px-2 py-2 w-[150px] z-10 text-black">
              SHOP LITTLE HODLER
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Container;
