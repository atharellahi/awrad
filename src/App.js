
import React, { useState } from 'react';
import './components/styles/index.css';
import data from './components/data/data.json';
import Header from './components/header/header';
import uparrow from './components/images/uparrow.png';
import book from './components/images/book.png';
const Translation = () => {

  const [selectedTranslation, setSelectedTranslation] = useState('reading')
  const [showModal, setShowModal] = useState(false)
  const [verseinput, setverseinput] = useState(1)
  const avaliabletranslations = ['reading', 'urdu', 'english']
  const [theme, settheme] = useState('dark')

  function toTitleCase(str) {
    return str.replace(
      /\w\S*/g,
      function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
    );
  }

  const handlegottotop = () => {
    const bdy = document.querySelector('body')
    window.scrollTo({ top: 0, behavior: 'smooth' });
    bdy.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const scrolltoverse = () => {
    if (verseinput < 1 || verseinput > data.length) {
      return
    }
    const verse = document.querySelectorAll('.table')
    verse[verseinput - 1].scrollIntoView({ behavior: "smooth", block: 'center', inline: "nearest" });
  }

  return (
    <>
      <Header theme={theme} settheme={settheme} />
      <div className={`parent ${theme}`}>
        <div className={`translationswitch ${theme}`}>
          {avaliabletranslations.map((item, index) => {

            const handletranslationswitch = (val) => {
              setSelectedTranslation(val)
            }
            return (
              <div key={index} className={`${selectedTranslation === item ? `selectedswitch ${theme}` : `switch ${theme}`}`}
                onClick={() => handletranslationswitch(item)}>
                {toTitleCase(item)}
              </div>
            )
          })
          }

        </div>

        {data.map((item, index) => {

          return (
            <div key={index} className={`table ${theme}`}>
              {item.ID ? <div className={`index ${theme}`}>
                <span className={`versenumber ${theme}`}>{item.ID}</span>&nbsp;&nbsp;&nbsp;<span className={`translation ${theme}`}>{selectedTranslation === 'reading' ? "" : toTitleCase(selectedTranslation)}</span>
              </div> : null}
              {item.Arabic ? <div className={`arabic ${theme}`}>
                <span className={`value ${theme}`}>{item.Arabic}</span>
              </div> : null}
              {item['Translation Urdu'] && selectedTranslation === 'urdu' ? <div className={`urdu ${theme}`}>
                <span className={`value ${theme}`}>{item['Translation Urdu']} </span>
              </div> : null}
              {item['Translation English'] && selectedTranslation === 'english' ? <div className={`english ${theme}`}>
                <span className={`value ${theme}`}>{item['Translation English']}</span>
              </div> : null}
            </div>
          )
        })

        }
      </div >
      {showModal ? <div className='verseselectmodal'>
        <div className='modalheader'> Select Verse</div>
        <div className='modalinputholder'>
          <input type='number' placeholder='Enter Verse Number' className='verseinput' value={verseinput} onChange={(e) => { setverseinput(e.target.value) }} />
          <button className='gobtn' onClick={() => {
            scrolltoverse()
            setShowModal(false)
          }}>
            <img className='btnarrow' src={uparrow} alt='go to verse button' />
          </button>
        </div>
        <div className='closemodal' onClick={() => setShowModal(false)}>X</div>
      </div> : null}
      <div className='verseselect' onClick={() => setShowModal(true)}>
        <img src={book} alt='select verse' />
      </div>
      <div className='totopbtn' onClick={() => handlegottotop()}>
        <img src={uparrow} alt='uparrow' />
      </div>
    </>
  )
}

export default Translation;