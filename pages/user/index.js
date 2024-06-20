import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import Link from "next/link";
import FormInputBlock from "../../components/FormInputBlock";

export default function User() {
  return (
    <div className="flex w-screen h-screen items-center">
      <Head>
        <title>Register Today on KingsChart!</title>
      </Head>
      <div className="h-full w-1/2 overflow-hidden hidden lg:block xl:block">
        <img className="w-auto h-full" src="/login.png" alt="" />
      </div>

      <div className="h-full w-full xl:w-1/2 flex items-center justify-center p-10">
        User Account
      </div>
    </div>
  );
}
