import React, { use } from 'react';
import userImg from '../../assets/user.png'
import reportImg from '../../assets/report.png'

const AvailablePlayers = ({ playerPromise }) => {
  const playerData = use(playerPromise);
  console.log(playerData);

  return (
    <div className='max-w-7xl mx-auto'>

      {/* 1. title div for available players and buttons */}
      <div className='flex justify-between mb-8'>
        <p>Available Players</p>
        {/* button div */}
        <div className='flex'>
          <button className='mr-2'>Available</button>
          <button>Selected <span>(<span>0</span>)</span></button>
        </div>
      </div>

      {/* 2. player metadata and card section */}
      <div className="card bg-base-100 w-96 shadow-sm p-6">
        {/* image section */}
        <figure className='mb-6'>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes" />
        </figure>

        {/* text section */}
        <div className="">
          {/* name */}
          <div className='flex mb-4'>
            <img className='mr-2' src={userImg} alt="" />
            <h2 className="card-title">Babar Azam</h2>
          </div>

          {/* country + role */}
          <div className='flex justify-between py-2'>
            <div className='flex items-center'>
              <img src={reportImg} alt="" />
              <span className='ml-2'>Pakistan</span>
            </div>
            <button>All-rounder</button>
          </div>

          <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailablePlayers;