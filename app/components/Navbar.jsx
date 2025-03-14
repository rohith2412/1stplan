import Link from "next/link";

export function Navbar() {
  return (
    <div>
      <div className="absolute top-0 -z-10 h-full w-full bg-white"></div>
      <div className="flex justify-between">
        <div className="pt-10 pl-10">
          <img src="/ccc.png" alt="Logo" width="100" height="100" />
        </div>
        <div className="flex gap-15 p-10">
          <div className="cursor-pointer pt-1.5">about</div>
          <div className="cursor-pointer pt-1.5">service</div>
          <div className="cursor-pointer pt-1.5">contact us</div>
          <div className="cursor-pointer pt-1.5">Log In</div>
          <Link href="/user">
            <button className="blue_gradient cursor-pointer pl-4.5 pt-1 pb-1 text-white pr-4.5 rounded-lg">
              Join
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
