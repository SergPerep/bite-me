import Button from "../BaseUI/Button";
import Input from "../BaseUI/Input";
import Select from "../BaseUI/Select";
const Edit = () => {
    const options = [{
        name: "Eggs",
        value: "eggs",
    }, {
        name: "Vegetables",
        value: "veg",
    }]
    return <div className="edit">
        <div className="edit__header">
            <h2>Edit &apos;Lassie Toverrijst builtj&apos;</h2>
        </div>
        <div className="edit__body">
            <div className="basic-block">
                <h3>Basic info</h3>
            <Input label='Name' placeholder="Name" type='text'/>
            <Input label='Brand' placeholder="Brand" type='text'/>
            <Input label='Categories' placeholder="Categories" type='text'/>
            <Select label="Categories" placeholder="Select category" options={options}/>
            <Input label='Package size' placeholder="Package size" type='text'/>
            <Input label='Unit' placeholder="Unit" type='text'/>
            
            </div>
            <div className="nutrition-block">
                <h3>Nutrition</h3>
                <Input label='Per' placeholder="Per" type='text'/>
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