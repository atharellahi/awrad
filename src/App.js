
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './components/styles/index.css'
import data from './components/data/data.json'
import Header from './components/header/header';

const Translation = () => {

  const [selectedTranslation, setSelectedTranslation] = useState('off')

  const avaliabletranslations = ['off', 'urdu', 'english']

  return (
    <>
      <Header />
      <div className='parent'>
        <div className='translationselect'>
          <label for='selecttranslation' >Select Translation</label>
          <select id='selecttranslation' onChange={(e) => { setSelectedTranslation(e.target.value) }}>
            {avaliabletranslations.map((itm, idx) => {

              return (
                <option key={idx} value={itm}>{itm.toUpperCase()}</option>
              )
            })}
          </select>
        </div>
        {data.map((item, index) => {

          return (
            <div key={index} className='table'>
              {item.ID ? <div className='index'>
                <span className='value'>{item.ID} </span><span className='label'>Verse</span>
              </div> : null}
              {item.Arabic ? <div className='arabic'>
                <span className='value'>{item.Arabic}</span>  <span className='label'>Arabic</span>
              </div> : null}
              {item['Translation Urdu'] && selectedTranslation === 'urdu' ? <div className='urdu'>
                <span className='value'>{item['Translation Urdu']} </span><span className='label'>Urdu</span>
              </div> : null}
              {item['Translation English'] && selectedTranslation === 'english' ? <div className='english'>
                <span className='value'>{item['Translation English']}</span>  <span className='label'>English</span>
              </div> : null}
            </div>
          )
        })

        }
      </div >

    </>
  )
}

export default Translation;