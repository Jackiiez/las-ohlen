import { useState } from 'react';
import Lightbox from '../components/lightbox';
import Footer from './footer';
import NavBar from './navbar';
import { Link } from 'react-router';
export default function Bil() {

  const [lightboxImages, setLightboxImages] = useState([]);
  const [isLightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);//


  console.log(currentImageIndex)



  const openLightbox = (images, index) => {
    setLightboxImages(images);
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };
  return (<>
    <NavBar />
    <section className='bil-section'>
      <h1 className="sponsore-heading">Mine sponsorer er på min bil</h1>
      <p className="bil-text">Jeg er super glad for Peugeot. Bilen er miljøvenlig og har et flot design med masser af plads.
        Den er perfekt til både hverdag, træningsture, samt turneringer i både Danmark og hele Europa!</p>
      <p className="bil-text">Select sport 1947 ønsker ikke reklamer på biler, de er dog en kæmpe spiller for mine makkere og mig i beklædning, samt villige sponsorer af præmier til vores podier til de 5 afdelinger
        af Nordjyske Mesterskaber.</p>




      <div className='side-img-div'>
        <div className='underdiv'>
          <img className='side-img' src='bil15.jpg' alt='Right Side Image' onClick={() => openLightbox(['bil15.jpg'], 0)} />
          <br />   <Link className='white' to="https://www.facebook.com/lars.ohlen.9/posts/pfbid0sHSz7bM4BNJy1a7UiNs99P4G5NW7sRXJ6J8j7XjMwRUoNpzKyHCuLVmLjHKWjz6ol?rdid=IF3gSbeTuBBAAc31#">Se Facebook opslag her</Link></div>
        <div className='underdiv'>
          <img className='side-img ' src='hegnholtbil.jpg' alt='Left Side Image' onClick={() => openLightbox(['hegnholtbil.jpg'], 0)} />
          <br />   <Link className='white' to="https://www.facebook.com/lars.ohlen.9/posts/pfbid02zQWr6UAYtPbBc7UqsEBdFKTAJzCHKkW9GVHzcs1cyuQRNEXeDuJh1eikMGE1Ckw8l?rdid=JN0TYEZalBaNvvrJ#">Se Facebook opslag her</Link>
        </div>


        <div className='underdiv'>
          <img className='side-img' src='bil9.jpg' alt='Right Side Image' onClick={() => openLightbox(['bil9.jpg'], 0)} />
          <br />   <Link className='white' to="https://www.facebook.com/lars.ohlen.9/posts/pfbid0XULhgMfXiQzTy6gHdBnhs97eYyhdgjfHj4CpPSzb98B1NiiR2iuahtf3akSHu6s4l?rdid=aS8X87LMOdHsPCLO#">Her er en artikel med link til alle mine sponsorer bl.a. Jysk Lokalforsikring</Link>
        </div>
      </div>


      <div className='side-img-div hegnholtbil'>
        <div className='hegnholtbil-div'>


          <img className='side-img' src='bil14.jpg' alt='Right Side Image' onClick={() => openLightbox(['bil14.jpg'], 0)} />


        </div>





        <img className='side-img' src='bil12.jpg' alt='Right Side Image' onClick={() => openLightbox(['bil12.jpg'], 0)} />
      </div>
      <div className='side-img-div'>
          <img className='side-img' src='bil1.jpg' alt='Left Side Image' onClick={() => openLightbox(['bil1.jpg'], 0)} />
        {/* <img className='side-img' src='bil7.jpg' alt='Right Side Image' onClick={() => openLightbox(['bil7.jpg'], 0)} />*/}
<div className='hegnholtbil-div'>
        <img className='side-img ' src='fodeksperterne-sponsor.jpg' alt='Left Side Image' onClick={() => openLightbox(['fodeksperterne-sponsor.jpg'], 0)} />
        <br />  
          <Link className='white' to="https://www.facebook.com/lars.ohlen.9/posts/pfbid0sKxUSNb4pGmHyrNDzHtEexSej6dE1YGcBtT1xykPoWTMSdASsyxXheCLKggFUtYLl?rdid=OSjW61DEMYUlnNVg#">Her er en artikel med link til alle mine sponsorer bl.a. Jysk Lokalforsikring

</Link></div>
        {/*   <img className='side-img' src='bil13.jpg' alt='Left Side Image' onClick={() => openLightbox(['bil13.jpg'], 0)} />*/}

    <img className='side-img' src='bil16.jpg' alt='Left Side Image' onClick={() => openLightbox(['bil16.jpg'], 0)} />
     
     </div>


        
      <div className='side-img-div'>

      <img className='side-img' src='prolåse.jpg' alt='Left Side Image' onClick={() => openLightbox(['prolåse.jpg'], 0)} />
      
       {/* <img className='side-img' src='bil6.jpg' alt='Left Side Image' onClick={() => openLightbox(['bil6.jpg'], 0)} />*/}
       <img className='side-img' src='prolåseto.jpg' alt='Left Side Image' onClick={() => openLightbox(['prolåseto.jpg'], 0)} />
        
<img className='side-img' src='bil2.png' alt='Left Side Image' onClick={() => openLightbox(['bil2.png'], 0)} />
      </div>


      <div className='side-img-div hegnholtbil'>  
        </div>

      <div className='side-img-div hegnholtbil'>
      <img className='side-img' src='vejlebo.jpg' alt='Left Side Image' onClick={() => openLightbox(['vejlebo.jpg'], 0)} />
        <div className='hegnholtbil-div'>



            <img className='side-img' src='bil3.png' alt='Right Side Image' onClick={() => openLightbox(['bil3.png'], 0)} />
          <br /> 
          <Link className='white' to="https://www.facebook.com/lars.ohlen.9/posts/pfbid02zXnVScsWhHJCD4zfTeN4e4ovDfUTnKf7CA5AbqSYHqNXak1TQXNN94EtdiwVHUbml?rdid=9IhH88NAvN9kZhSk#">Se Facebook opslag her</Link>
          
        </div>
        
        <img className='side-img' src='vejleboto.jpg' alt='Left Side Image' onClick={() => openLightbox(['vejleboto.jpg'], 0)} />
        
        </div>


    </section>
    <Lightbox images={lightboxImages} isOpen={isLightboxOpen} onClose={closeLightbox} />
    <Footer /></>
  );
};


