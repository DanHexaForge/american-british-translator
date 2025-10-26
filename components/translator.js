const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {
americanBritishTitle(text) {
  let translated = text;
  let changed = false;

  

  for (const [american, british] of Object.entries(americanToBritishTitles)) {
    const escaped = american.replace('.', '\\.');
    const regex = new RegExp(`(?<=\\b)${escaped}(?=\\s|$)`, 'gi');
    console.log(`Checking titles: ${american} -> ${british} | Regex: ${regex}`);

    const before = translated;
    translated = translated.replace(regex, (match) => {
     
      changed = true;
      const brit = match.replace(/\.$/, ''); // remove dot
      
      return `<span class="highlight">${brit}</span>`;
    });

    if (before !== translated) {
      
    }
  }
  
  return translated;
}


britishAmericanTitle(text) {
  let translated = text;
  let changed = false;

  console.log("\n[britishAmericanTitle] Input text:", text);

  for (const [american, british] of Object.entries(americanToBritishTitles)) {
    const regex = new RegExp(`\\b${british}\\b(?!\\.)`, 'gi');
    console.log(`Checking titles: ${british} -> ${american} | Regex: ${regex}`);

    const before = translated;
    translated = translated.replace(regex, (match) => {
      
      changed = true;
      const amer =
        match[0] === match[0].toUpperCase()
          ? american.charAt(0).toUpperCase() + american.slice(1)
          : american;
      
      return `<span class="highlight">${amer}</span>`;
    });

   
  }

  

  
  return translated;
}



timeAmericanToBritish(text) {
  if (!text) return 'Required field(s) missing';
  return text.replace(/(\d{1,2}):(\d{2})/g, `<span class="highlight">$1.$2</span>`);
}

// British → American (10.30 → 10:30)
timeBritishToAmerican(text) {
  if (!text) return 'Required field(s) missing';
  return text.replace(/(\d{1,2})\.(\d{2})/g, `<span class="highlight">$1:$2</span>`);
}

americanBritishSpelling(text){
    if(!text){
         return 'Required field(s) missing';
    };
    let translated= text;
    for (let [word, spelling] of Object.entries(americanToBritishSpelling)) {
  const regex = new RegExp(`\\b${word}\\b`, 'gi');
  translated = translated.replace(regex, `<span class="highlight">${spelling}</span>`);
}
    
    return translated;
}

americanBritishTranslate(text){
    if(!text){
        return 'Required field(s) missing';
    };
    let translated = text;
     for(let[american,english] of Object.entries(americanOnly)){
        const regex = new RegExp(`\\b${american}\\b`, 'gi');
        translated= translated.replace(regex,`<span class="highlight">${english}</span>`);
       
     }
      
        translated=this.americanBritishSpelling(translated);
        translated=this.timeAmericanToBritish(translated);
        translated=this.americanBritishTitle(translated);
        
    return translated;
}
britishAmericanTranslate(text){
    let translated =text;
    
    for (let[british,american] of Object.entries(britishOnly)){
        const regex= new RegExp(`//b${british}//b`,'gi');
        translated= translated.replace(regex,`<span class="highlight">${american}</span>`);
    };
    
    translated = this.americanBritishSpelling(translated);
  
  translated = this.timeBritishToAmerican(translated);
  //translated = this.britishAmericanTitle(translated);
    return translated;
}



}

module.exports = Translator;
    
