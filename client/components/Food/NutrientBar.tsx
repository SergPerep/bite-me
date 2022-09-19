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

export default NutrientBar;