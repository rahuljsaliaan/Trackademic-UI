import {
  APIResourceV1,
  IAssignedSubjectDocument
} from 'trackademic-schema-toolkit';
import axiosService from '@/services/api';

export const addOrUpdateNote = async ({
  note,
  assignedSubjectId
}: {
  note: IAssignedSubjectDocument['note'];
  assignedSubjectId: string;
}): Promise<IAssignedSubjectDocument> => {
  const response = await axiosService.patch(
    `${APIResourceV1.AssignedSubject}/${assignedSubjectId}/note`,
    {
      note
    }
  );
  return response.data;
};
