const handler = (req, res) => {
  const { userId } = req.query

  res.send({
    user: {
      id: userId,
      name: `user-${userId}`,
    }
  })
}

export default handler
