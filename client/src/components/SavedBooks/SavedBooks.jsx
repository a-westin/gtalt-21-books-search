import React from "react";

const SavedBooks = ({ _id, title, authors, description, image, link, deleteBook }) => {

  return (
    <div className="col-sm-12 text-center">
      <div className="card mb-3">
        <div className="row">
          <div className="col-md-2 text-center">
            <img src={image} className="card-img p-3 saved-image" alt={title} />
          </div>
          <div className="col-md-10">
            <div className="card-body text-center">
              <h5 className="card-title">{title}</h5>
              <h6 className="card-text">Author: {authors.join(", ")}</h6>
              <p className="card-text">{description}</p>
              <a href={link} className="btn btn-info mr-1" role="button" target="blank">
               Description
              </a>
              <button
                className="btn btn-info ml-1"
                onClick={() => deleteBook(_id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavedBooks;