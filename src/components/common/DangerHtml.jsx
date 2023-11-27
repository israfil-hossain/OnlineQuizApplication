import React from 'react';
import DOMPurify from 'dompurify';

const DangerousHTMLComponent = ({ htmlContent }) => {
  const sanitizedHTML = DOMPurify.sanitize(htmlContent);

  return (
    <div dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />
  );
};

export default DangerousHTMLComponent;
