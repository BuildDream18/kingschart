import Head from "next/head";
import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

import axios from "axios";
import settings from "../settings";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { faTelegramPlane } from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  const [message, setMessage] = useState({
    name: "",
    email: "",
    telegram: "",
    message: "",
  });
  
  const router = useRouter();

  const [user, setUser] = useState({
    jwt: "",
  });

  useEffect(() => {
    if (localStorage) {
      setUser({
        jwt: localStorage.getItem("token"),
      });
    }
  });
  
  function submit(e) {
    e.preventDefault();
    {
      axios
        .post(`${settings.APIURL}/contacts`, {
          data: {
            name: e.target.name.value,
            email: e.target.email.value,
            telegramId:e.target.telegram.value,
            message:e.target.message.value
          }
        })
        .then(function (response) {
          alert("The message was send successfully.");
          e.target.name.value = "";
          e.target.email.value = "";
          e.target.telegram.value = "";
          e.target.message.value = "";
          router.push("/");
        })
        .catch(function (error) {
          console.log(error);
          alert("the Contact Page can't post to the backend server.")
        });
    }
  }
  return (
    <div>
      <Head>
        <title>Contact Us - King's Chart</title>
      </Head>
      <div className="container mx-auto px-5 lg:px-20">
        <Header />
      </div>
      <div className="container mx-auto px-5 lg:px-20">
        <div className="pt-20">
          <h1 className="text-5xl font-bold">Contact Us</h1>
        </div>
        <div className="flex justify-center  flex-col md:flex-row pt-20 pb-32">
          <div className="flex justify-center items-center w-full md:w-1/2 p-2.5">
            <img className="md:pr-10  rounded-lg" src="https://images.unsplash.com/photo-1508780709619-79562169bc64?crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;h=500&amp;ixid=MnwxfDB8MXxyYW5kb218MHx8d29ya3x8fHx8fDE2NDI5Mzg4ODk&amp;ixlib=rb-1.2.1&amp;q=80&amp;utm_campaign=api-credit&amp;utm_medium=referral&amp;utm_source=unsplash_source&amp;w=500"/>
          </div>
          <div className="flex justify-center items-center flex-col bg-white w-full md:w-1/2 rounded-lg p-2.5 py-10 shadow-lg">
            <div className="w-10/12 h-auto">
              <ul>
                <li>
                  <a href="mailto:contact@kingscharts.io" className="flex">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope" className="svg-inline--fa fa-envelope fa-w-16 text-[#FD4C5C]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="25">
                      <path fill="currentColor" d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z">
                      </path>
                    </svg>
                    <span className="mx-2 opacity-80">contact@kingscharts.io</span>
                  </a>
                </li>
                <li className="mt-5">
                  <a href="mailto:contact@kingscharts.io" className="flex">
                    <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="telegram-plane" className="svg-inline--fa fa-telegram-plane fa-w-14 text-[#FD4C5C]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height="25">
                      <path fill="currentColor" d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"></path>
                    </svg>
                    <span className="mx-2 opacity-80">@kingscharts</span>
                  </a>
                </li>
              </ul>
              <form className="w-full" onSubmit={submit}>
                <div className="my-5">
                  <input name="name" className="border rounded-lg bg-[#90a8fe01] w-full p-3" type="text" required placeholder="Enter your name*"/>
                </div>
                <div className="my-5">
                  <input name="email" className="border rounded-lg bg-[#90a8fe01] w-full  p-3" type="email" required placeholder="Enter your email address*"/>
                </div>
                <div className="my-5">
                  <input name="telegram" className="border rounded-lg bg-[#90a8fe01] w-full  p-3" type="text" 
                  pattern=".*\B@(?=\w{5,64}\b)[a-zA-Z0-9]+(?:_[a-zA-Z0-9]+)*.*" 
                  required placeholder="Enter your Telegram Id*"/>
                </div>
                <div className="my-5">
                  <textarea name="message" className="border rounded-lg bg-[#90a8fe01] w-full  p-3 h-40" required placeholder="Enter your message"></textarea>
                </div>
                <button className="block p-2 my-5 hover:bg-black bg-[#FD4C5C] text-white" type="submit">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>      
      <div className ="container mx-auto  px-5 lg:px-20">
        <Footer />
      </div>
    </div>
  );
}
