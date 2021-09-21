import React, {useState} from 'react';
import SatisfyComponent from 'components/SatisfyComponent';

export default function SatisfyContainer(){
  const [type, setType] = useState(0) // const [변수, set변수] = useState(기본값)
  const selectType = (idx) => {
    setType(idx)
  }

  const todayData = [
    {
      type: "조식",
      satisfy: 87,
      menu: ["흰쌀밥","에그스크램블", "쇠고기찌개", "오징어채","김치"]
    },
    {
      type: "중식",
      satisfy: 62,
      menu: ["잡곡밥","감자탕", "계란찜", "감자튀김","김치"]
    },
    {
      type: "석식",
      satisfy: 0,
      menu: ["흰쌀밥","에그스크램블", "쇠고기찌개", "오징어채","김치"]
    }
  ]


  return (
    <SatisfyComponent 
      todayData={todayData} 
      type={type} 
      selectType={selectType}
      selectTypeIdx={[1,2,3]} 
      dataName={["싫어요","별로예요","보통이에요","맛있어요","최고예요"]}
    />
  )
}