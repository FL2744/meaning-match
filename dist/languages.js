export const LANGUAGES = [
  {name:'Arabic',code:'ar',direction:'rtl',greeting:'مرحبًا',instruction:'Use Modern Standard Arabic in Arabic script.'},
  {name:'Chinese',code:'zh-Hans',direction:'ltr',greeting:'你好',instruction:'Use Mandarin Chinese in simplified Chinese characters, not pinyin.'},
  {name:'Japanese',code:'ja',direction:'ltr',greeting:'こんにちは',instruction:'Use natural Japanese with appropriate kanji and kana, not romanization.'},
  {name:'Italian',code:'it',direction:'ltr',greeting:'Ciao',instruction:'Use standard Italian.'},
  {name:'German',code:'de',direction:'ltr',greeting:'Hallo',instruction:'Use standard German.'},
  {name:'Ancient Greek',code:'grc',direction:'ltr',greeting:'χαῖρε',instruction:'Use Classical Attic Ancient Greek, with appropriate polytonic accents, not Modern Greek. Use historically plausible everyday situations.'},
  {name:'Latin',code:'la',direction:'ltr',greeting:'Salvē',instruction:'Use Classical Latin, not a modern Romance language. Use historically plausible everyday situations.'},
  {name:'French',code:'fr',direction:'ltr',greeting:'Bonjour',instruction:'Use standard French.'},
  {name:'Russian',code:'ru',direction:'ltr',greeting:'Здравствуйте',instruction:'Use standard Russian in Cyrillic script.'},
  {name:'Spanish',code:'es',direction:'ltr',greeting:'Hola',instruction:'Use broadly understandable standard Spanish.'}
];
export function getLanguage(name){const language=LANGUAGES.find(l=>l.name===name);if(!language)throw Error('Choose one of the ten supported languages.');return language;}
