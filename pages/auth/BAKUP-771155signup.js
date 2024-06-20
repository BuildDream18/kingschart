import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import FormInputBlock from "../../components/FormInputBlock";

export default function SignUp() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");
  const [password_match, setPasswordMatch] = useState(true);

  return (
    <div className="flex w-screen h-screen items-center justify-between">
      <Head>
        <title>Register Today on KingsChart!</title>
      </Head>
      <div className="h-full w-1/2 overflow-hidden hidden lg:block xl:block">
        <img className="w-auto h-full" src="/login.png" alt="" />
      </div>

      <div className="h-screen w-full xl:w-1/2 flex items-center justify-center p-10">
        <div>
          <Link href="/">
            <small className="my-5 cursor-pointer flex items-center">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-arrow-narrow-left"
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
          <h1 className="font-extrabold text-4xl">Create your account</h1>

          <form action="/404">
            <FormInputBlock label="Your name" required>
              <input
                placeholder="full name"
                className="border rounded-lg w-full py-2 px-4"
                type="text"
                required
              />
            </FormInputBlock>

            <FormInputBlock label="Your Email Address" required>
              <input
                placeholder="Enter Email Address"
                className="border rounded-lg w-full py-2 px-4"
                type="email"
                required
              />
            </FormInputBlock>

            <FormInputBlock label="Password" required>
              <input
                placeholder="Minimum 6 characters"
                className="border rounded-lg w-full py-2 px-4"
                type="password"
                minLength="6"
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (password == e.target.value) {
                    setPasswordMatch(true);
                  } else {
                    setPasswordMatch(false);
                  }
                }}
                value={password}
                required
              />
            </FormInputBlock>

            <FormInputBlock label="Confirm Password" required>
              <input
                placeholder="Minimum 6 characters"
                className={`border rounded-lg w-full py-2 px-4 ${
                  password_match == false ? "border border-red-500" : ""
                }`}
                type="password"
                minLength="6"
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                  if (password == e.target.value) {
                    setPasswordMatch(true);
                  } else {
                    setPasswordMatch(false);
                  }
                }}
                value={confirm_password}
                required
              />
            </FormInputBlock>

            <div className="flex items-center py-5">
              <input type="checkbox" required />
              <small className="px-2 opacity-80">
                I agree with the terms &amp; conditions
              </small>
            </div>

            <button
              className="block w-full p-2 mt-2 hover:bg-black bg-[#FD4C5C] text-white"
              type="submit"
            >
              Create Your Account
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
