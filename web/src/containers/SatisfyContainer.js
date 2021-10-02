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
      menuList: ["흰쌀밥","에그스크램블", "쇠고기찌개", "오징어채","김치"],
      self:["-"],
      dessert:["요플레"]
    
    },
    {
      type: "중식",
      satisfy: 62,
      menuList: ["잡곡밥","감자탕", "계란찜", "감자튀김","김치"],
      self:["-"],
      dessert:["우유"]
    },
    {
      type: "석식",
      satisfy: 0,
      menuList: ["흰쌀밥2","에그스크램블2", "쇠고기찌개2", "오징어채2","김치2"],
      self:["-"],
      dessert:["주스"]
    }
  ]

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
const [satisfaction, setSatisfaction] = useState(0) // const [변수, set변수] = useState(기본값)
  const selectSatisfaction = (idx) => {
    setSatisfaction(idx)
    if (idx===0){
      setVisible("worst")
    }
    else if (idx===1){
      setVisible("bad")
    }
    else if (idx===2){
      setVisible("average")
      openModal()
    }
    else if (idx===3){
      setVisible("good")
      openModal()
    }
    else if (idx===4){
      setVisible("best")
      openModal()
    }
    // else setVisible("none")
  
  }

  const [visible, setVisible] = useState(0) // const [변수, set변수] = useState(기본값)
    const selectVisible = (idx) =>{
      setVisible(idx)
    }

const [modal, setModal] = useState(false)
const openModal = () => {
  setModal(true)
  setTimeout(() => {
    setModal(false);
  }, 2000);
}
  return (
    <SatisfyComponent 
      todayData={todayData} 
      type={type} 
      selectType={selectType}
      selectTypeIdx={[1,2,3]} 

      todayTaste={todayTaste}

      // satisfaction={satisfaction}
      selectSatisfaction = {selectSatisfaction}
      
      survey={picLink}

      visible={visible}
      selectVisible={selectVisible}
      // selectVisible={selectVisible}

      modal={modal}
      setModal = {setModal}
      openModal={openModal}

    />
  )
}