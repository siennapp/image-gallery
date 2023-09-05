import { configureStore} from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './redux';
import ModalContainer from './container/ModalContainer';
import ListContainer from './container/ListContainer';
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
})

function App() {
  return (
    <div>
      <Provider store={store}>
        <ListContainer/>
        <ModalContainer />
      </Provider>
    </div>
  );
}

export default App;
