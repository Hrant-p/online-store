import React, { Component } from 'react';
import './Search.css';

class Search extends Component {
    render() {
        return (
          <div d-flex justify-content-end>
            <form className="form-input">
              <input
                className="search-input"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="search-button"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        );
    }
};

export default Search