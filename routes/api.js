
'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      const{text,locale}= req.body;
    if (text === '') {
  return res.status(200).json({ error: 'No text to translate' });
}
      
    if (!locale || text === undefined) {
  return res.status(200).json({ error: 'Required field(s) missing' });
}



  if(locale != 'american-to-british' && locale != 'british-to-american'){return res.json({ error: 'Invalid value for locale field' })};
  
  let translation = locale === 'american-to-british'
      ? translator.americanBritishTranslate(text)
      : translator.britishAmericanTranslate(text);
  if (translation === text) {
    return res.json({ text, translation: 'Everything looks good to me!' });
  }
  
  
return res.json({text,translation})
    });
    
};