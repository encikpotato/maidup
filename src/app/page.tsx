import {
  CircleUser,
  Hospital,
  House,
  ShoppingCart,
  Sofa,
  ClipboardList,
  Headset,
  MapPin,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="h-[200px] bg-blue-700 p-5">
        <div className="flex flex-row justify-between content-center items-center">
          <div className="text-white text-sm flex border rounded-lg p-1 gap-1">
            <MapPin color="white" className="h-4 w-4" />
            <div>Malaysia</div>
          </div>
          <div>
            <CircleUser color="white" className="h-8 w-8" />
          </div>
        </div>
        <div className="w-full flex justify-center text-white text-2xl font-bold">
          MaidUp
        </div>
      </div>
      <div className="absolute top-24 w-full px-3 ">
        <div className="p-3 bg-white rounded-xl border-black shadow-md ">
          <div className="font-bold text-lg text-blue-700">Welcome Back!</div>
          <div className="text-xs ">what service you need today?</div>
          <div className=" flex items-center justify-around pt-7 text-blue-700">
            <div className="w-8 text-xs flex flex-col content-center items-center gap-2">
              <House className="h-8 w-8" />
              Home
            </div>
            <div className="w-8 text-xs flex flex-col content-center items-center gap-2">
              <Sofa className="h-8 w-8" />
              Maid
            </div>
            <div className="w-8 text-xs flex flex-col content-center items-center gap-2">
              <Hospital className="h-8 w-8" />
              Nurse
            </div>
            <div className="w-8 text-xs flex flex-col content-center items-center gap-2">
              <ShoppingCart className="h-8 w-8 " />
              eStore
            </div>
          </div>
        </div>
      </div>
      <div className="ml-5 mt-16">
        <div className="mr-5">
          <div className="flex flex-row w-full justify-between gap-3 mt-3">
            <div className="w-full font-normal text-xs rounded-md bg-white">
              <Image alt="promo1" src={require("../assets/sponsor.jpg")} />
              <div>Sponsored</div>
            </div>
          </div>
        </div>
        <div className="font-semibold mt-6">Highlight</div>
        <div className="overflow-x-scroll mt-3 grid-flow-col grid gap-3">
          <div className="w-48 h-48 font-normal text-xs rounded-md bg-blue-100 flex flex-row justify-between">
            <Image
              alt="promo1"
              objectFit="contain"
              src={require("../assets/promo/promo3.jpeg")}
            />
          </div>
          <div className="w-48 h-48  font-normal text-xs rounded-md bg-blue-100 flex flex-row justify-between">
            <Image alt="promo1" src={require("../assets/promo/promo2.jpg")} />
          </div>
          <div className="w-48 h-48 font-normal text-xs rounded-md bg-blue-100 flex flex-row justify-between">
            <Image alt="promo1" src={require("../assets/promo/promo1.jpeg")} />
          </div>
        </div>
        <div className="font-semibold mt-6">Promotion</div>
        <div className="overflow-x-scroll mt-3 grid-flow-col grid gap-3">
          <div className="w-64 h-24 font-normal text-xs rounded-md bg-blue-100 p-2 flex flex-col justify-center text-center self-center">
            <div className="font-bold text-lg">Explore packages</div>
            <div>Huge Discount on packages</div>
          </div>
          <div className="w-64 h-24 font-normal text-xs rounded-md bg-red-100 p-2 flex flex-col justify-center text-center self-center">
            <div className="font-bold text-lg">10% OFF</div>
            <div>On first Booking</div>
          </div>
        </div>
        <div className="font-semibold mt-6">Need help?</div>
        <div className="mr-5">
          <div className="flex flex-row w-full justify-between gap-3 mt-3">
            <div className="w-1/2 font-normal text-xs rounded-md h-14 bg-blue-100 p-2 flex flex-row justify-between">
              FAQ
              <ClipboardList className="h-10 w-10" />
            </div>
            <div className="w-1/2 font-normal text-xs rounded-md h-14 bg-blue-100 p-2 flex flex-row justify-between">
              Chat now
              <Headset className="h-10 w-10" />
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center my-10 ">
          <Image
            width="100"
            alt="Logo UoW KDU"
            src={require("../assets/UOW-KDU-Logo-dark.png")}
          />
        </div>
      </div>
    </main>
  );
}
