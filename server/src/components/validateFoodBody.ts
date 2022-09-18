import { AppError, WrongTypeError, EmptyFieldError } from "./errors/appErrors";
import { Food } from "../types";

const validateName = (nameObj: { [key: string]: string}) => {
    const langs = ["en", "nl"];
    if(!nameObj) throw new EmptyFieldError("name");
    if (typeof nameObj !== "object") throw new WrongTypeError("name", nameObj, "object");

    const propList = langs.filter(langName => langName in nameObj);

    if (propList.length === 0) throw new AppError("'name' does not have any suitable properties", 400);

    propList.forEach(propName => {
        const propVal = nameObj[propName];
        if (!propVal) throw new EmptyFieldError(`name.${propName}`);
        if (typeof propVal !== "string") throw new WrongTypeError(`name.${propName}`, propVal, "string");
    })
}

const validateFoodBody = (body: Food) => {
    const { name, brand, categories, unit, packageSize, nutrition } = body;
    validateName(name);
    if (brand === undefined) throw new AppError(`Empty field: brand`);
    if (categories === undefined) throw new AppError(`Empty field: categories`);
    if (unit === undefined) throw new AppError(`Empty field: unit`);
    if (packageSize === undefined) throw new AppError(`Empty field: packageSize`);
    if (nutrition === undefined) throw new AppError(`Empty field: nutrition`);
}

export default validateFoodBody;