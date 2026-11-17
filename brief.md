<!-- PROTOTYPE - NOT FOR PRODUCTION -->
# Game Brief: mystery

> A new one-shot built from the earlier detective game (claude.ai artifact Dfri7wy455nF3seGPHLqte: its illustrations, UI and fonts are reused as they are) and the twins-case design notes (twins-story-notes-20261117), made far simpler. The twins story was not used; this game has its own case.

## In your words
새로운 게임의 프로토타입을 만들려고 해 / 폴더명은 mystery 이고 게임명도 mystery 로 할 께 / 새로움 게임을 위한 기획서는 https://twins-story-notes-20261117.wonny7339.chatgpt.site/ / 기존에 만들었던 게임은 https://claude.ai/artifact/Dfri7wy455nF3seGPHLqte / 일러스트나 그림, UI는 그대로 사용 하고 추가로 필요 한 그림은 higgsfield 를 사용해서 만들어줘 / 기존 게임을 토대로 새로 만들 게임은 전반적으로 훨씬 간단하고 단순하게 만들려고 해 / 1. 화자인 탐정 포함 2명의 캐릭터만 등장 한다. / 2. 1명의 캐릭터에 질문은 한번 만 한다. / 3. 기획서의 스토리가 아니고 새로운 스토리여도 되며 단순히 잃어버린 고양이를 찾아 준다는 것도 된다. / 4. 처음에 캐릭터 이름을 지정 하는 부분은 필요 없다. / 5. 탐정의 이름은 Dalton 이다. / 6. 영어를 같이 배우는 추리게임이기에 기존 처럼 음성을 해석해 주는 기능이 필요 하며 대사가 미국현지인의 표준 억양으로 나와야 한다. / 7. 사건은 1개 이므로 사건 목록에는 1개만 나온다. / 8. 제작 후 루프로 확인 하여 개선할 점이 있다면 알아서 개선해 줄 것 / 9. 모바일용 추리게임이기에 세로형 구조를 유지한다. / 10. 기존 게임의 좌우측 게임 진행 변경  버튼은 필요 없다.

**Pitch:** Detective Dalton (a squirrel) helps Betty (a bear) find her lost cat, Biscuit. One question, one house, three clues, three sentences to finish. Every line is spoken in American English with a Korean translation on tap.

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
- [x] Case list with exactly one case
- [x] Two speaking characters only: Dalton and Betty (Biscuit the cat does not talk)
- [x] One question for Betty, chosen from three
- [x] Investigation of Betty's house: 5 spots, 3 clues (closed window, red yarn trail to the table, moving basket cloth), clue counter, hint glow after 12 s
- [x] Deduction board: 3 fill-in sentences with choices
- [x] Finale: tap the basket, Biscuit found, Betty thanks Dalton, 해결 stamp
- [x] All 32 lines voiced with American English TTS (Higgsfield, ElevenLabs engine: Dalton = voice "Miles", Betty = voice "Annie"); the browser's en-US voice reads a line if its file fails
- [x] Per line: word highlight while speaking, 다시 듣기, 천천히 (0.75x), 해석 (Korean)
- [x] Leaving a case asks first; re-entering starts the case over
- [x] No left/right test buttons outside the phone frame
- [ ] Music

## Out of scope
- More cases, note-taking blanks, dictation, the map, belongings, the study and my pages from the earlier game
- Character naming

## Tuning knobs
`config.js`: slow_rate, voice_volume, sfx_volume, clues_needed, art_zoom, hint_delay, auto_next, auto_next_gap, unlock_all. Open the panel with the backquote key (`) or `?tune`.
