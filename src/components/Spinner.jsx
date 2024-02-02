import React from 'react';
import { Spinner } from 'flowbite-react';
import './Spinner.css'

const CustomSpinner = () => (
  <Spinner show={true} bgColor="bg-white" position="fixed translate-middle" size="3" />
);

export default CustomSpinner;
