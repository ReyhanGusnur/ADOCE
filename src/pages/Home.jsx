import cat1 from "../assets/image 1.png";
import logo1 from "../assets/Ellipse 3.png";
import logo2 from "../assets/Ellipse 4.png";
import logo3 from "../assets/Ellipse 6.png";
import star from "../assets/star_rate.png";
import rating from "../assets/rating.svg";
import "./home.css";
import location from "../assets/location.png";
import dataCat from "../data/dataCat";
import dataDog from "../data/dataDog";
import comentar from "../data/comentar";
import { Link } from "react-router-dom";
import { Navbar } from "../components/navbar";

function Home() {
  return (
    <>
      <Navbar />
      <div className="bg-[#8EACCD] min-h-screen">
        <img className="flex w-full" src={cat1} alt="image" />
        <div className="flex justify-center flex-wrap mx-20">
          <p className="flex font-Baloo font-extrabold text-6xl mt-12">
            Pet Cat
          </p>
        </div>
        <div className="container mx-auto flex flex-row md:justify-between justify-center p-5 mt-12 grid grid md:grid-cols-3 gap-20 ">
          {dataCat.map((item) => (
            <>
              <div
                className="max-w-md rounded-lg overflow-hidden shadow-lg p-3 bg-white "
                key={item.id}
              >
                <img src={item.img} alt="" />
                <div className="px-6 py-4">
                  <div className="font-bold text-3xl lg:text-3xl sm:text-3xl mb-2 font-Inika">
                    {item.title}
                  </div>
                  <p className="mt-5 font-Inika font-normal lg:text-xl sm:text-xl text-[#000]">
                    {item.gender}
                  </p>
                  <p className="font-Inika font-normal lg:text-xl sm:text-xl text-[#000]">
                    {item.old}
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <div className="flex flex-wrap gap-2">
                    <img src={location} alt="" />
                    <p className="font-Inika lg:font-normal lg:text-lg sm:text-lg text-[#000]">
                      {item.location}
                    </p>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
        <div className="flex flex-wrap justify-center mx-20">
          <p className="flex font-Baloo  font-extrabold text-6xl mt-12">
            Pet Dog
          </p>
        </div>
        <div className="container mx-auto flex flex-row md:justify-between justify-center p-5 mt-12 grid grid md:grid-cols-3 gap-20 ">
          {dataDog.map((item) => (
            <>
              <div
                className="max-w-md rounded-lg overflow-hidden shadow-lg p-3 bg-white "
                key={item.id}
              >
                <img src={item.img} alt="" />
                <div className="px-6 py-4">
                  <div className="font-bold text-3xl lg:text-3xl sm:text-3xl mb-2 font-Inika">
                    {item.title}
                  </div>
                  <p className="mt-5 font-Inika font-normal lg:text-xl sm:text-xl text-[#000]">
                    {item.gender}
                  </p>
                  <p className="font-Inika font-normal lg:text-xl sm:text-xl text-[#000]">
                    {item.old}
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <div className="flex flex-wrap gap-2">
                    <img src={location} alt="" />
                    <p className="font-Inika lg:font-normal lg:text-lg sm:text-lg text-[#000]">
                      {item.location}
                    </p>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
        <div className="bg-image-container p-12 w-full mt-12" id="home">
          <div className="font-baloo text-6xl font-extrabold w-2/4">
            Prepare Your Home For Your Cat
          </div>
          <p className="w-2/4 text-3xl mt-12">
            ADOCE berkomitmen untuk menyelamatkan dan merawat hewan peliharaan.
            Kami memperjuangkan hak-hak hewan dan berupaya mencari rumah yang
            baik bagi mereka.
          </p>
          <Link to="/adopt">
            <button className="text-3xl bg-[#D9D9D9] hover:bg-white rounded-lg mt-12 p-4">
              Selengkapnya
            </button>
          </Link>
        </div>
      </div>
      {/* ============ */}
      <div className="container p-12 bg-[#8EACCD] min-w-full mt-2">
        <p className="text-xl text-white">ULASAN</p>
        <div className="md:flex flex-row gap-12 justify-center">
          <div>
            <h2 className="font-boloo text-3xl font-bold">
              <span className="text-[#D9D9D9]">ADOPSI</span>CENTER
            </h2>
            <span className="flex flex-wrap mt-3">
              <img className="w-14" src={logo1} alt="" />
              <img className="w-14" src={logo2} alt="" />
              <img className="w-14" src={logo3} alt="" />
            </span>
            <p className="flex flex-wrap mt-3">
              <img className="w-6" src={star} alt="" />
              <span className="font-semibold">4.5</span> (1.576 Ulasan)
            </p>
          </div>
          <div className="hover:overflow-x-auto overflow-x-hidden md:min-w-[60%] min-w-auto xl:min-w-[80%] flex flex-row gap-8 mt-8 md:mt-0">
            {comentar.map((item, index) => (
              <div
                key={index}
                className="bg-white p-5 rounded-lg mb-4 md:min-w-96 min-w-full"
              >
                <div className="flex flex-row gap-5">
                  <img className="w-14" src={item.img} alt="" />
                  <div className="flex flex-col">
                    <p className="text-blue-500 font-semibold">{item.name}</p>
                    <p className="text-[#D9D9D9]">{item.status}</p>
                    <img src={rating} alt="" />
                  </div>
                </div>
                <p className="w-3/5 mt-3">{item.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container p-12 bg-[#8EACCD] min-w-full mt-2">
        <div className="flex justify-center">
          <p className="text-3xl text-center text-[rgba(215,229,202,0.94)] px-[15%]">
            Your contribution today will provide essential care for abandoned,
            injured, and orphaned animals immediately, during their moment of
            necessity.
          </p>
        </div>
        <div className="flex justify-center">
          <Link to={"/donate"}>
            <button className="text-3xl text-blue-300 bg-white rounded-full mt-6 p-2 font-semibold">
              Donate Now
            </button>
          </Link>
        </div>
      </div>
      <div className="container p-12 bg-[#8EACCD] min-w-full mt-2">
        <div className="flex justify-center">
          <p className="text-3xl text-center px-[15%]">Copyright 2023</p>
        </div>
        <div className="flex justify-center"></div>
      </div>
    </>
  );
}

export default Home;