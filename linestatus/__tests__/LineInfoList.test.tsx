import { render, screen } from '@testing-library/react';
import LineInfoList from '@/components/LineInfoList';
import lineInfoApiDataMock from '../data/lineStatusMock.json';

describe('Line Status List', () => {
  it('renders Line Info List unchanged', () => {
    const { container } = render(
      <LineInfoList linesData={lineInfoApiDataMock} />
    );
    expect(container).toMatchSnapshot();
  });

  it('Line info List contains all items', () => {
    const { container } = render(
      <LineInfoList linesData={lineInfoApiDataMock} />
    );

    expect(container.getElementsByClassName('card').length).toBe(
      lineInfoApiDataMock.length
    );
  });
});
