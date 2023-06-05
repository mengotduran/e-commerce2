import { FaQuoteLeft } from "react-icons/fa";
import styles from "../../../styles/FirstDropdown.module.scss";
import Image from "next/image";

const SECTION2 = ({data}) => {
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
                EXPERIENCE THE ONE, <span>HOLISTIC MEDICINE</span> DIFFERENT AND
                EFFECTIVE
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

      <section className={styles.presentation_dropdown}>
        <div className={styles.presentation_history_header}>
          <div className={styles.presentation_text}>
            <h2>OUR SPECIALIST</h2>
            <div className={styles.general_div}></div>
          </div>
          <div className={styles.specialist_API_box}>
            {data?.map((ev) => (
              // { id, description, url } = ev,
              <div className={styles.specialist_API_div}>
                <Image
                  src={ev.url}
                  width={350}
                  height={250}
                  className={styles.specialist_API_img}
                  key={ev.id}
                  alt="..."
                />
                <div className={styles.specialist_API_text}>
                  <h2 key={ev.id}>{ev.name}</h2>
                  <h4 key={ev.id}>R{ev.department}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.presentation_dropdown}>
        <div className={styles.motivation_text_board}>
            <h2>
                "when it comes to <spn>your health</spn>, Nothing less than <span>the best</span>. count on our specialists to provide <span>top-notch care</span>."
            </h2>
        </div>
      </section>

      <section className={styles.presentation_img}>
        <img src="/images/img 4.jpg" alt=".." style={{ width: "100%" }} />
      </section>
    </div>
    </>
  );
};

export default SECTION2;
