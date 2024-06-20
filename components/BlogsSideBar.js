import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function BlogsSideBar(props) {
  return (
    <div className="bg-white shadow-lg p-5 px-8">
      <form
        style={{ boxShadow: "0px 4px 40px 0px #2B59FF14" }}
        className="flex items-center bg-white"
      >
        <span className="w-2/12 flex justify-center items-center px-1 text-[#FD4C5C]">
          <FontAwesomeIcon width="5" icon={faSearch} />
        </span>
        <input
          className="p-2 py-4 w-10/12"
          placeholder="Type to Search"
          type="text"
        />
      </form>

      <div>
        <h4 className="py-3 text-lg mt-5">Blog Categories</h4>
        <hr />
        <ul className="my-5">
          <li className="opacity-80">
            <Link href="/">
              <a className="py-4 block">Block Chain (15)</a>
            </Link>
            <hr />
          </li>
          <li className="opacity-80">
            <Link href="/">
              <a className="py-4 block">NFT (15)</a>
            </Link>
            <hr />
          </li>
          <li className="opacity-80">
            <Link href="/">
              <a className="py-4 block">Token (15)</a>
            </Link>
            <hr />
          </li>
          <li className="opacity-80">
            <Link href="/">
              <a className="py-4 block">Meta Verse (15)</a>
            </Link>
            <hr />
          </li>
        </ul>
      </div>

      <div className="mt-5">
        <h4 className="py-3 text-lg mt-5">Recent Posts</h4>
        <hr />
        <ul className="my-5">
        <li>
            <Link href="/">
              <div className="flex items-center">
                <div>
                  <img
                    className="rounded-lg"
                    src="https://source.unsplash.com/100x100"
                  />
                </div>
                <div className="p-2 opacity-80">
                  <h4>Don’t Count on Freeto Win You Customers</h4>
                  <small className="opacity-70">July 02, 2021</small>
                </div>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
