"use client";
import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

export default function Home() {
  const [counter, setCounter] = useState(false);
  return (
    <main className="bg-secondary">
      {/* Hero */}
      <section className="p-24  bg-hero-wave bg-center bg-cover">
        <div className="flex flex-row">
          <div className="w-[70%] mt-12">
            <h1 className=" text-6xl leading-tight font-bold mt-12">
              Africa&apos;s Smart Banking with A.I. Technology
            </h1>
            <p className="mt-8 text-xl w-3/4">
              Experience intelligent banking solutions with Apenia. Enjoy the
              personalized, secure, and effortless transactions powered by
              advanced AI technology.
            </p>
            <button className="bg-primary uppercase text-white rounded-full px-10 py-4 text-sm mt-8 flex flex-row">
              Join Apenia today
            </button>
          </div>
          <div className="w-[30%] flex justify-end">
            <img
              src="/images/online-banking-28.png"
              alt="Apenia.com"
              className="w-[50%] absolute right-0"
            />
          </div>
        </div>
        <div className="grid grid-cols-4 mt-24 gap-4">
          <div className=" col-start-1 col-end-1 p-6 bg-red-100 rounded-xl">
            <img
              src="/images/insights.png"
              alt="wallet"
              className="w-[50px] h-[50px] mt-24"
            />
            <h2 className="text-xl font-bold my-4">Personalized Insights</h2>
            <p>Discover tailored recommendations based on your profile</p>
          </div>
          <div className="  col-start-2 col-end-2 p-6 bg-red-200 rounded-xl">
            <img
              src="/images/secure.png"
              alt="wallet"
              className="w-[50px] h-[50px] mt-24"
            />
            <h2 className="text-xl font-bold my-4">Secure Transactions</h2>
            <p>Protecting your assets with advanced fraud detection</p>
          </div>
          <div className="col-start-3 col-end-5 p-6 rounded-xl bg-red-300">
            <img
              src="/images/effortless.png"
              alt="wallet"
              className="w-[50px] h-[50px] mt-24"
            />
            <h2 className="text-xl font-bold my-4">
              Effortless Banking Experience
            </h2>
            <p>
              Experience effortless banking made remarkably simple with the
              seamless assistance of cutting-edge A.I. technology
            </p>
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
            AI-Powered Fast Banking Solutions
          </h2>
          <p className="my-8 pr-14">
            Automated loan processing, no manual input needed. AI calculates
            loan and interest rates instantly. Apply anytime, receive funds same
            day. Online applications aid fast capital management
          </p>
          <button className="bg-primary uppercase text-white rounded-full px-10 py-4 text-sm mt-8 flex flex-row">
            Apply now
          </button>
        </div>
      </section>

      {/*  */}
      <section className="grid grid-cols-2 place-content-center place-items-center p-24 px-40">
        <div>
          <p className="uppercase tracking-[0.8em] text-sm ml-1">AI Chatbot</p>
          <h2 className=" text-5xl font-semibold mt-5">
            Intelligent Chat Assistant
          </h2>
          <p className="my-8">
            Curious about understanding your loan quotation? Wondering about the
            flexibility of installment arrangements for your loan? Applying
            online is simpler than you might imagine. Our AI is available 24/7
            to address your inquiries at any time. Plus, our AI continually
            learns and enhances your financial journey, ensuring a smoother
            application process for you.
          </p>
          <button className="bg-primary uppercase text-white rounded-full px-10 py-4 text-sm mt-8 flex flex-row">
            Apply now
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
            Apply now
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
              src="/images/guidance.png"
              alt="icon"
              className=" w-auto h-10 mr-6 "
            />
            <div className="flex flex-col">
              <h2 className="font-semibold text-2xl mb-3">
                Personalized Financial Guidance
              </h2>
              <p>
                Tailored advice for your needs. Expert advisors help you reach
                financial goals effectively.
              </p>
            </div>
          </div>
          <div className="flex flex-row">
            <img
              src="/images/brain.png"
              alt="icon"
              className=" w-auto h-10 mr-6 "
            />
            <div className="flex flex-col">
              <h2 className="font-semibold text-2xl mb-3">
                Cutting-Edge AI Technology
              </h2>
              <p>
                Advanced AI for streamlined banking. Instant insights, proactive
                assistance, effortless transactions - fintech pioneers.
              </p>
            </div>
          </div>
          <div className="flex flex-row">
            <img
              src="/images/transparency.png"
              alt="icon"
              className=" w-auto h-10 mr-6 "
            />
            <div className="flex flex-col">
              <h2 className="font-semibold text-2xl mb-3">
                Transparent Fee Structure
              </h2>
              <p>
                No hidden fees. Clear, fair charges empower confident financial
                decisions. Trustworthy integrity.
              </p>
            </div>
          </div>
          <div className="flex flex-row">
            <img
              src="/images/headset.png"
              alt="icon"
              className=" w-auto h-10 mr-6 "
            />
            <div className="flex flex-col">
              <h2 className="font-semibold text-2xl mb-3">
                Exceptional Customer Support
              </h2>
              <p>
                24/7 assistance exceeds expectations. Prompt, reliable support
                whenever needed. Customer satisfaction guaranteed.
              </p>
            </div>
          </div>
          <div className="flex flex-row">
            <img
              src="/images/smartphone.png"
              alt="icon"
              className=" w-auto h-10 mr-6 "
            />
            <div className="flex flex-col">
              <h2 className="font-semibold text-2xl mb-3">
                Seamless Digital Experience
              </h2>
              <p>
                Banking made easy, anytime, anywhere. Intuitive platform for
                effortless management. Future-ready online solutions.
              </p>
            </div>
          </div>
          <div className="flex flex-row">
            <img
              src="/images/plant.png"
              alt="icon"
              className=" w-auto h-10 mr-6 "
            />
            <div className="flex flex-col">
              <h2 className="font-semibold text-2xl mb-3">
                Continuous Learning and Improvement
              </h2>
              <p>
                Committed to your growth. Always adapting, delivering top-notch
                service and solutions. Evolving with you.
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
            <h2 className="text-5xl font-bold mt-4 mb-20 mr-32">
              Get To Know More About Apenia A.I. Bank
            </h2>
          </div>
          <div>
            <p>
              At Apenia, we are revolutionizing banking through innovation and
              personalized service. Our commitment is to empower individuals and
              businesses with cutting-edge AI technology, transparent practices,
              and exceptional customer support. With a focus on continuous
              improvement, we strive to exceed expectations, ensuring financial
              success and peace of mind for all our clients. Join us in shaping
              the future of banking, where convenience, trust, and excellence
              converge.
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
              <p className="py-6 font-semibold">
                Serving thousands with personalized financial solutions.
              </p>
            </div>

            <div className="bg-tertiary text-center p-10 rounded-xl">
              <h2 className="pt-12 text-4xl font-bold">
                {counter && (
                  <CountUp start={0} end={10} duration={2.75}></CountUp>
                )}
                y
              </h2>
              <p className="py-6 font-semibold">
                Trusted for decades, ensuring financial stability.
              </p>
            </div>
            <div className="text-center p-10 rounded-xl bg-red-500">
              <h2 className="pt-12 text-4xl font-bold">
                {counter && (
                  <CountUp start={0} end={267} duration={2.75}></CountUp>
                )}
                m
              </h2>
              <p className="py-6 font-semibold">
                Managing billions, safeguarding your financial future.
              </p>
            </div>
          </div>
        </ScrollTrigger>
      </section>
    </main>
  );
}
