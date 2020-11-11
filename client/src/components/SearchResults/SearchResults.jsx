import React from "react";

const SearchResults = ({ book, saveBook }) => {
  return (
    <div className="col-sm-12">
      <div className="card mb-3">
        <div className="row">
          <div className="col-md-2 text-center">
            <img
              src={book.imageLinks ? book.imageLinks.thumbnail : "https://upload.wikimedia.org/wikipedia/commons/7/72/Placeholder_book.svg"}
              className="card-img p-3 search-image text-center"
              alt={book.title ? book.title : "Untiitled"}
            />
          </div>
          <div className="col-md-10">
            <div className="card-body text-center">
              <h5 className="card-title">{book.title ? book.title : "No Title"}</h5>
              <h6 className="card-text">
                Author: {book.authors ? book.authors.join(", ") : []}
              </h6>
              <p className="card-text">{book.description ? book.description : ""}</p>
              <a
                href={book.infoLink ? book.infoLink : "https://google.com"}
                className="btn btn-info mr-1"
                role="button"
                target="blank"
              >
                Get More Info
              </a>
              <button
                className="btn btn-info ml-1"
                onClick={(e) => saveBook(e, book)}
              >
                Save 
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;