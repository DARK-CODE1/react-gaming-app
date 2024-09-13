import AppRouter from './routers/AppRouter';
import { Provider } from 'react-redux';
import './styles/main.scss';
import store from './redux/store/store';


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </div>
  );
}

export default App;
