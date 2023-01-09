import React from 'react';
import { Box, Tag } from '@chakra-ui/react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';

function TimelineElement(props: any) {
  const { color, date, icon, h3, h4, plist, position, display = true } = props;
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: color, color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid  ' + color }}
      date={date}
      iconStyle={{ background: color, color: '#fff' }}
      icon={icon}
      position={position}
    >
      <h3 className="vertical-timeline-element-title">{h3}</h3>
      <h4 className="vertical-timeline-element-subtitle">{h4}</h4>
      <Box display={display ? 'block' : 'none'}>
        {plist.map((e: string) => {
          return <p>{e}</p>;
        })}
      </Box>
    </VerticalTimelineElement>
  );
}
export default TimelineElement;
