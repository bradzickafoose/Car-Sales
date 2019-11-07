import React from 'react';
import { removeFeature } from '../actions';
import { connect } from 'react-redux';

const AddedFeature = props => {

  const removeItem = feature => {
    // dispatch an action here to remove an item
    props.removeFeature(feature);
  };

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={() => removeItem(props.feature)} className="button">X</button>
      {props.feature.name}
    </li>
  );
};

export default connect(null, { removeFeature })(AddedFeature);
