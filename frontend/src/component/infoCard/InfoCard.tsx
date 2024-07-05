import "./infoCard.css";
import { Pen } from "lucide-react";
const InfoCard = () => {
  return (
    <div className="info-card">
      <div className="heading-info-card">
        <span className="bold">your info</span>
        <span className="bold">
          <Pen />
        </span>
      </div>
      <div className="info-of-user">
        <div className="info">
          <span className="bold">status</span>
          <span> married </span>
        </div>
        <div className="info">
          <span className="bold">School</span>
          <span> NewSunshine </span>
        </div>
        <div className="info">
          <span className="bold">address</span>
          <span> sifal, ktm </span>
        </div>
        <div className="info">
          <span className="bold">work at</span>
          <span> none </span>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
