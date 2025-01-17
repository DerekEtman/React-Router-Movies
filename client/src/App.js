import React, { useState } from 'react';
import {Route} from 'react-router-dom';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

import SavedList from './Movies/SavedList';

const App = (props) => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <div>
        <Route exact path="/" component={MovieList}/>
        <Route path="/movies/:id" render={props => <Movie {...props} />} />
      </div>
    </div>
  );
};

export default App;
