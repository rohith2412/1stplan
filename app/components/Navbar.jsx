export function Navbar() {
  return (
    <div>
      {/* <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div class="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div>
      </div>{" "} */}
      {/* <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div> */}
      <div class="absolute top-0 -z-10 h-full w-full bg-white"><div class="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div></div>
      <div className="flex justify-between py-3 ">
        <h1 className=" p-10 cursor-pointer">EILO</h1>
        <div className="p-10 mr-9 flex gap-13">
          <div className="cursor-pointer">about</div>
          <div className="cursor-pointer">service</div>
          <div className="cursor-pointer">contact us</div>
          <div className="cursor-pointer">Log In</div>
          <div className="cursor-pointer border-1 pl-3 hover:bg-black hover:text-white pr-3 rounded-lg ">
            
            Join
          </div>
        </div>
      </div>
    </div>
  );
}
