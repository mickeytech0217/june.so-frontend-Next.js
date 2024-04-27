import Badge from "@/components/badge";

export default function ProductCategoryHeader() {
  return (
    <section className="w-full items-center overflow-hidden relative relative">
      <div className="absolute top-0 right-0 w-[80px] md:w-[250px]">
        <img src="/Blue curve with stars.svg" alt="Blue curve with stars" />
      </div>
      <div className="p-5 md:p-20 m-auto flex flex-col items-center text-center justify-center h-full mx-auto max-w-4xl ">
        <Badge content="PCOS SYMPTOMS" />
        <h1 className="text-4xl md:text-6xl font-bold mt-5">
          All PCOS Treatments
        </h1>
        <h2 className="text-lg mt-5 text-[#505050]">
          We currently offer the following treatments. Our medical providers
          will review your health intake to determine if the treatment is an
          appropriate fit.
        </h2>
      </div>
    </section>
  );
}
