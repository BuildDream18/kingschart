import { faFantasyFlightGames } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowLeft,
  faChartBar,
  faChartLine,
  faClock,
  faHeart,
  faSearch,
  faStar,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import Link from "next/link";
import FooterAlt from "../../components/FooterALT";
import HeaderALT from "../../components/HeaderALT";

export default function Courses() {
  return (
    <div>
      <Head>
        <title>Courses that KingsChart offers</title>
      </Head>

      <HeaderALT />
      <div className="container mx-auto mt-20 px-5 lg:px-20 flex flex-col lg:flex-row w-full justify-between">
        <h2 className="text-4xl font-bold">Courses</h2>
        <div className="relative w-full lg:w-1/3">
          <span className="absolute top-1/2 -translate-y-1/2 ml-5 select-none">
            <FontAwesomeIcon width="10" icon={faSearch} />
          </span>
          <input
            className="border bg-[#F5F9FF] border-[#347AF6] rounded-md pr-4 pl-10 py-2 w-full"
            placeholder="Try Crypto"
            type="text"
          />
        </div>
      </div>

      <div className="container mx-auto mt-10 px-5 lg:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:justify-between gap-5">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((element) => (
          <div className="shadow-lg rounded-lg" key={element}>
            <img className="w-full" src="/course.png" />
            <div className="p-5">
              <div className="flex items-center">
                <h2 className="font-bold text-xl mr-4">
                  Introduction to Bitcoin &amp; how to invest ?
                </h2>
                <span className="text-white bg-gray-300 hover:bg-[#FD4C5C] p-3 h-10 w-10 rounded-full inline-block cursor-pointer">
                  <FontAwesomeIcon width="15" icon={faHeart} />
                </span>
              </div>
              <small className="opacity-80">Karan Sharma</small>
              <ul className="text-blue-700">
                <li className="inline-block text-sm">Masterclass</li>
                <li className="inline-block text-sm mx-2">|</li>
                <li className="inline-block text-sm">Downloadable Content</li>
              </ul>
              <p className="text-blue-700">
                $200 <small className="line-through text-gray-700">$300</small>
              </p>
              <div className="flex items-center mt-4">
                <ul>
                  {[1, 2, 3, 4, 5, 6].map((element) => (
                    <li className="inline-block mr-1" key={element}>
                      <FontAwesomeIcon
                        className="text-yellow-400"
                        width="20"
                        icon={faStar}
                      />
                    </li>
                  ))}
                </ul>
                <span className="text-gray-500 ml-2">4.9 (7990)</span>
              </div>
              <div className="flex">
                <div className="p-5 text-center">
                  <div className="flex justify-center">
                    <FontAwesomeIcon width="15" icon={faClock} />
                  </div>
                  <p>
                    <small>120 mins</small>
                  </p>
                </div>

                <div className="p-5 text-center">
                  <div className="flex justify-center">
                    <FontAwesomeIcon width="15" icon={faChartBar} />
                  </div>
                  <p>
                    <small>Beginner</small>
                  </p>
                </div>

                <div className="p-5 text-center">
                  <div className="flex justify-center">
                    <FontAwesomeIcon width="15" icon={faUsers} />
                  </div>
                  <p>
                    <small>2.6K enrolled</small>
                  </p>
                </div>
              </div>
              <Link href={`/courses/${element}`}>
                <a className="bg-[#FD4C5C] text-white rounded-md py-3 block text-center hover:bg-black cursor-pointer">
                  Join Course
                </a>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="container mx-auto px-5 xl:px-20 relative hidden xl:block my-10">
        <div className="text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
          <h2 className="hidden md:block xl:text-4xl font-bold text-white">
            Want us to email you about special offers &amp; updates?
          </h2>
          <form className="flex flex-col xl:flex-row justify-center items-center xl:bg-white rounded-md mt-2 w-full lg:w-3/4">
            <input
              className="p-3 w-full rounded-md"
              type="email"
              placeholder="Enter your email"
            />
            <input
              className="w-full xl:w-1/4 bg-[#FD4C5C] text-white p-2 mr-1 rounded-md"
              type="submit"
              value="Subscribe Now"
            />
          </form>
        </div>
        <img src="/newsletter.png" />
      </div>

      <FooterAlt />
    </div>
  );
}
