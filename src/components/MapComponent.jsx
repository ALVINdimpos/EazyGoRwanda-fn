import React from 'react';
import { connect } from 'react-redux';

const MapComponent = ({ startLocation, endLocation }) => {
  // Example usage of startLocation and endLocation
  return (
    <div>
      <p>Start Location: {startLocation}</p>
      <p>End Location: {endLocation}</p>
      {/* Your map rendering logic using startLocation and endLocation */}
    </div>
  );
};

const mapStateToProps = state => ({
  startLocation: state.map.startLocation,
  endLocation: state.map.endLocation,
});

// Give your component a name when exporting to satisfy React Fast Refresh
export default connect(mapStateToProps)(MapComponent);
