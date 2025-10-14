

import Lightbox from '../components/lightbox';
import  { useEffect, useRef, useState } from 'react';
import Video from '../components/jackie';
import { Link } from 'react-router';
import Footer from './footer';
import NavBar from './navbar';
export default function Fif() {




    
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
        fetch('/fif.json')
            .then(response => response.json())
            .then(data => {
                console.log('Fetched data:', data);

                if (Array.isArray(data.fif)) {
                    setCards(data.fif);
                } else {
                    console.error('Sponsors is not a valid array:', data.fif);
                    setCards([]);
                }
            })
            .catch(error => console.error('Error fetching cards:', error));
    }, []);
    return (
        <>
           <NavBar/>
            <section className='fif-section'>
                <div className='fif-info-div'> <Link className='intro-text' href={"https://www.fif-hillerod.dk/"}><h1 className='sponsore-heading'>Daniel, Ras, Faiz og Jackie´s fodboldhold</h1></Link>

                    <Link className='intro-text' to={"https://www.fif-hillerod.dk/"}>


                        <img className='fif-logo' src="fif.jpg" alt="" /></Link>
                        <h1 className='Fodbold-VideoHeading'>Kig nedenunder for fede videoer af holdet!</h1>
                    <p className='intro-text'>* FIF Hillerød er en af mine 4 favoritklubber</p>
                    <p className='intro-text'>* min søn, Daniel, og hans bedste venner spiller i klubben</p>
                    <p className='intro-text'>* 2. og 3. holdet er hyggehold og deres sammenhold er unikt</p>
                    <p className='intro-text'>* det gør mig så glad at se dem sammen </p>
                    <p className='intro-text'>* og jeg får også lov at være noget for nogle af drengene</p>
                    <img className='klubhus' src="klubhus.jpg" alt="" onClick={() => openLightbox(['klubhus.jpg'], 0)}/>
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
                    
                </div></div>
               <div ref={setCardRef(0)} data-index={0} className={`fif-content-div movie-card ${visibleCards.includes(0) ? 'visible' : ''}`}>
                    <hr />
                    <h2 className='posts-heading'>Gutterne i FIF fejrer første sæson sejr ⚽️🏆🥇</h2>
                    <Video src="fodbold.mp4" 
       />
                   <p className='posts-text'>Jeg ved godt, at Jackie er god til at score damer eller VAR, der er vist en meget sød kæreste nu 💃🫶
                        Jeg ved godt, at Jackie er god til at lave insta .....
                        MEN al den snak om ALLE de mål Jackie scorer for FIF ⚽⚽⚽⚽⚽ var jeg træt at høre om hele tiden.
                        Lars, Lars du kom for sent, jeg har scoret 2 mål og lavet 1 assist i første halvleg ..... men se første video SÅDAN JACKS 💪⚽✌️
                        og Faiz du er en unik fighter, video 2, stormer frem, ruller rundt, tilbageløb og piver aldrig 🙏</p>

                </div>
                          <div ref={setCardRef(0)} data-index={0} className={`fif-content-div movie-card ${visibleCards.includes(0) ? 'visible' : ''}`}>
                    <hr />
                    <h2 className='posts-heading'>Klip fra en fif kamp ⚽️🏆🥇</h2>
                    <div className='grid-layout'>
                    <Video src="kamp.mp4" 
       />
        <Video src="fifvideo2.mp4" 
       />  <Video src="fifvideo3.mp4" 
       />  <Video src="fifvideo4.mp4" 
       /></div>
                   <p className='posts-text'>Jeg ved godt, at Jackie er god til at score damer eller VAR, der er vist en meget sød kæreste nu 💃🫶
                        Jeg ved godt, at Jackie er god til at lave insta .....
                        MEN al den snak om ALLE de mål Jackie scorer for FIF ⚽⚽⚽⚽⚽ var jeg træt at høre om hele tiden.
                        Lars, Lars du kom for sent, jeg har scoret 2 mål og lavet 1 assist i første halvleg ..... men se første video SÅDAN JACKS 💪⚽✌️
                        og Faiz du er en unik fighter, video 2, stormer frem, ruller rundt, tilbageløb og piver aldrig 🙏</p>


                </div>
            
                  
            </section>         <div ref={setCardRef(1)} data-index={1} className={`fif-content-div movie-card ${visibleCards.includes(1) ? 'visible' : ''}`}>
                    <hr />
                    <h2 className='posts-heading'>Jackie scorer mål for FIF ⚽️🏆🥇</h2>
                    <Link to={"https://www.facebook.com/lars.ohlen.9/posts/pfbid036JFx7vySFU2jXfMM6sXqyEg6XqJpL6iFYVXdt1jFJ2X1qvMBnjBEVCReEvHECB72l?rdid=hDsn2dZYwEwkOG8s#"}>
                        Klik her eller på billedet for at gå vidre til Postet</Link>
                    <Link to={"https://www.facebook.com/lars.ohlen.9/posts/pfbid036JFx7vySFU2jXfMM6sXqyEg6XqJpL6iFYVXdt1jFJ2X1qvMBnjBEVCReEvHECB72l?rdid=hDsn2dZYwEwkOG8s#"}>
                        <img className='posts-img' src="jackie-mål.jpg" alt="" />
                    </Link><p className='posts-text'>Jeg ved godt, at Jackie er god til at score damer eller VAR, der er vist en meget sød kæreste nu 💃🫶
                        Jeg ved godt, at Jackie er god til at lave insta .....
                        MEN al den snak om ALLE de mål Jackie scorer for FIF ⚽⚽⚽⚽⚽ var jeg træt at høre om hele tiden.
                        Lars, Lars du kom for sent, jeg har scoret 2 mål og lavet 1 assist i første halvleg ..... men se første video SÅDAN JACKS 💪⚽✌️
                        og Faiz du er en unik fighter, video 2, stormer frem, ruller rundt, tilbageløb og piver aldrig 🙏</p>

                </div>
                  <Footer/>

     <Lightbox images={lightboxImages} isOpen={isLightboxOpen} onClose={closeLightbox} />
        </>

    );
};

