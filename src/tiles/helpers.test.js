import {
  tileClassname, tileKey, isDiffColorTile, tilesProps,
} from './helpers';
import {
  DIFF_COLOR_TILE_CLASSNAME,
} from './constants';

describe('tileClassname function', () => {
  test('same id', () => {
    expect(tileClassname(1, 1)).toBe(DIFF_COLOR_TILE_CLASSNAME);
  });
  test('different id > returns empty string', () => {
    expect(tileClassname(1, 2)).toBe('');
  });
});

describe('tileKey function', () => {
  test('row1 item1', () => {
    const args = { row: 1, item: 2 };
    expect(tileKey(args.row, args.item)).toBe(`${args.row}-${args.item}`);
  });
});

const isDiffColorTileCases = (stringsArray, result) => {
  stringsArray.map(item => (
    test(`${item} is not the different`, () => {
      expect(isDiffColorTile(item)).toBe(result);
    })
  ));
};

describe('isDiffColorTile function', () => {
  isDiffColorTileCases(['whatever', 'tile', 'tile diff-color', 'tile diff-color-til'], false);
  isDiffColorTileCases(['tile diff-color-tile', 'diff-color-tile'], true);
});

describe('tilesProps function', () => {
  test('array 2x2', () => {
    const props2n = tilesProps(2);
    expect(props2n).toHaveProperty('intTileArray', [1, 2, 3, 4]);
    expect(props2n).toHaveProperty('intRowArray', [1, 2]);
    expect(props2n).toHaveProperty('diffColorTile');
    expect(String(props2n.diffColorTile)).toMatch(/[1-4]/);
  });
});
