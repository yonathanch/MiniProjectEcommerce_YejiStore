import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import { BrowserRouter } from 'react-router-dom'
// import './index.css'
import store from './Components/Redux/store.js'
import { Provider } from 'react-redux'
import { ApolloProvider } from '@apollo/client'
import client from './apollo-client.js'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
    <ApolloProvider client={client}>
        <Provider store={store}>
          <App />
        </Provider>
    </ApolloProvider>
    {/* </BrowserRouter> */}
  </React.StrictMode>,
)
