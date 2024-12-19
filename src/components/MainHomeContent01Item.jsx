import React from 'react';
import { Link } from 'react-router-dom';
import MockItemData from '../MockItemData.js';


const MainHomeContent01Item = () => {
  return (
    <div>
      <ul className="section--content content01--list__box">
        {MockItemData.map((dataItem) => (
          <li
            key={dataItem.id}
            className="content01--list__item"
          >
            <Link to={`/moim/${dataItem.id}`}>
              <h6>{dataItem.title}</h6>
              <p className="date">{dataItem.date}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MainHomeContent01Item;
