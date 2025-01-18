const Reader = () => {
  return (
    <div className="bg-white text-center py-12">
      {/* Section Title */}
      <div className="flex items-center justify-center mb-4">
        <div className="w-24 border-t border-2 border-gray-300 mx-4"></div>
        <h2 className="text-2xl font-bold text-[#000000]">FROM THE READERS</h2>
        <div className="w-24 border-t border-2 border-gray-300 mx-4"></div>
      </div>

      {/* Quote */}
      <p className="font-poppins text-3xl text-[#000000] mt-4 font-normal leading-[33.01px] tracking-wide text-center underline decoration-transparent">
        The Bitcoin Conference is the best <br /> event for meeting passionate Bitcoiners <br /> from around the world and learning about <br /> advancements in the industry.
      </p>
      <p className="mt-6 text-[#000000] font-medium">— Natalie Brunell</p>

      {/* Dots (Pagination) */}
      <div className="flex justify-center mt-4 space-x-2">
        <div className="w-2 h-2 bg-black rounded-full"></div>
        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
      </div>

      {/* Horizontal Line Below Pagination Dots */}
      <div className="w-full border-t border-gray-300 mt-8 mb-8"></div>

      {/* Payment Options */}
      <div className="mt-12 flex justify-center space-x-40">
        {/* Pay with Bitcoin */}
        <PaymentOption
          imageSrc="/reader1.png"
          title="Pay with Bitcoin"
          description="Payments Via IBEX"
        />

        {/* Ships from US */}
        <PaymentOption
          imageSrc="/reader2.png"
          title="Ships from US"
          description="Deliveries by UPS + USPS"
        />

        {/* Pay Over Time */}
        <PaymentOption
          imageSrc="/reader3.png"
          title="Pay Over Time"
          description="Interest-free payments available."
        />
      </div>
    </div>
  );
};

const PaymentOption = ({ imageSrc, title, description }: { imageSrc: string, title: string, description: string }) => (
  <div className="flex items-center space-x-4">
    <img src={imageSrc} alt={title} className="w-10 h-10" />
    <div className="flex flex-col items-start">
      <p className="text-sm text-[#000000] font-bold">{title}</p>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  </div>
);

export default Reader;
