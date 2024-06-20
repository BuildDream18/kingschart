import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import FormInputBlock from "../../components/FormInputBlock";

export default function Reset() {
  return (
    <div className="flex w-screen h-screen items-center">
      <div className="h-full w-1/2 overflow-hidden hidden lg:block xl:block">
        <img className="w-auto h-full" src="/login.png" alt="" />
      </div>

      <div className="h-full w-full xl:w-1/2 flex items-center justify-center p-10">
        <div>
          <Link href="/">
            <small className="my-5 cursor-pointer flex items-center">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-arrow-narrow-left"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#2c3e50"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <line x1="5" y1="12" x2="9" y2="16" />
                  <line x1="5" y1="12" x2="9" y2="8" />
                </svg>
              </span>
              <span className="mx-4">Home</span>
            </small>
          </Link>
          
          <h1 className="font-extrabold text-4xl">Reset Password</h1>

          <form action="">
            <FormInputBlock label="Email Address" required>
              <input className="border rounded-lg w-full p-2" type="email" />
            </FormInputBlock>

            <button
              className="block w-full p-2 mt-2 hover:bg-black bg-[#FD4C5C] text-white"
              type="submit"
            >
              Send Reset Link
            </button>

            <p className="mt-5">
              <small className="opacity-80">Remember the Password?</small>{" "}
              <Link href="/auth/login">
                <a className="underline text-[#FD4C5C]">Sign In Now</a>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
