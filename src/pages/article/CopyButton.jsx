import { useState } from 'react';

const PixCopyButton = ({ pixCode }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(pixCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Erro ao copiar: ', err);
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '5px' }}>
      <span
        style={{
          backgroundColor: '#f5f5f5',
          padding: '8px 12px',
          borderRadius: '4px',
          fontFamily: 'monospace',
          border: '1px solid #ddd',
        }}>
        <b>{pixCode}</b>
      </span>
      <button
        type="button"
        onClick={copyToClipboard}
        style={{
          backgroundColor: copied ? '#4CAF50' : '#337066',
          color: 'white',
          border: 'none',
          padding: '8px 12px',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '14px',
          transition: 'background-color 0.3s',
        }}>
        {copied ? '✓ Copiado!' : '📋 Copiar'}
      </button>
    </div>
  );
};

export default PixCopyButton;
