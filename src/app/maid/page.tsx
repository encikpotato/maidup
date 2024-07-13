import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="h-[200px] bg-blue-700 pt-10">
      <div className="w-full flex justify-center text-white text-2xl font-bold">
        Available Maid
      </div>
      <div className="absolute top-24 w-full px-3 ">
        <div className="p-3 bg-white rounded-xl border-black shadow-md flex flex-col gap-5 ">
          <Link href="./maid/maid1">
          <div className="w-full bg-slate-200 rounded-xl flex flex-row overflow-hidden gap-7 items-center">
            <div className="bg-yellow-300 w-32 ">   
              <Image alt="maid" src={require("../../assets/maid1.png")} />
            </div>
            <div>
              <div className="font-semibold text-lg">Eva</div>
              <div className="flex flex-row gap-5">
                <div>
                  <div className="text-xs text-gray-500">Rating</div>
                  <div className="flex flex-row items-center gap-">
                  <div className="text-sm">5.0 </div>
                  <Star className="w-3 h-3"/>
                    </div>
                </div>
                <div>
                  <div className="text-xs text-gray-500">Experience</div>
                  <div className="text-sm">2+ years</div>
                </div>
              </div>
            </div>
          </div>
          </Link>
          <div className="w-full bg-slate-200 rounded-xl flex flex-row overflow-hidden gap-7 items-center">
            <div className="bg-yellow-300 w-32 ">   
              <Image alt="maid" src={require("../../assets/maid1.png")} />
            </div>
            <div>
              <div className="font-semibold text-lg">Eva</div>
              <div className="flex flex-row gap-5">
                <div>
                  <div className="text-xs text-gray-500">Rating</div>
                  <div className="flex flex-row items-center gap-">
                  <div className="text-sm">5.0 </div>
                  <Star className="w-3 h-3"/>
                    </div>
                </div>
                <div>
                  <div className="text-xs text-gray-500">Experience</div>
                  <div className="text-sm">2+ years</div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full bg-slate-200 rounded-xl flex flex-row overflow-hidden gap-7 items-center">
            <div className="bg-yellow-300 w-32 ">   
              <Image alt="maid" src={require("../../assets/maid1.png")} />
            </div>
            <div>
              <div className="font-semibold text-lg">Eva</div>
              <div className="flex flex-row gap-5">
                <div>
                  <div className="text-xs text-gray-500">Rating</div>
                  <div className="flex flex-row items-center gap-">
                  <div className="text-sm">5.0 </div>
                  <Star className="w-3 h-3"/>
                    </div>
                </div>
                <div>
                  <div className="text-xs text-gray-500">Experience</div>
                  <div className="text-sm">2+ years</div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full bg-slate-200 rounded-xl flex flex-row overflow-hidden gap-7 items-center">
            <div className="bg-yellow-300 w-32 ">   
              <Image alt="maid" src={require("../../assets/maid1.png")} />
            </div>
            <div>
              <div className="font-semibold text-lg">Eva</div>
              <div className="flex flex-row gap-5">
                <div>
                  <div className="text-xs text-gray-500">Rating</div>
                  <div className="flex flex-row items-center gap-">
                  <div className="text-sm">5.0 </div>
                  <Star className="w-3 h-3"/>
                    </div>
                </div>
                <div>
                  <div className="text-xs text-gray-500">Experience</div>
                  <div className="text-sm">2+ years</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
