import Quote from '@/components/card/Quote';
import SectionHeader from '@/components/dashboard/SectionHeader';
import PageLayout from '@/layouts/PageLayout';
import { ClassTable } from '@/features/enrollment';
import Table from '@/components/table/Table';

const columns = [
  { name: 'Sl. No', width: '15%' },
  { name: 'Event', width: '50%' },
  { name: 'Date', width: '35%' }
];

const rows = [
  ['01', 'Sports Meet', 'August 15, 2024'],
  ['02', 'Cultural Fest 2024', 'September 5, 2024'],
  ['03', 'Joshiana', 'September 20, 2024'],
  ['04', 'Tiara', 'December 10, 2024']
];

export default function PrincipalDashboard() {
  return (
    <PageLayout>
      <Quote
        heading="Quote of the Day"
        quote="A good teacher can inspire hope, ignite the imagination, and instill a love of learning."
        author="Brad Henry"
      />
      <div className="dashboard-examinations-section">
        <SectionHeader
          title="Dept Spotlight"
          tagline="Dive into the details of every dept in the college."
        />
        <ClassTable />
      </div>
      <div className="dashboard-announcements-section">
        <SectionHeader
          buttonText="Add"
          title="Announcements"
          tagline="Hot News & Cool Updates"
        />
      </div>
      <div className="dashboard-calendar-section">
        <SectionHeader
          title="Events & Calendar"
          tagline="Discover What's Coming Up Around You!"
        />
        <Table columns={columns} rows={rows} />
      </div>
    </PageLayout>
  );
}
