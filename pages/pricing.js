import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import Link from "next/link";
import FooterALT from "../components/FooterALT";
import Header from "../components/Header";

export default function Pricing() {
  return (
    <div>
      <Head>
        <title>KingsChart</title>
        <link rel="icon" href="/logo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="container mx-auto px-5 lg:px-20">
        <Header />
      </div>
      <div className="contanier mx-auto px-5 lg:px-20 bg-[rgba(144,168,254,0.05)] pt-20 relative">
        <h1 className="text-6xl font-bold">Pricing &amp; Plans</h1>
        <img className="top-0 right-0 absolute z-0" src="/quater.svg" />
        <div className="text-center ">
          <h4 className="text-3xl font-bold mt-20 w-full lg:w-1/4 inline-block">
            We have exclusive plan in our pricing
          </h4>
          <p>Simple pricing so you can focus on your l(earn)ing</p>
        </div>

        <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-5 min-h-full">
            <div className="shadow-lg p-10 bg-white">
              <small className="text-green-600">Free</small>
              <h3 className="text-4xl font-bold mt-4">Free</h3>
              <small>Per Month</small>

              <hr className="mt-20 mb-5" />

              <ul>
                <li className="flex items-center">
                  <span className="mr-2 text-purple-500">
                    <FontAwesomeIcon width={10} icon={faCheck} />
                  </span>
                  <span>Access 5 courses</span>
                </li>

                <li className="flex items-center">
                  <span className="mr-2 text-purple-500">
                    <FontAwesomeIcon width={10} icon={faCheck} />
                  </span>
                  <span>Basic Statistic</span>
                </li>

                <li className="flex items-center">
                  <span className="mr-2 text-purple-500">
                    <FontAwesomeIcon width={10} icon={faCheck} />
                  </span>
                  <span>1 Year Support</span>
                </li>
              </ul>

              <div className="mt-20">
                <Link href="/">
                  <a className="px-6 py-3 border-2 font-bold border-red-500 text-red-500 hover:bg-red-500 hover:text-white">
                    Try Free
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <div className="p-5">
            <div className="shadow-lg p-10 bg-white">
              <small className="text-blue-600 block text-lg">Premium</small>
              <h3 className="text-4xl font-bold mt-4">
                <span className="text-xs">$</span>45
              </h3>
              <small>Per Month</small>

              <hr className="mt-20 mb-5" />

              <ul>
                <li className="flex items-center">
                  <span className="mr-2 text-purple-500">
                    <FontAwesomeIcon width={10} icon={faCheck} />
                  </span>
                  <span>Access 5 courses</span>
                </li>

                <li className="flex items-center">
                  <span className="mr-2 text-purple-500">
                    <FontAwesomeIcon width={10} icon={faCheck} />
                  </span>
                  <span>Basic Statistic</span>
                </li>

                <li className="flex items-center">
                  <span className="mr-2 text-purple-500">
                    <FontAwesomeIcon width={10} icon={faCheck} />
                  </span>
                  <span>1 Year Support</span>
                </li>
              </ul>

              <div className="mt-20">
                <Link href="/">
                  <a className="px-6 py-3 border-2 font-bold border-red-500 text-red-500 hover:bg-red-500 hover:text-white">
                    Try Free
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <div className="p-5">
            <div className="shadow-lg p-10 bg-white">
              <small className="text-red-600">Premium</small>
              <h3 className="text-4xl font-bold mt-4">
                <span className="text-xs">$</span>100
              </h3>
              <small>Per Month</small>

              <hr className="mt-20 mb-5" />

              <ul>
                <li className="flex items-center">
                  <span className="mr-2 text-purple-500">
                    <FontAwesomeIcon width={10} icon={faCheck} />
                  </span>
                  <span>Access 5 courses</span>
                </li>

                <li className="flex items-center">
                  <span className="mr-2 text-purple-500">
                    <FontAwesomeIcon width={10} icon={faCheck} />
                  </span>
                  <span>Basic Statistic</span>
                </li>

                <li className="flex items-center">
                  <span className="mr-2 text-purple-500">
                    <FontAwesomeIcon width={10} icon={faCheck} />
                  </span>
                  <span>1 Year Support</span>
                </li>
              </ul>

              <div className="mt-20">
                <Link href="/">
                  <a className="px-6 py-3 border-2 font-bold border-red-500 text-red-500 hover:bg-red-500 hover:text-white">
                    Try Free
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <FooterALT />
      </div>
    </div>
  );
}
