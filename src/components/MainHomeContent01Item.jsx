import React from 'react';
import { Link } from 'react-router-dom';

let MockItemData = [
  {
    id: 1,
    title: '2024 2학기 기말고사 공지사항입니다.2024 2학기 기말고사 공지사항입니다.2024 2학기 기말고사 공지사항입니다.2024 2학기 기말고사 공지사항입니다.',
    date: new Date().toUTCString(),
  },
  {
    id: 2,
    title: '2번째 공지사항입니다. 중요한 내용을 확인하세요!',
    date: new Date().toUTCString(),
  },
  {
    id: 3,
    title: '3번째 공지사항. 추가적인 정보가 포함되어 있습니다.',
    date: new Date().toUTCString(),
  },
  {
    id: 4,
    title: '2024 2학기 기말고사 공지사항입니다.2024 2학기 기말고사 공지사항입니다.2024 2학기 기말고사 공지사항입니다.2024 2학기 기말고사 공지사항입니다.',
    date: new Date().toUTCString(),
  },
  {
    id: 5,
    title: '2024 2학기 기말고사 공지사항입니다.2024 2학기 기말고사 공지사항입니다.2024 2학기 기말고사 공지사항입니다.2024 2학기 기말고사 공지사항입니다.',
    date: new Date().toUTCString(),
  },
  {
    id: 6,
    title: '2024 2학기 기말고사 공지사항입니다.2024 2학기 기말고사 공지사항입니다.2024 2학기 기말고사 공지사항입니다.2024 2학기 기말고사 공지사항입니다.',
    date: new Date().toUTCString(),
  },
  {
    id: 7,
    title: '2024 2학기 기말고사 공지사항입니다.2024 2학기 기말고사 공지사항입니다.2024 2학기 기말고사 공지사항입니다.2024 2학기 기말고사 공지사항입니다.',
    date: new Date().toUTCString(),
  },
  {
    id: 8,
    title: '2024 2학기 기말고사 공지사항입니다.2024 2학기 기말고사 공지사항입니다.2024 2학기 기말고사 공지사항입니다.2024 2학기 기말고사 공지사항입니다.',
    date: new Date().toUTCString(),
  },
  {
    id: 9,
    title: '2024 2학기 기말고사 공지사항입니다.2024 2학기 기말고사 공지사항입니다.2024 2학기 기말고사 공지사항입니다.2024 2학기 기말고사 공지사항입니다.',
    date: new Date().toUTCString(),
  },
  {
    id: 10,
    title: '2024 2학기 기말고사 공지사항입니다.2024 2학기 기말고사 공지사항입니다.2024 2학기 기말고사 공지사항입니다.2024 2학기 기말고사 공지사항입니다.',
    date: new Date().toUTCString(),
  },
  {
    id: 11,
    title: '2024 2학기 기말고사 공지사항입니다.2024 2학기 기말고사 공지사항입니다.2024 2학기 기말고사 공지사항입니다.2024 2학기 기말고사 공지사항입니다.',
    date: new Date().toUTCString(),
  },
];

const MainHomeContent01Item = () => {
  return (
    <div>
      <ul className="section--content content01--list__box">
        {MockItemData.map((dataItem) => (
          <li
            key={dataItem.id}
            className="content01--list__item"
          >
            <Link>
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
