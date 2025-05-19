// src/components/Greeting.jsx
import React from 'react';
import PropTypes from 'prop-types'; // Ensure this is imported

function Greeting({ name }) { // NO default value for 'name' here for this test
  return (
    <div>
      <h2>Hello, {name}!</h2> {/* If name is undefined, this will render "Hello, !" */}
      <p>Welcome to your custom React component</p>
    </div>
  );
}

Greeting.propTypes = {
  name: PropTypes.string.isRequired // 'name' is a string and is required
};

export default Greeting;
