/* PROTOTYPE - NOT FOR PRODUCTION
   mystery: the ten cases. Story text, every voiced line (English + Korean), places, clue spots (percent of each
   picture), deduction sentences and the discovery step. Voice files: voice/ID.mp3 for case 1, voice/sNN/ID.mp3 for the
   others, voice/common/<client>-<id>.mp3 for the shared lines that name the client, voice/hdone.mp3 and voice/wrong.mp3. */
window.CAST = {
  dalton: { name: 'Dalton', ko: '달튼', img: 'assets/characters/detective-wave.png', icon: 'assets/ui/icons-v2/detective.png' },
  betty:  { name: 'Betty',  ko: '베티', img: 'assets/characters/betty-higgsfield.png' },
  pip:    { name: 'Pip',    ko: '핍',   img: 'assets/characters/duck-higgsfield.png' },
  olive:  { name: 'Olive',  ko: '올리브', img: 'assets/characters/hoot-higgsfield.png' },
  milo:   { name: 'Milo',   ko: '마일로', img: 'assets/new/milo.png' },
  nell:   { name: 'Nell',   ko: '넬',   img: 'assets/new/nell.png' },
  finn:   { name: 'Finn',   ko: '핀',   img: 'assets/new/finn.png' }
};
// shared lines; {name} is the client of the case
window.COMMON = {
  c2: ["Don't worry, {name}. Let's look together.", '걱정 마세요, {ko}. 같이 찾아봐요.'],
  c3: ['I can ask {name} one question. What should I ask?', '{ko}에게 질문을 한 번 할 수 있어. 무엇을 물어볼까?'],
  c4: ["Thank you, {name}. Let's look for clues.", '고마워요, {ko}. 이제 단서를 찾아봐요.'],
  f3: ["You're welcome, {name}. Case closed!", '천만에요, {ko}. 사건 해결!'],
  hdone: ["I found three clues. Let's put them together!", '단서를 세 개 찾았어. 이제 맞춰 보자!'],
  wrong: ['Hmm, not quite. Look at the clues again.', '음, 그게 아니야. 단서를 다시 생각해 봐.']
};
// places on the village map (percent of assets/places/village-map-day-higgsfield.webp)
window.PLACES = {
  bettyhome: { name: "Betty's House",   ko: '베티의 집',     img: 'assets/new/betty-home-clue.png' },
  sewing:    { name: "Betty's Sewing Room", ko: '베티의 바느질방', img: 'assets/new/loc-sewing.png' },
  libdesk:   { name: 'Library Desk',    ko: '도서관 대출대', img: 'assets/new/loc-libdesk.png' },
  libback:   { name: 'Return Room',     ko: '반납실',       img: 'assets/new/loc-libback.png' },
  kitchen:   { name: 'Bakery Kitchen',  ko: '빵집 작업실',   img: 'assets/new/loc-kitchen.png' },
  bakery:    { name: 'Bakery',          ko: '빵집',         img: 'assets/new/loc-bakery.png' },
  post:      { name: 'Post Office',     ko: '우체국',       img: 'assets/new/loc-post.png' },
  fountain:  { name: 'Fountain Square', ko: '분수 광장',     img: 'assets/new/loc-fountain.png' },
  bridge:    { name: 'Stone Bridge',    ko: '돌다리',       img: 'assets/new/loc-bridge.png' },
  stage:     { name: 'Shadow Stage',    ko: '그림자극 무대', img: 'assets/new/loc-stage.png' },
  props:     { name: 'Prop Room',       ko: '소품실',       img: 'assets/new/loc-props.png' },
  costume:   { name: 'Costume Room',    ko: '의상실',       img: 'assets/new/loc-costume.png' },
  pump:      { name: 'Pump Room',       ko: '펌프실',       img: 'assets/new/loc-pump.png' },
  green:     { name: 'Greenhouse',      ko: '온실',         img: 'assets/new/loc-green.png' },
  tea:       { name: 'Tea Shop',        ko: '찻집',         img: 'assets/new/loc-tea.png' },
  studio:    { name: 'Photo Studio',    ko: '사진관',       img: 'assets/new/loc-studio.png' },
  square:    { name: 'Central Square',  ko: '중앙 광장',     img: 'assets/new/loc-square.png' },
  flower:    { name: 'Flower Shop',     ko: '꽃집',         img: 'assets/new/loc-flower.png' },
  station:   { name: 'Train Station',   ko: '기차역',       img: 'assets/new/loc-station.png' },
  hall:      { name: 'Music Hall',      ko: '음악당',       img: 'assets/new/loc-hall.png' },
  library:   { name: 'Library',         ko: '도서관',       img: 'assets/new/loc-library.png' },
  workshop:  { name: 'Lantern Workshop', ko: '등불 공방',    img: 'assets/new/loc-workshop.png' },
  dock:      { name: 'River Dock',      ko: '강나루',       img: 'assets/new/loc-dock.png' }
};
window.STAGES = [];
