import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faFacebookF,
  faFacebookSquare,
  faInstagram,
  faLinkedinIn,
  faTelegram,
  faTelegramPlane,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const FooterAlt = () => (
  <div className="container mx-auto px-5 lg:px-20 text-center">
    <ul className="py-10">
      <li className="inline-block mx-4">
        <a className="text-black hover:text-[#FD4C5C] cursor-pointer">
          <FontAwesomeIcon height="30" icon={faInstagram} />
        </a>
      </li>

      <li className="inline-block mx-4">
        <a
          href="https://t.me/Kingchart"
          target="_blank"
          className="text-black hover:text-[#FD4C5C] cursor-pointer"
        >
          <FontAwesomeIcon height="30" icon={faTelegramPlane} />
        </a>
      </li>

      <li className="inline-block mx-4">
        <a className="text-black hover:text-[#FD4C5C] cursor-pointer">
          <FontAwesomeIcon height="30" icon={faFacebookF} />
        </a>
      </li>

      <li className="inline-block mx-4">
        <a
          href="https://twitter.com/FaizFalak3"
          target="_blank"
          className="text-black hover:text-[#FD4C5C] cursor-pointer"
        >
          <FontAwesomeIcon height="30" icon={faTwitter} />
        </a>
      </li>
    </ul>
    <hr className="my-10" />
    <p className="my-10">© 2021 King’s Chart All Rights Reserved.</p>
  </div>
);

export default FooterAlt;
