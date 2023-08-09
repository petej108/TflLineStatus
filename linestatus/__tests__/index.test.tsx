import { render, screen } from '@testing-library/react';
import Home from '@/pages/index';
import lineInfoApiDataMock from '../data/lineStatusMock.json';

jest.mock('../components/useLineStatusRequest', () => ({
  useGetLineStatus: () => ({
    data: lineInfoApiDataMock,
    error: null,
  }),
}));

describe('Line Status Home', () => {
  it('renders a heading', () => {
    render(<Home />);

    const heading = screen.getByRole('heading', {
      name: /Line Status/,
    });

    expect(heading).toBeInTheDocument();
  });

  
});
