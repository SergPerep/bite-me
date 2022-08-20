# Bite Me

API that provides calories and nutrition values of selected food-item

- [Trello board](https://trello.com/b/9ByOfERn/biteme)
- [Design in Figma](https://www.figma.com/file/zMPIMljj2vdqFrcMS5v9gi/%F0%9F%8D%A9-BiteMe?node-id=0%3A1)
- [Change log](/docs/change-log.md)


Product model

```JSON
{   
    "id": "9832rbliabfa9hfw",
    "name": "Cola, Cherry",
    "description": "...",
    "brand_id": "u3r982qrg9ahwf",
    "brand_name": "Coke",
    "calories": 100,
    "proteins": 50,
    "fats": 22,
    "carbohydrates": 28,
    "barcode": 
}
```

```JSON
{   
    "id": "9832rbliabfa9hfw",
    "name": "Cola, Cherry",
    "brand": "Coke",
    "nutrition": {
        "per": "100g" | "100ml",
        "calories": 100,
        "proteins": 50,
        "fats": 22,
        "carbohydrates": 28,
    },
    "package_size": {
        "value": 300,
        "unit": "g"
    },
    "portion_size": {
        "value": 30,
        "unit": "g"
    }
}
```


```JSON
{   
    "id": "6268662228270265ce2db44b",
    "name": "AH Mini eierkoeken",
    "brand": "AH",
    "nutrition": {
        "per": "100g",
        "kCal": 100,
        "proteins": 6.4,
        "fats": 2,
        "carbohydrates": 61
    },
    "packageSize": "224g",
    "portionSize": "28g"
}
```