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

  const [taste, setSurvey] = useState(0) // const [변수, set변수] = useState(기본값)
  const selectTaste = (idx) => {
    setSurvey(idx)
  }

  const todayTaste = [
    {taste: "짜다"},
    {taste: "쓰다"},
    {taste: "맵다"},
    {taste: "달다"},
    {taste: "시다"},
    {taste: "싱겁다"},
    {taste: "식었다"},
    {taste: "양이 적다"}
  ]
  
  const picLink=[
    {
      link: '../static/image/score_1.png',
      name: "싫어요"
    },
    {
      link: '../static/image/score_2.png',
      name: "별로에요"
    },
    {
      link: '../static/image/score_3.png',
      name: "보통이에요"
    },
    {
      link: '/..static/image/score_4.png',
      name: "맛있어요"
    },
    {
      link: '/..static/image/score_5.png',
      name: "최고에요"
    }
  ]

  return (
    <SatisfyComponent 
      todayData={todayData} 
      type={type} 
      selectType={selectType}
      selectTypeIdx={[1,2,3]} 
      todayTaste={todayTaste}
      taste={taste}
      selectTaste = {selectTaste}
      selectSurveyIdx={[1,2,3,4,5,6,7,8]}
      survey={picLink}
    />
  )
}