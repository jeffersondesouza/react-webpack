import React from 'react';

const DebugForm = (props) => {
  return (
    <div style={{ backgroundColor: '#efefef' }}>
      <p style={{ backgroundColor: '#e2e2e2', padding: '5px', textAlign: 'center' }}>Form State</p>
      <pre>
        {JSON.stringify(props, null, 2)}
      </pre>
    </div>
  );
}

export default DebugForm;
