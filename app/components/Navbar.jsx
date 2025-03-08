export function Navbar() {
  return (
    <div>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div class="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div>
      </div>{" "}
      <div className="flex justify-between py-3 ">
        <h1 className=" p-10 cursor-pointer">EILO</h1>
        <div className="p-10 mr-9 flex gap-13">
          <div className="cursor-pointer">about</div>
          <div className="cursor-pointer">service</div>
          <div className="cursor-pointer">contact us</div>
          <div className="cursor-pointer">Log In</div>
          <div className="cursor-pointer">Join</div>
        </div>
      </div>
    </div>
  );
}
