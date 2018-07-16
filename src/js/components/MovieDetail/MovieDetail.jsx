import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import _ from 'lodash';

class MovieDetail extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
    <div className='card text-center'>
      <div className="card-header font-weight-bold">City Information</div>
      <div className="card-body">
        <div>
          <h1>{movieData && movieData.name}</h1>
          <p>{!movieData.name}`}</p>
          {/* {movieData.name &&
            <img
              src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
              alt='Weather icon'
              className='weather-icon'
            />
          } */}
          {/* <h3>{movieData && movieData.name}</h3>
            <p>{!weatherData.name ? 'Coordinates' : `Lat / Lng: ${weatherData.coord.lat}, ${weatherData.coord.lon}`}</p> */}
        </div>
        <hr></hr>
        <div className="card col-sm-4">
          {/* <div className="card-body font-weight-bold">Temperature(F)</div>
          <div className="text-success font-weight-bold">{weatherData && weatherData.main && weatherData.main.temp}</div> */}
        </div>
       
      </div>

    </div>
    );
  }
}

{/* function mapStateToProps({ movie }) {
    return { movie };
} */}

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