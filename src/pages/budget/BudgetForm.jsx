import "./BudgetForm.css";
import { WebElements } from "./WebElements";
import { CustomCard } from "../../components/CustomCard";
import { useBudget } from "../../contexts/useBudget";

export function BudgetForm({ isYearly }) {
  const { checkedItems, budget, handleChecked, elements, setElements, handleClickAdd, handleClickRest } = useBudget();
  const getPrice = (price) => (isYearly ? price * 0.8 : price);
  return (
    <div className="form-container">
      <CustomCard className={`container ${checkedItems.seo ? 'border-checked' : ''}`}>
        <div className="card-units">
          <div>
            <h2>Seo</h2>
            <p>Programming a complete responsive website</p>
          </div>
          {isYearly && <p className="text-success">20% saved</p>}
          <h5 className="mx-3">
            <strong className="fs-1">{getPrice(300)}</strong>€
          </h5>

          <label>
            <div className="d-flex align-items-center add-button">
              <input
                className="checkbox"
                type="checkbox"
                checked={checkedItems.seo}
                onChange={(e) => handleChecked(e, "seo")}
              />
              <span className="ms-3">Add</span>
            </div>
          </label>
        </div>
      </CustomCard>

      <CustomCard className={`container ${checkedItems.ads ? 'border-checked' : ''}`}>
        <div className="card-units">
          <div>
            <h2>Ads</h2>
            <p>Programming a complete responsive website</p>
          </div>
          {isYearly && <p className="text-success">20% saved</p>}
          <h5 className="mx-3">
            <strong className="fs-1">{getPrice(400)}</strong>€
          </h5>

          <label>
            <div className="d-flex align-items-center add-button">
              <input
                className="checkbox"
                type="checkbox"
                checked={checkedItems.ads}
                onChange={(e) => handleChecked(e, "ads")}
              />
              <span className="ms-3">Add</span>
            </div>
          </label>
        </div>
      </CustomCard>

      <CustomCard className={`container ${checkedItems.web ? 'border-checked' : ''}`}>
        <div className="card-units">
          <div>
            <h2>Web</h2>
            <p>Programming a complete responsive website</p>
          </div>
          {isYearly && <p className="text-success">20% saved</p>}
          <h5 className=" mx-3">
            <strong className="fs-1">{getPrice(500)}</strong>€
          </h5>

          <label>
            <div className="d-flex align-items-center add-button">
              <input
                className="checkbox"
                type="checkbox"
                checked={checkedItems.web}
                onChange={(e) => handleChecked(e, "web")}
              />
              <span className="ms-3">Add</span>
            </div>
          </label>
        </div>

        {checkedItems.web && (
          <WebElements
            elements={elements}
            setElements={setElements}
            handleClickAdd={handleClickAdd}
            handleClickRest={handleClickRest}
          />
        )}
      </CustomCard>
        <div className="budget mb-3">
        <div className="my-5">
          <h3 className="me-5">
            Budget:&nbsp; <strong className="fs-1">{budget}</strong>€
          </h3>
        </div>
        </div>
        
      
    </div>
  );
}
