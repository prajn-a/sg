import Image from "next/image";
import subscribeBadege from "../../../public/subscribe2.svg";
import {
  Filter,
  TrendingUp,
  Trophy,
  Tag,
  Heart,
  ChevronDown,
} from "lucide-react";
import Button from "../ui/button";
import flag from "../../../public/india-flag.svg";

const Sidebar = () => {
  return (
    <sidebar className="bg-[#e8f6db] w-1/4 2xl:w-1/5 flex flex-col text-center justify-evenly items-center pt-4 pb-14">
      {/* filter  */}
      <div className="flex items-center gap-3  border-b border-zinc-400 w-full mx-auto justify-center">
        <h2 className="text-lg">Apply Filter</h2>
        <Filter size={18} />
      </div>

      {/* buttons  */}
      <div className="grid grid-cols-2 px-10 gap-3 gap-x-8  border-b justify-center border-zinc-400 w-full py-6">
        <Button
          text="Trending"
          icon={<TrendingUp size={14} />}
          customClass="bg-yellow-600 py-2"
        />
        <Button
          text="Sponsored"
          icon={<Trophy size={14} />}
          customClass="bg-green-400 py-2"
        />
        <Button
          text="Newest"
          icon={<Tag size={14} />}
          customClass="bg-orange-400 py-2"
        />
        <Button
          text="Most Liked"
          icon={<Heart size={14} />}
          customClass="bg-violet-400 py-2"
        />
      </div>

      {/* options  */}
      <div className="flex flex-col gap-4  justify-center items-center py-10 border-b border-zinc-400 w-full">
        <div className="flex items-center justify-between bg-white w-72 rounded-full py-2 px-6 border border-zinc-400">
          <h2>CATEGORY</h2>
          <ChevronDown size={18} />
        </div>

        <div className="flex items-center justify-between bg-white w-72 rounded-full py-2 px-6 border border-zinc-400">
          <h2 className="flex items-center gap-3">
            <Image src={flag} alt="flag" width={17} height={10} /> INDIA
          </h2>
          <ChevronDown size={18} />
        </div>
      </div>

      {/* subscribe badge  */}
      <Image
        src={subscribeBadege}
        alt="badge"
        height={200}
        width={200}
        className="py-12"
      />
    </sidebar>
  );
};

export default Sidebar;
