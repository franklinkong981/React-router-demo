import React from "react";
import App from "./App";
import {render, fireEvent} from @testing-library/React;
import {MemoryRouter} from "react-router-dom";

test('expect to see About page first', () => {
  const {getByText} = render((
    <MemoryRouter initialEntries={['/', 'contact', '/about']} initialIndex={2}>
      <App/>
    </MemoryRouter> 
  ));
  expect(getByText('This is the about page.')).toBeInTheDocument();
});

test('navbar links', () => {
  const {getByText} = render((
    <MemoryRouter initialEntries={['/']}>
      <App/>
    </MemoryRouter>
  ));
  expect(getByText('This is the home page.')).toBeInTheDocument();
  const eatLink = getByText('Eat');
  fireEvent.click(eatLink);
  expect(getByText('NOM NOM NOM')).toBeInTheDocument();
});