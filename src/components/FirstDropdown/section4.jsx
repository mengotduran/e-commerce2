import { FaQuoteLeft } from "react-icons/fa";
import styles from "../../../styles/FirstDropdown.module.scss";
import Image from "next/image";

const SECTION4 = () => {
  return (
    <>
      <div className={styles.regards}>
        <section>
          <div
            className={styles.presentation_div}
            style={{
              backgroundImage:
                "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('/images/img 5.jpg')",
              height: "535px",
              objectFit: "cover",
              objectPosition: "15% 50%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className={styles.section1_text}>
              <div className={styles.section1_div}>
                <FaQuoteLeft
                  className={styles.section1_quote}
                  style={{ textShadow: "1px 1px 2px rgb(5, 5, 5)" }}
                />
                <p>
                  EXPERIENCE THE ONE, <span>HOLISTIC MEDICINE</span> DIFFERENT
                  AND EFFECTIVE
                  <span> THERAPEUTIC APPROACH FOR </span> GLOBAL HEALTH: BODY,
                  SOUL AND SPIRIT.
                </p>
              </div>
              <div className={styles.btn_div}>
                <button>BOOK AN APPOINTMENT</button>
                <button>VISIT OUT SHOP</button>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className={styles.regards_header}>
            <div className={styles.presentation_text}>
              <h2>OUR SPECIALIST</h2>
              <div className={styles.general_div}></div>
            </div>
            <div className={styles.align_divs}>
              <div className={styles.flex_div}>
                <img src="/images/img 25.jpg" alt="image not found..." />
                <span>
                  <h2>holistic hospital yaounde</h2>
                  <h4>messamedongo: </h4>
                  <p>after the police station, place called alfa factory</p>
                </span>
              </div>
              <div className={styles.flex_div_middle}>
                <img src="/images/img 25.jpg" alt="image not found..." />
                <span>
                  <h2>holistic hospital douala</h2>
                  <h4>:logpom </h4>
                  <p>Papyrus school entrance to njoh stadium. next to the Catholic parish of Saint Barthelemy</p>
                  <h4>:bonamoussadi</h4>
                  <p>shopping center of sagnily space g9</p>
                </span>
              </div>
              <div className={styles.flex_div}>
                <img src="/images/img 25.jpg" alt="image not found..." />
                <span>
                  <h2>holistic hospital west region</h2>
                  <h4>Mbouda: </h4>
                  <p>Galim By Bagam. Market Street</p>
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.presentation_img}>
          <img src="/images/img 4.jpg" alt=".." style={{ width: "100%" }} />
        </section>
      </div>
    </>
  );
};

export default SECTION4;
