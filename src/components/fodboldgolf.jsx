

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
            • Verdensmester i 55+<br />
            • 44 podier🏆<br />
            • 🥇20 stk. 🥈9 stk. 🥉15 stk.<br />
            • Vigtigste titler:<br />
            • 🏆Verdensmester i single i 55 + i 2023<br />
            • 🇫🇷 Frankrig Open i single overall i 2024<br />
            • Vandt med 12 skud - største internationale sejr i 6 år!<br />
            • 🇪🇸 Spanien Open i herredouble i 2018 og 2021<br />
            • 🇫🇮 Finland Open i herredouble i 2019<br />
            • 🇩🇰 Danish Open i herredouble 2024<br />
            • Jeg har spillet præcis 100 baner med 18 huller, som vil frigiver dene hjememside lige nu<br />
            • Jeg har måske spillet aller flest baner af alle i hele verden ifølge de ”erfarne”<br />
            • Verdensrangliste højdepunkter:<br />
            • 55+ nummer 1 i verden<br />
            • Herredouble nummer 2 i verden<br />
            • Herresingle nummer 7 i verden<br />
            • Alias udover LAS<br />
            • THE GRUMPHY OLD MAN😡<br />
            • alias WORLD CHAMPION 55+<br />
            • Old Boys Football golf ⚽️⛳️🕳️<br />
            • Lars OHLEN⚽️⛳️🕳️
          </p>

          <p>

            * Jeg har spillet 100 baner i alt med 18 huller ⚽️⛳️🕳<br />
            * sandsynligvis den i verden, der har spillet allerflest ⚽️⛳️🕳
          </p>




          {/* <hr className="divider" /> */}




          <div className={`fodboldgolf-grid`}>


            <div ref={setCardRef(0)} data-index={0} className={`movie-card ${visibleCards.includes(0) ? 'visible' : ''}`}>
              <p>
                *Swedish Open 2022 jeg er i mit livs topform, har lige vundet Czeck Open og Danish <br />
                Open i 55+ og her kommer Vibæk og jeg KÆMPE foran efter 9 af 36 huller. Det<br />
                kunne vi ikke tåle og spillede os af podiet 😂😂🤣😢. To puts fra min fod - hul 1
              </p>

              <video controls width="500">
                <source src="swedishopenvideo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>



            <div ref={setCardRef(1)} data-index={1} className={`movie-card ${visibleCards.includes(1) ? 'visible' : ''}`}>
              <p>
                *Swedish Open 2022 jeg er i mit livs topform, har lige vundet Czeck Open og Danish <br />
                Open i 55+ og her kommer Vibæk og jeg KÆMPE foran efter 9 af 36 huller. Det<br />
                kunne vi ikke tåle og spillede os af podiet 😂😂🤣😢. To puts fra min fod - hul 3
              </p>

              <video controls width="500">
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
                Maj 2022 andet stævne, hvor jeg også deltager i 55+.
              </p>
              <p>Jeg vinder Czeck Open 2022 foran Strandberg og Niedermeyer,</p>
              <p> som på samme bane i 2021 blev nr. 1 og 2 til VM i 55+</p>

              <img className='fg-img' src="czec.jpg" alt="" onClick={() => openLightbox(['czec.jpg'], 0)} />
            </div>




            <div ref={setCardRef(4)} data-index={4} className={`movie-card ${visibleCards.includes(4) ? 'visible' : ''}`}>
              <p>
                DM 2022 i Ørsted Ørredvand, nu Ørsted Outdoor. Jeg bliver nr. 4 efter at have ligget
              </p>
              <p>nr. 3 til 6 over alle 4 runder i single. Har faktisk bronzen til hul 14 i finalerunden, men </p>
              <p> 3 putter, hvor Secher sætter 1. put og så napper makker Secher bronzen</p>

              <img className='fg-img' src="dmorrsted2022.jpg" alt="" onClick={() => openLightbox(['dmorrsted2022.jpg'], 0)} />
            </div>


            <div ref={setCardRef(5)} data-index={5} className={`movie-card ${visibleCards.includes(5) ? 'visible' : ''}`}>
              <p>
                Juni 2022 vinder Danish Open 55+
              </p>

              <img className='fg-img' src="danishopen2022.jpg" alt="" onClick={() => openLightbox(['danishopen2022.jpg'], 0)} />
            </div>



            <div ref={setCardRef(6)} data-index={6} className={`movie-card ${visibleCards.includes(6) ? 'visible' : ''}`}>
              <p>
                Vintertour marts 2023 jeg vinder omspillet om bronze over makker Vibæk.
                Daniel og jeg er på et podie sammen i single for første gang nogensinde.
              </p>



              <img className='fg-img' src="vintertour2023.jpg" alt="" onClick={() => openLightbox(['vintertour2023.jpg'], 0)} />
            </div>

            <div ref={setCardRef(7)} data-index={7} className={`movie-card ${visibleCards.includes(7) ? 'visible' : ''}`}>
              <p>
                Resultat fra Vintertour marts 2023:
              </p>
              <p>Resultatet fra Vintertour marts 2023 på Odsherred Event.</p>
              <p>Det er podiet ovre til venstre, der hører sammen med denne</p>
              <p>Jeg vinder omspillet om broncen mod makker Vibæk allerede på det første af tre omspilshuller</p>


              <img className='fg-img' src="vintertour2023-resultat.jpg" alt="" onClick={() => openLightbox(['vintertour2023-resultat.jpg'], 0)} />
            </div>


            <div ref={setCardRef(8)} data-index={8} className={`movie-card ${visibleCards.includes(8) ? 'visible' : ''}`}>
              <p>* Ørsted outdoor </p>
              <p>* Det skønneste sted</p>
              <p>* Ørredsøer og hytter</p>
              <p>* Vi er med i Team Ørsted</p>
              <p>* Baneejeren Iben og Allan vil os og vores sport helt vildt</p>
              <Link to={"https://www.facebook.com/lars.ohlen.9/posts/pfbid02zjsTWtdqYKhSew6ryrUjwyVvAc5GND3ho3XYUEKULaEgFGYypU9irEWNg1aEtRJ4l?rdid=qfmmx32NNGgoifEP#"}>
                <img className='fg-img' src="fodboldcamp.jpg" alt="" onClick={() => openLightbox(['fodboldcamp.jpg'], 0)} />
              </Link>

            </div>



            <div ref={setCardRef(9)} data-index={9} className={`movie-card ${visibleCards.includes(9) ? 'visible' : ''}`}>
              <p>* Træning af de lange spark </p>
              <p>* Ølstykke Fodboldpark</p>
              <p>* En morgen kl. 8 med musik i ørerne</p>
              <p>* 3 bolde GULD - RØD - BRONCE</p>
              <p>* 1 times træning med sved på banenff</p>
              <Link to={"https://www.facebook.com/lars.ohlen.9/posts/pfbid0wzkcEptNLUMxTUuxoPhHgdobg7zPuQ5TKYKDHtjDGhgUA1E3X6pvFYDPHJZbvCE2l?rdid=VjHbV4FBJK3DdrHc#"}>
                <img className='fg-img' src="sparke.jpg" alt="" />
              </Link>
            </div>

            <div ref={setCardRef(10)} data-index={10} className={`movie-card ${visibleCards.includes(10) ? 'visible' : ''}`}>
              <p>* HIO (Hole In One) 🏆<br />
                * Fodboldgolf FÆNGSLET Horsens ⚽️⛳️🕳<br />
                * Stærk sidevind 🌬
              </p>
              <Link to={"https://www.facebook.com/reel/1293610341722231?rdid=TQ9nv2PMkyOGUYxE&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2Fr%2F1CRTxkKSeW%2F#"}>
                <img className='fg-img' src="hoi.jpg" alt="" />
              </Link>
            </div>


            <div ref={setCardRef(10)} data-index={10} className={`movie-card ${visibleCards.includes(10) ? 'visible' : ''}`}>
              <p>Slovakiet open 2025.
                Jeg er GRUMPHY OLD MAN 😡
              </p>
              <Link to={"https://www.facebook.com/story.php?story_fbid=23991878600447903&id=100001572951936&mibextid=wwXIfr&rdid=EEVU0anFl7ndswxu#"}>
                <img className='fg-img' src="grumpyoldman.jpg" alt="" />
              </Link>
            </div>
            <div ref={setCardRef(10)} data-index={10} className={`movie-card ${visibleCards.includes(10) ? 'visible' : ''}`}>¨
              <p>Youx Loves Fotballgolf</p>
              <p>* jeg vinder French Open 2024 overall</p>
              <p>* vinder med 12 skud til nummer 2</p>
              <p>* største sejr i international fodboldgolf i 6 år</p>
              <p>* det er min største sejr sammen med CPH Maraton under 3 timer</p>
              <p>* større end at vinde VM i 55 + og mine mange doublesejre</p>
              <p>* Lecoqsportif er nu tatoveret på min arm</p>
              <Link to={"https://www.facebook.com/lars.ohlen.9/posts/pfbid0c38D5K4DnCfkGu9mHDvQsxoPSnoPq9D5PZSYjx4yS9yxdRiSH1gWavu8EeP5djfel?rdid=wAe6qfyiaYKZD4n8#"}>
                <img className='fg-img' src="cock.jpg" alt="" />
              </Link>
            </div>
            <div ref={setCardRef(10)} data-index={10} className={`movie-card ${visibleCards.includes(10) ? 'visible' : ''}`}>
              <p>* Fitness hos Fyssen for at styrke hele kroppen til ⚽️⛳️🕳</p>
              <p>* Trænet 3 gange om ugen siden midt oktober</p>
              <p>* Medmindre jeg er ude til turnering</p>
              <p>* Det er kedeligt, men føles samtidigt godt 🏋️‍♂️</p>
              <p>* og kroppen er bare ekstremt meget bedre</p>
              <p>* jeg har tabt 18 kilo på 4 mdr, da jeg laver denne træning</p>

              <Link to={"https://www.facebook.com/lars.ohlen.9/posts/pfbid034jPudK2wr4fmbmQ5N2u7qKR1WkDq9HQusk867jZCMX5Cpkwc2dWR97ucDaAeZQ4Al?rdid=uWPi7BCN09ACI4nC#"}>
                <img className='fg-img' src="træner.jpg" alt="" />
              </Link>
            </div>




            <div ref={setCardRef(10)} data-index={10} className={`movie-card ${visibleCards.includes(10) ? 'visible' : ''}`}>
              <p>Nordjyske Fodboldgolf</p>

              <p>* Niels Vendelboe har altid bakket vores sport op </p>
              <p>* Afholdt massevis af Nordjyske Opens</p>

              <p>* DM og været tæt på at afholde Danish Open 2022</p>
              <p>* Nordjysk Fodboldgolf har fået Danish open 2026</p>
              <p>* Jeg er ansvarlig for Danish open sammen med Niels</p>
              <p>* Støttet op om DFGU, da vi havde en baneejer-union</p>
              <p>* God mand, fantastisk anlæg og 2 fede baner</p>

              <Link to={"https://nordjyskfodboldgolf.dk/"} >





                https://nordjyskfodboldgolf.dk/
              </Link><Link to={"https://nordjyskfodboldgolf.dk"} >
                nordjyskfodboldgolf.dk
              </Link>


              <Link to={"https://www.facebook.com/lars.ohlen.9/posts/pfbid0TBBXbZGpsdVFQY4FpY3vJTyKrCaSzXL99RbQxHhZFCpmA7DDGXBexudZy1Hej5QHl?rdid=6KlKxH2Zhh1QUqib#"}>
                <img className='fg-img' src="nordjysk-logo.jpg" alt="" />
              </Link>
            </div>

            <div ref={setCardRef(10)} data-index={10} className={`movie-card ${visibleCards.includes(10) ? 'visible' : ''}`}>

              <p>Hegnsholt Fodboldgolf</p>
              <p>* Top 10 anlæg i DK</p>
              <p>* Bygget af genbrugsmaterialer </p>
              <p>* I forhold til udgift pr. hul DK’s bedste anlæg</p>
              <p>* Udfordrende bane, hvor alle skud og dit hoved skal i spil</p>
              <p>* Baneejer Jonas Ravn er en af mine sponsorer</p>




              <Link to={"https://www.facebook.com/lars.ohlen.9/posts/pfbid02zXnVScsWhHJCD4zfTeN4e4ovDfUTnKf7CA5AbqSYHqNXak1TQXNN94EtdiwVHUbml?rdid=1FocHNAXSnzKCx1c#"}>
                <img className='fg-img' src="jonas.jpg
              " alt="" />
              </Link>
            </div>

            {/* ///////////////////////////// */}

            <div ref={setCardRef(10)} data-index={10} className={`movie-card ${visibleCards.includes(10) ? 'visible' : ''}`}>
              <p>Viceeuropamestre i mixdouble 2024 sammen med Dunja</p>
              <p>* Dunja og jeg tager EM-sølv i mix-double</p>
              <p>  * Dunja spiller det bedste fodboldgolf jeg nogensinde har set</p>
              <p>* Sætter alle pots i umulige og mulige vinkler</p>

              <p>  * Ronnie's kommentar: "I spillede det bedste spil, jeg nogensinde har set oppe i den svenske skov” ⚽️⛳️🕳🥈🥈🏆🇩🇰</p>


              <Link to={"https://www.facebook.com/lars.ohlen.9/posts/pfbid02bLprnYJKd1KLYyj7qz4bVYgy5QTcxJvZ1BRsxgetY1ceLE9TtLGMC1sWYJi63fYBl?rdid=eYovtN6p8K3dERPb#"}>
                <img className='fg-img' src="mix.jpg
              " alt="" />
              </Link>
            </div>

            {/* ///////////////////////////// */}

            <div ref={setCardRef(10)} data-index={10} className={`movie-card ${visibleCards.includes(10) ? 'visible' : ''}`}>
              <p>Danish-open vindere i double i 2024 med Bo🥇🥇🏆</p>
              <p>og sikke en dejlig weekend med skønne gæster herhjemme </p>

              <p>
                Andrea, Cédric et Arnaud alias Arnold Schwarzenegger 💪🏻</p>
              <p>
                Jeg spiller bedste søndag af alle med minus 38😊🤩🥳 merci 🇫🇷🇩🇰</p>


              <Link to={"https://www.facebook.com/lars.ohlen.9/posts/pfbid027Ac6VpSoVoNeQAckDbuNuLCWCWrrJmVjCEy1NjmFiQYwVwuVL7w4LCqu99BFDC7Tl?rdid=P3wSkfwMDNMvQ9V3#"}>
                <img className='fg-img' src="danish-open24.jpg
              " alt="" />
              </Link>
            </div>
            {/* ///////////////////////////// */}

            <div ref={setCardRef(10)} data-index={10} className={`movie-card ${visibleCards.includes(10) ? 'visible' : ''}`}>
              <p>French-open 2024🍾</p>
              <p>🎤📹 Lars Ohlen 🇩🇰 had participated in the inauguration of the field a few months before the
                French Open 2023 and took great pleasure in returning to this field that he loves 🥰</p>


              <Link to={"https://www.facebook.com/auvergnefootgolf/posts/2707477136090603?rdid=y0sioWaSqO5HhZiz#"}>
                <img className='fg-img' src="french-open24.png
              " alt="" />
              </Link>
            </div>

            {/* ///////////////////////////// */}

            <div ref={setCardRef(10)} data-index={10} className={`movie-card ${visibleCards.includes(10) ? 'visible' : ''}`}>
              <p>Danmarks-mesterskab bronze i double 2024🍾</p>

              <p>* Jeg sætter det afgørende put over 10 meter</p>
              <p>  * Bolden går i vand, hvis jeg brænder</p>
              <p>  * Det var FEDT ⚽️⛳️🕳</p>


              <Link to={"https://www.facebook.com/danskfodboldgolfforening/posts/pfbid0ZwMbFLXWeYgrnqSu4Davi3gu9V9hAourMPqstxbZMXHs1j6dYQi5X528ytB3GW3Sl?rdid=GMG10n8odNZFNTwL#"}>
                <img className='fg-img' src="dm-bronze.jpg
              " alt="" />
              </Link>
            </div>
            {/* ///////////////////////////// */}

            <div ref={setCardRef(10)} data-index={10} className={`movie-card ${visibleCards.includes(10) ? 'visible' : ''}`}>
              <p>Ranglisten 2023:</p>
              <p>Nummer 3 og nummer 5 den her sæson med min søn⚽️⛳️🕳</p>
              <p>* Daniel bliver nr. 3 på årets rangliste 2023</p>
              <p>* Makker Bo bliver nr. 4</p>
              <p>  * Jeg bliver nr. 5</p>
              <p>   * Det kan noget ⚽️⛳️🕳</p>


              <Link to={"https://www.facebook.com/Aber2750/posts/pfbid02SfuvyFkAUeUg67WV5nwPHWfSetzJdHTusUEzbcQjzAxtXk65JfGqhzMb9746wsbBl?rdid=MJtL7YgUILeYhEN6#"}>
                <img className='fg-img' src="daniel-3.jpg
              " alt="" />
              </Link>
            </div>
            {/* ///////////////////////////// */}

            <div ref={setCardRef(10)} data-index={10} className={`movie-card ${visibleCards.includes(10) ? 'visible' : ''}`}>
              <p>Sæson 2023:</p>
              <p>I går sluttede sæsonen, der blev ved med at gi{"⚽️⛳️🕳️"}💪🏻🏆</p>
              <p>* Verdensmester i 55+</p>
              <p>* Så mange skønne venskaber</p>
              <p>  i 🇩🇰 og Europa, tak hver og en😊</p>
              <p>  * Masser af skønne ture❤️</p>
              <p>   * Hele 13 podier alt inkl 😃</p>
              <p>     * DM sølv i double 🥈🥈🇩🇰</p>
              <p>  og meget meget mere - glæder mig til 2024{"⚽️⛳️🕳️"}</p>
              <p>  Glædelig jul og godt nytår 🎅🏻🎆😉</p>


              <Link to={"https://www.facebook.com/lars.ohlen.9/posts/pfbid0252DS3kAQF9cF5oP6rRHwBPaFpcPZTWw9u7FR9cqFhwiJsGV7CCqLfDh2FCUXY3p1l?rdid=VELnxJSANRMNYWZ4#"}>
                <img className='fg-img' src="seasonend.jpg
              " alt="" />
              </Link>
            </div>

            {/* ///////////////////////////// */}

            <div ref={setCardRef(10)} data-index={10} className={`movie-card ${visibleCards.includes(10) ? 'visible' : ''}`}>
              <p>DM sølv i herredouble med Secher 2023🥈🥈</p>

              <p>
                * 1 skud fra omspil om GULD</p>
              <p>* Til gengæld vinder vi så sølvet efter 6 hullers omspil !</p>


              <Link to={"https://www.facebook.com/lars.ohlen.9/posts/pfbid0ZP92knX6ctHTZzcnHPFpGk6fDkcpVTsF39jvFwXJgfrcLptmi3z6vKnt95DG7qT3l?rdid=rnoR0rlKfaOfNAgG#"}>
                <img className='fg-img' src="dmsølv.jpg
              " alt="" />
              </Link>
            </div>

            {/* ///////////////////////////// */}

            <div ref={setCardRef(10)} data-index={10} className={`movie-card ${visibleCards.includes(10) ? 'visible' : ''}`}>
              <p>Vinder af Spanish open i herredouble med Secher 2021</p>
              <p>Anden double sejr i Spanish Open🏆</p>
              <p>* Sejrslisten i spanien er ved opdatering af hjemmesiden</p>
              <p>* 2 x doublesejr + 1 x bronze</p>
              <p>* GRUMPHY 1 GULD, 2 x SØLV og 1 BRONZE</p>
              <p>* Hele 7 podier i alt kun overgået Frankrig </p>
              <p>* Spanien er det sted, hvor jeg har været på næstflest podier </p>



              <Link to={"https://www.facebook.com/lars.ohlen.9/posts/pfbid0ZP92knX6ctHTZzcnHPFpGk6fDkcpVTsF39jvFwXJgfrcLptmi3z6vKnt95DG7qT3l?rdid=rnoR0rlKfaOfNAgG#"}>
                <img className='fg-img' src="spanishopenvinder.jpg
              " alt="" />
              </Link>
            </div>
            {/* ///////////////////////////// */}

            <div ref={setCardRef(10)} data-index={10} className={`movie-card ${visibleCards.includes(10) ? 'visible' : ''}`}>
              <p>LAS PÅ PODIET ⚽️⛳️🕳</p>
              <p>* min karrieres første single podie</p>
              <p>   * og nu har jeg stået der 26 gange i single</p>
              <p>     * vintertour hulspil i Skejby 2021</p>
              <p>   * faktisk tæt på at vinde</p>
              <p>   * men jeg var mæt af at komme i 3-mandsfinalen</p>
              <p> * og derved alt for tilfreds med mit første podie</p>



              <Link to={"https://www.facebook.com/lars.ohlen.9/posts/pfbid021fiFGnynpWMxkJNWsFPsAmeuvmQTDCtw3uyBNK6RdBok8yd5cJJPETrTkjUCcbiZl?rdid=E7iK8l4NSwUivLvw#"}>
                <img className='fg-img' src="podie.jpg
              " alt="" />
              </Link>
            </div>


            {/* ///////////////////////////// */}

            <div ref={setCardRef(10)} data-index={10} className={`movie-card ${visibleCards.includes(10) ? 'visible' : ''}`}>
              <p>Youx i Frankrig ⚽️⛳️🕳</p>
              <p>Youx, Frankrig - Youx Love Footballgolf ❤️</p>

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
              <p>* Afdeling 2 i Sørå Vendsyssel</p>
              <p>* Vibæk og jeg går ud i samme score i finalerunden</p>
              <p>* De to andre er 2 skud bagved os også med samme score</p>
              <p>* Jeg kommer bagud med 4 på de første 3 huller</p>
              <p>* Henter Vibæk omkring hul 9 og ser mig aldrig tilbage</p>
              <p>* Vigtigst af ALT, det er ekstremt hyggeligt at gå med Nordjyderne</p>
              <p>* Tak til Jysk Lokal Forsikring og Select for at sponsorer 2/3 af præmierne til de 5 afdelinger i Nordjylland</p>

              <Link to={"https://www.facebook.com/NordjyskFodboldgolf/posts/pfbid0zZRb67jPtj1inkarnUA2ivYLQCtXUf1CW5j5emvXTdN78juoHpT81JHc2VtWDKLUl?rdid=ycosS07qO0o3fahZ#"}>
                <img className='fg-img' src="rødjakke.jpg
              " alt="" />
              </Link>
            </div>
            <div ref={setCardRef(10)} data-index={10} className={`movie-card ${visibleCards.includes(10) ? 'visible' : ''}`}>


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
