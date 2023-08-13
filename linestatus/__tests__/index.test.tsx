import { fireEvent, render, screen } from '@testing-library/react';
import Home from '@/pages/index';
import lineInfoApiDataMock from '../data/lineStatusMock.json';
import ReactDOM from 'react-dom';
import LineStatusWrapper from '@/components/LineStatusWrapper';

jest.mock('../hooks/useLineStatus', () => ({
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

  it('on refresh re-renders line status data', () => {
    const useLineStatus = require('../hooks/useLineStatus');
    useLineStatus.useGetLineStatus = jest
      .fn()
      .mockReturnValue({ data: lineInfoApiDataMock, error: null });

    render(<Home />);

    const refreshButton = screen.getByRole('button');

    fireEvent.click(refreshButton);
    expect(useLineStatus.useGetLineStatus).toHaveBeenCalledTimes(2);
  });
});
