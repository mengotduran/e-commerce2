import {items} from "../data/partners.json";
import Image from 'next/image';
import Carousel from "react-elastic-carousel";
import styles from "../styles/Partners.module.scss";
import React, { useRef } from "react";

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1, itemsToScroll: 1 },
    { width: 900, itemsToShow: 3 },
    { width: 1200, itemsToShow: 3 },
];

export default function Partners() {
  const { elastic } = items;
  const carouselRef = useRef(null);
  let resetTimeout;
  return (
    <>
      <div className={styles.partners}>
        <div className={styles.general_text}>
          <h2>OUR PARTNERS</h2>
          <div className={styles.general_div}></div>
        </div>
      </div>

      <div className={styles.partners}>
        <div className={styles.carousel_box}>
          <Carousel breakPoints={breakPoints}
              ref={carouselRef}
              pagination={true}
              enableAutoPlay={true}
              showArrows={true}
              autoPlaySpeed={4000}
              isRTL={false}
              onNextEnd={({ index }) => {
                clearTimeout(resetTimeout);
                resetTimeout = setTimeout(() => {
                  carouselRef?.current?.goTo(0);
                }, 4000); // same time
              }} className={styles.background} css={{color:"yellow"}}>
            {items?.map((item) => (
              <div className={styles.partners_residence}>
                <Image src={`/images/${item.imageUrl}`} width={200} height={150} alt="logo display"/>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const {elastic} = await import('/data/partners.json')
  console.log(elastic)
  return {
    props: {
      data: elastic,
    }
  }
}
