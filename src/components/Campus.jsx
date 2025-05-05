import gallery_1 from "/gallery-1.png";
import gallery_2 from "/gallery-2.png";
import gallery_3 from "/gallery-3.png";
import gallery_4 from "/gallery-4.png";
import whiteArrowIcon from "/white-arrow.png";

function Campus() {
  return (
    <div className="campus center">
      <div className="gallery">
        <img src={gallery_1} className="gallery-img" />
        <img src={gallery_2} className="gallery-img" />
        <img src={gallery_3} className="gallery-img" />
        <img src={gallery_4} className="gallery-img" />
      </div>
      <button className="btn dark">
        See More Here <img src={whiteArrowIcon} className="arrow-icon" />
      </button>
    </div>
  );
}
export default Campus;
