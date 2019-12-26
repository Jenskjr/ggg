import React from "react";
import { css } from "emotion";

const About = props => {
  return (
    <div className={container()}>
      <h4>Hvad er Gennem Gode Gerninger</h4>
      <p>
        Gennem Gode Gerninger er en platform, der kobler virksomheder, private
        og organisationer sammen, for at skabe et bedre samfund. I et samfund,
        hvor der hele tiden er nye ting at sætte sig ind i, er vores vision, at
        det skal være lettere at støtte netop der, hvor dit hjerte ligger. Og
        det vil vi gerne hjælpe til bliver lettere. Vi har derfor samlet en
        række projekter (og der vil løbende komme flere), hvor organisationer og
        virksomheder er gået sammen i et samarbejde. Samarbejdet går ud på, at
        virksomhederne donnerer det samme, som private – dvs. dig og mig - til
        det pågældende projekt. På denne måde vil alle private donationer blive
        fordoblet. Det er muligt at støtte alle områder af verdenen; både i
        Danmark og brændpunkter, og hvor end der er tiltag indenfor fattigdom,
        ensomhed, forskning, klima eller andet. Eneste betingelse er, at de skal
        bidrage til at skabe et bedre samfund.
      </p>

      <h4>Hvordan fungerer projekterne</h4>
      <p>
        Projekterne er enten startet på initiativ af virksomheden, som har
        kontaktet en organisation med henblik på et samarbejde, eller ved at en
        organisation har taget initiativ til et projekt og tilbudt virksomheder
        at byde ind som doner.
      </p>
      <h4>Hvad er omkostningerne</h4>
      <p>
        Alle donationer fra private går ubeskåret til den ønskede organisation.
        Omkostningerne betales af de virksomheder, der samarbejder om projektet.
        Transaktionsomkostninger betales ligeledes af virksomheden. På denne
        måde vil organisationen modtage et større beløb fra private ved at
        benytte Gennem Gode Gerninger, end hvis de støttede organisationen
        direkte.
      </p>
      <h4>Hvad er vores Vision</h4>
      <p>
        Vi ønsker at gøre det lettere for folk at få viden om hvilke projekter,
        der findes i både ind- og udland, og som bidrager til at skabe et bedre
        samfund.
      </p>
    </div>
  );
};

const container = () => css`
  background-color: white;
  padding: 1rem;
`;

export default About;
