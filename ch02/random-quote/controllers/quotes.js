var quote_arr = [
  `It's one small step for man, one giant leap for mankind.`,
  `The only thing we have to fear is fear itself.`,
  `Ask not what your country can do for you, but what you can do for your country.`,
  `Do or do not.  There is no try.`,
  `I always think one step ahead, like a carpenter who makes stairs.`
];

module.exports.quotemachine = function(req, res)
{
  var idx = Math.floor((Math.random() * quote_arr.length));

  res.json(quote_arr[idx]);
};

