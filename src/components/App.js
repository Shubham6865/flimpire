import React from 'react';
import { CssBaseline } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NavBar, Actors, MovieInformation, Movies, Profile } from './index';
import useStyles from './Styles';

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <BrowserRouter>

        <CssBaseline />
        <NavBar />

        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Routes>
            <Route exact path="/movie/:id" element={<MovieInformation />} />
            <Route exact path="/actor/:id" element={<Actors />} />
            <Route exact path="/" element={<Movies />} />
            <Route exact path="/profile/:id" element={<Profile />} />
          </Routes>
        </main>
      </BrowserRouter>

    </div>
  );
};

export default App;
