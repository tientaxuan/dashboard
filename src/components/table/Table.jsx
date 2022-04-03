import React, { useState, useCallback } from 'react';

import './table.css';

const Tablle = (props) => {
  const limit = props.limit;

  const pages =
    limit && limit !== 0 ? Math.floor(props.bodyData.length / limit) : 1;

  const range = [...new Array(pages).keys()];

  const firstPage = 0;

  const lastPage = range.slice(-1)[0];

  // const pageShow = 5;

  const initDataShow = props.bodyData.slice(0, limit);

  const [dataShow, setDataShow] = useState(initDataShow);

  const [currPage, setCurrPage] = useState(0);

  const marginPageLeft = currPage - 2 >= 0 ? currPage - 2 : 0;

  const marginPageRight =
    currPage + 2 <= range.slice(-1) ? currPage + 2 : range.slice(-1);

  const rangeShow = range.slice(marginPageLeft, marginPageRight + 1);

  const getDataAtPage = useCallback((data, page, limit) => {
    return data.slice(page * limit, page * limit + limit);
  }, []);

  const selectPage = (item) => {
    setCurrPage(item);
    setDataShow(getDataAtPage(props.bodyData, item, limit));
  };

  const setFirstPage = () => {
    setCurrPage(firstPage);
    setDataShow(getDataAtPage(props.bodyData, firstPage, limit));
  };

  const setLastPage = () => {
    setCurrPage(lastPage);
    setDataShow(getDataAtPage(props.bodyData, lastPage, limit));
  };

  const setPrevPageShows = () => {
    currPage > firstPage + 3
      ? (() => {
          const target = currPage - 3;
          setCurrPage(target);
          setDataShow(getDataAtPage(props.bodyData, target, limit));
        })()
      : setFirstPage();
  };

  const setNextPageShows = () => {
    currPage < lastPage - 3
      ? (() => {
          const target = currPage + 3;
          setCurrPage(target);
          setDataShow(getDataAtPage(props.bodyData, target, limit));
        })()
      : setLastPage();
  };

  return (
    <div>
      <div className='table-wrapper'>
        <table>
          {props.headData && props.renderHead ? (
            <thead>
              <tr>
                {props.headData.map((item, index) =>
                  props.renderHead(item, index),
                )}
              </tr>
            </thead>
          ) : null}
          {props.bodyData && props.renderBody ? (
            <tbody>
              {dataShow.map((item, index) => props.renderBody(item, index))}
            </tbody>
          ) : null}
        </table>
      </div>
      {pages > 1 ? (
        <div className='table__pagination'>
          {currPage >= firstPage + 3 && [
            <div
              className='table__pagination-item'
              onClick={setFirstPage}
              key='first-page'
            >
              <i className='bx bx-chevrons-left'></i>
            </div>,
            <div
              className='table__pagination-item'
              onClick={setPrevPageShows}
              key='prev-show'
            >
              <i className='bx bx-left-arrow-alt'></i>
            </div>,
          ]}
          {rangeShow.map((item, index) => (
            <div
              key={index}
              className={`table__pagination-item ${
                currPage === item ? 'active' : ''
              }`}
              onClick={(e) => {
                selectPage(item);
              }}
            >
              {item + 1}
            </div>
          ))}
          {currPage <= lastPage - 3 && [
            <div
              className='table__pagination-item'
              onClick={setNextPageShows}
              key='next-show'
            >
              <i className='bx bx-right-arrow-alt'></i>
            </div>,
            <div
              className='table__pagination-item'
              onClick={setLastPage}
              key='last-page'
            >
              <i className='bx bx-chevrons-right'></i>
            </div>,
          ]}
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default Tablle;
