import {
  tilesProps,
} from './helpers';

describe('tilesProps function', () => {
  test('array 2x2', () => {
    const props2n = tilesProps(2);
    expect(props2n).toHaveProperty('intTileArray', [1, 2, 3, 4]);
    expect(props2n).toHaveProperty('intRowArray', [1, 2]);
    expect(props2n).toHaveProperty('diffColorTile');
    expect(String(props2n.diffColorTile)).toMatch(/[1-4]/);
  });
});
