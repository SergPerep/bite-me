import { useState } from "react";
import Button from "../BaseUI/Button";
import Input from "../BaseUI/Input";
import Segments from "../BaseUI/Segments/Segments";
import Select from "../BaseUI/Select";
import MultiSelect from "../BaseUI/MultiSelect/MultiSelect";
import InputWithSelect from "../BaseUI/InputWithSelect/InputWithSelect";

type Segment = {
    id: string; // to connect label with input
    title: string;
    value: string;
};

const Edit = () => {
    const options = [{
        name: "Eggs",
        value: "eggs",
    }, {
        name: "Vegetables",
        value: "veg",
    }];
    const units = [{
        id: "100-g",
        title: "100 g",
        value: "100 g"
    }, {
        id: "100-ml",
        title: "100 ml",
        value: "100 nl"
    }];
    const categories = [
        {
            title: "Fruit",
            value: "fruit"
          },
          {
            title: "Vegetables",
            value: "veg"
          }
    ]
    const [selectedUnitValue, setSelectedUnitValue] = useState("g");
    const handleSegmentClick = (segmentValue: string) => {
        if (segmentValue === selectedUnitValue) return;
        setSelectedUnitValue(segmentValue);
    }
    return <div className="edit">
        <div className="edit__header">
            <h2>Edit &apos;Lassie Toverrijst builtj&apos;</h2>
        </div>
        <div className="edit__body">
            <div className="basic-block">
                <h3>Basic info</h3>
            <Input label='Product name' placeholder="Name" type='text'/>
            <Select label="Brand" placeholder="Brand" options={[{ value: "ah", name: "Albert Heijn"}, { value: "jumbo", name: "Jumbo"}]}/>
            <MultiSelect
                label="Categories"
                name="categories"
                id="categories"
                options={categories}
                placeholder="Select category"
            />
            <InputWithSelect  label="Package size" type="number" placeholder="e.g. 200" selectOptions={[ {value: "g", title: "g"}, {value: "ml" , title: "ml"}]}/>
            </div>
            <div className="nutrition-block">
            
            
                <h3>Nutrition</h3>
                <Segments 
                segments={units} 
                name="per" 
                title="Per"
                selectedSegmentValue={selectedUnitValue}
                handleSegmentClick={handleSegmentClick}/>
                <Input label='Energy' placeholder="Energy" type='text' suffix='kCal'/>
                <div className="composition">
                    <Input label='Fats' placeholder="e.g. 0.5" type='number' suffix="g"/>
                    <Input label='Carbs' placeholder="e.g. 0.3" type='number' suffix="g"/>
                    <Input label='Proteins' placeholder="e.g. 0.9" type='number' suffix="g"/>
                </div>
            </div>
        </div>
        <div className="edit__footer">
            <Button>Save changes</Button>
            <Button type="secondary">Cancel</Button>
        </div>
    </div>
}

export default Edit;