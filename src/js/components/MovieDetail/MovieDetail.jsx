import React, { Component } from 'react';
import { connect } from 'react-redux';
// import _ from 'lodash';

class MovieDetail extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    //const { movieData } = this.props;
        const { movie } = this.props;
    console.log(movie);
    return (
      <div className="card">
        <div className="card-header font-weight-bold"></div>
        <div className="card-body">
          <h1>{movie && movie.search && movie.search.title}</h1>  {/* <p>Viewing movie {this.props.match.params.title}</p> */}
        </div>
      </div>
     );
   }
 }



export default MovieDetail; // exporting connected version of moviedetailcontainer

    // const { movie } = this.props;
    //     console.log(movie);
    //     return (
    //       <div className="card">
    //         <div className="card-header font-weight-bold"></div>
    //         <div className="card-body">
    //           <h1>{movie && movie.search && movie.search.title}</h1>  {/* <p>Viewing movie {this.props.match.params.title}</p> */}
    //         </div>
    //       </div>

  

/* function mapStateToProps({ movie }) {
    return { movie };
} */