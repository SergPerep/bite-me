import Segment from "./Segment";

const Segments = ({
  segments = [],
  selectedSegmentValue = null,
  name = "", // to group radio buttons
  title = "Title",
  handleSegmentClick,
}: {
  segments: { id: string; title: string; value: string }[];
  selectedSegmentValue: null | string;
  name: string;
  title: string
  handleSegmentClick: Function;
}) => {
  return (
    <div className="segments">
        <div className="title">{title}</div>
        <div className="segment-list">
            {segments.map((segment) => (
                <Segment
                key={segment.value}
                value={segment.value}
                isSelected={segment.value === selectedSegmentValue}
                name={name}
                id={segment.id}
                onClick={() => handleSegmentClick(segment.value)}
                >
                {segment.title}
                </Segment>
            ))}
      </div>
    </div>
  );
};

export default Segments;