import {useEffect, useState} from "React"
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import SectionHeader from '@/components/dashboard/SectionHeader';
import {
  CreateAnnouncementDTO,
  createAnnouncementSchema,
  IProgrammeDocument
} from 'trackademic-schema-toolkit';
import { useAddAnnouncement } from '@/features/announcement';
import InputSelectWithLabel from '@/components/formElements/inputs/InputSelectWithLabel';
import InputWithLabel from '@/components/formElements/inputs/InputWithLabel';
import PageLayout from '@/layouts/PageLayout';
import { useGetAllBatches } from "@/features/batch";
import { useGetCurrentUser } from "@/features/users";

export default function AddAnnouncement() {
  const { mutate, status } = useAddAnnouncement();
  const {user} = useGetCurrentUser();

  const programmeId = (user?.programme as IProgrammeDocument).id as string

  const { allBatches } = useGetAllBatches({programmeId});

  const {
    register,
    handleSubmit
    // formState: { errors },
    // setError
    // rese
  } = useForm<CreateAnnouncementDTO>({
    resolver: zodResolver(createAnnouncementSchema)
  });

  const [selectedAudience, setSelectedAudience] = useState<string>();

  const [selectedAudienceId, setSelectAudienceId] = useState<string>();

  useEffect(() => {
    setSelectAudienceId()

  },[selectedAudience])

  const handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedAudience(e.target.value);
    query.set(APIResourceV1.Subject, e.target.value);
    navigate({ search: query.toString() });
  };

  function handleOnSubmit(data: CreateAnnouncementDTO) {
      mutate(data);
    }
  }

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
        value={selectedAudience}
        onChange={handleOnChange}
      />
      <form onSubmit={handleSubmit(handleOnSubmit)}>
        <InputWithLabel
          id="subject"
          type="text"
          label="Subject"
          placeholder="Type Here"
          register={register}
          field="subject"
          disabled={status === 'pending'}
        />
        <InputWithLabel
          id="announcement"
          type="text"
          label="announcement"
          placeholder="Type Here"
          register={register}
          field="announcement"
          disabled={status === 'pending'}
        />
      </form>
    </PageLayout>
  );
}
