
import React from 'react';
import ReactDOM from 'react-dom/client';
import './components/styles/index.css'
import data from './components/data/data.json'

const Translation = () => {

  return (
    <>
      <div className='parent'>
        {data.map((item, index) => {

          return (
            <div className='table'>
              <div className='index'>
                <span className='value'>{item.ID} </span><span className='label'>Verse</span>
              </div>
              <div className='arabic'>
                <span className='value'>{item.Arabic}</span>  <span className='label'>Arabic</span>
              </div>
              <div className='urdu'>
                <span className='value'>{item.Traslation} </span><span className='label'>Urdu</span>
              </div>
              {item.English ? <div className='english'>
                <span className='value'>{item.English}</span>  <span className='label'>English</span>
              </div> : null}
            </div>
          )
        })

        }
      </div>

    </>
  )
}

export default Translation;