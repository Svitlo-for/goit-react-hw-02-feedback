import { Button } from 'components/App.styled';

export const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <>
      <Button onClick={onLeaveFeedback} name="good">
        Good
      </Button>
      <Button onClick={onLeaveFeedback} name="neutral">
        Neutral
      </Button>
      <Button onClick={onLeaveFeedback} name="bad">
        Bad
      </Button>
    </>
  );
};
