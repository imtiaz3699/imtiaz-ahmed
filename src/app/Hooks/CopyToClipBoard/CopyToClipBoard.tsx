'use client'
import React, { useState } from 'react';

export const useCopyToClipboard = () => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = async (content:any) => {
    try {
      await navigator.clipboard.writeText(content);
      setIsCopied(true);
      console.log('Copied to clipboard:', content);
    } catch (error) {
      setIsCopied(false);
      console.error('Unable to copy to clipboard:', error);
    }
  };

  return { isCopied, copyToClipboard };
};

const CopyToClipboardButton = ({ content }:{content:any}) => {
  const { isCopied, copyToClipboard } = useCopyToClipboard();

  return (
    <div>
      <button onClick={() => copyToClipboard(content)}>
        {isCopied ? 'Copied!' : 'Copy to Clipboard'}
      </button>
    </div>
  );
};

export default CopyToClipboardButton;