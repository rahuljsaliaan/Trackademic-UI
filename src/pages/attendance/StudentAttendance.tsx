import Header from '@/layouts/Header';
import SectionHeader from '@/components/dashboard/SectionHeader';
import InputSelectWithLabel from '@/components/formElements/inputs/InputSelectWithLabel';
import Table from '@/components/table/Table';
import Footer from '@/components/dashboard/Footer';
// import StudentAttendanceSummary from '@/features/attendance/components/StudentAttendanceSummary';

export default function StudentAttendance() {

  const columns = [
    { name: 'Sl. No', width: '10%' },
    { name: 'Subject', width: '50%' },
    { name: 'H', width: '10%' },
    { name: 'P', width: '10%' },
    { name: 'A', width: '10%' },
    { name: '%', width: '10%' }
  ];

  const rows = [
    ['01', 'DSA', '50', '25', '25', '50'],
    ['02', 'Java', '50', '25', '25', '50'],
    ['03', 'DBMS', '50', '25', '25', '50'],
    ['04    ', 'Python', '50', '25', '25', '50'],
  ];

  const options = [
  { value: 'option1', label: 'Semester 01' },
  { value: 'option2', label: 'Semester 02' },
  { value: 'option3', label: 'Semester 03' },
];

  return (
    <div className="dashboard">
      <div className="dashboard-contents">
        <Header
          profileSrc="src/assets/images/profile.png"
          greetingText="Namasthe!"
          bellIconSrc="src/assets/icons/notificationBell.svg"
          notificationDot={true}
          menuIconSrc="src/assets/icons/menu.svg"
          closeIconSrc="src/assets/icons/menuClose.svg"
        />
        <div className="dashboard-attendance-section">
          <SectionHeader title="Attendance" tagline="Dive into Your Semester Stories!" showButton={false} />
            <InputSelectWithLabel
                label="Pick Your Semester"
                placeholder="Tap Here to Choose"
                options={options}
                // value={selectedValue}
                // onChange={handleSelectChange}
            />
            <Table columns={columns} rows={rows} />
            {/* <StudentAttendanceSummary /> */}
        </div>
        <div className='attendance-absent-calender-container'>
            <label className='attendance-absent-calender'>Absentee Calendar</label>
            <InputSelectWithLabel
                label="Pick Your Subject"
                placeholder="Tap Here to Choose"
                options={options}
                // value={selectedValue}
                // onChange={handleSelectChange}
            />
            {/* Add calendar here */}
        </div>
      </div>
      <Footer />
    </div>
  );
}
