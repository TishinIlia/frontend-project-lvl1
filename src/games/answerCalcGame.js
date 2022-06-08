import generateExpression from '../utils/generateExpression.js';

const answerCalcGame = () => {
  const expressionObject = generateExpression();
  return {
    inputCondition: expressionObject.expression,
    rightAnswer: String(expressionObject.answer),
  };
};

export default answerCalcGame;
