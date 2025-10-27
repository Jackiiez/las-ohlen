
import { Link } from 'react-router';
import Lightbox from '../components/lightbox';
import  { useEffect, useRef, useState } from 'react';
import Footer from './footer';
import NavBar from './navbar';
export default function Barcalona() {








      const [lightboxImages, setLightboxImages] = useState([]);
      const [isLightboxOpen, setLightboxOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

console.log(currentImageIndex)




      const openLightbox = (images, index) => {
        setLightboxImages(images);
        setCurrentImageIndex(index);
        setLightboxOpen(true);
      };
    
      const closeLightbox = () => {
        setLightboxOpen(false);
      };











  const [cards, setCards] = useState([]);
 const [visibleCards, setVisibleCards] = useState([]);
      const cardRefs = useRef([]);
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
    
      const setCardRef = (index) => (el) => {
        cardRefs.current[index] = el;
      };
  useEffect(() => {




    fetch('/barca.json')
      .then(response => response.json())
      .then(data => {
        console.log('Fetched data:', data);

        if (Array.isArray(data.barca)) {
          setCards(data.barca);
        } else {
          console.error('Sponsors is not a valid array:', data.barca);
          setCards([]);
        }
      })
      .catch(error => console.error('Error fetching cards:', error));
  }, []);
  return (
    <>
       <NavBar/>
      <section className='fif-section'>
        <div className='fif-info-div'> <Link className='intro-text' to={""}><h1 className='sponsore-heading'>FC Barcelona </h1></Link>
          <Link className='intro-text' to={""}>


            <img className='fif-logo' src="barcalona.png" alt="" /></Link>
          {/* <p className='intro-text'>Her er det hold som har en meget personlig plads i mit hjerte.</p>
          <p className='intro-text'>Grunde til det her hold er en af mine personlige favoriter er fordi min søn og hans bedste venner spiller sammen på holdet</p>
          <p className='intro-text'>på trods af at det bare er et hygge hold så gør det mig inderligt glad at se min søn og hans venner spille kampe selvom det udelukkende er hygge bold</p> */}


          <img className='klubhus' src="barcalona-stadium.jpg" alt="" />
        </div>
        <div className="comming-soon-container">

          <div className="movies-grid slider">
            {cards.map(card => (
              <div key={card.id} className="movie-card">

                <img src={card.img} alt={card.name} onClick={() => openLightbox([card.img], 0)} />

                <div className="movie-info">
                  <h3>{card.name}</h3>
                  <p>{card.text}</p>
                </div>
              </div>
            ))}
          </div>
             </div>
      </section>    <div ref={setCardRef(0)} data-index={0} className={`fif-content-div movie-card ${visibleCards.includes(0) ? 'visible' : ''}`}>
            <hr />


            <h2 className='posts-heading'>Barca {"<3"}⚽️🏆🥇</h2>
            <Link to={"https://www.facebook.com/photo.php?fbid=727016054027486&set=a.709909969071428&type=3&rdid=tE3FSt2EhctKM0bq&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1GverRVPKH%2F#"}>
              Klik her eller på billedet for at gå vidre til postet</Link>
            <Link to={"https://www.facebook.com/photo.php?fbid=727016054027486&set=a.709909969071428&type=3&rdid=tE3FSt2EhctKM0bq&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1GverRVPKH%2F#"}>
              <img className='posts-img' src="ko.jpg" alt="" />
            </Link>

          </div>
            <Footer/>
               <Lightbox images={lightboxImages} isOpen={isLightboxOpen} onClose={closeLightbox} />

    </>

  );
};

