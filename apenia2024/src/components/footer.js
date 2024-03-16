const Footer = () => {
  return (
    <footer className="bg-blackTheme bg-hero-wave bg-cover bg-center pt-24 px-6 text-white flex flex-col justify-center items-center">
      <div className=" w-2/3 text-center flex flex-col items-center">
        <h1 className=" font-bold text-7xl ">
          Elevate Your Finances With Apenia AI
        </h1>
        <button className="bg-primary uppercase text-white rounded-full px-10 py-4 text-sm mt-8 flex flex-row">
          Join Apenia today
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-5 h-5 ml-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
      <div className="grid grid-cols-4 w-full place-items-center mt-14">
        <div>
          <h2 className=" text-xl mb-6 font-semibold">Company</h2>
          <ul>
            <li className=" mb-2 ">
              <a href="#" className=" text-base">
                Blog
              </a>
            </li>
            <li className=" mb-2 ">
              <a href="#" className=" text-base">
                Join Our Team
              </a>
            </li>
            <li className=" mb-2 ">
              <a href="#" className=" text-base">
                About Us
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className=" text-xl mb-6 font-semibold">Help</h2>
          <ul>
            <li className=" mb-2 ">
              <a href="#" className=" text-base">
                Get Help
              </a>
            </li>
            <li className=" mb-2 ">
              <a href="#" className=" text-base">
                FAQs
              </a>
            </li>
            <li className=" mb-2 ">
              <a href="#" className=" text-base">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className=" text-xl mb-6 font-semibold">Customer</h2>
          <ul>
            <li className=" mb-2 ">
              <a href="#" className=" text-base">
                Save
              </a>
            </li>
            <li className=" mb-2 ">
              <a href="#" className=" text-base">
                Transfer & Spend
              </a>
            </li>
            <li className=" mb-2 ">
              <a href="#" className=" text-base">
                Invest
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className=" text-xl mb-6 font-semibold">Invest in Business</h2>
          <ul>
            <li className=" mb-2 ">
              <a href="#" className=" text-base">
                Become an Investor
              </a>
            </li>
            <li className=" mb-2 ">
              <a href="#" className=" text-base">
                Terms & Conditions
              </a>
            </li>
            <li className=" mb-2 ">
              <a href="#" className=" text-base">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full px-24 pt-12 flex flex-row gap-12">
        <div>
          <h2 className=" text-xl mb-6 font-semibold">Contact</h2>
          <ul>
            <li className=" mb-2 ">
              <a href="#" className=" text-base">
                +2547 14 991 111
              </a>
            </li>
            <li className=" mb-2 ">
              <a href="#" className=" text-base">
                info@apenia.com
              </a>
            </li>
          </ul>
          <div className="flex flex-row">
            <a href="#" className="p-2 bg-slate-200 mr-5 mt-5 rounded-full">
              <img
                src="/images/twitter.png"
                alt="social icon"
                className="h-[25px] w-[25px]"
              />
            </a>
            <a href="#" className="p-2 bg-slate-200 mr-5 mt-5 rounded-full">
              <img
                src="/images/instagram.png"
                alt="social icon"
                className="h-[25px] w-[25px]"
              />
            </a>
            <a href="#" className="p-2 bg-slate-200 mr-5 mt-5 rounded-full">
              <img
                src="/images/facebook.png"
                alt="social icon"
                className="h-[25px] w-[25px]"
              />
            </a>
            <a href="#" className="p-2 bg-slate-200 mr-5 mt-5 rounded-full">
              <img
                src="/images/email.png"
                alt="social icon"
                className="h-[25px] w-[25px]"
              />
            </a>
            <a href="#" className="p-2 bg-slate-200 mr-5 mt-5 rounded-full">
              <img
                src="/images/linkedIn.png"
                alt="social icon"
                className="h-[25px] w-[25px]"
              />
            </a>
          </div>
        </div>
        <div>
          <h2 className=" text-xl mb-6 font-semibold">Nairobi</h2>
          <ul>
            <li className=" mb-2 ">
              <a href="#" className=" text-base">
                Chandaria Incubation and innovation Center,
              </a>
            </li>
            <li className=" mb-2 ">
              <a href="#" className=" text-base">
                Thika Road
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="pt-20 pb-10">
        <p>&copy; 2024 Apenia Technologies Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
