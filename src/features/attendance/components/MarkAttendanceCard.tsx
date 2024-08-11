import styled from 'styled-components';

interface MarkAttendanceCardProps {
  status: 'normal' | 'warning' | 'absent';
}

const getBorderColor = (status: 'normal' | 'warning' | 'absent') => {
  switch (status) {
    case 'warning':
      return '#F5B640'; // Orange color for warning
    case 'absent':
      return 'transparent'; // No border for absent
    default:
      return '#4535EA'; // Default color
  }
};

const getBackgroundColor = (status: 'normal' | 'warning' | 'absent') => {
  switch (status) {
    case 'absent':
      return '#FF5151'; // Red background for absent
    default:
      return '#FFFFFF'; // White background for normal and warning
  }
};

const getTextColor = (status: 'normal' | 'warning' | 'absent') => {
  return status === 'absent' ? '#FFFFFF' : '#000000'; // White text for absent, black otherwise
};

const CardContainer = styled.div<MarkAttendanceCardProps>`
  display: flex;
  align-items: center;
  width: 100%;
  border: 2px solid ${(props) => getBorderColor(props.status)};
  border-radius: 10\px;
  background-color: ${(props) => getBackgroundColor(props.status)};
  color: ${(props) => getTextColor(props.status)};
  padding: 16px;
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
`;

const InfoContainer = styled.div``;

const StatsContainer = styled.div`
  display: flex;
`;

const StatItem = styled.div`
  font-size: 12px;
  font-weight: 500;
`;

const Status = styled.div<{ status: 'normal' | 'warning' | 'absent' }>`
  font-size: 14px;
  font-weight: 700;
  background-color: ${(props) =>
    props.status === 'absent' ? '#FF6B6B' : 'transparent'};
  color: ${(props) => (props.status === 'absent' ? '#FFFFFF' : '#000000')};
  padding: 4px 8px;
  border-radius: 4px;
`;

export const MarkAttendanceCard: React.FC<MarkAttendanceCardProps> = ({
  status
}) => {
  return (
    <CardContainer status={status}>
      <PhotoContainer>{/* Add photo or avatar here */}</PhotoContainer>
      <InfoContainer>
        <h1 className="take-attendace-card-stud-name">John Doe</h1>
        <p className="take-attendace-card-stud-usn">4SO22MC001</p>
      </InfoContainer>
      <StatsContainer>
        <StatItem>Held, Count</StatItem>
        <StatItem>Absent, Count</StatItem>
        <StatItem>Percentage, Count</StatItem>
      </StatsContainer>
      <Status status={status}>P or A</Status>
    </CardContainer>
  );
};
