export function Navbar() {
  return (
    <div>
      <div className="absolute top-0 -z-10 h-full w-full bg-white"><div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div></div>
      <div className="flex justify-between">
        <h1 className=" p-10 cursor-pointer mt-2 ml-5">###</h1>
        <div className="p-10 mr-9 flex gap-13">
          <div className="cursor-pointer mt-1">about</div>
          <div className="cursor-pointer mt-1">service</div>
          <div className="cursor-pointer mt-1">contact us</div>
          <div className="cursor-pointer mt-1">Log In</div>
          <div className=" blue_gradient cursor-pointer pl-4.5 pt-1 pb-1 text-white pr-4.5  rounded-lg" >
            Join
          </div>
        </div>
      </div>
    </div>
  );
}
