const { create } = require( './user' );

test('create table', () => {
  expect(create().outerHTML).toBe('<table></table>');
});