import { Link } from "react-router";
import Footer from "./footer";
import NavBar from "./navbar";



export default function Loeb() {

  return (
    <>
      <NavBar />
      <section className="placeringer">
        <h1 className="title sponsore-heading">Lars på farten</h1>
        <div className="løbe-div">
          
          <p>Jeg har løbet mere end 34.500 km i mit liv
        </p>
          <p>
          En menisk operation har begrænset mit løb til max 5 km pr tur</p><p>Drømmen var en gang at løbe samlet en gang rundt om jorden - 40.000 km</p>
          <h2 className="title sponsore-heading">Løbetræner Lars</h2>
          <p>Jeg har løbetræner certifikat fra dansk atletikforbund</p>
          <p>Jeg har hjulpet nybegynder løbere til at gennemføre en 5 km </p>
          <p>og jeg har hjulpet marathonløbere til at komme under drømmegrænsen på 3 timer</p>
          <p>Kontakt mig endelig, hvis jeg skal være din løbetræner eller motivator</p>
            <Link to="mailto:Larsohlen67@gmail.com">Larsohlen67@gmail.com</Link>

          <p className="title sponsore-heading">Højdepunkter:</p>
           <p>Copenhagen Marathon på 2:58:54</p>
           Det er en af mine top 3 største sports bedrifter
          
          <p> Der var aldrig en krise undervejs.</p>
          <p> Jeg lagde dog for hårdt ud, hvilket er en klassiker</p>
          <p> Det var kun min 4. marathon</p>
          <p> Jeg havde ikke taget løbetræner-uddannelsen endnu</p>
          og heller ikke fundet min guidance Jack Daniels Running Formular:

          <Link to={"https://www.saxo.com/dk/daniels-running-formula_jack-daniels_paperback_9781718203662?msclkid=377b5c9894c6158c9fb934e16c737476&utm_source=bing&utm_medium=cpc&utm_campaign=Standard%20Shopping%20%7C%20Engelsk&utm_term=4576442302288169&utm_content=Profitable"}>
            link til Daniels&apos; Running Formula </Link>


          <Link to={"https://www.facebook.com/lars.ohlen.9/posts/pfbid0gV5ZG1jtbFT1ACCKSLrSd3f1vrFNjioSe1r2rKwZwkunBDmd6KFXaeR37fFneXZfl?rdid=LLVkHqjMCmAxWE5T#"}>
            <img src="marton1.jpg" alt="" /></Link>
          <p>2.58.54 Copenhagen marathon 2000 {"<"} 3 T ({"< "}3 hours)</p>
        </div>
        <hr className="loeb-hr" />
        <div className="løbe-div">

         
          <p> Marathon 2.58.54</p>
          <p> Halvmaraton 1.23:56</p>
          <p> 10 km 37:03</p>
          <p> 5 km 18:16</p>
          <p> 2 km 6:00</p>
          <p> 1 km 2:58</p>
          <p> New York Marathon i 1994</p>
          <p> Berlin Marathon 3 stk.</p>
          <p> Athen Marathon 2004 her løb vi på blue-line fra OL ruten i Athen 3 måneder før</p>
          <p> DVS vi løb selv marathon ruten fra OL</p>
          <p>Deltagelse i New York Marathon 1994</p>
          <p> En sand løbefest</p>
          <p> De sidste 7 km i Central Park føltes som at deltage i en landskamp i Parken</p>
          <p> Vi blev båret af tilskuerne i mål</p>
          <p> Jeg får stadig gåsehud, når jeg skriver det ❤</p>
          <Link to={"https://www.facebook.com/photo/?fbid=9637431562985846&set=pcb.9558796594182677"}>
            <img src="marton.jpg" alt="" /></Link>

        </div>








        <hr className="loeb-hr" />
        <h2 className="title sponsore-heading">Saunagus Jyllinge</h2>
        <div className="løbe-div"><p> Saunagus er genialt for krop og sjæl
          <p> Bedste sted:</p>

          <p>https://www.saunagusjyllinge.dk/</p>
<p>Se hvor lækkert der er i saunagus Jyllinge:</p>
<Link to="https://www.facebook.com/lars.ohlen.9/posts/pfbid0ePtmCWdp9BtYDD4BDFfosHbT92TMQNFqqzXNUU3nbZpGMV7FUZwLS5YqtdqoNUTYl?rdid=KQwCDZk2XDUTvIYq#">https://www.facebook.com/lars.ohlen.9/posts/pfbid0ePtmCWdp9BtYDD4BDFfosHbT92TMQNFqqzXNUU3nbZpGMV7FUZwLS5YqtdqoNUTYl?rdid=KQwCDZk2XDUTvIYq#</Link>

      </p>
         <Link to="https://www.saunagusjyllinge.dk/"> <img src="gus.jpg" alt="" /></Link>



        </div>



      </section>
      <Footer />
    </>
  );
}
