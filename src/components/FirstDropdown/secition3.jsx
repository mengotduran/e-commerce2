import { FaQuoteLeft } from "react-icons/fa";
import styles from "../../../styles/FirstDropdown.module.scss";
import Image from "next/image";

const SECTION3 = () => {
  return (
    <div className={styles.regards}>
      <section>
        <div className={styles.medicine_index}>
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
              position:"relative",
            //   zIndex: "-2",
            }}
          >
            {/* <img src="/images/img 5.jpg" style={{ position:"relative", zIndex:"1"}}/> */}
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
          <div className={styles.medicine_div}>
            <div className={styles.medicine_div_text_box}>
              <div className={styles.presentation_text}>
                <h2>OUR SPECIALIST</h2>
                <div className={styles.general_div}></div>
              </div>
              <div className={styles.medicine_text_container}>
                <div className={styles.medicine_text}>
                  <h3>What is Holistic Medicine?</h3>
                  <p>
                    Holistic medicine is an alternative medicine that considers
                    the individual as a whole, namely his body, his emotions,
                    his mind, but also his spirit. This form of therapy is not
                    limited to treating the symptoms of the disease, but to
                    seeking the real causes of the disorder.
                  </p>
                </div>
                <div className={styles.medicine_text}>
                  <h3>A different approach to standard medicine</h3>
                  <p>
                    Holistic medicine defines health as a state of physical,
                    mental and social well-being. As such, unlike the disciples
                    of Hippocrates, holistic therapists do not only focus on how
                    to treat the symptoms of an illness and look for the
                    bacterial or viral causes that can cause it. They seek to
                    act even before the person falls ill, to prevent the
                    appearance of certain disorders by studying the various
                    emotional and mental factors, etc. which cause the
                    individual to become more susceptible to germs that carry
                    diseases.
                  </p>
                </div>
                <img
                  src="/images/img 21.jpg"
                  style={{
                    height: "300px",
                    objectFit: "cover",
                    objectPosition: "15% 70%",
                    width:"100%"
                  }}
                />
              </div>
              <div className={styles.disadpear}>
                <div className={styles.medicine_text_container}>
                  <div className={styles.medicine_text}>
                    <h3>What is Holistic Medicine?</h3>
                    <p>
                      Holistic medicine is an alternative medicine that considers
                      the individual as a whole, namely his body, his emotions,
                      his mind, but also his spirit. This form of therapy is not
                      limited to treating the symptoms of the disease, but to
                      seeking the real causes of the disorder.
                    </p>
                  </div>
                  <div className={styles.medicine_text}>
                    <h3>A different approach to standard medicine</h3>
                    <p>
                      Holistic medicine defines health as a state of physical,
                      mental and social well-being. As such, unlike the disciples
                      of Hippocrates, holistic therapists do not only focus on how
                      to treat the symptoms of an illness and look for the
                      bacterial or viral causes that can cause it. They seek to
                      act even before the person falls ill, to prevent the
                      appearance of certain disorders by studying the various
                      emotional and mental factors, etc. which cause the
                      individual to become more susceptible to germs that carry
                      diseases.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.presentation_medicine_img}>
        <img src="/images/img 4.jpg" alt=".." style={{ width: "100%" }} />
      </section>
    </div>
  );
};

export default SECTION3;
