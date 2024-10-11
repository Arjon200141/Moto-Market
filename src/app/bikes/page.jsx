"use client";
import { useState } from "react";
import BikeCards from "@/components/cards/BikeCards";
import { bikes } from "../../../lib/bikes";

const BikesPage = () => {
    const bikesPerPage = 9;
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState(""); // State for search input

    // Filtered bikes based on search term
    const filteredBikes = bikes.filter((bike) =>
        bike.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const totalPages = Math.ceil(filteredBikes.length / bikesPerPage);

    const currentBikes = filteredBikes.slice(
        (currentPage - 1) * bikesPerPage,
        currentPage * bikesPerPage
    );

    const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const handlePrevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    return (
        <div>
            <div className="mx-40 my-8">
                <h1 className="text-5xl font-medium text-center">The Bikes That Stand Out</h1>
                <p className="text-center mt-4 mb-8 text-yellow-300/50">
                    Discover our selection of exceptional bikes that redefine performance and style. Each model is carefully curated for its unique features and unparalleled riding experience.
                </p>
            </div>

            {/* Search Bar */}
            <div className="flex justify-center my-4">
                <input
                    type="text"
                    className="px-4 py-2 border bg-black/55 border-gray-300 rounded w-1/2"
                    placeholder="Search for a bike..."
                    value={searchTerm}
                    onChange={(e) => {
                        setSearchTerm(e.target.value);
                        setCurrentPage(1);
                    }}
                />
            </div>

            <div className="grid grid-cols-3 gap-4 mx-16">
                {currentBikes.length > 0 ? (
                    currentBikes.map((bike) => (
                        <BikeCards key={bike.id} bike={bike} />
                    ))
                ) : (
                    <p className="col-span-3 text-center text-5xl my-12">No bikes found!!! Try another One</p>
                )}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
                <div className="flex justify-center items-center mt-4">
                    <button
                        className="px-6 py-2 mx-2 bg-black text-yellow-500/70 border-2 border-slate-400 rounded"
                        onClick={handlePrevPage}
                        disabled={currentPage === 1}
                    >
                        Previous
                    </button>
                    <span className="mx-4">{`Page ${currentPage} of ${totalPages}`}</span>
                    <button
                        className="px-6 py-2 mx-2 bg-black text-yellow-500/70 border-2 border-slate-400 rounded"
                        onClick={handleNextPage}
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </button>
                </div>
            )}
        </div>
    );
};

export default BikesPage;
