import {
  motion,
} from 'framer-motion'

const variants = {
  initial: {
    opacity: 0,
    x: -200,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
  exit: {
    opacity: 0,
    x: -300,
  },
}

const Transition = ({children}) => {
  return (
    <motion.div
      className="page-wrap"
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.div>
  )
}

export default Transition
