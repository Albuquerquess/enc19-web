import React from 'react';
import Loader from "react-loader-spinner";

const Spinner: React.FC = () => {
  return <Loader type="Rings" color="#dac960" height={80} width={80} />;
}

export default Spinner;