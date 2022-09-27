import React from 'react';

export default function CardUser(props) {
  return (
    <div className="w-full max-w-[300px] flex bg-white shadow-lg rounded-lg m-2 p-4 gap-2 h-[180px]">
      <img
        src={props.image}
        classsName="h-full w-[40%] object-cover rounded-lg"
      />

      <div className="flex flex-col flex-1">
        <h1> {props.username} </h1>
        <small> {props.bod} </small>

        <button className="h-10 px-3 bg-orange-500 text-white rounded-full mt-auto">
          follow
        </button>
      </div>
    </div>
  );
}
