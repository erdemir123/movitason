// TawkToCustomStyle.js
"use client"
import React from 'react';

const TawkToCustomStyle = () => {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          window.Tawk_API = window.Tawk_API || {};
          window.Tawk_API.customStyle = {
            zIndex: 20000000000;
            bottom:200px
          };
        `,
      }}
    />
  );
};

export default TawkToCustomStyle;
