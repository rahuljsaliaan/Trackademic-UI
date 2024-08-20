import { format, parse } from 'date-fns';

export const createSemester = (semester: number): number[] => {
  const AllSemester: number[] = [];
  for (let i = 1; i <= semester; i++) {
    AllSemester.push(i);
  }
  return AllSemester;
};

export const getDateFromTimeString = (timeString: string): Date => {
  const now = new Date();
  const dateString = format(now, 'yyyy-MM-dd');
  const dateTimeString = `${dateString} ${timeString}`;
  const date = parse(dateTimeString, 'yyyy-MM-dd HH:mm', new Date());

  return date;
};
