import React from 'react';

const Collapse = () => {
    return (
      <div>
        <button
          type="button"
          class="btn btn-lg btn-danger"
          data-toggle="popover"
          title="Popover title"
          data-content="And here's some amazing content. It's very engaging. Right?"
        >
          Click to toggle popover
        </button>
      </div>
    );
};

export default Collapse;