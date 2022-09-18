
const Nutrient = ({ title, value }: { title: string, value: number }) => {
    return <span className="food__nutrient">
            <span className="title">{`${title}:`}</span>
            <span className="value"> {`${value}g`}</span>
        </span>
}

type NutrientVals = { fatsNum: number, carbsNum: number, proteinsNum: number }

const NutrientBar = ({ nutrientVals }: { nutrientVals: NutrientVals }) => {
    const { fatsNum, carbsNum, proteinsNum } = nutrientVals;
    const sumNum = fatsNum + carbsNum + proteinsNum;
    const calcPercentStr = (num: number) => num * 100 / sumNum + "%";
    
    return <div className="nutrient-bar">
        <span className="fats" style={{ width: calcPercentStr(fatsNum)}}/>
        <span className="carbohydrates" style={{ width: calcPercentStr(carbsNum)}}/>
        <span className="proteins" style={{ width: calcPercentStr(proteinsNum) }}/>
    </div>
}

const Nutrients = ({ nutrientVals }: { 
    nutrientVals : {
        fatsNum: number,
        carbsNum: number,
        proteinsNum: number 
    }}) => {
    return <div className="food__nutrients">
            <div className="food__nutrients__values">
                <Nutrient title="Fats" value={nutrientVals.fatsNum} />
                <Nutrient title="Carbohydrates" value={nutrientVals.carbsNum} />
                <Nutrient title="Proteins" value={nutrientVals.proteinsNum} />
            </div>
            <NutrientBar nutrientVals={nutrientVals} />
        </div>
}

export default Nutrients;