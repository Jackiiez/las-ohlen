

import { Link } from 'react-router';
import Lightbox from '../components/lightbox';
import  { useEffect, useRef, useState } from 'react';
import Footer from './footer';
import NavBar from './navbar';
export default function Liverpool() {



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





  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch('/liverpool.json')
      .then(response => response.json())
      .then(data => {
        console.log('Fetched data:', data);

        if (Array.isArray(data.liverpool)) {
          setCards(data.liverpool);
        } else {
          console.error('Sponsors is not a valid array:', data.liverpool);
          setCards([]);
        }
      })
      .catch(error => console.error('Error fetching cards:', error));
  }, []);
  return (
    <>
       <NavBar/>
      <section className='fif-section'>
        <div className='fif-info-div'> <Link className='intro-text' href={""}><h1 className='sponsore-heading'>Liverpool FC</h1></Link>
          <Link className='intro-text' to={""}>


            <img className='fif-logo' src="liverpool.png" alt="" /></Link>
          {/* <p className='intro-text'>Her er det hold som har en meget personlig plads i mit hjerte.</p>
          <p className='intro-text'>Grunde til det her hold er en af mine personlige favoriter er fordi min søn og hans bedste venner spiller sammen på holdet</p>
          <p className='intro-text'>på trods af at det bare er et hygge hold så gør det mig inderligt glad at se min søn og hans venner spille kampe selvom det udelukkende er hygge bold</p> */}


          <img className='klubhus' src="anfield.jpg" alt="" onClick={() => openLightbox(["anfield.jpg"], 0)} />
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
      </section>





      <div ref={setCardRef(0)} data-index={0} className={`fif-content-div movie-card ${visibleCards.includes(0) ? 'visible' : ''}`}>
        <hr />


        <h2 className='posts-heading'>På tur til Anfield i England ⚽️🏆🥇</h2>
        <Link to={"https://www.facebook.com/story.php?story_fbid=2684811084914630&id=100001572951936&mibextid=wwXIfr&rdid=vPEVQmJYgmPgZTgR#"}>
          Klik her eller på billedet for at gå vidre til Postet</Link>
        <Link to={"https://www.facebook.com/story.php?story_fbid=2684811084914630&id=100001572951936&mibextid=wwXIfr&rdid=vPEVQmJYgmPgZTgR#"}>
          <img className='posts-img' src="ynwa.jpg" alt="" />
        </Link><p className='posts-text'>Y N W A - SÅ ER VI LANDET ❤️❤️❤️❤️⚽️⚽️⚽️⚽️🇬🇧🇬🇧🇬🇧🇬🇧
          PÅ TUR MED SKOV SNEGLEN 🐌🐌🐌🐌 ER DET STADIG MOVEMBER ❓❓❓❓
          COME ON “ THE REDS ❤️🔴❤️🔴❤️🔴❤️🔴 4 - 0 🙏🏻🙏🏻🙏🏻🙏🏻⚽️⚽️⚽️⚽️ 🙏🏻🙏🏻🙏🏻🙏🏻JA TAK ⚽️⚽️⚽️⚽️</p>

      </div>
         <div ref={setCardRef(0)} data-index={0} className={`fif-content-div movie-card ${visibleCards.includes(0) ? 'visible' : ''}`}>
        <hr />


        <h2 className='posts-heading'>2-0 på Anfield ⚽️🏆🥇</h2>
        <Link to={"https://www.facebook.com/lars.ohlen.9/posts/pfbid02qfazLzvotZEYUGWhMyySscSbnwvQroeyBd9qrJZwWeLBk379XGWTdZqJigPTMSqml?rdid=q7F0Vzq71R1bYqU2#"}>
          Klik her eller på billedet for at gå videre til postet</Link>
        <Link to={"https://www.facebook.com/lars.ohlen.9/posts/pfbid02qfazLzvotZEYUGWhMyySscSbnwvQroeyBd9qrJZwWeLBk379XGWTdZqJigPTMSqml?rdid=q7F0Vzq71R1bYqU2#"}>
          <img className='posts-img' src="anfield1.jpg" alt="" />
        </Link><p className='posts-text'>THE GRUMPHY OLD MAN😡 VERY HAPPY AT ANFIELD 😀🙏🏻‼️🏆🥇⚽️🇬🇧1 MINUT AFTER 1. GOAL COMES THIS:
REDS - GUNNERS 2 - 0 🇬🇧⚽️🏴󠁧󠁢󠁥󠁮󠁧󠁿</p>

      </div>
          {/* <div ref={setCardRef(0)} data-index={0} className={`fif-content-div movie-card ${visibleCards.includes(0) ? 'visible' : ''}`}>
        <hr />


        <h2 className='posts-heading'>Cool ink Tatoo</h2>
        <Link href={"https://www.facebook.com/story.php?story_fbid=2684811084914630&id=100001572951936&mibextid=wwXIfr&rdid=vPEVQmJYgmPgZTgR#"}>
          Klik her eller på billedet for at gå vidre til Postet</Link>
        <Link href={"https://www.facebook.com/coolink.dk/?locale=da_DK"}>
          <img className='posts-img' src="tatoo.jpg" alt="" />
        </Link><p className='posts-text'>Cool Ink Tattoo som har lavet min tatovering med YNWA</p>

      </div> */}
        <Footer/>
         <Lightbox images={lightboxImages} isOpen={isLightboxOpen} onClose={closeLightbox} />

    </>

  );
};

