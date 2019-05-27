import React, { Component } from 'react';
import './Search.scss';

class Search extends Component {
    render() {
        return (
          <div className="d-flex justify-content-end">
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