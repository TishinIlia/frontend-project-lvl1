import generateExpression from '../utils/generateExpression.js';

const calcAnswer = () => {
  const expressionObject = generateExpression();
  return {
    inputCondition: expressionObject.expression,
    rightAnswer: String(expressionObject.answer),
  };
};

export default calcAnswer;
