let feedbackData = [
  { id: 1, text: 'This is feedback', rating: 10 },
  { id: 2, text: 'Another feedback', rating: 8 },
]

export default (req, res) => {
  if (req.method === 'GET') {
    res.status(200).json(feedbackData)
  } else if (req.method === 'POST') {
    const newFeedback = req.body
    newFeedback.id = feedbackData.length + 1 // simple ID generation logic
    feedbackData.push(newFeedback)
    res.status(201).json(newFeedback)
  } else if (req.method === 'DELETE') {
    const { id } = req.query
    feedbackData = feedbackData.filter((item) => item.id !== parseInt(id))
    res.status(200).json({ message: 'Feedback deleted' })
  }
}
