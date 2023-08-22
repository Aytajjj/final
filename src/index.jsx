import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ProductProvaider } from './context/ProductContext';
import { ThemeProvider } from './context/ThemeContext';
import { Provider } from 'react-redux';
import { addblog } from './redux/action/Blogaction';
import configureStore from './redux/store/configureStore';

const store = configureStore();



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
     <React.StrictMode>
    <ThemeProvider>
       <ProductProvaider>
          <Provider store={store}>
           <App />   
          </Provider>
     
     </ProductProvaider>
    </ThemeProvider>
    
 
  </React.StrictMode>
 
 
);

