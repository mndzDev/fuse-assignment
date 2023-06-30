"use client";
import { useState } from "react";
import Dashboard from "./dashboard/page";
import Workflow from "./workflow/page";
import { NavBar } from "./components/NavBar/NavBar";
import { EmptyState } from "./components/EmptyState/EmptyState";

export default function Home() {
  const [currentPage, setCurrentPage] = useState<string>('Dashboard');

  //A good routing implementating should definitely be used here, but since there's only two modules, I just did it with states
  const handlePageSelection = (page: string) => {
    setCurrentPage(page);
  }
  return (
    <main className="w-full h-full">
      <NavBar onClickHandler={handlePageSelection} currentPage={currentPage}/>
      <div className="page-container px-20 pb-12 mt-12">
        {
          currentPage === 'Dashboard' && <Dashboard/>
        }
           {
          currentPage === 'Workflow' &&  <Workflow/>
        }
         {
          (currentPage !== 'Workflow' && currentPage !== 'Dashboard') && (
            <div className="w-full h-full flex flex-col gap-y-12 items-center justify-center">
                <h1 className="text-3xl font-semibold text-gray-600">Oops! nothing to see here</h1>
                <EmptyState/>
            </div>
          )
         }
      </div>
      
    </main>
  )
}
