import styled from 'styled-components';
import Label from '../Label';
import { WorkType } from '../../interfaces/works';
import { getLabelColor } from '../../utils/Utils';
import { Fragment } from 'react';

const Card = (props: { value: WorkType }) => {
  const { title, date, contents, skill } = props.value;
  const handleLabelButton = () => {};
  const Item = ({ performance }: any) => {
    return performance.map((item: string, index: number) => {
      return (
        <li key={`item_${index}`} style={{ listStyle: 'circle' }}>
          {item}
        </li>
      );
    });
  };
  return (
    <Wrapper>
      <Title>
        <h1>{title}</h1>
        <Date>{date}</Date>
      </Title>
      <Container>
        <Labels>
          {skill.map((el, index) => (
            <Label
              onClick={handleLabelButton}
              {...getLabelColor(el)}
              key={index}
            >
              {el.toUpperCase()}
            </Label>
          ))}
        </Labels>
        {contents.map((content, index) => {
          const { performance, summary, range, description } = content;
          return (
            <Fragment key={`content_${index}`}>
              <div>
                <h4>{summary}</h4>
              </div>
              <div>
                <Range>{description}</Range>
              </div>
              <div>
                <Range>{range}</Range>
              </div>
              <ul>
                <Item performance={performance} />
              </ul>
            </Fragment>
          );
        })}
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 50px;
  border-bottom: 1px solid #ccc;
  display: flex;
  flex-direction: row;
  flex: 1;

  @media screen and (max-width: 500px) {
    flex-direction: column;
    margin: 0;
  }
`;

const Title = styled.div`
  width: 250px;
  text-align: center;

  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

const Container = styled.div`
  margin: 10px;
  flex: 1;
  ul {
    min-height: fit-content;
    line-height: 2;
  }
`;

const Summary = styled.div`
  font-weight: bold;
  font-size: 2rem;
`;

const Date = styled.div`
  color: gray;
  font-size: 15px;
`;

const Labels = styled.div`
  display: flex;
  margin: 2px;
  justify-content: flex-end;
  height: 40px;
`;

const Range = styled.div`
  color: gray;
  font-size: 15px;
  padding-top: 5px;
`;
export default Card;
