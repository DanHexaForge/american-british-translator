const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

let Translator = require('../components/translator.js');

suite('Functional Tests', () => {
    const text = 'Mangoes are my favourite fruit.';
    const locale = 'american-to-british';
    const invalidLocale= 'kenyan-american';
    const empty='';

    test('Translation with text and locale fields: POST request to /api/translate',(done)=>{
        chai.request(server)
        .post('/api/translate')
        .send({text,locale})
        .end((err,res)=>{
            assert.equal(res.status, 200);
        assert.isObject(res.body, 'Response should be an object');
        assert.property(res.body, 'translation', 'Response should include translation');
        assert.property(res.body, 'text', 'Response should include original text');
            done();
        });
    });
    test('Translation with text and invalid locale field: POST request to /api/translate',(done)=>{
        chai.request(server)
        .post('/api/translate')
        .send({text,invalidLocale})
        .end((err,res)=>{
            assert.equal(res.status,200);
            assert.isObject(res.body)
            assert.property(res.body,'error')
            assert.equal(res.body.error,'Required field(s) missing');
            done();
        });
    });
    test('Translation with missing text field: POST request to /api/translate', (done) => {
  chai.request(server)
    .post('/api/translate')
    .send({ locale: 'american-to-british' }) 
    .end((err, res) => {
      assert.equal(res.status, 200);
      assert.isObject(res.body);
      assert.property(res.body, 'error');
      assert.equal(res.body.error, 'Required field(s) missing');
      done();
    });
});
test('Translation with missing locale field: POST request to /api/translate',(done)=>{
    chai.request(server)
    .post('/api/translate')
    .send({text})
    .end((err,res)=>{
        assert.equal(res.status,200);
        assert.isObject(res.body);
        assert.property(res.body,'error');
        assert.equal(res.body.error,'Required field(s) missing');
        done();
    });
});
test('Translation with empty text: POST request to /api/translate',(done)=>{
    chai.request(server)
    .post('/api/translate')
    .send({empty,locale})
    .end((err,res)=>{
        assert.equal(res.status,200);
        assert.isObject(res.body);
        assert.property(res.body,'error');
        assert.equal(res.body.error,'Required field(s) missing');
        done();

    });
});
test('Translation with text that needs no translation: POST request to /api/translate',(done)=>{
chai.request(server)
.post('/api/translate')
.send({text,locale})
.end((err,res)=>{
    assert.equal(res.status,200);
    assert.isObject(res.body);
    assert.property(res.body,'translation');
    assert.equal(res.body.translation,"Everything looks good to me!")
    done();
})
})

});
