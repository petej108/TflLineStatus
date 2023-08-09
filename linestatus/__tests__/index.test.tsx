import { render, screen } from '@testing-library/react';
import Home from '@/pages/index';
import lineInfoApiDataMock from '../data/lineStatusMock.json';

jest.mock('../components/useLineStatus', () => ({
  useGetLineStatus: () => ({
    data: lineInfoApiDataMock,
    error: null,
  }),
}));

describe('Line Status Home', () => {
  it('renders homepage unchanged', () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
  });

  it('renders a heading', () => {
    render(<Home />);

    const heading = screen.getByRole('heading', {
      name: /Line Status/,
    });

    expect(heading).toBeInTheDocument();
  });
});
