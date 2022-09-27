import React from 'react';

//props
export default function MyButton(props) {
  return (
    <button className={`h-12 px-4 ${props.bgColor} text-white rounded-md m-2`}
      onClick={props.onClick}
    >
      {props.content}
    </button>
  );
}
