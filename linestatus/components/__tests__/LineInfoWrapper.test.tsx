import { render, screen } from '@testing-library/react';
import lineInfoApiDataMock from '../../data/lineStatusMock.json';
import LineStatusWrapper from '../../components/LineStatusWrapper';

jest.mock('../../components/useLineStatus', () => ({
  useGetLineStatus: () => ({
    data: null,
    error: true,
  }),
}));

describe('Line Status Wrapper', () => {
  it('renders loading if no data and no error', () => {
    const useLineStatus = require('../../components/useLineStatus');
    useLineStatus.useGetLineStatus = jest
      .fn()
      .mockReturnValue({ data: null, error: null });

    const { container } = render(<LineStatusWrapper key={Math.random()} />);

    const heading = screen.getByRole('heading', {
      name: /Loading.../,
    });

    expect(heading).toBeInTheDocument();
  });

  it('renders error message if there is an error in the api response', () => {
    const useLineStatus = require('../../components/useLineStatus');
    useLineStatus.useGetLineStatus = jest
      .fn()
      .mockReturnValue({ data: null, error: true });

    const { container } = render(<LineStatusWrapper key={Math.random()} />);

    const heading = screen.getByRole('heading', {
      name: /Something went wrong!/,
    });

    expect(heading).toBeInTheDocument();
  });

  it('renders the data message if there is no error', () => {
    const useLineStatus = require('../../components/useLineStatus');
    useLineStatus.useGetLineStatus = jest
      .fn()
      .mockReturnValue({ data: lineInfoApiDataMock, error: null });

    const { container } = render(<LineStatusWrapper key={Math.random()} />);

    expect(container.getElementsByClassName('card').length).toBe(11);
  });
});
