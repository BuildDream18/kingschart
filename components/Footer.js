import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
  faLinkedinIn,
  faTelegram,
  faTelegramPlane,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => (
  <div>
    <div className="flex justify-between pt-20 flex-col lg:flex-row">
      <div className="lg:w-1/4 lg:pr-5">
        <h6 className="text-lg italic mt-10">
          KING'S<span className="font-bold">CHART</span>
        </h6>
        {/* <p className="mt-5 opacity-60">
          There are many variations of passages of Lorem the Ipsum available but
          it is the majority of suffered that a alteration in that some dummy
          text.
        </p> */}

<ul className="mt-5 flex jsu">
          <li className="mr-3 inline-block">
            <a target="_blank" href="https://www.instagram.com/kingscharts/">
              <a className="hover:text-[#FD4C5C]">
                <FontAwesomeIcon height={20} icon={faYoutube} />
              </a>
            </a>
          </li>
          <li className="w-4 mr-3 inline-block">
            <a target="_blank" href="https://www.instagram.com/kingscharts/">
              <a className="hover:text-[#FD4C5C]">
                <FontAwesomeIcon height={20} icon={faInstagram} />
              </a>
            </a>
          </li>
          <li className="w-4 mx-3 inline-block">
            <a
              href="https://t.me/Kingchart"
              target="_blank"
              className="hover:text-[#FD4C5C]"
            >
              <FontAwesomeIcon height={20} icon={faTelegramPlane} />
            </a>
          </li>

          <li className="w-4 mx-3 inline-block">
            <a
              target="_blank"
              href="https://www.facebook.com/profile.php?id=100076961797256"
            >
              <a className="hover:text-[#FD4C5C]">
                <FontAwesomeIcon height={20} icon={faFacebookSquare} />
              </a>
            </a>
          </li>

          <li className="w-4 ml-3 inline-block">
            <a
              href="https://twitter.com/FaizFalak3"
              target="_blank"
              className="hover:text-[#FD4C5C]"
            >
              <FontAwesomeIcon height={20} icon={faTwitter} />
            </a>
          </li>
        </ul>
      </div>

      <div className="p-5 lg:flex-row-reversew-1/4">
        <ul>
          <li className="font-bold mb-3">Education</li>

          <li className="opacity-80">
            <Link href="/services?price=master">
              <a>Online Masterclass/e-learning</a>
            </Link>
          </li>

          <li className="opacity-80">
            <Link href="/blog">
              <a>News &amp; Alerts</a>
            </Link>
          </li>

          <li className="opacity-80">
            <Link href="/services">
              <a>Kings Academy</a>
            </Link>
          </li>

          <li className="opacity-80">
            <Link href="/">
              <a>Webinars</a>
            </Link>
          </li>

          <li className="opacity-80">
            <Link href="/">
              <a>E-learning</a>
            </Link>
          </li>

          <li className="opacity-80">
            <Link href="/">
              <a>Crypto</a>
            </Link>
          </li>
        </ul>
      </div>

      <div className="p-5 lg:w-1/4">
        <ul className="text-[#000B33]">
          <li className="font-bold mb-3">Quick Links</li>

          <li className="opacity-80">
            <Link href="#">
              <a>Terms &amp; Conditions</a>
            </Link>
          </li>

          <li className="opacity-80">
            <Link href="/contact">
              <a>Contact us</a>
            </Link>
          </li>

          <li className="opacity-80">
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li>

          <li className="opacity-80">
            <Link href="/">
              <a>About us</a>
            </Link>
          </li>
        </ul>
      </div>

      <div className="p-5 lg:w-1/4">
        <ul className="text-[#000B33]">
          <li className="font-bold mb-3">Reach us at</li>

          <li className="opacity-80">
            <a href="https://t.me/Kingchart">@kingscharts</a>
          </li>

          <li className="opacity-80">
            <a href="mailto:Info@kingschart.com ">contact@kingschart.com </a>
          </li>
        </ul>

        <div className="mt-10">
          <Link href="/auth/login">
            <a className="transition-colors mr-1 px-5 py-2 bg-[#FD4C5C] text-white hover:bg-black rounded-sm">
              Login
            </a>
          </Link>

          <a
            href="https://t.me/Kingchart"
            target="_blank"
            className="transition-colors ml-1 px-5 py-2 hover:bg-[#FD4C5C] text-white bg-black rounded-sm"
          >
            Telegram
          </a>
        </div>
      </div>
    </div>

    <div className="mt-10 text-center text-[#000B33] text-sm">
      <hr className="opacity-10" />
      <p className="py-10">© 2021 King’s Chart All Rights Reserved.</p>
    </div>
  </div>
);

export default Footer;
