import React from "react";
import Nav from "./Nav";
import {render} from @testing-library/React;
import {MemoryRouter} from "react-router-dom";

it('renders without crashing', () => {
  render(<MemoryRouter><Nav /></MemoryRouter>);
});