var it = require('tape'),
    suggest = require('..');

it('should be able to suggest a keyword', function(t) {
  suggest('dog training', function (err, suggestions) {
    t.plan(2);
    if (err) throw err;
    t.assert(suggestions.length > 0);
    t.assert(suggestions.some(function (suggestion) {
      return ~suggestion.indexOf('dog training');
    }));
  })
});
