import React, {useState} from "react";
function ListingCard({listing, deleteListing}) {
  
  const {id, image, description, location} = listing
  const [favorite, setFavorite] = useState(false)
  
  function handleDelete(){
    fetch(`http://localhost:6001/listings/${id}`, {
    method: "DELETE"
  })
    .then(response => response.json())
    .then(() => {
      deleteListing(id)
      console.log("Deleted!")
    });
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {favorite ? (
          <button 
          onClick={ () => setFavorite(false)} 
          className="emoji-button favorite active">★</button>
        ) : (
          <button 
          onClick={() => setFavorite(true)} 
          className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDelete}
                className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
