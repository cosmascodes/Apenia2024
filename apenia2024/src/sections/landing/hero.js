const Hero = () => {
  return (
    <div className="p-24 grid bg-hero-wave bg-center bg-cover">
      <div className="flex flex-row">
        <div className="w-1/2">
          <h1 className=" text-7xl font-bold mt-12">Divi Online Banking</h1>
          <p>
            Vitae consequat augue. Vivamus eget dolor vel quam condimentum
            sodales in bibendum odio urna sit amet.
          </p>
          <button className="bg-primary uppercase text-white rounded-full px-10 py-4 text-sm mt-8 flex flex-row">
            Join Apenia today
          </button>
        </div>
        <div className="w-[20vw]">
          <img
            src="/images/online-banking-28.png"
            alt="Apenia.com"
            className="w-[80%]"
          />
        </div>
      </div>
      <div className="flex flex-row justify-between mt-3">
        <div>
          <img src="/images/wallet.png" alt="wallet" />
          <h2 className="text-xl font-bold my-8">Donec sed nisi</h2>
          <p>Quisque aliquet velit sit amet sem interdu</p>
        </div>
        <div>
          <img src="/images/wallet.png" alt="wallet" />
          <h2 className="text-xl font-bold my-8">Donec sed nisi</h2>
          <p>Quisque aliquet velit sit amet sem interdu</p>
        </div>
        <div>
          <img src="/images/wallet.png" alt="wallet" />
          <h2 className="text-xl font-bold my-8">Donec sed nisi</h2>
          <p>Quisque aliquet velit sit amet sem interdu</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
