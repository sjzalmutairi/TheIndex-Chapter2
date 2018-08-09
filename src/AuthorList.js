import React, { Component} from 'react';
import AuthorCard from './AuthorCard';

class AuthorList extends Component {
  render () {
    const authorCards = this.props.authors.map(author => {
      return (
        <div className="col-lg-4 col-md-6 col-12">
          <AuthorCard author={author} />
        </div>
      )
    })

    return (
      <div className="authors">
        <h3>Authors</h3>
        <div className="row">
          {authorCards}
        </div>
      </div>
    )
  }
}

export default AuthorList;

