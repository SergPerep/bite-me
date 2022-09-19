import NutrientBar from "./NutrientBar";
import Nutrient from "./Nutrient";
const Nutrients = ({ nutrientVals }: { 
    nutrientVals : {
        fatsNum: number,
        carbsNum: number,
        proteinsNum: number 
    }}) => {
    return <div className="food__nutrients">
            <div className="food__nutrients__values">
                <Nutrient title="Fats" value={nutrientVals.fatsNum} />
                <Nutrient title="Carbs" value={nutrientVals.carbsNum} />
                <Nutrient title="Proteins" value={nutrientVals.proteinsNum} />
            </div>
            <NutrientBar nutrientVals={nutrientVals} />
        </div>
}

export default Nutrients;