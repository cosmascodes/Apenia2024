"use client";
import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

export default function Home() {
  const [counter, setCounter] = useState(false);
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

      {/*  */}
      <section className="p-24 flex justify-center items-center">
        <div className=" bg-gradientTheme px-24 bg-blackTheme text-white rounded-3xl w-[70%] h-[500px] flex flex-col justify-center items-center">
          <h1 className="text-5xl font-bold text-center leading-tight">
            Order Your New Digital Card Today
          </h1>
          <button className="bg-primary uppercase text-white rounded-full px-10 py-4 text-sm mt-8 flex flex-row">
            Get started
          </button>
        </div>
      </section>

      {/*  */}
      <section className="flex flex-col p-24">
        <div className="text-center">
          <p className="uppercase tracking-[0.7em] text-sm">
            SEAMLESS FINANCES
          </p>
          <h1 className="text-4xl font-bold mt-4 mb-20">
            Easy to Use Financial Tools
          </h1>
        </div>
        <div className="grid grid-cols-2 gap-12 place-content-center place-items-center">
          <div className="flex flex-row">
            <img
              src="/images/online-banking-icon-2x-01.png"
              alt="icon"
              className=" w-auto h-10 mr-6 "
            />
            <div className="flex flex-col">
              <h2 className="font-semibold text-2xl mb-3">
                No Toggling Between Apps
              </h2>
              <p>
                Quisque aliquet velit sit amet sem interdum faucibus. In feugiat
                aliquet mollis etiam tincidunt ligula.
              </p>
            </div>
          </div>
          <div className="flex flex-row">
            <img
              src="/images/online-banking-icon-2x-01.png"
              alt="icon"
              className=" w-auto h-10 mr-6 "
            />
            <div className="flex flex-col">
              <h2 className="font-semibold text-2xl mb-3">
                No Toggling Between Apps
              </h2>
              <p>
                Quisque aliquet velit sit amet sem interdum faucibus. In feugiat
                aliquet mollis etiam tincidunt ligula.
              </p>
            </div>
          </div>
          <div className="flex flex-row">
            <img
              src="/images/online-banking-icon-2x-01.png"
              alt="icon"
              className=" w-auto h-10 mr-6 "
            />
            <div className="flex flex-col">
              <h2 className="font-semibold text-2xl mb-3">
                No Toggling Between Apps
              </h2>
              <p>
                Quisque aliquet velit sit amet sem interdum faucibus. In feugiat
                aliquet mollis etiam tincidunt ligula.
              </p>
            </div>
          </div>
          <div className="flex flex-row">
            <img
              src="/images/online-banking-icon-2x-01.png"
              alt="icon"
              className=" w-auto h-10 mr-6 "
            />
            <div className="flex flex-col">
              <h2 className="font-semibold text-2xl mb-3">
                No Toggling Between Apps
              </h2>
              <p>
                Quisque aliquet velit sit amet sem interdum faucibus. In feugiat
                aliquet mollis etiam tincidunt ligula.
              </p>
            </div>
          </div>
          <div className="flex flex-row">
            <img
              src="/images/online-banking-icon-2x-01.png"
              alt="icon"
              className=" w-auto h-10 mr-6 "
            />
            <div className="flex flex-col">
              <h2 className="font-semibold text-2xl mb-3">
                No Toggling Between Apps
              </h2>
              <p>
                Quisque aliquet velit sit amet sem interdum faucibus. In feugiat
                aliquet mollis etiam tincidunt ligula.
              </p>
            </div>
          </div>
          <div className="flex flex-row">
            <img
              src="/images/online-banking-icon-2x-01.png"
              alt="icon"
              className=" w-auto h-10 mr-6 "
            />
            <div className="flex flex-col">
              <h2 className="font-semibold text-2xl mb-3">
                No Toggling Between Apps
              </h2>
              <p>
                Quisque aliquet velit sit amet sem interdum faucibus. In feugiat
                aliquet mollis etiam tincidunt ligula.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/*  */}
      <section className="p-24 pb-12 bg-white">
        <div className="grid grid-cols-2">
          <div>
            <p className="uppercase tracking-[0.7em] text-sm">ABOUT US</p>
            <h2 className="text-4xl font-bold mt-4 mb-20">
              Get To Know More About Divi Online Bank
            </h2>
          </div>
          <div>
            <p>
              Aliquet nisl. Nulla tempor mauris sed pretium egestas. Ut mi
              lacus, tincidunt ac quam quis, ultricies laoreet purus. Donec
              tincidunt scelerisque lacus, vel convallis augue interdum ac.
              Etiam eget tortor ac odio aliquam lobortis quis at augue. Duis ut
              hendrerit tellus, elementum lacinia elit. Maecenas at consectetur
              ex, vitae consequat augue. Vivamus eget dolor vel quam condimentum
              sodales.
            </p>
          </div>
        </div>

        <ScrollTrigger
          onEnter={() => {
            setCounter(true);
          }}
        >
          <div className="grid grid-cols-3 place-content-center place-items-center gap-12 py-12">
            <div className="border border-blackTheme text-center p-10 rounded-xl">
              <h2 className="pt-12 text-4xl font-bold">
                {counter && (
                  <CountUp start={0} end={234} duration={2.75}></CountUp>
                )}
                k
              </h2>
              <p className="py-6">
                Luctus lectus non quisque turpis bibendum posuere.
              </p>
            </div>

            <div className="bg-tertiary text-center p-10 rounded-xl">
              <h2 className="pt-12 text-4xl font-bold">
                {counter && (
                  <CountUp start={0} end={489} duration={2.75}></CountUp>
                )}
                m
              </h2>
              <p className="py-6">
                Luctus lectus non quisque turpis bibendum posuere.
              </p>
            </div>
            <div className="text-center p-10 rounded-xl bg-red-500">
              <h2 className="pt-12 text-4xl font-bold">
                {counter && (
                  <CountUp start={0} end={267} duration={2.75}></CountUp>
                )}
              </h2>
              <p className="py-6">
                Luctus lectus non quisque turpis bibendum posuere.
              </p>
            </div>
          </div>
        </ScrollTrigger>
      </section>
    </main>
  );
}
