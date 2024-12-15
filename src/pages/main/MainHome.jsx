import React from 'react';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';

const MainHome = () => {
  return (
    <div className="MainHome--Wrap">
      <main>
        <section className="section--swiper">
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
          >
            <SwiperSlide>
              <img
                src="https://via.placeholder.com/150X100"
                alt="샘플이미지"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://via.placeholder.com/150X100"
                alt="샘플이미지"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://via.placeholder.com/150X100"
                alt="샘플이미지"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://via.placeholder.com/150X100"
                alt="샘플이미지"
              />
            </SwiperSlide>
          </Swiper>
        </section>
        <section className="section--content section--content01">
          <div className="inner">
            <div className="content01--tit__info_wrapper">
              <div className="content01--tit__info__box">
                <div className="content01--tit__info_txt">
                  <h6>공지사항</h6>
                  <h3>
                    지금 MOIMSA에서
                    <br />
                    주목할 공지를 확인해보세요!
                  </h3>
                </div>
                <div className="content01--tit__info--more_btn">
                  <Link>더보기</Link>
                </div>
              </div>
            </div>

            <ul className="section--content content01--list__box">
              <li className="content01--list__item">
                <Link>
                  <h6>
                    2024 2학기 기말고사 공지사항입니다.2024 2학기 기말고사 공지사항입니다.2024 2학기 기말고사 공지사항입니다.2024 2학기 기말고사 공지사항입니다.
                  </h6>
                  <p className="date">2024. 12. 12.</p>
                </Link>
              </li>
              <li className="content01--list__item">
                <Link>
                  <h6>
                    2024 2학기 기말고사 공지사항입니다.2024 2학기 기말고사 공지사항입니다.2024 2학기 기말고사 공지사항입니다.2024 2학기 기말고사 공지사항입니다.
                  </h6>
                  <p className="date">2024. 12. 12.</p>
                </Link>
              </li>
              <li className="content01--list__item">
                <Link>
                  <h6>
                    2024 2학기 기말고사 공지사항입니다.2024 2학기 기말고사 공지사항입니다.2024 2학기 기말고사 공지사항입니다.2024 2학기 기말고사 공지사항입니다.
                  </h6>
                  <p className="date">2024. 12. 12.</p>
                </Link>
              </li>
              <li className="content01--list__item">
                <Link>
                  <h6>
                    2024 2학기 기말고사 공지사항입니다.2024 2학기 기말고사 공지사항입니다.2024 2학기 기말고사 공지사항입니다.2024 2학기 기말고사 공지사항입니다.
                  </h6>
                  <p className="date">2024. 12. 12.</p>
                </Link>
              </li>
              <li className="content01--list__item">
                <Link>
                  <h6>
                    2024 2학기 기말고사 공지사항입니다.2024 2학기 기말고사 공지사항입니다.2024 2학기 기말고사 공지사항입니다.2024 2학기 기말고사 공지사항입니다.
                  </h6>
                  <p className="date">2024. 12. 12.</p>
                </Link>
              </li>
              <li className="content01--list__item">
                <Link>
                  <h6>
                    2024 2학기 기말고사 공지사항입니다.2024 2학기 기말고사 공지사항입니다.2024 2학기 기말고사 공지사항입니다.2024 2학기 기말고사 공지사항입니다.
                  </h6>
                  <p className="date">2024. 12. 12.</p>
                </Link>
              </li>
              <li className="content01--list__item">
                <Link>
                  <h6>
                    2024 2학기 기말고사 공지사항입니다.2024 2학기 기말고사 공지사항입니다.2024 2학기 기말고사 공지사항입니다.2024 2학기 기말고사 공지사항입니다.
                  </h6>
                  <p className="date">2024. 12. 12.</p>
                </Link>
              </li>
              <li className="content01--list__item">
                <Link>
                  <h6>
                    2024 2학기 기말고사 공지사항입니다.2024 2학기 기말고사 공지사항입니다.2024 2학기 기말고사 공지사항입니다.2024 2학기 기말고사 공지사항입니다.
                  </h6>
                  <p className="date">2024. 12. 12.</p>
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default MainHome;
