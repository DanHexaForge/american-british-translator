// test-translator.js
const Translator = require('./components/translator.js');

const translator = new Translator();

// Test 1: American → British (word)
console.log('--- American → British word ---');
console.log(translator.americanBritishTranslate('favorite')); // expect "favourite"

// Test 2: American → British (sentence)
console.log('\n--- American → British sentence ---');
console.log(translator.americanBritishTranslate('My favorite color is gray.')); 

// Test 3: American spelling
console.log('\n--- American → British spelling ---');
console.log(translator.americanBritishSpelling('color')); // expect "colour"

// Test 4: American title
console.log('\n--- American → British title ---');
console.log(translator.americanBritishTitle('Mr.')); // expect "Mr" highlighted

// Test 5: British → American
console.log('\n--- British → American ---');
console.log(translator.britishAmericanTranslate('He loves his favourite colour.')); // expect "favorite color"
