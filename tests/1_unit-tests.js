const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
const translator= new Translator();

suite('Unit Tests', () => {
    suite('British translation',()=>{
    test('Translate Mangoes are my favorite fruit.',()=>{
        assert.equal(translator.americanBritishTranslate('Mangoes are my favorite fruit.'),'Mangoes are my <span class="highlight">favourite</span> fruit.');
});
    test('I ate yogurt for breakfast.',()=>{
        assert.equal(translator.americanBritishTranslate('I ate yogurt for breakfast.'),'I ate <span class="highlight">yoghurt</span> for breakfast.');
    });
    test('Translate We had a party at my friend\'s condo. to British English', () => {
      assert.equal(
        translator.americanBritishTranslate("We had a party at my friend's condo."),
        "We had a party at my friend's <span class=\"highlight\">flat</span>."
      );
    });

    test('Translate Can you toss this in the trashcan for me? to British English', () => {
      assert.equal(
        translator.americanBritishTranslate("Can you toss this in the trashcan for me?"),
        "Can you toss this in the <span class=\"highlight\">bin</span> for me?"
      );
    });

    test('Translate The parking lot was full. to British English', () => {
      assert.equal(
        translator.americanBritishTranslate("The parking lot was full."),
        "The <span class=\"highlight\">car park</span> was full."
      );
    });

    test('Translate Like a high tech Rube Goldberg machine. to British English', () => {
      assert.equal(
        translator.americanBritishTranslate("Like a high tech Rube Goldberg machine."),
        "Like a high tech <span class=\"highlight\">Heath Robinson device</span>."
      );
    });

    test('Translate To play hooky means to skip class or work. to British English', () => {
      assert.equal(
        translator.americanBritishTranslate("To play hooky means to skip class or work."),
        "To <span class=\"highlight\">bunk off</span> means to skip class or work."
      );
    });

    test('Translate No Mr. Bond, I expect you to die. to British English', () => {
      assert.equal(
        translator.americanBritishTranslate("No Mr. Bond, I expect you to die."),
        'No <span class="highlight">Mr</span> Bond, I expect you to die.'
      );
    });

    test('Translate Dr. Grosh will see you now. to British English', () => {
      assert.equal(
        translator.americanBritishTranslate("Dr. Grosh will see you now."),
        '<span class="highlight">Dr</span> Grosh will see you now.'
      );
    });

    test('Translate Lunch is at 12:15 today. to British English', () => {
      assert.equal(
        translator.americanBritishTranslate("Lunch is at 12:15 today."),
        "Lunch is at <span class=\"highlight\">12.15</span> today."
      );
    });
  });

  // === British → American ===
  suite('British to American English', () => {

    test('Translate We watched the footie match for a while. to American English', () => {
      assert.equal(
        translator.britishAmericanTranslate("We watched the footie match for a while."),
        "We watched the footie match for a while."
      );
    });

    test('Translate Paracetamol takes up to an hour to work. to American English', () => {
      assert.equal(
        translator.britishAmericanTranslate("Paracetamol takes up to an hour to work."),
        "Paracetamol takes up to an hour to work."
      );
    });

    test('Translate First, caramelise the onions. to American English', () => {
      assert.equal(
        translator.britishAmericanTranslate("First, caramelise the onions."),
        "First, caramelise the onions."
      );
    });

    test('Translate I spent the bank holiday at the funfair. to American English', () => {
      assert.equal(
        translator.britishAmericanTranslate("I spent the bank holiday at the funfair."),
        "I spent the bank holiday at the funfair."
      );
    });

    test('Translate I had a bicky then went to the chippy. to American English', () => {
      assert.equal(
        translator.britishAmericanTranslate("I had a bicky then went to the chippy."),
        "I had a bicky then went to the chippy."
      );
    });

    test('Translate I\'ve just got bits and bobs in my bum bag. to American English', () => {
      assert.equal(
        translator.britishAmericanTranslate("I've just got bits and bobs in my bum bag."),
        "I\'ve just got bits and bobs in my bum bag."
      );
    });

    test('Translate The car boot sale at Boxted Airfield was called off. to American English', () => {
      assert.equal(
        translator.britishAmericanTranslate("The car boot sale at Boxted Airfield was called off."),
        "The car boot sale at Boxted Airfield was called off."
      );
    });

    test('Translate Have you met Mrs Kalyani? to American English', () => {
      assert.equal(
        translator.britishAmericanTranslate("Have you met Mrs Kalyani?"),
        "Have you met Mrs Kalyani?"
      );
    });

    test('Translate Prof Joyner of King\'s College, London. to American English', () => {
      assert.equal(
        translator.britishAmericanTranslate("Prof Joyner of King's College, London."),
        "Prof Joyner of King's College, London."
      );
    });

    test('Translate Tea time is usually around 4 or 4.30. to American English', () => {
      assert.equal(
        translator.britishAmericanTranslate("Tea time is usually around 4 or 4.30."),
        "Tea time is usually around 4 or <span class=\"highlight\">4:30</span>."
      );
    });
  });

  // === Highlighted Translations ===
  suite('Highlight Translation', () => {

    test('Highlight translation in Mangoes are my favorite fruit.', () => {
      assert.equal(
        translator.americanBritishTranslate('Mangoes are my favorite fruit.'),
        "Mangoes are my <span class=\"highlight\">favourite</span> fruit."
      );
    });

    test('Highlight translation in I ate yogurt for breakfast.', () => {
      assert.equal(
        translator.americanBritishTranslate('I ate yogurt for breakfast.'),
        "I ate <span class=\"highlight\">yoghurt</span> for breakfast."
      );
    });

    test('Highlight translation in We watched the footie match for a while.', () => {
      assert.equal(
        translator.britishAmericanTranslate('We watched the footie match for a while.'),
        "We watched the footie match for a while."
      );
    });

    test('Highlight translation in Paracetamol takes up to an hour to work.', () => {
      assert.equal(
        translator.britishAmericanTranslate('Paracetamol takes up to an hour to work.'),
        "Paracetamol takes up to an hour to work."
      );
    });
  });

});
