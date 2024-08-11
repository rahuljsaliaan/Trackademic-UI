export const createSemester = (semester: number): number[] => {
  const AllSemester: number[] = [];
  for (let i = 1; i <= semester; i++) {
    AllSemester.push(i);
  }
  return AllSemester;
};
