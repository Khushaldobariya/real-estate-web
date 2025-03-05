import React from "react";

type TimelineEvent = {
  year: string;
  title: string;
  description: string;
  icon: string;
};

interface TimeLineEventProps {
  event: TimelineEvent;
  index: number;
}

const TimeLineEvent: React.FC<TimeLineEventProps> = ({ event, index }) => {
  const isRight = index % 2 !== 0;

  return (
    <div className={`relative flex w-full ${isRight ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-sm p-6 bg-white shadow-lg rounded-lg border-l-4 border-blue-500 
        ${isRight ? "text-right" : "text-left"}`}
      >
        <div className="text-3xl">{event.icon}</div>
        <h3 className="text-lg font-semibold mt-2">
          {event.year} - {event.title}
        </h3>
        <p className="text-gray-600 mt-1">{event.description}</p>
      </div>
    </div>
  );
};

export default TimeLineEvent;
