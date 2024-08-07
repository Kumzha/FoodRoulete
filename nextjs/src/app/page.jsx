"use client"
import Ui from '@/components/Ui';
import { SearchProvider } from '@/context/SearchContext';

function Page() {
  
  return (
      
      <div className="pl-6 max-w-6xl mx-auto grid grid-cols-1 gap-5 mt-32">
        <SearchProvider>
            <h1 className="text-6xl w-3/4 font-bold" >Choose food faster!</h1>
            <h2 className="text-3xl">It's easier to choose food while playing games</h2>
            <Ui/>
        </SearchProvider>    
      </div>
  )
}
export default Page;