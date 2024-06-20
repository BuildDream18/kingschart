import Head from "next/head";
import BlogsSideBar from "../../components/BlogsSideBar";
import FooterAlt from "../../components/FooterALT";
import Header from "../../components/Header";

export default function Home() {
  return (
    <div className="bg-[#90a8fe0d]">
      <Head>
        <title>King's Charts Blogs</title>
      </Head>
      <div className="container mx-auto px-5 lg:px-20">
        <Header />
      </div>

      <div className="py-20 container mx-auto px-5 lg:px-20">
        <h1 className="text-5xl font-bold">Blog</h1>
        <div className="flex mt-10 justify-between">
          <div className="w-3/12 pr-2">
            <BlogsSideBar />
          </div>

          <div className="w-9/12 bg-blue-500 pl-2"></div>
        </div>
      </div>
      <FooterAlt />
    </div>
  );
}
