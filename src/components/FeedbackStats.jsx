import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext)

  // Ensure feedback is an array and has at least one item
  const average =
    Array.isArray(feedback) && feedback.length > 0
      ? feedback.reduce((acc, { rating }) => acc + rating, 0) / feedback.length
      : 0; // Default to 0 if feedback is not an array or is empty

  return (
    <div className='feedback-stats'>
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {average.toFixed(1).replace(/[.,]0$/, '')}</h4>
    </div>
  )
}

export default FeedbackStats