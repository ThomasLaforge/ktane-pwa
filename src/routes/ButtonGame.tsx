import Battery from "../components/Battery";
import "../styles/_button.scss";

export default function ButtonGame() {
  return (
    <>
      <div className="first-step-zone">
        <h2>Cliquer sur le bouton et relacher immédatement</h2>
        <div className="first-case">
          <div className="easy-case">
            <div className="button red">Maintenir</div>
          </div>
          <div className="cases-separator" />
          <div className="battery-cases">
            <div className="explose">
              <div className="explose-txt">Exploser</div>
              <div className="explose-batteries">
                <Battery />
                <Battery />
                <Battery />
                <div className="plus-symbole">+</div>
              </div>
            </div>
            <div className="batteries-case-separator"></div>
            <div className="batteries-cases-two">
              <div className="frk">
                <div className="frk-box">
                  <div className="frk-txt">FRK</div>
                  <div className="frk-activated" />
                </div>
                <div className="frk-batteries">
                  <Battery />
                  <Battery />
                  <div className="plus-symbole">+</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="second-step-zone">
        <h2>
          Restez appuyé, puis relâchez <br />
          quand le numéro correspondant est affiché dans le chrono
        </h2>
        <div className="cases">
          <div className="yellow-case case">
            <div className="color-tag color-tag-yellow">jaune</div>
            <div className="value">5</div>
          </div>
          <div className="blue-case case">
            <div className="color-tag color-tag-blue">bleu</div>
            <div className="value">4</div>
          </div>
          <div className="else-case case">
            <div className="color-tag color-tag-other">autre</div>
            <div className="value">1</div>
          </div>
        </div>
      </div>
    </>
  );
}
