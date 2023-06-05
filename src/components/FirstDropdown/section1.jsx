import { FaQuoteLeft } from "react-icons/fa";
import styles from "../../../styles/FirstDropdown.module.scss";

const SECTION1 = () => {
  return (
    <div className={styles.regards}>
      <section>
        <div className={styles.presentation_div} style={{
              backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('/images/img 5.jpg')",
              height: "535px",
              objectFit: "cover",
              objectPosition: "15% 50%",
              backgroundRepeat:"no-repeat",
              backgroundPosition:"center",
              backgroundSize:"cover"
            }}>
          <div className={styles.section1_text}>
            <div className={styles.section1_div}>
              <FaQuoteLeft className={styles.section1_quote} style={{textShadow: "1px 1px 2px rgb(5, 5, 5)"}}/>
              <p>
                EXPERIENCE THE ONE, <span>HOLISTIC MEDICINE</span> DIFFERENT AND EFFECTIVE
                <span> THERAPEUTIC APPROACH FOR </span> GLOBAL HEALTH: BODY, SOUL AND SPIRIT.
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
            <h2>OUR HISTORY</h2>
            <div className={styles.general_div}></div>
          </div>
          <div className={styles.presentation_history_text}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum laoreet, mi eu accumsan sagittis, eros quam pretium nisl, id euismod lacus purus at arcu. Quisque ultrices sit amet erat non euismod. Duis vel efficitur ligula, ut laoreet sapien. Phasellus euismod suscipit facilisis.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum laoreet, mi eu accumsan sagittis, eros quam pretium nisl, id euismod lacus purus at arcu. Quisque ultrices sit amet erat non euismod. Duis vel efficitur ligula, ut laoreet sapien. Phasellus euismod suscipit facilisis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum laoreet, mi eu accumsan sagittis</p>
            <p className={styles.last_text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum laoreet, mi eu accumsan sagittis, eros quam pretium nisl, id euismod lacus purus at arcu. Quisque ultrices sit amet erat non euismod. Duis vel efficitur ligula, ut laoreet sapien. Phasellus euismod suscipit facilisis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum laoreet, mi eu accumsan sagittis, eros quam pretium nisl, id euismod lacus purus at arcu. Quisque ultrices sit amet erat non euismod. Duis vel </p>
          </div>
        </div>
      </section>

      <section className={styles.presentation_dropdown}>
        <div className={styles.treatment}>
          <div className={styles.treatImg}>
            <img
              src="/images/img 11.jpg"
              alt="philosophy"
              className={styles.treatment_image}
            />
          </div>
          <div className={styles.treatment_text}>
            <div className={styles.presentation_text}>
              <h2>DR LOREM IPSUM</h2>
              <div className={styles.general_div}></div>
            </div>
            <div className={styles.treatment_paragraph}>
              <p>
                Lorem ipsum dolor sit amet consectetur. Vitae auctor ut malesuada
                aenean odio neque ullamcorper. Tellus tincidunt elementum nisl
                aliquet odio felis cursus sed arcu. Orci diam id ipsum donec
                fermentum a auctor maecenas. Volutpat eu nulla enim volutpat enim
                bibendum pellentesque tellus faucibus.
                fermentum a auctor maecenas. Volutpat eu nulla enim volutpat enim
                bibendum pellentesque tellus faucibus.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur. Vitae auctor ut malesuada
                aenean odio neque ullamcorper. Tellus tincidunt elementum nisl
                aliquet odio felis cursus sed arcu. Orci diam id ipsum donec
                fermentum a auctor maecenas. Volutpat eu nulla enim volutpat enim
                bibendum pellentesque tellus faucibus.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.presentation_dropdown}>
        <div className={styles.presentation_phylosophy}>
          <div className={styles.presentation_text}>
            <h2>PHILOSOPHY</h2>
            <div className={styles.general_div}></div>
          </div>
          <div className={styles.presentation_phylosophy_text}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum laoreet, mi eu accumsan sagittis, eros quam pretium nisl, id euismod lacus purus at arcu. Quisque ultrices sit amet erat non euismod. Duis vel efficitur ligula, ut laoreet sapien. Phasellus euismod suscipit facilisis.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum laoreet, mi eu accumsan sagittis, eros quam pretium nisl, id euismod lacus purus at arcu. Quisque ultrices sit amet erat non euismod. Duis vel efficitur ligula, ut laoreet sapien. Phasellus euismod suscipit facilisis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum laoreet, mi eu accumsan sagittis</p>
            <p className={styles.last_text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum laoreet, mi eu accumsan sagittis, eros quam pretium nisl, id euismod lacus purus at arcu. Quisque ultrices sit amet erat non euismod. Duis vel efficitur ligula, ut laoreet sapien. Phasellus euismod suscipit facilisis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum laoreet, mi eu accumsan sagittis, eros quam pretium nisl, id euismod lacus purus at arcu. Quisque ultrices sit amet erat non euismod. Duis vel </p>
          </div>
        </div>
      </section>
      <section className={styles.presentation_img}>
        <img src="/images/img 4.jpg"  alt=".." style={{width:"100%"}}/>
      </section>
    </div>
  );
};

export default SECTION1;