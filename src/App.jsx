import { useState, useEffect } from 'react'
import { dragonApi } from './api/dragon'
import Card from './Card'

// React Hooks - useState, useEffect, useRef ...
// Alt + Shift + O

const App = () => {
  const [animes, setAnimes] = useState([])
  const [isShow, setIsShow] = useState(false)
  const [selectedAnime, setSelectedAnime] = useState(null)

  useEffect(() => {
    dragonApi.getDragons()
      .then(data => setAnimes(data.items))
  }, [])

  const toggleModal = (animeId) => {
    const anime = animes.find(a => a.id === animeId)
    setSelectedAnime(anime)
    setIsShow(true)
  }

  const closeModal = () => {
    setIsShow(false)
    setSelectedAnime(null)
  }

  if (animes.length === 0) {
    return (
      <div className="offline-wrap" role="status" aria-live="polite">
        <div className="loader-spinner" aria-hidden="true"></div>
        <div style={{ textAlign: "center", marginTop: 8, fontSize: 24}}>
          Нет интернета — пробуем восстановить соединение...
        </div>
        <div className="skeleton" style={{ marginTop: 12 }}></div>
        <div className="dots" style={{ marginTop: 8 }}>
          <span></span><span></span><span></span>
        </div>
      </div>
    )
  }

  return (
    <div className='cards'>
      {animes.map(item => (
        <Card onClick={toggleModal} key={item.id} item={item} />
      ))}

      {isShow && selectedAnime && (
        <div className="modal" onClick={closeModal}>
          <div className="content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedAnime.image} alt="" />
            <div className='Text-content'>
              <h2>{selectedAnime.name}</h2>
              <h3>{selectedAnime.race} - {selectedAnime.gender}</h3>
              <div className="com">
                Here is More info!
              </div>
              <div className='person'>
                <div className='lines'>
                  <h4>Base KI:<br /><span>{selectedAnime.ki}</span></h4>
                  <div className="line"></div>
                  <h4>Total KI:<br /><span>{selectedAnime.maxKi}</span></h4>
                  <div className="line"></div>
                  <h4>Affiliation:<br /><span>{selectedAnime.affiliation}</span></h4>
                </div>
                <p>{selectedAnime.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App

// Декомпозиция компонента - это разделение компонента на мелкие части