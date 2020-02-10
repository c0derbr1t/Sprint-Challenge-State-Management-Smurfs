import React from 'react';
import { connect } from 'react-redux';

import { fetchSmurfs } from '../actions';
import Smurf from './Smurf';

const SmurfsList = props => {
    console.log("props", props);
    return (
        <div>
            {!props.smurfs && !props.isLoading && (
                <div>
                    <h3>Welcome to our Smurf Village! You can see everyone here with the name plate by their door! Please enjoy meeting our residents. <span role='img' aria-label='smile'>😊</span></h3>
                    <button onClick={props.fetchSmurfs}>See the Village!</button>
                </div>
            )}
            {props.isLoading && (
                <p>Add a Loader Here</p>
            )}
            <div>
                {props.smurfs && !props.isLoading && props.smurfs.map(item => (
                    <Smurf key={item.id} smurf={item} />
                ))}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        smurfs: state.smurfs,
        error: state.error
    }
}

export default connect(mapStateToProps, { fetchSmurfs })(SmurfsList);