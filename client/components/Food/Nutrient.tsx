const Nutrient = ({ title, value }: { title: string, value: number }) => {
    return <span className="food__nutrient">
            <span className="title">{`${title}: `}</span>
            <span className="value"> {`${value}g`}</span>
        </span>
}

export default Nutrient;