/* PROTOTYPE - NOT FOR PRODUCTION
   mystery: every tuning value lives here. The game reads window.CONFIG live (see tune.js). */
window.CONFIG = {
  seed:          { value: 1,    min: 1,   max: 9999, step: 1 },
  slow_rate:     { value: 0.75, min: 0.5, max: 1,    step: 0.05 },  // speed of a line when 천천히 is on
  voice_volume:  { value: 1,    min: 0,   max: 1,    step: 0.05 },
  sfx_volume:    { value: 0.6,  min: 0,   max: 1,    step: 0.05 },
  clues_needed:  { value: 3,    min: 1,   max: 3,    step: 1 },     // clues to find before 추리하기 opens
  art_zoom:      { value: 2.0,  min: 1,   max: 3,    step: 0.1 },   // house picture width in screen widths (higher = closer, more swiping)
  hint_delay:   { value: 12,   min: 3,   max: 60,   step: 1 },     // seconds without a new clue before an unfound spot glows
  auto_next:     { value: 0,    min: 0,   max: 1,    step: 1 },     // 1: go to the next line by itself after the voice ends
  auto_next_gap: { value: 0.8,  min: 0.2, max: 3,    step: 0.1 },   // seconds of quiet before auto_next moves on
  unlock_all:    { value: 0,    min: 0,   max: 1,    step: 1 }      // 1: skip to the deduction board (test only)
};
