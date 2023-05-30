import Link from "next/link";
import Image from "next/image";
import { BsFacebook } from "react-icons/bs";
import { SlSocialInstagram } from "react-icons/sl";
import { ImWhatsapp } from "react-icons/im";

export const Footer = () => {
  return (
    <footer>
      <div className="footer_section">
        <div className="section_1 gen">
          <h2>Our ADDRESS</h2>
          <h3>holistic hospital yaounde</h3>
          <p>odza messamedongo after the police station</p>
          <h3>holistic hospital Douala</h3>
          <p>
          logpom: Papyrus school entrance to njoh stadium. beside the
            saint barthelemy catholic parish
          </p>
          <p>bonamoussadi: shopping center of sagnily space g9</p>
          <h3>holistic hospital west region</h3>
          <p>Mbouda: Galim By Bagam. Market Street</p>
        </div>
        <div className="section_2 gen">
          <h2>Information</h2>
          <div className="link_div gen">
            <Link href="#" className="links">Home</Link>
            <Link href="#" className="links">Regards</Link>
            <Link href="#" className="links">Our Therapy</Link>
            <Link href="#" className="links">Pathology</Link>
            <Link href="#" className="links">News</Link>
            <Link href="#" className="links">Contact</Link>
            <Link href="#" className="links">Galery</Link>
          </div>
          <button>SHOP</button>
        </div>
        <div className="section_3 gen">
          <h2>Our Contact</h2>
          <div className="contacts gen">
            <Link href="#" className="links">+237 677 76 01 19</Link>
            <Link href="#" className="links">+237 694 15 22 04</Link>
            <Link href="#" className="links">+237 695 16 29 29</Link>
            <Link href="#" className="links">+237 695 16 29 29</Link>
            <Link href="#" className="links">+237 675 89 89 74</Link>
          </div>
          <h2>opening</h2>
          <div className="days gen">
            <span>Saturday 8H -13H</span>
            <span>Monday to Friday 8H -18H</span>
            <span>Sunday 8a.m. - 1p.m. by appointment</span>
          </div>
        </div>
        <div className="section_4 gen">
            <BsFacebook />
            <SlSocialInstagram />
            <ImWhatsapp />
        </div>
      </div>
    </footer>
  );
};
