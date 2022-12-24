# A small Feeedback Up with real life db manipulation from the json-server react component hosted at Glitch

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

It handles real life data manipulation from a mock JSON Server at Glitch that you can clone and edit the db from here:
Dimitris-Rovolas-01/fake-json-server

*originally it was generated from jesperorb/json-server-heroku

**To run apps, Glitch needs time to wake up as per their downtime policy but once loaded you can see by following https://salty-agate-street.glitch.me/feedback
how data are performing CRUD operations in realtime using async calls with JSON-Server methods 

More:
https://www.npmjs.com/package/json-server



## Needed Scripts

## React Router DOM

To use Routing in future Apout page or by adding some more we make use of react-router-dom 6.6.1

In the project directory, you can run:
#### npm i react-router-dom 

and make this small app to be able to navigate but using these imports

#### import {BrowserRouter as Router, Route ,Routes, Link } from 'react-router-dom'; 


## Context API

To avoid tedious prop drilling to handle state as a single source of truth we use Context API
**There is commentation making available to play with prop drilling although Context makes our life way easier.

In the project directory, you can run:

#### npm i react-context-api

Make a provider wrapper for the FeedbackProvider wrapper using:

### import { createContext } from 'react'

and use it to either fetch state based db from Context or use async function to fetch data from the JSON Serve API set up at https://salty-agate-street.glitch.me/feedback 

*There is adequite commentation to clone this project and experiment with it as you will.

## Framer Motion

Spice up this simple feedback by adding some component animations for flavor using Framer Motion

In the project directory, you can run:

### npm i framer-motion

#### import {motion, AnimatePresence } from 'framer-motion' to animate the mapping of Feedbackitem components within a FeedbackList component


## React Icons

Further implement UI elements with the React Icon package

In the project directory, you can run:

#### npm i react-icons 

For this project we use react-icons/fa to import font-awsome icon set from react/icons as the next example:

#### import {FaTimes, FaEdit} from 'react-icons/fa'


Enjoy DR













