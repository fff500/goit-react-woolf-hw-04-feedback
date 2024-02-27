export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <>
            <div>Good: {good}</div>
            <div>Neutral: {neutral}</div>
            <div>Bad: {bad}</div>
            <div>Total: {total}</div>
            <div>Positive Feedback: {positivePercentage}</div>
        </>
    )
};