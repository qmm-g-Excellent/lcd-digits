require('should');
const lcdDigits = require('../src/lcd-digits');


describe(' lcdDigits()', function () {
  var inputs = 20;
  it('should get correct stringDigits', function () {

    const result = lcdDigits(inputs);
    var expectResult = '\n' + '._.' + ' ' + '._.' + ' ' + '\n'
        + '._|' + ' ' + '|.|' + ' ' + '\n'
        + '|_.' + ' ' + '|_|' + ' ' + '\n';
    result.should.eql(expectResult);
  });
});
