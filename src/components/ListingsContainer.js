import React, {useEffect, useState} from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({search}) {
  const [listings, setListing] = useState([])


  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((r) =>r.json())
      .then((listings) => {
        console.log(listings)
        setListing(listings)
      })
  }, []);

  const filterListing= listings.filter(listing => {
    return listing.description.toLowerCase().includes(search.toLowerCase())
  })


  function deleteListing(id) {
    const updatedListing = listings.filter(
      (listing) => listing.id !== id
    );
    setListing(updatedListing)
  }

  const listingsToDisplay = filterListing.map((listing, id) => {
    return <ListingCard
      listing={listing}
      key={id}
      deleteListing={deleteListing}
      />
    });


  return (
    <main>
      <ul className="cards">
        {listingsToDisplay}
      </ul>
    </main>
  );
}

export default ListingsContainer;
