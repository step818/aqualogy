import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import authReducer from './store/reducers/authReducer';
import blogReducer from './store/reducers/blogReducer';
import apptReducer from './store/reducers/apptReducer';
import imageReducer from './store/reducers/imageReducer';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';

import firebase from './config/fbConfig'
import { createFirestoreInstance, reduxFirestore, getFirestore } from 'redux-firestore'
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase';
import 'firebase/firestore';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    auth: authReducer,
    blog: blogReducer,
    appt: apptReducer,
    images: imageReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer
});


const store = createStore(rootReducer, composeEnhancers(
        applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
        reduxFirestore(firebase)
    )
    );

const rrfConfig = { 
    userProfile: 'users',
    useFirestoreForProfile: true,
    attachAuthIsReady: true,
    enableClaims: true
}


const rrfProps = {
    firebase,
    useFirestoreForProfile: true,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance
}

const app = (
    <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
            <BrowserRouter>
                <App />  
            </BrowserRouter>
        </ReactReduxFirebaseProvider>
    </Provider>
)


ReactDOM.render(app, document.getElementById('root'));
serviceWorker.unregister();
