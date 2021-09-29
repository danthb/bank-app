import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App'
import Login from './Components/Login/login';
import AuthProvider from './Components/Auth/AuthProvider';

/* 
describe('test of rendering of the App', () => { */
/*     test('Rendering', () => {
        const { getByText } = render(<App />);
        getByText('BadBank Landing Page')
    }); */
/* }) */

test('renders learn react link', () => {
    render(<App />);

  });
  