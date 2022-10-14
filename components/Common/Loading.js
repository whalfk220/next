import Transition from '~/components/Common/Transition'

const Loading = () => (
  <Transition>
    <div style={{
      height: '100vh',
      justifyContent: 'center',
      alignItems: 'center',
      display: 'flex',
    }}>
      <h2>Loading...</h2>
    </div>
  </Transition>
)

export default Loading
