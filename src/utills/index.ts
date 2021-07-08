import React from 'react';
import { wordInterface } from '../components/CategoryPage';

export function sound(word: string, event: React.MouseEvent<Element, MouseEvent> | undefined = undefined) {
  if (event === undefined) {
    const audio = new Audio(`${window.location.origin}/english-for-kids/audio/${word}.mp3`);
    audio.play();
  }
  if (event !== undefined) {
    if ((event.target as HTMLElement).getAttribute('data-type') !== 'rotate') {
      const audio = new Audio(`${window.location.origin}/english-for-kids/audio/${word}.mp3`);
      audio.play();
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

export function createRandowWordOrder(words: Array<wordInterface>) {
  const order = Array.from(randomWordOrder(words.length));

  const result: Array<string> = [];
  order.forEach((num) => {
    result.push(words[num][0]);
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
