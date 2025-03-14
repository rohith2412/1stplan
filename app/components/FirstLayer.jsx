import Link from "next/link";

export function FirstLayer() {
  return (
    <div>
      <h1 className="p-15 mt-6 text-2xl sm:text-4xl md:text-6xl lg:text-8xl font-semibold mx-auto text-center z-10 text-black tracking-tight pb-0">
        Get Your Work Done With <br /> Skilled Creators{" "}
      </h1>
      <p className="text-sm text-center mt-2">
        *Note: For creators, our main goal is to get you all of them hands on experience
        and for that our team will be pushing everyones profile to get <br />{" "}
        placed for specific task if you are a suitable candidate, this platform
        will not be promoteing any specific account <br /> and will make
        sure every one gets chance to build. Thank you*
      </p>
      <div className="flex justify-center pt-10">
        <Link href="/select">
        <button className="gradient-text blue_gradient text-sm flex gap-2 cursor-pointer border-1 pl-5 text-white pr-5 pt-3 pb-3 rounded-4xl">
          Get started 
          <svg
            className="pt-0.5"
            xmlns="http://www.w3.org/2000/svg"
            height="20px"
            viewBox="0 -960 960 960"
            width="20px"
            fill="#e3e3e3"
          >
            <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
          </svg>
        </button>
        </Link>
      </div>
    </div>
  );
}
