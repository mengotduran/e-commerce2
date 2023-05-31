import { FaQuoteLeft } from "react-icons/fa";

const presentation = () => {
  return (
    <>
      <section>
        <div className="presentation_div" style={{
              backgroundImage:
                "url('/images/img 5.jpg')",
              height: "535px",
              objectFit: "cover",
              objectPosition: "15% 50%",
              backgroundRepeat:"no-repeat",
              backgroundPosition:"center",
              backgroundSize:"cover"
            }}>
          <div className="carousel_text">
            <div className="quote_div">
              <FaQuoteLeft className="carousel_quote" style={{textShadow: "1px 1px 2px rgb(5, 5, 5)"}}/>
              <p>
                EXPERIENCE THE ONE, HOLISTIC MEDICINE DIFFERENT AND EFFECTIVE
                THERAPEUTIC APPROACH FOR GLOBAL HEALTH: BODY, SOUL AND SPIRIT.
              </p>
            </div>
            <div className="btn_div">
              <button>BOOK AN APPOINTMENT</button>
              <button>VISIT OUT SHOP</button>
            </div>
          </div>
        </div>
      </section>

      <section className="general_dropdown">
        <div className="drop_history_header">
          <div className="general_text">
            <h2>OUR HISTORY</h2>
            <div className="general_div"></div>
          </div>
          <div className="drop_history_text">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum laoreet, mi eu accumsan sagittis, eros quam pretium nisl, id euismod lacus purus at arcu. Quisque ultrices sit amet erat non euismod. Duis vel efficitur ligula, ut laoreet sapien. Phasellus euismod suscipit facilisis.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum laoreet, mi eu accumsan sagittis, eros quam pretium nisl, id euismod lacus purus at arcu. Quisque ultrices sit amet erat non euismod. Duis vel efficitur ligula, ut laoreet sapien. Phasellus euismod suscipit facilisis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum laoreet, mi eu accumsan sagittis</p>
            <p className="last_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum laoreet, mi eu accumsan sagittis, eros quam pretium nisl, id euismod lacus purus at arcu. Quisque ultrices sit amet erat non euismod. Duis vel efficitur ligula, ut laoreet sapien. Phasellus euismod suscipit facilisis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum laoreet, mi eu accumsan sagittis, eros quam pretium nisl, id euismod lacus purus at arcu. Quisque ultrices sit amet erat non euismod. Duis vel </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default presentation;
