import Image from "next/image";

import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/max.png"
          alt="An image showing Max"
          width={300}
          height={300}
        />
      </div>
      <h1>Hey, my name is Chris</h1>
      <p>
        This is a p tag in the hero.js file in the home-page folder in Components.
      </p>
    </section>
  );
}

export default Hero;
