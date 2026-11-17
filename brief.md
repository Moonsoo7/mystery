<!-- PROTOTYPE - NOT FOR PRODUCTION -->
# Game Brief: mystery

> A new one-shot built from the earlier detective game (claude.ai artifact Dfri7wy455nF3seGPHLqte: its illustrations, UI and fonts are reused as they are) and the twins-case design notes (twins-story-notes-20261117), made far simpler. The twins story was not used; this game has its own case.

## In your words
새로운 게임의 프로토타입을 만들려고 해 / 폴더명은 mystery 이고 게임명도 mystery 로 할 께 / 새로움 게임을 위한 기획서는 https://twins-story-notes-20261117.wonny7339.chatgpt.site/ / 기존에 만들었던 게임은 https://claude.ai/artifact/Dfri7wy455nF3seGPHLqte / 일러스트나 그림, UI는 그대로 사용 하고 추가로 필요 한 그림은 higgsfield 를 사용해서 만들어줘 / 기존 게임을 토대로 새로 만들 게임은 전반적으로 훨씬 간단하고 단순하게 만들려고 해 / 1. 화자인 탐정 포함 2명의 캐릭터만 등장 한다. / 2. 1명의 캐릭터에 질문은 한번 만 한다. / 3. 기획서의 스토리가 아니고 새로운 스토리여도 되며 단순히 잃어버린 고양이를 찾아 준다는 것도 된다. / 4. 처음에 캐릭터 이름을 지정 하는 부분은 필요 없다. / 5. 탐정의 이름은 Dalton 이다. / 6. 영어를 같이 배우는 추리게임이기에 기존 처럼 음성을 해석해 주는 기능이 필요 하며 대사가 미국현지인의 표준 억양으로 나와야 한다. / 7. 사건은 1개 이므로 사건 목록에는 1개만 나온다. / 8. 제작 후 루프로 확인 하여 개선할 점이 있다면 알아서 개선해 줄 것 / 9. 모바일용 추리게임이기에 세로형 구조를 유지한다. / 10. 기존 게임의 좌우측 게임 진행 변경  버튼은 필요 없다.
After play: 나머지 9개의 스테이지를 추가 해서 총 10개의 스테이지를 만들려고해 / 각 스토리는 업로드 했어 / 내용이나 대사가 어색한 부분은 알아서 고쳐줘 / 스테이지가 넘어 갈 때 마다 난이도를 높이기 위해 / 등장인물이나 장소가 추가 되어 있어 / 추가 장소가 필요 시 맵을 이용할 수도 있으니 맵 장성시 맵으로 가서 이동 할 수 있는 버튼이 추가되어야 할 것 같아.
After play: 전부 만들기 (그림·음성 약 57크레딧)

**Pitch:** Detective Dalton (a squirrel) solves ten small cases in Acorn Hollow in the week before the lantern festival, from Betty's lost cat to the acorn of light. Each case: one question, three clues, three English sentences to finish. Every line is spoken in American English with a Korean translation on tap.

**Genre:** English-listening mystery (point-and-tap investigation)

**Controls:** Tap a speech bubble or the screen to go on. Tap 다시 듣기 to replay, 천천히 to replay slower, 해석 to show Korean. Swipe the house picture sideways; tap suspicious spots. Tap an answer on the deduction board.

**Question:** Is one short, fully voiced case enough to feel like a mystery while practising English listening?

**Hooks:** Real American voices for every line, word-by-word highlight while a line plays · only one question for Betty, so the choice matters · the red yarn trail in the picture is the clue you follow

**Intent:** Much simpler than the earlier game: two characters, one case, no naming, no note-taking blanks.

## Look and references
- Look: the earlier game's hand-drawn colored-pencil storybook look: paper speech bubbles with a pencil tail, crayon-paper buttons, corkboard deduction, polaroid, Paperlogy font.
- References: the earlier detective game (artifact Dfri7wy455nF3seGPHLqte)
- View: 2D, portrait phone (max 430 px wide).

## First minute
The office opens with "Tap to start". Dalton greets you ("Hello! I'm Dalton, the detective of Acorn Hollow.") and points you to the case list. The list has one card, CASE 1 The Missing Cat. Betty, in her cabin, says Biscuit is missing. Dalton says he can ask only one question, and three choices appear.

## Challenge
Choosing the one question (each gives a different hint), finding the three real clues among five spots in a picture wider than the screen, and finishing three English sentences. A wrong answer greys out that choice and Dalton says "Hmm, not quite. Look at the clues again." There is no fail state.

## Core loop
- Listen to a line (replay, slow, translate as needed)
- Tap through the talk, pick the one question
- Search the house for clues, then fill in the deduction sentences
- Open the basket, find Biscuit, case closed

## Goal & fail state
- Goal: find Biscuit. The case card gets the 해결 stamp (saved in this browser).
- Fail: none. Wrong answers are greyed out until the right one is chosen.

## Features
- [x] Office home screen with Dalton and a two-tab bottom menu (홈, 사건); no naming step
- [x] Case list with 10 cases (the user's story file "등불 축제의 아홉 사건" for 02-10); each opens when the one before is solved; a case card shows the client until solved, then the found picture and the 해결 stamp; a briefing card shows story, cast and place count
- [x] Difficulty grows by cast and places: case 1 has 2 people/1 place, case 10 has 7 people/5 places
- [x] One question for the client, chosen from three; other friends speak when their clue spot is tapped
- [x] Investigation: 5 spots per case (3 clues + 2 that rule things out), clue counter, hint glow after 12 s
- [x] Map button for cases with more than one place: the village map shows numbered pins for that case's places (지금 여기 / 살펴봄 N); tapping a pin moves there; the button glows when every spot in the current place is done but clues are missing
- [x] 수첩 (notebook): crops of every spot looked at, side by side, with the line, its translation and replay
- [x] Deduction board: 3 fill-in sentences with choices; a 다음 button moves on
- [x] Finale: one discovery tap (three in case 10: handle, sail, lamps), the found picture, the client's thanks, 해결 stamp
- [x] Voices: Higgsfield text-to-speech, ElevenLabs engine. Dalton = Miles, Betty = Annie, Pip = Benji, Olive = Gracie, Milo = Landon, Nell = Hallie, Finn = Brooks. 272 line files (case 1: 32, cases 2-10: 24 each, plus 24 shared lines that name the client); the browser's en-US voice reads a line if its file fails
- [x] Wording fixed where it read oddly (see evidence/changes.tsv, iteration 2)
- [x] Per line: word highlight while speaking, 다시 듣기, 천천히 (0.75x), 해석 (Korean)
- [x] Leaving a case asks first; re-entering starts the case over
- [x] No left/right test buttons outside the phone frame
- [ ] Music

## Out of scope
- Note-taking blanks, dictation, belongings, the study and my pages from the earlier game
- The festival-night group photo after case 10 (the story file mentions it; not drawn)
- Character naming

## Tuning knobs
`config.js`: slow_rate, voice_volume, sfx_volume, clues_needed, art_zoom, hint_delay, auto_next, auto_next_gap, unlock_all. Open the panel with the backquote key (`) or `?tune`.
