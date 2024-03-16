import Hero from "@/sections/landing/hero";

export default function Home() {
  return (
    <main className="bg-secondary">
      {/* Hero */}
      <section className="p-24 grid bg-hero-wave bg-center bg-cover">
        <div className="flex flex-row">
          <div className="w-1/2">
            <h1 className=" text-7xl font-bold mt-12">Divi Online Banking</h1>
            <p className="mt-8">
              Vitae consequat augue. Vivamus eget dolor vel quam condimentum
              sodales in bibendum odio urna sit amet.
            </p>
            <button className="bg-primary uppercase text-white rounded-full px-10 py-4 text-sm mt-8 flex flex-row">
              Join Apenia today
            </button>
          </div>
          <div className="w-[50vw] flex justify-end">
            <img
              src="/images/online-banking-28.png"
              alt="Apenia.com"
              className="w-[90%]"
            />
          </div>
        </div>
        <div className="grid grid-cols-4 mt-3 gap-4">
          <div className=" col-start-1 col-end-1 p-6 border border-slate-300 rounded-xl">
            <img src="/images/wallet.png" alt="wallet" />
            <h2 className="text-xl font-bold my-4">Donec sed nisi</h2>
            <p>Quisque aliquet velit sit amet sem interdu</p>
          </div>
          <div className="  col-start-2 col-end-2 p-6 border border-slate-300 rounded-xl">
            <img src="/images/wallet.png" alt="wallet" />
            <h2 className="text-xl font-bold my-4">Donec sed nisi</h2>
            <p>Quisque aliquet velit sit amet sem interdu</p>
          </div>
          <div className="col-start-3 col-end-5 p-6 border border-slate-300 rounded-xl">
            <img src="/images/wallet.png" alt="wallet" />
            <h2 className="text-xl font-bold my-4">Donec sed nisi</h2>
            <p>Quisque aliquet velit sit amet sem interdu</p>
          </div>
        </div>
      </section>
      {/*  */}
      <section className="grid grid-cols-2 place-content-center place-items-center p-24 px-40 bg-white">
        <div>
          <img
            src="/images/online-banking-50b.png"
            alt="Apenia.com"
            className="w-full h-[600px] border-8 border-blackTheme rounded-3xl"
          />
        </div>
        <div>
          <h2 className=" text-5xl font-semibold ">
            Easy-To-Use Financial Tools
          </h2>
          <p className="my-8">
            Curabitur fermentum nulla non justo aliquet, quis vehicula quam
            consequat. Duis ut hendrerit tellus, elementum lacinia elit.
            Maecenas at consectetur ex, vitae consequat augue. Vivamus eget
            dolor vel quam condimentum sodales. In bibendum odio urna, sit amet
            fermentum purus venenatis amet.
          </p>
          <button className="bg-primary uppercase text-white rounded-full px-10 py-4 text-sm mt-8 flex flex-row">
            Download the app
          </button>
        </div>
      </section>

      {/*  */}
      <section className="grid grid-cols-2 place-content-center place-items-center p-24 px-40">
        <div>
          <p className="uppercase tracking-[0.8em] text-sm">BUSINESS BANKING</p>
          <h2 className=" text-5xl font-semibold mt-5">
            Smart, Simple Banking
          </h2>
          <p className="my-8">
            Aliquam feugiat ut diam non tempus. Interdum et malesuada fames ac
            ante ipsum primis in faucibus. Curabitur ac odio consequat, auctor
            risus non, egestas dolor. In sit amet urna at metus dictum commodo a
            at nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec sed finibus nisi, sed dictum eros. Aliquam sodales nulla
            dolor, sed vulputate sapien efficitur ut.
          </p>
          <button className="bg-primary uppercase text-white rounded-full px-10 py-4 text-sm mt-8 flex flex-row">
            Get started
          </button>
        </div>
        <div>
          <img
            src="/images/online-banking-50b.png"
            alt="Apenia.com"
            className="w-full h-[600px] border-8 border-blackTheme rounded-3xl"
          />
        </div>
      </section>
    </main>
  );
}
