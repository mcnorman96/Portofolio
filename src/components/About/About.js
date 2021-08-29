import React from "react";
import Portpic from '../images/picportofolio.jpg';

const About = () => {
  return (
    <div className="about">
        <div className="row">
          <div className="card">
            <h1>About me</h1>
            <div className="contactdiff">
              <div className="col-sm-6">
              <p>Jeg er en 23-årig Web-Development studerende som brænder for webudvikling.
                        Kreativitet og programmering er de ting der driver mig.
                        Jeg er altid ude efter at lære mere omkring mit fag, og stræber efter at blive bedre end jeg
                        var
                        i går.
                        Jeg lægger meget stor vægt i at følge projekter helt til ende og sørge for,
                        at man får skabt en god oplevelse for kundesegmentet. <br></br><br></br>

                        Min personlige profil er engageret, fleksibel og positiv.
                        Jeg engagerer mig meget i mit arbejde og yder alt hvad jeg kan så jeg får løst løsninger
                        kunderne er tilfreds med,
                        men også noget jeg selv vil stå indenfor.
                        Jeg er meget fleksibel idet jeg er god til at tilpasse mig nye opgaver, eller ændringer der
                        skal
                        foretages på et projekt.
                        <br></br><br></br>
                        Folk vil nok også beskrive mig som ham, der kan formå at se positivt på tingene i en dårlig
                        tid.
                        Jeg er meget smilende og imødekommende, så jeg kommer godt ud af det med de fleste mennesker
                        jeg
                        møder. 
                        </p>
              </div>
              <div className="col-sm-6">
                <div className="aboutimg">
                  <img
                    className="img-responsive"
                    src={Portpic}
                    alt="profilepic"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default About;
