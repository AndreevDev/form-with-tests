import { render, screen } from '@testing-library/react';
import App from '../App';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

test('Renders App component correctly', () => {
  const initialState = {
      customers: [],
      locations: [],
      status: 'idle'
  };
  const mockStore = configureStore();
  const store = mockStore(initialState);

  render(<Provider store={store}><App /></Provider>);
});
