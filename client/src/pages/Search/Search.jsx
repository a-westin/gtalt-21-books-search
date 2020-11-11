import React, { useState } from "react";
import Container from "../../components/Container/Container";
import Row from "../../components/Row/Row";
import axios from "axios";
import SearchResults from "../../components/SearchResults/SearchResults";
import NoBooksCard from "../../components/NoBooksCard/NoBooksCard";
import Alert from "../../components/Alert/Alert";
import SaveModal from "../../components/SaveModal/SaveModal";

const Search = () => {
  const [searchCategory, setSearchCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [messageDisplay, setMessageDisplay] = useState("card mb-3 hide");
  const [alertMessage, setAlertMessage] = useState({
    class: "",
    style: "",
    message: "",
  });
  const [showModal, setShowModal] = useState(false);
  const handleSearch = function (event) {
    event.preventDefault();
    if (searchCategory === "" || searchQuery === "") {
      setAlertMessage({
        class: "alert alert-danger",
        style: "block",
        message:
          "Please choose a category and enter a search term in order to proceed",
      });
    } else if (searchCategory === "title") {
      searchByTitle();
      setAlertMessage({
        class: "",
        style: "",
        message: "",
      });
    } else if (searchCategory === "author") {
      searchByAuthor();
      setAlertMessage({
        class: "",
        style: "",
        message: "",
      });
    }
  };

  const handleReset = function () {
    setSearchCategory("");
    setSearchQuery("");
    setSearchResults([]);
    setMessageDisplay("card mb-3 hide");
    setAlertMessage({
      class: "",
      style: "",
      message: "",
    });
    document.getElementById("search-form").reset();
  };

  const searchByTitle = function () {
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=intitle:${searchQuery}&key=AIzaSyC5Z2HFtq9GfVxQhuW3zxDlCGbxzgLNm2I`
      )
      .then((res) => {
        if (res.data.totalItems === 0) {
          setSearchResults([]);
          setMessageDisplay("card mb-3 show");
        } else {
          setSearchResults(res.data.items);
        }
      })
      .catch((err) => console.log(err));
  };

  const searchByAuthor = function () {
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=inauthor:${searchQuery}&key=AIzaSyC5Z2HFtq9GfVxQhuW3zxDlCGbxzgLNm2I`
      )
      .then((res) => {
        if (res.data.totalItems === 0) {
          setSearchResults([]);
          setMessageDisplay("card mb-3 show");
        } else {
          setSearchResults(res.data.items);
        }
      })
      .catch((err) => console.log(err));
  };

  const saveBook = function (e, book) {
    e.preventDefault();
    axios
      .post("/api/books", {
        title: book.title ? book.title : "No Title",
        authors: book.authors ? book.authors : [],
        description: book.description ? book.description : "",
        image: book.imageLinks ? book.imageLinks.thumbnail : "https://upload.wikimedia.org/wikipedia/commons/7/72/Placeholder_book.svg",
        link: book.infoLink ? book.infoLink : "https://google.com",
      })
      .then((response) => {
        console.log(response.data);
        toggleModal();
      })
      .catch((err) => console.log(err));
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <Container>
        <Row>
          <div className="col-sm-2"></div>
          <div className="col-sm-8">
            <form
              id="search-form"
              className="bg-light p-4 my-4 text-center"
              onSubmit={handleSearch}
            >
              <h3 className="text-left">Search Books:</h3>
              <div className="form-group">
                <select
                  className="form-control"
                  id="search-category"
                  name="searchCategory"
                  value={searchCategory}
                  onChange={(e) => setSearchCategory(e.target.value)}
                >
                  <option value="" className="disabled">
                    Search by Title or Author
                  </option>
                  <option value="title">Title</option>
                  <option value="author">Author</option>
                </select>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="search"
                  name="searchQuery"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-info mr-1">
                Submit
              </button>
              <button
                type="button"
                className="btn btn-warning ml-1"
                onClick={handleReset}
              >
                Delete Search Results
              </button>
            </form>
            <Alert {...alertMessage} />
          </div>
        </Row>
        <Row>
          {searchResults.length ? (
            searchResults.map((book, index) => (
              <SearchResults
                book={book.volumeInfo}
                key={index}
                saveBook={saveBook}
              />
            ))
          ) : (
            <NoBooksCard
              message="Results not found"
              className={messageDisplay}
            />
          )}
        </Row>
      </Container>
      <SaveModal showModal={showModal} toggleModal={toggleModal} />
    </>
  );
};

export default Search;