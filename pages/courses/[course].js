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
      <div className="bg-gray-900 py-10">
        <div className="flex flex-col-reverse lg:flex-row">
          <div className="w-full lg:w-1/2 p-5 lg:p-20">
            <p className="text-[#FD4C5C]">Masterclass | Downloadable Content</p>
            <h1 className="text-5xl text-white font-bold mt-4">
              Introduction to Bitcoin &amp; how to invest ?
            </h1>
            <p className="text-white opacity-80 my-5">
              Suspendisse sed consequat metus. Fusce nec magna fermentum,
              convallis justo a, malesuada elit. Quisque laoreet ligula dolor,
              non interdum justo lobortis eget. Nullam at blandit metus, eget
              aliquet orci. Mauris pellentesque felis sit amet mi iaculis, vel
              dictum arcu molestie. Nulla quis dictum ligula, eu tristique quam.
              Proin facilisis posuere nisi, vel imperdiet justo congue vel.
              Praesent aliquam malesuada congue. Praesent sodales ac justo vitae
              laoreet. Aenean in felis dolor. Cras sodales pulvinar sem egestas
              mattis.
            </p>
            <div className="flex items-center text-white">
              <ul className="flex items-center">
                {[1, 2, 3, 4, 5].map((element) => (
                  <li className="text-yellow-500 mr-4">
                    <FontAwesomeIcon width="20" icon={faStar} />
                  </li>
                ))}
              </ul>
              <p>
                <small className="text-lg">
                  <small>
                    <span className="text-lg">4.9</span>{" "}
                    <span className="text-xs mx-2"> &#9679; </span>
                  </small>
                </small>
              </p>

              <p>
                <small>
                  <span className="text-lg">(7, 552)</span>{" "}
                  <span className="text-xs mx-2"> &#9679; </span>
                </small>
              </p>

              <p>
                <small>
                  <span className="text-lg">(176, 555 students)</span>
                </small>
              </p>
            </div>
            <div className="flex text-white">
              <div className="p-5 text-center flex flex-col">
                <div className="flex justify-center h-10">
                  <FontAwesomeIcon width="20" icon={faClock} />
                </div>
                <p>
                  <small>120 mins</small>
                </p>
              </div>

              <div className="p-5 text-center flex flex-col">
                <div className="flex justify-center h-10">
                  <FontAwesomeIcon width="20" icon={faChartBar} />
                </div>
                <p>
                  <small>Beginner</small>
                </p>
              </div>

              <div className="p-5 text-center flex flex-col">
                <div className="flex justify-center h-10">
                  <FontAwesomeIcon width="20" icon={faUsers} />
                </div>
                <p>
                  <small>2.6K enrolled</small>
                </p>
              </div>
            </div>

            <div className="mt-5">
              <Link href="/">
                <a className="hover:bg-black px-20 bg-[#FD4C5C] text-white py-4">
                  Enroll Now
                </a>
              </Link>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex justify-end items-end relative">
            <div className="bg-[#2b59ff44] absolute top-0 left-0 w-full h-full z-50 flex justify-center items-center cursor-pointer">
              <img src="/play.svg" />
            </div>
            <img
              className="w-full"
              src="https://source.unsplash.com/random/900x900"
            />
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-36 px-5 lg:px-20 flex flex-col lg:flex-row w-full justify-between"></div>

      <FooterAlt />
    </div>
  );
}
