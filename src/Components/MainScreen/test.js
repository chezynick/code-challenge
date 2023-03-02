import { render, screen, waitFor } from '@testing-library/react';
import getAbsenceConflicts from '../../Services/getAbsenceConficts';
import getAllAbsences from '../../Services/getAllAbsences';
import App from './App';

describe('Absence App', () => {
  jest.mock('../../Services/getAbsenceConficts');
  jest.mock('../../Services/getAllAbsences');
  getAbsenceConflicts.mockImplementation(() => Promise.resolve({ data: { conflicts: false } }));
  getAllAbsences.mockImplementation(() => Promise.resolve({
    data: [
      {
        absenceType: "SICKNESS",
        approved: true,
        days: 9,
        employee: {
          firstName: "Rahaf",
          id: "2ea05a52-4e31-450d-bbc4-5a6c73167d17",
          lastName:"Deckard"
          },
        id: 0,
        startDate:"2022-05-28T04:39:06.470Z"}
  ] }));
  it('renders basic information', async () => {
    render(<App />);
    await waitFor(()=>expect(screen.findByText('Clear selection')).toBeInTheDocument()) 
  })
});
