import Image from "next/image";

export default function Footer() {
  return (
    <main className="p-3 md:px-[55px] md:py-[58px] border-t-[#EAEAEA] border-t-2 max-w-[1192px] mx-auto">
      <div className="flex md:flex-row flex-col justify-between md:items-center gap-3">
        <div>
          <a href="/">
            <Image
              src="/navbar/logo.png"
              alt="Logo"
              width={195}
              height={26.5}
            />
          </a>
        </div>
        <div className="flex gap-10">
          <div>
            <a href="/">
              Features
            </a>
          </div>
          <div>
            <a href="/">
              Explore
            </a>
          </div>
          <div>
            <a href="/">
              Resources
            </a>
          </div>
        </div>
        <div className="flex gap-5">
          <a href="/" className="rounded-lg border-2 border-[#7455EC] text-[#7455EC] text-[20px] py-2 px-5">
            Try for free
          </a>
          <a href="/" className="rounded-lg bg-[#2C67B3] text-white flex items-center justify-center w-[45px] h-[45px]">
            in
          </a>
        </div>
      </div>
    </main>
  );
}
