import {
  faArrowRight,
  faCalendar,
  faCalendarAlt,
  faCalendarDay,
  faLongArrowAltRight,
  faUser,
  faUserAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function BlogCard(props) {
  return (
    <div className="bg-white rounded-lg shadow-lg">
      <div>
        <img
          className="rounded-t-lg w-full"
          src="https://source.unsplash.com/350x200"
        />
      </div>
      <div className="p-4 py-8">
        <div className="flex text-[#377CFD] py-4">
          <span className="flex items-center justify-center">
            <FontAwesomeIcon height={20} icon={faUserAlt} />
            <small className="mx-3">Admin</small>
          </span>

          <span className="flex items-center justify-center ml-5">
            <FontAwesomeIcon height={20} icon={faCalendarDay} />
            <small className="mx-3">17 July, 2021</small>
          </span>
        </div>
        <h4 className="text-xl font-semibold">
          Human-Readable JavaScript: How to Compile &amp; Run Your First Java
          Program
        </h4>
        <p className="py-3 opacity-80">
          It is almost impossible to read the news without coming across a lead
          story elections through fake social media accounts...
        </p>

        <div>
          <Link href="/blogs/blog">
            <a className="text-[#FD4C5C] flex items-center">
              Read More{" "}
              <FontAwesomeIcon
                className="ml-3"
                height={20}
                icon={faLongArrowAltRight}
              />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
