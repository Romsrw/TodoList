import React from 'react';
import './App.css';
import ToDoForm from './component/ToDoForm';
import ToDoItems from './component/ToDoItems';
import reducer from './store/reducer'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import Header from './component/Header';

const store = createStore(reducer, applyMiddleware(thunk));

function App() {

  return (
    <Provider store={store}>
      <div className='wrapper'>
        <div className="App">
          <Header />
          <ToDoForm />
          <ToDoItems />
        </div>
      </div>
    </Provider>
  );
}

export default App;
