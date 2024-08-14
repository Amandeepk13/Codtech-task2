import React from 'react'
import WriteAndUpdate from '../components/WriteBlogs/WriteAndUpdate'

const WriteBlogs = ({title}) => {
  return (
    <div> 
      <WriteAndUpdate titleName={title}/>
    </div>
  );
};

export default WriteBlogs