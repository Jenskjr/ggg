import React from 'react';
// css
import { css } from 'emotion';

const Details = () => {
    return (
      <div clasName={container()}>
        <div className="top">
          <div>
            <h2>
              Ungdommens Røde kors
            </h2>
          </div>
          <div>logo</div>
        </div>
        <div>Betaling</div>
      </div>
    )
}

const container = () => css`
  padding: 1rem;
  .top {display: flex}
`

export default Details;