const Category = ({ title }: { title: string}) => {
    return <span className="category">{title}</span>
}

const Categories = ({ categories }: { categories: string[] }) => {
    return <div className="categories">
        { categories.map((categoryStr, index) => <Category key={index} title={categoryStr} />)}
    </div>
}

export default Categories;