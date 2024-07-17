import { render, screen } from '@testing-library/react';
import AccountOverview from './account-overview';
import Dashboard from './components/dashboard/dashboard';
const accountOverviewStub = {
  supportContact: {
    name: 'testName',
    email: 'testEmail',
    number: 'testNumber'
  },
  salesOverview: {
    uploads: 10,
    successfulUploads: 5,
    linesAttempted: 4,
    linesSaved: 4,
    lastUploadDate: 1605001226079,
  }
}
describe(AccountOverview, () => {
test('Test if the first component is in the Document', () => {
  
  render(<AccountOverview data={accountOverviewStub} />);
  const salesElement = screen.getByText('Sales');  
  expect(salesElement).toBeInTheDocument();

});

test('Test if the second component is in the Document', () => {
  
  render(<AccountOverview data={accountOverviewStub}/>);
  const element = screen.getByText('YOUR FEEFO SUPPORT CONTACT');
  const headerElement = screen.getAllByRole('heading', { level: 1});
  expect(headerElement[0].textContent).toBe('Account Overview');
  expect(element).toBeInTheDocument();

});

describe(Dashboard, () => {
  test('Test Dashboard compponent',() =>{
    render(<Dashboard accountOverviewStub={accountOverviewStub}/>);
    const percentageUpload = screen.getByTestId('uploadPercentage');
    expect(percentageUpload.textContent).toBe('50%');
    const percentageLines = screen.getByTestId('linesPercentage');
    expect(percentageLines.textContent).toBe('100%');
  });
});

});
