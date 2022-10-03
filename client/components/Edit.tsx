import { MouseEventHandler, useState } from "react";
import Button from "./BaseUI/Button";
import Input from "./BaseUI/Input";
import Segments from "./BaseUI/Segments/Segments";
import Select from "./BaseUI/Select";
import MultiSelect from "./BaseUI/MultiSelect/MultiSelect";
import InputWithSelect from "./BaseUI/InputWithSelect/InputWithSelect";
import Icon from "./BaseUI/Icon";
import useCategory from "../hooks/useCategory";
import useFood from "../hooks/useFood";
import useCategories from "../hooks/useCategories";

type Segment = {
  id: string; // to connect label with input
  title: string;
  value: string;
};

const Edit = ({
  id,
  onClickClose = () => {},
}: {
  id: string;
  onClickClose: MouseEventHandler;
}) => {
  const food = useFood(id);
  const categories = useCategories();
  const units = [
    {
      id: "100-g",
      title: "100 g",
      value: "100 g",
    },
    {
      id: "100-ml",
      title: "100 ml",
      value: "100 nl",
    },
  ];
  const [selectedUnitValue, setSelectedUnitValue] = useState("g");
  const handleSegmentClick = (segmentValue: string) => {
    if (segmentValue === selectedUnitValue) return;
    setSelectedUnitValue(segmentValue);
  };
  console.log(food?.name);
  return (
    <div className="overlay">
      {food && categories.length !== 0 && (
        <div className="edit">
          <div className="edit__header">
            <h2>Add a product</h2>
            <Icon name="close" type="line" onClick={onClickClose} />
          </div>
          <div className="edit__body">
            <div className="basic-block">
              <h3>Basic info</h3>
              <Input
                label="Product name"
                placeholder="e.g. Milka Chocolate"
                type="text"
                defaultValue={food?.name}
              />

              <Select
                label="Brand"
                placeholder="e.g. Milka"
                options={[
                  { value: "ah", name: "Albert Heijn" },
                  { value: "jumbo", name: "Jumbo" },
                  { value: "milka", name: "Milka" },
                ]}
              />
              <MultiSelect
                label="Categories"
                name="categories"
                id="categories"
                options={categories}
                placeholder="e.g. Chocolate, Fruit, Vegetable..."
              />
              <InputWithSelect
                label="Package size"
                type="number"
                placeholder="e.g. 100"
                selectOptions={[
                  { value: "g", title: "g" },
                  { value: "ml", title: "ml" },
                ]}
              />
            </div>
            <div className="nutrition-block">
              <h3>Nutrition</h3>
              <Segments
                segments={units}
                name="per"
                title="Per"
                selectedSegmentValue={selectedUnitValue}
                handleSegmentClick={handleSegmentClick}
              />
              <Input
                label="Energy"
                placeholder="e.g. 532"
                type="text"
                suffix="kcal"
              />
              <div className="composition">
                <Input
                  label="Fats"
                  placeholder="e.g. 29"
                  type="number"
                  suffix="g"
                />
                <Input
                  label="Carbs"
                  placeholder="e.g. 59"
                  type="number"
                  suffix="g"
                />
                <Input
                  label="Proteins"
                  placeholder="e.g. 6.1"
                  type="number"
                  suffix="g"
                />
              </div>
            </div>
          </div>
          <div className="edit__footer">
            <Button onClick={() => {}}>Save changes</Button>
            <Button type="secondary" onClick={onClickClose}>
              Cancel
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Edit;
