import { useState } from 'react';
import styled from 'styled-components';
import Card from '@/components/profile/Card';
import TimeLine from '@/components/profile/TimeLine';
import { WorkType } from '@/interfaces/works';
import data from '@/mocks/profile.json';
import data_ect from '@/mocks/profile_etc.json';
import { Button } from '@/components/Button';
import DefaultLayout from '@/layout/DefaultLayout';

const Profile = () => {
  const [showMore, setShowMore] = useState(false);
  const onMoreClick = () => {
    setShowMore(!showMore);
  };
  return (
    <DefaultLayout>
      <Section>
        <TimeLineContainer>
          <TimeLine />
        </TimeLineContainer>
        <TimeLineContainer>
          <p>
            간단 소개글 <br />
            개발자도 좋은 제품을 만들기 위해 고민해야한다고 생각합니다. <br />
            팀원들과 스크럼 형태로 협업해서 일 하는 것을 좋아하고, 작고 빠르게
            만들어서 보여주는 것을 좋아합니다. <br />
            테스트 주도 개발을 하려고 노력하고 있습니다.
          </p>
        </TimeLineContainer>
        {data.map((value: WorkType, index: number) => {
          return <Card value={value} key={index} />;
        })}
        <div
          style={{ width: '100%', textAlign: 'center', marginBottom: '20px' }}
        >
          {!showMore && <Button onClick={onMoreClick} label="더보기" />}
        </div>
        {showMore &&
          data_ect.map((value: WorkType, index: number) => {
            return <Card value={value} key={index} />;
          })}
      </Section>
    </DefaultLayout>
  );
};

const Section = styled.section`
  height: 100%;
  padding-top: 10rem;
`;

const TimeLineContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10rem;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

export default Profile;
