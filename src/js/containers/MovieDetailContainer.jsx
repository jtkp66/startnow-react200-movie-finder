import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieDetailContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='card text-center'>
                <div className="card-body">
                    {/* <p>Viewing movie {this.props.match.params.title}</p> */}
                </div>

            </div>
        );
    }
}

function mapStateToProps({ movie }) {
    return { movie };
}

export default connect(mapStateToProps)(MovieDetailContainer) //exporting connected version of moviedetailcontainer