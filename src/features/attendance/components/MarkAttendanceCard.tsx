import React from 'react';
import styled from 'styled-components';

interface MarkAttendanceCardProps {
  status: 'normal' | 'warning' | 'absent';
  photoUrl?: string;
  onClick?: () => void;
  name: string; 
  usn: string;
}

const getBorderColor = (status: 'normal' | 'warning' | 'absent') => {
  switch (status) {
    case 'warning':
      return '#F5B640';
    case 'absent':
      return 'transparent';
    default:
      return '#4535EA';
  }
};

const getBackgroundColor = (status: 'normal' | 'warning' | 'absent') => {
  switch (status) {
    case 'absent':
      return '#FF5151';
    default:
      return '#FFFFFF';
  }
};

const getTextColor = (status: 'normal' | 'warning' | 'absent') => {
  return status === 'absent' ? '#FFFFFF' : '#000000';
};

const CardContainer = styled.div<MarkAttendanceCardProps>`
  display: flex;
  align-items: center;
  width: 100%;
  border: 2px solid ${(props) => getBorderColor(props.status)};
  border-radius: 10px;
  background-color: ${(props) => getBackgroundColor(props.status)};
  color: ${(props) => getTextColor(props.status)};
  padding: 16px;
  justify-content: space-between;
  margin-bottom: 16px;
  cursor: ${(props) => (props.onClick ? 'pointer' : 'default')};
`;

const PhotoContainer = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const InfoContainer = styled.div`
  flex: 1;
  margin-left: 16px;
`;

const StatsContainer = styled.div`
  display: flex;
  gap: 16px;
`;

const StatItem = styled.div`
  font-size: 12px;
  font-weight: 500;
`;

const Status = styled.div<{ status: 'normal' | 'warning' | 'absent' }>`
  font-size: 20px;
  font-weight: 700;
  background-color: ${(props) =>
    props.status === 'absent' ? '#FF5151' : '#462EE8'};
  color: #ffffff;
  padding: 8px;
  border-radius: 5px;
  border: 1px solid
    ${(props) => (props.status === 'absent' ? '#FFFFFF' : '#462EE8')};
  line-height: 1;
  margin-left: 16px;
`;

export const MarkAttendanceCard: React.FC<MarkAttendanceCardProps> = ({
  status,
  photoUrl,
  onClick,
  name,
  usn,
}) => {
  const statusText = status === 'absent' ? 'A' : 'P';

  return (
    <CardContainer name={name} usn={usn} status={status} onClick={onClick}>
      <PhotoContainer>
        {photoUrl ? <img src={photoUrl} alt="Student Avatar" /> : null}
      </PhotoContainer>
      <InfoContainer>
        <h1 className="take-attendace-card-stud-name">{name}</h1>
        <p className="take-attendace-card-stud-usn">{usn}</p>
      </InfoContainer>
      <StatsContainer>
        <StatItem className="take-attendance-card-stat-item-head">
          <h2>H</h2>
          <p>25</p>
        </StatItem>
        <StatItem className="take-attendance-card-stat-item-head">
          <h2>P</h2>
          <p>23</p>
        </StatItem>
        <StatItem className="take-attendance-card-stat-item-head">
          <h2>%</h2>
          <p>80</p>
        </StatItem>
      </StatsContainer>
      <Status status={status}>{statusText}</Status>
    </CardContainer>
  );
};

export default MarkAttendanceCard;
