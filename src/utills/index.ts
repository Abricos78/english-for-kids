import React from 'react';

import { Word } from '../api/interface';

export function soundPlay(word: string, event: React.MouseEvent<Element, MouseEvent> | undefined = undefined) {
  if (event === undefined) {
    if (word.length > 100) {
      const audio = new Audio(`${word}`);
      audio.play();
    } else {
      const audio = new Audio(`${window.location.origin}/english-for-kids/audio/${word}.mp3`);
      audio.play();
    }
  }
  if (event !== undefined) {
    if ((event.target as HTMLElement).getAttribute('data-type') !== 'rotate'
    && (event.target as HTMLElement).getAttribute('data-type') !== 'back') {
      if (word.length > 100) {
        const audio = new Audio(`${word}`);
        audio.play();
      } else {
        const audio = new Audio(`${window.location.origin}/english-for-kids/audio/${word}.mp3`);
        audio.play();
      }
    }
  }
}

function randomWordOrder(max: number) {
  const order: Set<number> = new Set();
  let copyMax = max;
  let min = 0;
  while (order.size !== max) {
    const num = Math.floor(Math.random() * (copyMax - min) + min);
    order.add(num);
    if (max === num) {
      copyMax -= 1;
    }
    if (min === num) {
      min += 1;
    }
  }
  return order;
}

export function createRandowWordOrder(words: Word[]) {
  const order = randomWordOrder(words.length);

  const result: Array<string> = [];
  order.forEach((num) => {
    result.push(words[num].name);
  });

  return result;
}

export function percent(correct: number, wrong: number) {
  if (wrong === 0) {
    return 0;
  }
  const sum = correct + wrong;
  return +(wrong / sum).toFixed(2) * 100;
}

export function encodeImageFileAsURL(element: HTMLInputElement, disp: Function): string | void {
  if (element.files) {
    const file = element.files[0];
    const reader = new FileReader();
    reader.onloadend = function () {
      disp(reader.result);
    };
    reader.readAsDataURL(file);
  }
  return undefined;
}
