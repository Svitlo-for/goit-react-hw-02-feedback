import { Button } from 'components/App.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map(option => (
        <Button
          key={option}
          onClick={() => onLeaveFeedback(option)}
          name={option}
        >
          {option}
        </Button>
      ))}
    </>
  );
};
