import axios from 'axios'

import Transition from '~/components/Common/Transition'
import UserInfo from '~/components/Test/UserInfo'

// getInitialProps에서 리턴한 오브젝트를 파라미터로 받을 수 있음
const Test = ({u}) => (
  <Transition>
    <UserInfo
      u={u}
    />
  </Transition>
)

// SSR 데이터 이런식으로 땡겨오는듯
Test.getInitialProps = async () => {
  let response

  try {
    response = await axios.get(`http://localhost:3000/api/member/get-user/USER_ID`)
  }
  catch (err) {
    console.log(err)
  }

  const user = response?.data?.user

  return {
    u: user,
  }
}

export default Test
