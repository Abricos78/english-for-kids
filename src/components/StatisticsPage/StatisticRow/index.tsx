import React from 'react';

const StatisticRow = ({
  word, translation, category, clicks, correct, wrong, percent,
}: Record<string, string | number>) => (
  <tr>
    <td>{word}</td>
    <td>{translation}</td>
    <td>{category}</td>
    <td>{clicks}</td>
    <td>{correct}</td>
    <td>{wrong}</td>
    <td>{percent}</td>
  </tr>
);

export default StatisticRow;
