"use client"

import React, { useEffect } from 'react';

const Ads = () => {
  useEffect(() => {
    const scriptContent = `
      var atOptions = {
          'key': '8629a4e0848b968e5d77f3defb540d38',
          'format': 'iframe',
          'height': 50,
          'width': 320,
          'params': {}
      };
      document.write('<scr' + 'ipt type="text/javascript" src="//www.topcreativeformat.com/8629a4e0848b968e5d77f3defb540d38/invoke.js"></scr' + 'ipt>');
    `;

    // Use dangerouslySetInnerHTML to inject the script content
    const scriptElement = document.createElement('script');
    scriptElement.type = 'text/javascript';
    scriptElement.async = true;
    scriptElement.dangerouslySetInnerHTML = { __html: scriptContent };

    document.head.appendChild(scriptElement);

    return () => {
      // Cleanup the script when the component unmounts
      document.head.removeChild(scriptElement);
    };
  }, []);

  return (
   <></>
  );
};

export default Ads;
