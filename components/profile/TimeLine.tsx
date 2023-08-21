import styled from 'styled-components';

interface TimeLineItemProps {
  $gridColumn: string;
}
const YEAR_PERIOD = new Array(13).fill(0).map((_, i) => 2010 + i);
function TimeLine() {
  return (
    <TimeLineWrap>
      <TimeLineLabel>
        {YEAR_PERIOD.map((v, index) => (
          <LabelYear key={index}>{v}</LabelYear>
        ))}
      </TimeLineLabel>
      <TimeLineContent>
        <TimeLineItem $gridColumn="1/36">
          <span>이토마토(3년 11개월)</span>
        </TimeLineItem>
        <TimeLineItem $gridColumn="36/50">
          <span>이썸테크(1년 11개월)</span>
        </TimeLineItem>
        <TimeLineItem $gridColumn="50/62">
          <span>엔쓰리엔(1년 7개월)</span>
        </TimeLineItem>
        <TimeLineItem $gridColumn="62/88">
          <span>엑셈(3년 6개월)</span>
        </TimeLineItem>
        <TimeLineItem $gridColumn="91/95">
          <span>미스고(7개월)</span>
        </TimeLineItem>
      </TimeLineContent>
    </TimeLineWrap>
  );
}

const TimeLineWrap = styled.div`
  width: 100%;
  min-height: 50px;
  border: 2px solid #ccc;
  border-radius: 10px;
  padding: 10px;
`;

const TimeLineLabel = styled.div`
  display: grid;
  grid-template-columns: repeat(${YEAR_PERIOD.length}, 1fr);
  margin-bottom: 12px;
`;

const LabelYear = styled.div`
  border-left: 0.5px solid #ccc;
  color: #b2c0cc;
  line-height: 1.5;
  font-size: 12px;
`;

const TimeLineContent = styled.div`
  display: grid;
  grid-template-columns: repeat(96, 1fr);
  grid-auto-flow: column;
  grid-gap: 10px;
  padding-top: 0.2px;
`;

const TimeLineItem = styled.div<TimeLineItemProps>`
  grid-column: ${(props) => props.$gridColumn};
  background-color: #44576c;
  color: white;
  cursor: text;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: center;
  z-index: 2;
  position: relative;
  line-height: 2;

  span {
    font-size: 12px;
  }
`;
export default TimeLine;
