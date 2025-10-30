
import  { useState, useEffect, useRef } from 'react';
import Lightbox from '../components/lightbox';


export default function Frontpage() {
  const [visibleCards, setVisibleCards] = useState([]);
  const [isLightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const cardRefs = useRef([]);

  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch('/videoer.json')
      .then(response => response.json())
      .then(data => {
        console.log('Fetched data:', data);

        if (Array.isArray(data.sponsors)) {
          setCards(data.sponsors);
        } else {
          console.error('Sponsors is not a valid array:', data.sponsors);
          setCards([]);
        }
      })
      .catch(error => console.error('Error fetching cards:', error));
  }, []);

console.log(cards)
console.log(currentImageIndex)

  
  // Animation on load for video cards
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardIndex = parseInt(entry.target.dataset.index);
            setVisibleCards(prev => [...new Set([...prev, cardIndex])]);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);





  // Lightbox functions
  const setCardRef = (index) => (el) => {
    cardRefs.current[index] = el;
  };

  const openLightbox = (images, index) => {
    setLightboxImages(images);
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  return (
    <>
      <div className="hero">
        <h1>Lars Ohlen {"(LAS"}</h1>
        <h1>the double trouble{")"}</h1>
        <h1 className='VideoHeading'>Kig nedenunder for fede videoer af mig!</h1>
      </div>

      <div className="hero-content">
        <section ref={setCardRef(0)} data-index={0} className={`movie-card ${visibleCards.includes(0) ? 'visible' : ''}`}>
          <div className="content-container">
            <div className="about">
              <h2 className="about__heading">småt om mig</h2>
                      <ul>
              <li>dedikeret Fodboldgolfer med øgenavnet LAS</li>
              <li>tidligere Maraton-løber og Badmintonspiller</li>
              <li>Realkredit-ekspert</li>
              <li>omlægning af Realkredit-lån</li>
              <li>altid klar med et godt råd om boligkøb</li>
              <li>valg af lån i ejerbolig</li>
              <li>anbefaling af den rigtige bank til dig</li>
              <li>godkendelse af økonomi og meget mere</li>
           <li> jeg har også en masse gode artikler til salg:</li>
           <li>fodbolde og fodboldstøvler TF</li>
           <li>Brøndby jetoner til poker og markering i fodboldgolf</li>
           <li>hverdagsting </li>
           <li>Se gerne på næstsidste fane "salg"</li>

              </ul>
          
            </div>
            <div className="image-container">
              <div className="main-image-container">
                <img className="main-image" src="vinderto.jpg" alt="Main Image" onClick={() => openLightbox(['vinderto.jpg'], 0)} />
              </div>
              <div className="grid-images">
                <img className="champagne" src="vinderne.jpg" alt="Champagne" onClick={() => openLightbox(['vinderne.jpg'], 0)} />
                <img className="kærlighed" src="trophy.jpg" alt="Kærlighed" onClick={() => openLightbox(['trophy.jpg'], 0)} />
              </div>
            </div>
            <div className="image-container">
              <div className="main-image-container">
                <img className="main-image" src="DMvinder.jpg" alt="Main Image" onClick={() => openLightbox(['DMvinder.jpg'], 0)} />
              </div>
              <div className="grid-images">
                <img className="champagne" src="champange.jpg" alt="Champagne" onClick={() => openLightbox(['champange.jpg'], 0)} />
                <img className="kærlighed" src="kærlighed.jpg" alt="Kærlighed" onClick={() => openLightbox(['kærlighed.jpg'], 0)} />
              </div>
            </div>
          </div>

          <hr className="divider" />

          <div className="coming-soon-container">
            <p className='video-text'>Små Videoer af mig</p>
            <div className="movies-grid slider">
              
              <div ref={setCardRef(1)} data-index={1} className={`movie-card ${visibleCards.includes(1) ? 'visible' : ''}`}>
                <video width="100%" height="100%" autobuffer="true" controls="true" poster="video1.PNG">
                  <source src="vip.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
              </div>
              <div ref={setCardRef(2)} data-index={2} className={`movie-card ${visibleCards.includes(2) ? 'visible' : ''}`}>
              <video width="100%" height="100%" autobuffer="true" controls="true" poster="video2.PNG">
                  <source src="video1.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
            
              </div>
              <div ref={setCardRef(3)} data-index={3} className={`movie-card ${visibleCards.includes(3) ? 'visible' : ''}`}>
              <video width="100%" height="100%" autobuffer="true" controls="true" poster="video3.PNG">
                  <source src="video3.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
               
              </div>
              <div ref={setCardRef(4)} data-index={4} className={`movie-card ${visibleCards.includes(4) ? 'visible' : ''}`}>
              <video width="100%" height="100%" autobuffer="true" controls="true" poster="video4.PNG">
                  <source src="fodbold.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              
              </div>
              <div ref={setCardRef(5)} data-index={5} className={`movie-card ${visibleCards.includes(5) ? 'visible' : ''}`}>
              <video width="100%" height="100%" autobuffer="true" controls="true" poster="video5.PNG">
                  <source src="clean.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
               
              </div>
            
              <div ref={setCardRef(7)} data-index={7} className={`movie-card ${visibleCards.includes(7) ? 'visible' : ''}`}>
              <video width="100%" height="100%" autobuffer="true" controls="true" poster="video7.PNG">
                  <source src="swedishopenvideo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
              </div>
              <div ref={setCardRef(8)} data-index={8} className={`movie-card ${visibleCards.includes(8) ? 'visible' : ''}`}>
              <video width="100%" height="100%" autobuffer="true" controls="true" poster="video8.PNG">
                  <source src="swedishopenvideo2.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              
              </div>
            </div>
          </div>
          

        </section>
      </div>

      <Lightbox images={lightboxImages} isOpen={isLightboxOpen} onClose={closeLightbox} />
    </>
  );
}
