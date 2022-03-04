import React from 'react';

function Content() {
  return (
    <div className="card bg-dark text-black border-0 position-relative bg-primary">
      <img src="./bg.jpg" className="card-img" alt="Background" style={{ marginTop: "60px" }} />
      <div className='textcontainer position-absolute left-0 right-0  bottom-0'>
        <h1 className='texts'>Miss Twenty</h1>
        <p>
          We selected the most premium fabrics, created the perfect cuts, and richest designs.
        </p>
        <button type="button" class="explorbtn btn btn-lg">EXPLORE</button>
      </div>
    </div>

  )
}

export default Content