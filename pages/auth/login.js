import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import Link from "next/link";
import FormInputBlock from "../../components/FormInputBlock";
import axios from "axios";
import settings from "../../settings";
import { useState } from "react";
import { useRouter } from "next/router";
import session from "express-session";
export default function Login() {
  
  var router = useRouter();

  function login(e) {
    e.preventDefault();
    axios
      .get(`${settings.APIURL}/Users?filters[$and][0][email][$eq]=`+e.target.email.value)
      .then(function (response) {
        var date = response.data[0].date;
        var id = response.data[0].id;
        if(date + 12 * 60 * 60 * 1000 < Date.now()){
          axios.put(`${settings.APIURL}/Users/` + id, {"date": Date.now()});
          localStorage.setItem("email", e.target.email.value);
          localStorage.setItem("id", id);
          e.target.email.value="";
          e.target.pass.value="";
          alert("Login was successful.");
          router.push("/services");
        }
        else{
          alert("Login is already done.");
        }
      })
      .catch(function (error) {
        console.log(error);
        alert("In the connecting with the backend occurred error.");
      });
  }

  function logout() {
    var email =localStorage.getItem("email");
    var id = localStorage.getItem("id");
    console.log("email = >", email, "id => ", id);
    if(email !== "" && id != null)
    {
      axios.put(`${settings.APIURL}/Users/` + id, {"date":0})
      .then(function (response) {
        localStorage.setItem("email", "");
        localStorage.setItem("id", null);
        alert("Logout was successful.");
        router.push("/")
      })
      .catch(function (error) {
        console.log(error);
        alert("In the connecting with the backend occurred error.");
      });
    }
    else
      alert("There is not the registered email.")
  }
  
  return (
    <div className="flex w-screen h-screen items-center">
      <Head>
        <title>Login in</title>
      </Head>
      <div className="h-full w-1/2 overflow-hidden hidden lg:block xl:block">
        <img className="w-auto h-full" src="/login.png" alt="" />
      </div>

      <div className="h-full xl:w-1/2 flex items-center justify-center p-10">
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
                  strokeWidth="1.5"
                  stroke="#2c3e50"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
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
          <h1 className="font-extrabold text-4xl">Login to you account</h1>
          <p className="mt-5">
            <small className="opacity-80">Don’t have an account?</small>{" "}
            <Link href="/auth/signup">
              <a className="underline text-[#FD4C5C]">Create an account</a>
            </Link>
          </p>

          <form onSubmit={login}>
            <FormInputBlock label="Email Address" required>
              <input 
                required
                name="email"
                className="border rounded-lg w-full p-2" 
                type="email"
                placeholder="Enter Email*"
              />
            </FormInputBlock>

            <div>
              <FormInputBlock label="Password" required>
                <input
                  required
                  name="pass"
                  className="border rounded-lg w-full p-2"
                  type="password"
                  placeholder="Enter Password*"
                />
              </FormInputBlock>
            </div>

            <div className="flex w-full items-center my-4">
              <div>
                <input type="checkbox" name="" id="" />
                <small className="px-2 opacity-80">Remember me</small>
              </div>

              <Link href="/auth/reset">
                <a className="mx-2">
                  <small className="opacity-80">Forgot Password?</small>
                </a>
              </Link>
            </div>

            <button
              className="block w-full p-2 mt-2 hover:bg-black bg-[#FD4C5C] text-white"
              type="submit"
            >
              Login Now
            </button>
          </form>
            <br></br>
            <button
              onClick={logout}
              className="block w-full p-2 mt-2 hover:bg-black bg-[#FD4C5C] text-white"
              type="button"
            >
              Logout Now
            </button>
        </div>
      </div>
    </div>
  );
}

// export async function getServerSideProps(context) {

//   return {
//     props: {
//       loginResponse
//     },
//   };
// }