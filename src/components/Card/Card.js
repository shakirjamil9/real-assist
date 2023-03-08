import React from 'react';

const Card = () => {
  return (
    <div className="card">
      <button className="card-btn top">Cold Outreach</button>
      <p style={{ color: '#838383', lineHeight: '21px' }}>
        Script 1 <br />
        Subject: Ricky Carruth is a top rated local <br />
        Chicago agent{' '}
      </p>
      <p style={{ lineHeight: '21px' }}>
        Dear [Prospect’s Name], <br /> <br />I hope this email finds you well.
        My name is Ricky Carruth, and I'm a licensed real estate agent in the
        City of Chicago. I recently tried to reach you by phone to discuss your
        real estate needs, but it seems you were unavailable...
      </p>

      <button className="card-btn bottom">Edit Template</button>
    </div>
  );
};

export default Card;
