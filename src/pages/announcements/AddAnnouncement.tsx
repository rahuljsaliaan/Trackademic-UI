import SectionHeader from '@/components/dashboard/SectionHeader';
import InputSelectWithLabel from '@/components/formElements/inputs/InputSelectWithLabel';
import InputWithLabel from '@/components/formElements/inputs/InputWithLabel';
import PageLayout from '@/layouts/PageLayout';

export default function HodDashboard() {
  return (
    <PageLayout>
      <div className="dashboard-attendance-section">
        <SectionHeader
          title="Add Announcement"
          tagline="Inform the Masses"
          showButton={false}
        />
      </div>
      <InputSelectWithLabel
        label="Target Audience"
        placeholder="Tap Here to Choose"
        options={}
        value={}
        onChange={}
      />
      <form onSubmit={}>
        <InputWithLabel
          label="Subject"
          placeholder="Type Here"
          type='text'
          id='subject'
          disabled={false}
        />
        <InputWithLabel
          label="Announcement"
          placeholder="Type Here"
          type='text'
          id='announcementText'
          disabled={false}
        />
      </form>
    </PageLayout>
  );
}
