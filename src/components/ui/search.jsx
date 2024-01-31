import React from "react";
import { Search as SearchIcon } from "lucide-react";

const Search = () => {
  return (
    <div className="flex items-center gap-2 bg-[#231f22] border border-zinc-600 rounded-full py-2 px-4 w-80">
      <SearchIcon size={18} className="text-zinc-500" />
      <input
        type="text"
        placeholder="Search for ideas or opportunities"
        className="bg-[#231f22] text-sm px-3 w-80"
      />
    </div>
  );
};

export default Search;
