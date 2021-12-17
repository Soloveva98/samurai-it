import React from 'react';
import { render, screen } from '@testing-library/react';
import SamuraiJsApp from './App';

test('renders learn react link', () => {
	render(<SamuraiJsApp />);
	const linkElement = screen.getByText(/Loading/i);
	expect(linkElement).toBeInTheDocument();
});


/*
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
*/