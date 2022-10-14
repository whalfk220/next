import {
  useState,
} from "react"
import axios from 'axios'

// pages/test/index.js에서 getInitialProps로 받아온 데이터
const UserInfo = ({
  u,
}) => {
  /* State */
  const [
    userId,
    setUserId,
  ] = useState('')

  const [
    userInfo,
    setUserInfo,
  ] = useState(u)

  /* Function */
  const handleChangeUserId = event => {
    if (!event.target.value) {
      setUserId('')
      return
    }

    let value = parseInt(event.target.value, 10)

    if (isNaN(value)) {
      return
    }

    setUserId(value)
  }

  const handleClickSubmit = async () => {
    let response

    try {
      response = await axios.get(`/api/member/get-user/${userId}`)
    }
    catch (err) {
      alert('큰일! 오류가 발생함!')
      throw new Error(err)
    }

    const user = response?.data?.user

    if (!user) {
      alert('사용자 정보를 받아올 수 없어요')
      return
    }

    setUserInfo(user)
  }

  return (
    <div>
      <input
        value={userId}
        type="text"
        placeholder="ID를 입력하세요"
        onChange={handleChangeUserId}
      />
      <button
        type="button"
        onClick={handleClickSubmit}
      >
        Hello
      </button>

      <pre>
        {JSON.stringify(userInfo)}
      </pre>
    </div>
  )
}

export default UserInfo
