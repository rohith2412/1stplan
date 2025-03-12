export function SecondLayer() {
  return (
    <div className="p-15 mt-6 text-4xl font-semibold mx-auto text-center z-10 text-black tracking-tight pb-0">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
      </style>
      <div className="wrapper pacifico-regular">
        <div className="text-xl pt-2 item item1">Photoshop</div>
        <div className="text-xl pt-2 item item2">Figma</div>
        <div className="text-xl pt-2 item item3">Web development</div>
        <div className="text-xl pt-2 item item4">premiere pro</div>
        <div className="text-xl pt-2 item item5">adobe</div>
        <div className="text-xl pt-2 item item6">Cloud engineer</div>
        <div className="text-xl pt-2 item item7">web3</div>
        <div className="text-xl pt-2 item item8">Animation</div>
      </div>
      <div className="flex justify-around gap-10 text-xl pt-5">
        <div className="flex gap-3">
          1000 + <br /> creators
          <img
            className=""
            src="/medal.png"
            alt="Logo"
            width="50"
            height="35"
          />
        </div>
        <div className="pl-10 flex gap-5">
          Trusted by <br /> 100+ clients
          <img
            className=""
            src="/trust.png"
            alt="trust"
            width="55"
            height="35"
          />
        </div>
        <div className="flex gap-3">
          Secure money <br /> transfer
          <img
            className=""
            src="/money.png"
            alt="money"
            width="55"
            height="35"
          />
        </div>
      </div>
    </div>
  );
}
