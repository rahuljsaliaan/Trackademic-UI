import { useEffect, useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import SectionHeader from '@/components/dashboard/SectionHeader';
import {
  APIResourceV1,
  CreateAnnouncementDTO,
  createAnnouncementSchema,
  IProgrammeDocument
} from 'trackademic-schema-toolkit';
import { useAddAnnouncement } from '@/features/announcement';
import InputSelectWithLabel from '@/components/formElements/inputs/InputSelectWithLabel';
import InputWithLabel from '@/components/formElements/inputs/InputWithLabel';
import PageLayout from '@/layouts/PageLayout';
import { useGetAllBatches } from '@/features/batch';
import { useGetCurrentUser } from '@/features/users';
import { useQueryParams } from '@/hooks/useQueryParams';
import { useNavigate } from 'react-router-dom';
import Button from '@/components/formElements/buttons/Button';
import { AppRoute } from '@/types/enum.types';

export default function AddAnnouncement() {
  const { mutate, status } = useAddAnnouncement({
    navigationLink: AppRoute.DashboardHOD
  });
  const { user } = useGetCurrentUser();
  const query = useQueryParams();
  const navigate = useNavigate();

  const programmeId = (user?.programme as IProgrammeDocument).id as string;
  const programme = (user?.programme as IProgrammeDocument).shortName as string;

  const { allBatches } = useGetAllBatches({ programmeId });

  const {
    register,
    handleSubmit
    // formState: { errors },
    // setError
    // rese
  } = useForm<CreateAnnouncementDTO>({
    resolver: zodResolver(createAnnouncementSchema)
  });

  const [options, setOptions] = useState<{ value: string; label: string }[]>(
    []
  );

  const [selectedAudience, setSelectedAudience] = useState<string>();

  useEffect(() => {
    if (allBatches) {
      setOptions(
        allBatches.map((batch) => ({
          value: batch.id as string,
          label: `${programme}${batch.section}`
        }))
      );
    }
  }, [allBatches]);

  const handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedAudience(e.target.value);
    query.set(APIResourceV1.Batch, e.target.value);
    navigate({ search: query.toString() });
  };

  function handleOnSubmit(data: CreateAnnouncementDTO) {
    const realData = {
      programmeId,
      batchId: selectedAudience,
      ...data
    };
    mutate(realData);
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
        options={options}
        value={selectedAudience}
        onChange={handleOnChange}
      />
      <form onSubmit={handleSubmit(handleOnSubmit)}>
        <InputWithLabel
          id="announcementSubject"
          type="text"
          label="Subject"
          placeholder="Type Here"
          register={register}
          field="announcementSubject"
          disabled={status === 'pending'}
        />
        <InputWithLabel
          id="announcementContent"
          type="text"
          label="announcement"
          placeholder="Type Here"
          register={register}
          field="announcementContent"
          disabled={status === 'pending'}
        />
        <Button text="Submit" type="submit" />
      </form>
    </PageLayout>
  );
}
