import { css } from '@emotion/css'
import React, { useState } from 'react'
import { Directors } from './Directors'
import { Movies } from './Movies'

export const HomePage = () => {
  const [ispage, setIspage] = useState(true)
  return (
    <div>
      <div
        className={css`
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          background-color: green;
          text-align: center;
        `}
      >
        <div
          onClick={() => setIspage(true)}
          className={css`
            padding: 15px 5px 15px 5px;
            ${ispage && `border-bottom: solid 2px blue;`}
            cursor: pointer;
            &:hover {
              opacity: 0.7;
            }
          `}
        >
          page one
        </div>
        <div
          onClick={() => setIspage(false)}
          className={css`
            padding: 15px 5px 15px 5px;
            ${!ispage && `border-bottom: solid 2px red;`}
            cursor: pointer;
            &:hover {
              opacity: 0.7;
            }
          `}
        >
          page two
        </div>
      </div>
      {ispage ? <Movies /> : <Directors />}
    </div>
  )
}
