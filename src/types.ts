export type NameObj = {
    nl?: string,
    en?: string
}

export type Food = {
    name: NameObj,
    state?: string,
    brand?: string,
    categories: string[],
    unit?: 'g' | 'ml',
    packageSize?: number,
    nutrition: {
        per: '100 g' | '100 ml',
        kcal: number,
        fats: number,
        carbohydrates: number,
        proteins: number
    }
}

export type Foods = Food[];