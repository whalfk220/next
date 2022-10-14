const handler = async (req, res) => {
  const { userId } = req.query

  await new Promise(r => setTimeout(r, 1000 * 2))

  res.send({
    user: {
      id: userId,
      name: `user-${userId}`,
    }
  })
}

export default handler
