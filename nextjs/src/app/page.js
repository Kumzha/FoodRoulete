import ProviderSelection from "@/components/ProviderSelection";
import SearchBar from "@/components/SearchBar";
export default function Page() {




  return <div className="pl-12 max-w-6xl mx-auto">
            <h1 className="text-6xl w-3/4 mt-28 font-bold" >Choose food faster!</h1>
            <h2 className="text-3xl mt-5">It's easier to choose food while playing games</h2>
            <SearchBar/>
            <div className="flex mt-10 ml-1">
              <ProviderSelection provider="bolt"/>
              <ProviderSelection provider="wolt"/>
            </div>
            <div className="flex justify-between mx-auto mt-10 items-center">
              <button className="bg-gray-500 text-white px-5 py-2 mx-auto rounded-md">Start</button>
            </div>
         </div>;

}