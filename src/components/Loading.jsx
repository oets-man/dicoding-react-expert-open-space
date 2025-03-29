import React from 'react';
import LoadingBar from 'react-redux-loading-bar';

function Loading() {
  // console.log(LoadingBar);
  return (
    <div className="loading">
      {/* @TODO: use react-redux-loading-bar to show loading bar */}
      <LoadingBar />
    </div>
  );
}

export default Loading;
