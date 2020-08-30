import React from 'react';
import HEAD from 'next/head';
import 'antd/dist/antd.css';

const App = ({ Component }) => {
  return (
    <>
      <HEAD>
        <meta charSet='utf-8' />
        <title>쇼핑 90</title>
      </HEAD>
      <Component />
    </>
  );
};

export default App;
