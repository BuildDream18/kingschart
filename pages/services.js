import Head from "next/head";
import Header from "../components/Header";
import Link from "next/link";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

export default function Services() {
  const router = useRouter();
  const { price } = router.query;

  // const
  if (typeof window !== "undefined") {
    // setUser({
    // jwt: localStorage.getItem("token"),
  }

  return (
    <div className="bg-[rgba(144,168,254,0.05)]">
      <Head>
        <title>{price} King's Charts - Our Services</title>
      </Head>

      <div className="container mx-auto px-5 lg:px-20 bg-white">
        <Header />
      </div>

      <div className="contanier mx-auto px-5 lg:px-20 bg-[rgba(144,168,254,0.05)] pt-20 relative">
        <img className="top-0 right-0 absolute z-0" src="/quater.svg" />
        <div>
          <h4 className="text-5xl font-bold mt-20 w-full inline-block">
            {price == undefined
              ? "We keep our pricing simple"
              : `Unlock Greatness with our ${
                  price == "premium" ? "Premium Package" : ""
                } ${price == "master" && "MasterClass Journey"}`}
          </h4>
          <p className="mt-2 opacity-80 font-normal text-xl">
            {price == undefined
              ? "So, you can focus on your l(earning)."
              : `Get Access to ${
                  price == "premium" ? "Give Your Crypto Journey a Boost" : ""
                } ${price == "master" && "Get Guided By the Best"}`}
          </p>
        </div>

        <div
          className={`my-10 grid ${
            price != undefined
              ? "grid-cols-1"
              : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          } justify-center items-center`}
        >
          <div
            className={`p-5 ${
              price != "free" ? (price == undefined ? "" : "hidden") : ""
            }`}
          >
            <div className="shadow-lg p-10 bg-white">
              <small className="text-red-600 text-lg">FREE</small>
              <h3 className="text-5xl font-bold mt-4">FREE</h3>
              <small className="opacity-50">Per Month</small>

              <hr className="mt-20 mb-5" />

              <ul>
                <li className="flex items-center mb-5">
                  <span className="mr-2 text-purple-500">
                    <FontAwesomeIcon width={10} icon={faCheck} />
                  </span>
                  <span>Regular Market Updates</span>
                </li>

                <li className="flex items-center mb-5">
                  <span className="mr-2 text-purple-500">
                    <FontAwesomeIcon width={10} icon={faCheck} />
                  </span>
                  <span>1 Week Free Trading Call</span>
                </li>

                <li className="flex items-center mb-5">
                  <span className="mr-2 text-purple-500">
                    <FontAwesomeIcon width={10} icon={faCheck} />
                  </span>
                  <span>Access to Email Newsletter</span>
                </li>
              </ul>

              <div className="mt-10">
                <Link href="/">
                  <a className="px-6 py-3 border-2 font-bold border-red-500 text-red-500 hover:bg-red-500 hover:text-white">
                    Try Free
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <div
            className={`p-5 ${
              price != "master" ? (price == undefined ? "" : "hidden") : ""
            }`}
          >
            <div className="shadow-lg p-10 bg-white">
              <small className="text-red-600 text-lg">MASTER CLASS</small>
              <h3 className="text-5xl font-bold mt-4">
                <span className="text-sm">$</span>199
              </h3>
              <small className="opacity-50">Lifetime</small>

              <hr className="mt-20 mb-5" />

              <ul>
                <li className="flex items-center mb-5">
                  <span className="mr-2 text-purple-500">
                    <FontAwesomeIcon width={10} icon={faCheck} />
                  </span>
                  <span>Basics Of TA (Charts, Candlesticks)</span>
                </li>

                <li className="flex items-center mb-5">
                  <span className="mr-2 text-purple-500">
                    <FontAwesomeIcon width={10} icon={faCheck} />
                  </span>
                  <span>
                    Support and Resistance, Divergence and Market Structure
                  </span>
                </li>

                <li className="flex items-center mb-5">
                  <span className="mr-2 text-purple-500">
                    <FontAwesomeIcon width={10} icon={faCheck} />
                  </span>
                  <span>Fibonacci Retracements</span>
                </li>

                <li className="flex items-center mb-5">
                  <span className="mr-2 text-purple-500">
                    <FontAwesomeIcon width={10} icon={faCheck} />
                  </span>
                  <span>Advanced Elliott Wave trading patterns</span>
                </li>

                <li className="flex items-center mb-5">
                  <span className="mr-2 text-purple-500">
                    <FontAwesomeIcon width={10} icon={faCheck} />
                  </span>
                  <span>Risk Management</span>
                </li>

                <li className="flex items-center mb-5">
                  <span className="mr-2 text-purple-500">
                    <FontAwesomeIcon width={10} icon={faCheck} />
                  </span>
                  <span>Trading Setup</span>
                </li>

                <li className="flex items-center mb-5">
                  <span className="mr-2 text-purple-500">
                    <FontAwesomeIcon width={10} icon={faCheck} />
                  </span>
                  <span>Cheatsheets and Practice worksheets</span>
                </li>
              </ul>

              <div className="mt-10">
                <Link href="/">
                  <a className="px-6 py-3 border-2 font-bold border-red-500 hover:bg-white bg-red-500 hover:text-red-500 text-white">
                    Buy Now
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <div
            className={`p-5 ${
              price != "premium" ? (price == undefined ? "" : "hidden") : ""
            }`}
          >
            <div className="shadow-lg p-10 bg-white">
              <small className="text-blue-600 block text-lg">PREMIUM</small>
              <h3 className="text-5xl font-bold mt-4 flex items-center">
                <div className="">
                  <span className="text-sm">$</span>199
                </div>
                <div className="flex flex-col p-2 ml-3">
                  <small
                    style={{ fontSize: "0.2em" }}
                    className="font-normal opacity-50"
                  >
                    Original Price
                  </small>
                  <span className="text-xl font-normal opacity-50 line-through">
                    <span className="text-sm">$</span>400
                  </span>
                </div>
              </h3>
              <small className="opacity-50">Per Month</small>

              <hr className="mt-20 mb-5" />

              <ul>
                <li className="flex items-center mb-5">
                  <span className="mr-2 text-purple-500">
                    <FontAwesomeIcon width={10} icon={faCheck} />
                  </span>
                  <span>Multiple trading calls every week</span>
                </li>

                <li className="flex items-center mb-5">
                  <span className="mr-2 text-purple-500">
                    <FontAwesomeIcon width={10} icon={faCheck} />
                  </span>
                  <span>Over 90% accuracy from the past 6 years</span>
                </li>

                <li className="flex items-center mb-5">
                  <span className="mr-2 text-purple-500">
                    <FontAwesomeIcon width={10} icon={faCheck} />
                  </span>
                  <span>Access to Q&amp;A sessions with Mr. Khan himself</span>
                </li>

                <li className="flex items-center mb-5">
                  <span className="mr-2 text-purple-500">
                    <FontAwesomeIcon width={10} icon={faCheck} />
                  </span>
                  <span>Exclusive early-bird offers to upcoming courses.</span>
                </li>
              </ul>

              <div className="mt-10">
                <Link href="/">
                  <a className="px-6 py-3 border-2 font-bold border-red-500 text-red-500 hover:bg-red-500 hover:text-white">
                    Buy Now
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-5 lg:px-20">
        <h1 className="text-4xl font-bold mt-10">Our Services</h1>
      </div>
      <div className="container flex items-center justify-center lg:justify-between px-5 lg:px-20 flex-col lg:flex-row mb-5">
        <div className="md:mt-20 grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3  p-5 gap-5 xl:gap-20 justify-items-center">
          <a
            href="https://www.youtube.com/c/KingChart007"
            target="_blank"
            className="bg-white shadow-lg cursor-pointer px-5 text-center py-20 flex items-center justify-center flex-col"
          >
            <img className="inline-block" src="/robot-icon.svg" />
            <h4 className="font-bold text-xl mt-5">
              Free Crypto Awareness Touchpoints
            </h4>
            <p className="px-3 opacity-60 mt-3">
              We strive to educate people on all things crypto as awareness is
              the first step to success. Tune in to our You tube, Instagram,
              twitter and Spotify channels and get access to free, easy to
              consume content covering everything from fundamentals of crypto to
              latest industry trends.
            </p>
          </a>

          <a
            href="/services?price=premium"
            className="bg-white shadow-lg px-5 text-center  py-20 flex items-center justify-center flex-col"
          >
            <img className="inline-block" src="/telegramicon.svg" />
            <h4 className="font-bold text-xl mt-5">Telegram Community</h4>
            <p className="px-3 opacity-60 mt-3">
              We bring together thousands of like-minded people as we endeavour
              to build a well-informed community of next-generation investors
              with the multiple telegram groups we host. Join one of the largest
              crypto trading communities and become a part of the revolution.
            </p>
          </a>

          <a
            href="/services?price=master"
            className="bg-white shadow-lg px-5 text-center  py-20 flex items-center justify-center flex-col"
          >
            <img className="inline-block" src="/micicon.svg" />
            <h4 className="font-bold text-xl mt-5">Online MasterClass</h4>
            <p className="px-3 opacity-60 mt-3">
              With our trading course covering technical crypto analysis and the
              Elliott Wave Trading Theory, we offer our users a sure shot way to
              crack the crypto market and multiply their wealth. Register now to
              start your L(earn)ing journey today!
            </p>
          </a>

          <a className="bg-white shadow-lg px-5 text-center  py-20 flex items-center justify-center flex-col">
            <img className="inline-block" src="/discordicon.svg" />
            <h4 className="font-bold text-xl mt-5">Discord Community</h4>
            <p className="px-3 opacity-60 mt-3">
              Coming soon- An Integrated and detailed discord community to
              promote peer-peer learning and data sharing
            </p>
          </a>

          <a
            href="https://open.spotify.com/show/1KiPAtxH1I3zCNXpV3J8ia?si=bc7e4c32056f4606"
            target="_blank"
            className="bg-white shadow-lg px-5 text-center  py-20 flex items-center justify-center flex-col"
          >
            <img className="inline-block" src="/phoneicon.svg" />
            <h4 className="font-bold text-xl mt-5">Free Podcast</h4>
            <p className="px-3 opacity-60 mt-3">
              Catch us on spotify with our upcoming inhouse podcast which will
              serve as an amateur’s guide to discovering the vast world of
              crypto. From getting acquainted with the fundamentals of
              cryptoverse, to staying on top of industry updates, to hearing
              from eminent members of the crypto community, this podcast exists
              to get you all set for the future.
            </p>
          </a>

          <a className="bg-white shadow-lg px-5 text-center  py-20 flex items-center justify-center flex-col w-full">
            <img className="inline-block" src="/shirticon.svg" />
            <h4 className="font-bold text-xl mt-5">Merchandise</h4>
            <p className="px-3 opacity-60 mt-3">
              Journal and starter kit coming soon
            </p>
          </a>
          {/* 
          <div className="bg-white shadow-lg px-5 text-center py-8  lg:mt-10 lg:-mb-10">
            <img className="inline-block" src="/phoneicon.svg" />
            <h4 className="font-bold text-xl mt-5">Online Courses</h4>
            <p className="px-3 opacity-60 mt-3">
              We are Spreading Awareness through our free Youtube educational
              content and free telegram channel.
            </p>
          </div> */}
        </div>
      </div>
      <div className="container mx-auto px-5 lg:px-20">
        <Footer />
      </div>
    </div>
  );
}
