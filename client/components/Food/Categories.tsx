const Category = ({ title }: { title: string }) => {
  return <span className="category">{title}</span>;
};

const Categories = ({
  categories,
}: {
  categories: { id: string; name: string }[];
}) => {
  return (
    <div className="categories">
      {categories.map((category) => (
        <Category key={category.id} title={category.name} />
      ))}
    </div>
  );
};

export default Categories;
