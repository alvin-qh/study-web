import React from 'react';
import Loadable from 'react-loadable';

const LoadingComponent = ({ isLoading, error }) => {
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Sorry, there was a problem loading the page.</div>;
  }
  return null;
};

const loadModule = (module) => {
  return Loadable({
    loader: () => module,
    loading: LoadingComponent
  });
};

export default loadModule;



