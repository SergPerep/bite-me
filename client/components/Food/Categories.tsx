const Category = ({ title }: { title: string }) => {
  return <span className="category">{title}</span>;
};

const Categories = ({
  categories,
}: {
  categories: { _id: string; name: string }[];
}) => {
  return (
    <div className="categories">
      {categories.map((category, index) => (
        <Category key={category._id} title={category.name} />
      ))}
    </div>
  );
};

export default Categories;
