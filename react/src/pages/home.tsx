import { type JSX } from 'react';

import logoImage from '../logo.svg';

const Home = (): JSX.Element => (
  <div className="home">
    <div className="bg-gradient-to-b from-gray-900 to-gray-600
                    rounded-md shadow-lg border-sky-800 drop-shadow-md
                    flex flex-col items-center justify-center py-32 mt-28 w-2/3 mx-auto">
      <img className="w-72 animate-spin" src={logoImage} alt="logo"></img>
      <p className="text-white mt-10 text-5xl font-bold">Study React</p>
    </div>
  </div>
);

export default Home;
