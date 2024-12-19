import React from 'react';
import Button from '../components/Button.jsx';
import { useParams } from 'react-router-dom';
import MockItemData from '../MockItemData.js';


const MoimContents = () => {
  const {id} = useParams();
  const item = MockItemData.find((dataItem) => dataItem.id === parseInt(id));

  if (!item) {
    return <div>해당 데이터를 찾을 수 없습니다.</div>;
  }

  return (
    <>
      <div className='MoimContents--wrap'>
        <div className="inner">
          <div className='contents--tit'>{item.title}</div>
          <Button text={"참석"}/>
          <Button text={"지각"}/>
          <Button text={"불참"}/>
          <div className='contents--txt'>{item.contents}</div>
        </div>
      </div>
    </>
  )
}

export default MoimContents