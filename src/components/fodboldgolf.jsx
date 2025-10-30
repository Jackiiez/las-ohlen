

import { Link } from 'react-router';
import Lightbox from '../components/lightbox';
import { useEffect, useRef, useState } from 'react';
import Footer from './footer';
import NavBar from './navbar';

export default function Fodboldgolf() {
  const [visibleCards, setVisibleCards] = useState([]);
  const cardRefs = useRef([]);



  const [lightboxImages, setLightboxImages] = useState([]);
  const [isLightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);




  console.log(currentImageIndex)
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



  // Lightbox functions






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
      <NavBar />
      <div className={`fodboldgolf-container`}>
        <h2 className='sponsore-heading'>Fodboldgolferen LAS ⚽️⛳️🕳</h2>
        <article>
          <div className='mails'>
            <Link className='mail' to="mailto:kildedalfg@gmail.com">kildedalfg@gmail.com</Link>
            <Link className='mail' to="mailto:frederikssund.fodboldgolf.klub@gmail.com">frederikssund.fodboldgolf.klub@gmail.com</Link>
          </div>
          <h2 className='sponsore-heading'>Mine podier🏆</h2>
          <p className='placeringer'>
            • verdensmester i 55+<br />
            • 45 podier🏆<br />
            • 🥇21 stk. 🥈9 stk. 🥉15 stk.<br />
            • vigtigste titler:<br />
            • 🏆verdensmester i single i 55 + i 2023<br />
            • Frankrig Open i single overall i 2024<br />
            • vandt med 12 skud - største internationale sejr i 6 år!<br />
            • Spanien Open i herredouble i 2018 og 2021<br />
            • Finland Open i herredouble i 2019<br />
            • Danish Open i herredouble 2024<br />
            • jeg har spillet præcis 100 baner med 18 huller, nu hvor vi frigiver denne hjememside lige nu<br />
            • jeg har måske spillet aller flest baner af alle i hele verden ifølge de ”erfarne”<br />
            • verdensrangliste højdepunkter:<br />
            • 55+ nummer 1 i verden<br />
            • herredouble nummer 2 i verden<br />
            • herresingle nummer 7 i verden<br />
            • alias udover LAS<br />
            • THE GRUMPHY OLD MAN😡<br />
            • WORLD CHAMPION 55+ <br />
            • Old Boys Football golf ⚽️⛳️🕳️<br />
            • Lars OHLEN⚽️⛳️🕳️
          </p>

          <p>

            * Jeg har spillet 100 baner i alt med 18 huller ⚽️⛳️🕳<br />
            * sandsynligvis er jeg den i verden, der har spillet allerflest ⚽️⛳️🕳
          </p>




          {/* <hr className="divider" /> */}




          <div className={`fodboldgolf-grid`}>


            <div ref={setCardRef(0)} data-index={0} className={`movie-card ${visibleCards.includes(0) ? 'visible' : ''}`}>
            <p>
                * Swedish Open 2022 jeg er i mit livs topform  <br />* har lige vundet Czeck Open og Danish
                Open i 55+  <br /> * og her kommer Vibæk og jeg KÆMPE foran efter 9 af 36 huller <br />* det
                kunne vi ikke tåle og spillede os af podiet 😂😂🤣😢 <br />* to puts fra min fod - hul 3
              </p>

              <video width="100%" height="100%" autobuffer="true" controls="true" poster="video7.PNG">
                <source src="swedishopenvideo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>



            <div ref={setCardRef(1)} data-index={1} className={`movie-card ${visibleCards.includes(1) ? 'visible' : ''}`}>
              <p>
                * Swedish Open 2022 jeg er i mit livs topform  <br />* har lige vundet Czeck Open og Danish
                Open i 55+  <br /> * og her kommer Vibæk og jeg KÆMPE foran efter 9 af 36 huller <br />* det
                kunne vi ikke tåle og spillede os af podiet 😂😂🤣😢 <br />* to puts fra min fod - hul 3
              </p>

              <video width="100%" height="100%" autobuffer="true" controls="true" poster="video8.PNG">
                <source src="swedishopenvideo2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>


            <div ref={setCardRef(2)} data-index={2} className={`movie-card ${visibleCards.includes(2) ? 'visible' : ''}`}>
              <p>
                * En af nye bedste vennerne Thomas Skov Rasmussen:<br />
                * hjælper mig med at arrangere EM i Fodboldgolf<br />
                * laver den vildeste artikel om international Fodboldgolf
              </p>
              <Link to={"https://www.facebook.com/reel/590105433887108"}>Link til en Reel med Thomas</Link>

              <img className='fg-img' src="ven.jpg" alt="" onClick={() => openLightbox(['ven.jpg'], 0)} />
            </div>



            <div ref={setCardRef(3)} data-index={3} className={`movie-card ${visibleCards.includes(3) ? 'visible' : ''}`}>
              <p>
               * Maj 2022 andet stævne, hvor jeg også deltager i 55+
              </p>
              <p>* jeg vinder Czeck Open 2022 foran Strandberg og Niedermeyer</p>
              <p>* som på samme bane i 2021 blev nr. 1 og 2 til VM i 55+</p>

              <img className='fg-img' src="czec.jpg" alt="" onClick={() => openLightbox(['czec.jpg'], 0)} />
            </div>




            <div ref={setCardRef(4)} data-index={4} className={`movie-card ${visibleCards.includes(4) ? 'visible' : ''}`}>
              <p>
               * DM 2022 i Ørsted Ørredvand, nu Ørsted Outdoor <br/>* jeg bliver nr. 4 efter at have ligget nr. 3 til 6 over alle 4 runder i single.
              </p>
              <p>* har faktisk bronzen til hul 14 i finalerunden  </p>
              <p>* men 3 putter, hvor Secher sætter 1. put</p>
              <p>* og så napper makker Secher bronzen</p>

              <img className='fg-img' src="dmorrsted2022.jpg" alt="" onClick={() => openLightbox(['dmorrsted2022.jpg'], 0)} />
            </div>


            <div ref={setCardRef(5)} data-index={5} className={`movie-card ${visibleCards.includes(5) ? 'visible' : ''}`}>
              <p>
                * Juni 2022 vinder Danish Open 55+
              </p>
              <p>* jeg er i førerbold overall søndag morgen</p>
              <p>* jeg er også i førerbold i finalerunden om eftermiddagen</p>
              <p>* Ronson og jeg får bøllebank og tyske Dennis Faber vinder suverænt</p>

              <img className='fg-img' src="danishopen2022.jpg" alt="" onClick={() => openLightbox(['danishopen2022.jpg'], 0)} />
            </div>



            <div ref={setCardRef(6)} data-index={6} className={`movie-card ${visibleCards.includes(6) ? 'visible' : ''}`}>
              <p>
               * Vintertour marts 2023 
              </p>
              <p>* jeg vinder omspillet om bronze over makker Vibæk.
             </p>
             <p>* Daniel og jeg er på et podie sammen <br/> i single for første gang nogensinde.</p>



              <img className='fg-img' src="vintertour2023.jpg" alt="" onClick={() => openLightbox(['vintertour2023.jpg'], 0)} />
            </div>

            <div ref={setCardRef(7)} data-index={7} className={`movie-card ${visibleCards.includes(7) ? 'visible' : ''}`}>
         
              <p>* Resultatet fra Vintertour marts 2023 på Odsherred Event.</p>
              <p>* det er podiet ovre til venstre, der hører sammen med denne stilling</p>
              <p>* jeg vinder omspillet om broncen mod makker Vibæk <br/> allerede på det første af tre omspilshuller</p>


              <img className='fg-img' src="vintertour2023-resultat.jpg" alt="" onClick={() => openLightbox(['vintertour2023-resultat.jpg'], 0)} />
            </div>


            <div ref={setCardRef(8)} data-index={8} className={`movie-card ${visibleCards.includes(8) ? 'visible' : ''}`}>
              <p>* Ørsted outdoor </p>
              <p>* det skønneste sted</p>
              <p>* ørredsøer og hytter</p>
              <p>* vi er med i Team Ørsted</p>
              <p>* baneejeren Iben og Allan vil os og vores sport helt vildt</p>
              <Link to={"https://www.facebook.com/lars.ohlen.9/posts/pfbid02zjsTWtdqYKhSew6ryrUjwyVvAc5GND3ho3XYUEKULaEgFGYypU9irEWNg1aEtRJ4l?rdid=qfmmx32NNGgoifEP#"}>
                <img className='fg-img' src="fodboldcamp.jpg" alt="" onClick={() => openLightbox(['fodboldcamp.jpg'], 0)} />
              </Link>

            </div>



            <div ref={setCardRef(9)} data-index={9} className={`movie-card ${visibleCards.includes(9) ? 'visible' : ''}`}>
              <p>* Træning af de lange spark </p>
              <p>* Ølstykke Fodboldpark</p>
              <p>* en morgen kl. 8 med musik i ørerne</p>
              <p>* 3 bolde GULD - RØD - BRONCE</p>
              <p>* 1 times træning med sved på banen</p>
              <Link to={"https://www.facebook.com/lars.ohlen.9/posts/pfbid0wzkcEptNLUMxTUuxoPhHgdobg7zPuQ5TKYKDHtjDGhgUA1E3X6pvFYDPHJZbvCE2l?rdid=VjHbV4FBJK3DdrHc#"}>
                <img className='fg-img' src="sparke.jpg" alt="" />
              </Link>
            </div>

            <div ref={setCardRef(10)} data-index={10} className={`movie-card ${visibleCards.includes(10) ? 'visible' : ''}`}>
              <p>* HIO (Hole In One) 🏆<br />
                * Fodboldgolf FÆNGSLET Horsens ⚽️⛳️🕳<br />
                * stærk sidevind 🌬
              </p>
              <Link to={"https://www.facebook.com/reel/1293610341722231?rdid=TQ9nv2PMkyOGUYxE&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2Fr%2F1CRTxkKSeW%2F#"}>
                <img className='fg-img' src="hoi.jpg" alt="" />
              </Link>
            </div>


            <div ref={setCardRef(10)} data-index={10} className={`movie-card ${visibleCards.includes(10) ? 'visible' : ''}`}>
              <p>* Slovakiet open 2025
              </p>
              <p>* se videoen! (klik på billedet)</p>
              <p>*  jeg er GRUMPHY OLD MAN 😡</p>
          
              <Link to={"https://www.facebook.com/story.php?story_fbid=23991878600447903&id=100001572951936&mibextid=wwXIfr&rdid=EEVU0anFl7ndswxu#"}>
                <img className='fg-img' src="grumpyoldman.jpg" alt="" />
              </Link>
            </div>
            <div ref={setCardRef(10)} data-index={10} className={`movie-card ${visibleCards.includes(10) ? 'visible' : ''}`}>¨
              <p>* Youx Loves Fotballgolf</p>
              <p>* jeg vinder French Open 2024 overall</p>
              <p>* vinder med 12 skud til nummer 2</p>
              <p>* største sejr i international fodboldgolf i 6 år</p>
              <p>* det er min største sejr i fodboldgolf</p>
              <p>* og ligger på højde med at løbe CPH Maraton under 3 timer </p>
              <p>* større end at vinde VM i 55 + og mine mange doublesejre</p>
              <p>* Lecoqsportif er nu tatoveret på min arm</p>
              <Link to={"https://www.facebook.com/lars.ohlen.9/posts/pfbid0c38D5K4DnCfkGu9mHDvQsxoPSnoPq9D5PZSYjx4yS9yxdRiSH1gWavu8EeP5djfel?rdid=wAe6qfyiaYKZD4n8#"}>
                <img className='fg-img' src="cock.jpg" alt="" />
              </Link>
            </div>
            <div ref={setCardRef(10)} data-index={10} className={`movie-card ${visibleCards.includes(10) ? 'visible' : ''}`}>
              <p>* Fitness hos Fyssen for at styrke hele kroppen til ⚽️⛳️🕳</p>
              <p>* trænet 3 gange om ugen siden midt oktober</p>
              <p>* medmindre jeg er ude til turnering</p>
              <p>*et er kedeligt, men føles samtidigt godt 🏋️‍♂️</p>
              <p>* og kroppen er bare ekstremt meget bedre</p>
              <p>* jeg har tabt 18 kilo på 4 mdr, da jeg laver denne træning</p>

              <Link to={"https://www.facebook.com/lars.ohlen.9/posts/pfbid034jPudK2wr4fmbmQ5N2u7qKR1WkDq9HQusk867jZCMX5Cpkwc2dWR97ucDaAeZQ4Al?rdid=uWPi7BCN09ACI4nC#"}>
                <img className='fg-img' src="træner.jpg" alt="" />
              </Link>
            </div>




            <div ref={setCardRef(10)} data-index={10} className={`movie-card ${visibleCards.includes(10) ? 'visible' : ''}`}>
              <p>* Nordjyske Fodboldgolf</p>

              <p>* Niels Vendelboe har altid bakket vores sport op </p>
              <p>* Niels har afholdt massevis af Nordjyske Opens</p>

              <p>* samt DM og været tæt på at afholde Danish Open 2022</p>
              <p>* Nordjysk Fodboldgolf har fået Danish open 2026</p>
              <p>* jeg er ansvarlig for Danish open sammen med Niels</p>
              <p>* Niels er god mand, har e fantastisk anlæg og 2 fede baner</p>

            <Link to={"https://nordjyskfodboldgolf.dk"} >
                nordjyskfodboldgolf.dk
              </Link>


              <Link to={"https://www.facebook.com/lars.ohlen.9/posts/pfbid0TBBXbZGpsdVFQY4FpY3vJTyKrCaSzXL99RbQxHhZFCpmA7DDGXBexudZy1Hej5QHl?rdid=6KlKxH2Zhh1QUqib#"}>
                <img className='fg-img' src="nordjysk-logo.jpg" alt="" />
              </Link>
            </div>

            <div ref={setCardRef(10)} data-index={10} className={`movie-card ${visibleCards.includes(10) ? 'visible' : ''}`}>

              <p>* Hegnsholt Fodboldgolf</p>
              <p>* top 10 anlæg i DK</p>
              <p>* der er bygget af genbrugsmaterialer </p>
              <p>* i forhold til udgift pr. hul DK’s bedste anlæg</p>
              <p>* udfordrende bane, hvor alle skud og dit hoved skal i spil</p>
              <p>* baneejer Jonas Ravn er en af mine sponsorer</p>

              <Link to={ "https://www.facebook.com/p/Hegnsholt-Fodboldgolf-61567089463610/"}>Link til hans facebook</Link>


              <Link to={"https://www.facebook.com/lars.ohlen.9/posts/pfbid02zXnVScsWhHJCD4zfTeN4e4ovDfUTnKf7CA5AbqSYHqNXak1TQXNN94EtdiwVHUbml?rdid=1FocHNAXSnzKCx1c#"}>
                <img className='fg-img' src="jonas.jpg
              " alt="" />
              </Link>
            </div>

            {/* ///////////////////////////// */}

            <div ref={setCardRef(10)} data-index={10} className={`movie-card ${visibleCards.includes(10) ? 'visible' : ''}`}>
              <p>* Viceeuropamestre i mixdouble 2024 sammen med Dunja</p>
              <p>* Dunja og jeg tager EM-sølv i mix-double</p>
              <p>* Dunja spiller det bedste fodboldgolf jeg nogensinde har set</p>
              <p>* sætter alle pots i umulige og mulige vinkler</p>

              <p>* Ronnie's kommentar: "I spillede det bedste spil, jeg nogensinde<br/>har set oppe i den svenske skov” ⚽️⛳️🕳🥈🥈🏆🇩🇰</p>


              <Link to={"https://www.facebook.com/lars.ohlen.9/posts/pfbid02bLprnYJKd1KLYyj7qz4bVYgy5QTcxJvZ1BRsxgetY1ceLE9TtLGMC1sWYJi63fYBl?rdid=eYovtN6p8K3dERPb#"}>
                <img className='fg-img' src="mix.jpg
              " alt="" />
              </Link>
            </div>

            {/* ///////////////////////////// */}

            <div ref={setCardRef(10)} data-index={10} className={`movie-card ${visibleCards.includes(10) ? 'visible' : ''}`}>
              <p>* Danish-open vinder i double i 2024 med Bo🥇🥇🏆</p>
              <p>* og sikke en dejlig weekend med skønne gæster herhjemme🙏 </p>

              <p>
                * Andrea, Cédric et Arnaud alias Arnold Schwarzenegger 💪🏻</p>
              <p>
                * jeg spiller bedste søndag af alle med minus 38😊🤩🥳 </p>
                <p>*  merci 🙏</p>


              <Link to={"https://www.facebook.com/lars.ohlen.9/posts/pfbid027Ac6VpSoVoNeQAckDbuNuLCWCWrrJmVjCEy1NjmFiQYwVwuVL7w4LCqu99BFDC7Tl?rdid=P3wSkfwMDNMvQ9V3#"}>
                <img className='fg-img' src="danish-open24.jpg
              " alt="" />
              </Link>
            </div>
            {/* ///////////////////////////// */}

            <div ref={setCardRef(10)} data-index={10} className={`movie-card ${visibleCards.includes(10) ? 'visible' : ''}`}>
              <p>* French-open 2024🍾</p>
              <p>* 🎤📹 Lars Ohlen  had participated in the inauguration of <br/> the field a few months before the
                French Open 2023<br/>* and took great pleasure in returning to this field, that he loves 🥰</p>


              <Link to={"https://www.facebook.com/auvergnefootgolf/posts/2707477136090603?rdid=y0sioWaSqO5HhZiz#"}>
                <img className='fg-img' src="french-open24.png
              " alt="" />
              </Link>
            </div>

            {/* ///////////////////////////// */}

            <div ref={setCardRef(10)} data-index={10} className={`movie-card ${visibleCards.includes(10) ? 'visible' : ''}`}>
              <p>* Danmarks-mesterskab bronze i double 2024🍾</p>

              <p>* jeg sætter det afgørende put over 10 meter</p>
              <p>  * bolden går i vand, hvis jeg brænder</p>
              <p>  * det var FEDT ⚽️⛳️🕳</p>


              <Link to={"https://www.facebook.com/danskfodboldgolfforening/posts/pfbid0ZwMbFLXWeYgrnqSu4Davi3gu9V9hAourMPqstxbZMXHs1j6dYQi5X528ytB3GW3Sl?rdid=GMG10n8odNZFNTwL#"}>
                <img className='fg-img' src="dm-bronze.jpg
              " alt="" />
              </Link>
            </div>
            {/* ///////////////////////////// */}

            <div ref={setCardRef(10)} data-index={10} className={`movie-card ${visibleCards.includes(10) ? 'visible' : ''}`}>
              <p>* Ranglisten 2023:</p>
              <p>* nummer 3 og nummer 5 den her sæson med min søn⚽️⛳️🕳</p>
              <p>* Daniel bliver nr. 3 på årets rangliste 2023</p>
              <p>* makker Bo bliver nr. 4</p>
              <p>  * jeg bliver nr. 5</p>
              <p>   * det kan noget ⚽️⛳️🕳</p>


              <Link to={"https://www.facebook.com/Aber2750/posts/pfbid02SfuvyFkAUeUg67WV5nwPHWfSetzJdHTusUEzbcQjzAxtXk65JfGqhzMb9746wsbBl?rdid=MJtL7YgUILeYhEN6#"}>
                <img className='fg-img' src="daniel-3.jpg
              " alt="" />
              </Link>
            </div>
            {/* ///////////////////////////// */}

            <div ref={setCardRef(10)} data-index={10} className={`movie-card ${visibleCards.includes(10) ? 'visible' : ''}`}>
              <p>* Sæson 2023:</p>
              <p>* i går sluttede sæsonen, der blev ved med at gi´ {"⚽️⛳️🕳️"}💪🏻🏆</p>
              <p>* verdensmester i 55+</p>
              <p>* så mange skønne venskaber</p>
              <p>* i Danmark og Europa, tak hver og en😊</p>
              <p>  * masser af skønne ture❤️</p>
              <p>   * hele 13 podier alt inkl 😃</p>
              <p>     * DM sølv i double 🥈🥈</p>
              <p>  * og meget meget mere - glæder mig til 2024{"⚽️⛳️🕳️"}</p>
              <p>  * glædelig jul og godt nytår 🎅🏻🎆😉</p>


              <Link to={"https://www.facebook.com/lars.ohlen.9/posts/pfbid0252DS3kAQF9cF5oP6rRHwBPaFpcPZTWw9u7FR9cqFhwiJsGV7CCqLfDh2FCUXY3p1l?rdid=VELnxJSANRMNYWZ4#"}>
                <img className='fg-img' src="seasonend.jpg
              " alt="" />
              </Link>
            </div>

            {/* ///////////////////////////// */}

            <div ref={setCardRef(10)} data-index={10} className={`movie-card ${visibleCards.includes(10) ? 'visible' : ''}`}>
              <p>* DM sølv i herredouble med Secher 2023🥈🥈</p>

              <p>
                * 1 skud fra omspil om GULD</p>
              <p>* til gengæld vinder vi så sølvet efter 6 hullers omspil !</p>

              <p>   * det kan noget ⚽️⛳️🕳</p>
              <Link to={"https://www.facebook.com/lars.ohlen.9/posts/pfbid0ZP92knX6ctHTZzcnHPFpGk6fDkcpVTsF39jvFwXJgfrcLptmi3z6vKnt95DG7qT3l?rdid=rnoR0rlKfaOfNAgG#"}>
                <img className='fg-img' src="dmsølv.jpg
              " alt="" />
              </Link>
            </div>

            {/* ///////////////////////////// */}

            <div ref={setCardRef(10)} data-index={10} className={`movie-card ${visibleCards.includes(10) ? 'visible' : ''}`}>
              <p>* Vinder af Spanish open i herredouble med Secher 2021</p>
              <p>* anden double sejr i Spanish Open🏆</p>
              <p>* sejrslisten i spanien er ved opdatering af hjemmesiden</p>
              <p>* 2 x doublesejr + 1 x bronze</p>
              <p>* GRUMPHY 1 GULD, 2 x SØLV og 1 BRONZE</p>
              <p>* hele 7 podier i alt kun overgået af min medaljehøst i Youx </p>
         



              <Link to={"https://www.facebook.com/lars.ohlen.9/posts/pfbid0ZP92knX6ctHTZzcnHPFpGk6fDkcpVTsF39jvFwXJgfrcLptmi3z6vKnt95DG7qT3l?rdid=rnoR0rlKfaOfNAgG#"}>
                <img className='fg-img' src="spanishopenvinder.jpg
              " alt="" />
              </Link>
            </div>
            {/* ///////////////////////////// */}

            <div ref={setCardRef(10)} data-index={10} className={`movie-card ${visibleCards.includes(10) ? 'visible' : ''}`}>
              <p>* LAS PÅ PODIET ⚽️⛳️🕳</p>
              <p>* min karrieres første single podie</p>
              <p>   * og nu har jeg stået der 26 gange i single</p>
              <p>     * Vintertour hulspil i Skejby 2021</p>
              <p>   * faktisk tæt på at vinde</p>
              <p>   * jeg var dog mæt af at komme i 3-mandsfinalen</p>
              <p> * og derved alt for tilfreds med mit første podie</p>



              <Link to={"https://www.facebook.com/lars.ohlen.9/posts/pfbid021fiFGnynpWMxkJNWsFPsAmeuvmQTDCtw3uyBNK6RdBok8yd5cJJPETrTkjUCcbiZl?rdid=E7iK8l4NSwUivLvw#"}>
                <img className='fg-img' src="podie.jpg
              " alt="" />
              </Link>
            </div>


            {/* ///////////////////////////// */}

            <div ref={setCardRef(10)} data-index={10} className={`movie-card ${visibleCards.includes(10) ? 'visible' : ''}`}>
              <p>* Youx i Frankrig ⚽️⛳️🕳</p>
              <p>* Youx, Frankrig - Youx Love Footballgolf ❤️</p>

<p>* jeg elsker at spille i Youx</p>
<p>* og er den eneste udlænding, der har spillet:</p>
<p>* åbning af banen i 2022</p>
<p>* French Open 2023 + 2024 + 2025</p>
<p>* jeg har 5 x GULD i Youx</p>
<p>* vandt overall i 2024</p>
<p>* største internationale sejr i 6 år</p>
<p>* der var 12 skud ned til nummer 2</p>

              <Link to={"https://www.facebook.com/cedric.caruana.9/posts/pfbid02drQvWLiKHh44Xr7JhDJo6m3Z5ZzwbpsX8Y95rspJ3sGw5RhxvWsZYydHo577t9ZHl?rdid=aNC6Bb9vsQMkQmHl#"}>
                <img className='fg-img' src="youx.jpg
              " alt="" />
              </Link>
            </div>
            {/* ///////////////////////////// */}

            <div ref={setCardRef(10)} data-index={10} className={`movie-card ${visibleCards.includes(10) ? 'visible' : ''}`}>
              <p>* Sejr i Nordjyske Mesterskaber ⚽️⛳️🕳</p>
              <p>* afdeling 2 i Sørå Vendsyssel</p>
              <p>* Vibæk og jeg går ud i samme score i finalerunden</p>
              <p>* de to andre er 2 skud bagved os også med samme score</p>
              <p>* jeg kommer bagud med 4 på de første 3 huller</p>
              <p>* henter Vibæk omkring hul 9 og ser mig aldrig tilbage</p>
              <p>* vigtigst af ALT, det er ekstremt hyggeligt at gå med Nordjyderne</p>
              <p>* tak til Jysk Lokal Forsikring og Select for at sponsorer 2/3 af præmierne til de 5 afdelinger i Nordjylland</p>

              <Link to={"https://www.facebook.com/NordjyskFodboldgolf/posts/pfbid0zZRb67jPtj1inkarnUA2ivYLQCtXUf1CW5j5emvXTdN78juoHpT81JHc2VtWDKLUl?rdid=ycosS07qO0o3fahZ#"}>
                <img className='fg-img' src="rødjakke.jpg
              " alt="" />
              </Link>
            </div>
            <div ref={setCardRef(10)} data-index={10} className={`movie-card ${visibleCards.includes(10) ? 'visible' : ''}`}>

<p>* Mere fra afdeling 2 i Sørå Vendsyssel</p>
              <Link to={"https://www.facebook.com/NordjyskFodboldgolf/posts/pfbid0zZRb67jPtj1inkarnUA2ivYLQCtXUf1CW5j5emvXTdN78juoHpT81JHc2VtWDKLUl?rdid=7rtQnbjn6JnGLtub#"}>
                <img className='fg-img' src="bænk.jpg
              " alt="" />
              </Link>
            </div>






          </div>


        </article>
        <Footer />
        <Lightbox images={lightboxImages} isOpen={isLightboxOpen} onClose={closeLightbox} />
      </div></>
  );
}
