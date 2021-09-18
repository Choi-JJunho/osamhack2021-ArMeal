import React, {useState} from 'react'
​
export default function TempContainer() {
  const [type, setType] = useState(0) // const [변수, set변수] = useState(기본값)
  const selectType = (idx) => {
    setType(idx)
  }
  return <TempComponent type={type} selectType={selectType} />
}