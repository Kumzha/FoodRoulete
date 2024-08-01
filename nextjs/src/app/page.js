import ProviderSelection from "@/components/ProviderSelection";
import SearchBar from "@/components/SearchBar";
export default function Page() {




  return <div className="pl-6 max-w-6xl mx-auto grid grid-cols-1 gap-5 mt-32">
            <h1 className="text-6xl w-3/4 font-bold" >Choose food faster!</h1>
            <h2 className="text-3xl">It's easier to choose food while playing games</h2>
            <div className="mt-24 ">
              <SearchBar/>
              <div className="flex mt-5">
                <ProviderSelection provider="bolt"/>
                <ProviderSelection provider="wolt"/>
              </div>
            </div>
            <div className="flex justify-between mx-auto items-center">
              <button className="bg-gray-500 text-white px-5 py-2 mx-auto rounded-md">Start</button>
            </div>
         </div>;

}