import React, {useState, useEffect} from 'react';

import SatisfyComponent from 'components/SatisfyComponent';
import SatisfyMobileComponent from 'components/SatisfyMobileComponent';
import { getRatioToday } from 'modules/satisfy';
import { useDispatch, useSelector } from 'react-redux';

export default function SatisfyContainer(){
  const dispatch = useDispatch();
  const { data } = useSelector(state => state.authReducer )
  const { todayRatio } = useSelector(state => state.satisfyReducer )

  useEffect(() => {
    const offset = new Date().getTimezoneOffset() * 60000;
    const date = new Date(Date.now() - offset).toISOString().slice(0, 10);
    dispatch(getRatioToday({date: date, group_id: data.group_id}))
  },[dispatch, data])

  useEffect(() => {
    let today = [
      {
        type: "조식",
        satisfy: 87,
      },
      {
        type: "중식",
        satisfy: 62,
      },
      {
        type: "석식",
        satisfy: 0,
      }
    ]
    todayRatio.data.map((d, idx) => {
      return today[idx].satisfy = d.ratio;
    })
    setTodayData(today);
  },[todayRatio])

  const [type, setType] = useState(0) // const [변수, set변수] = useState(기본값)
  const selectType = (idx) => {
    setType(idx)
  }

  const [todayData, setTodayData] = useState([
    {
      type: "조식",
      satisfy: 87,
    },
    {
      type: "중식",
      satisfy: 62,
    },
    {
      type: "석식",
      satisfy: 0,
    }
  ])

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
      openModal([idx])
    }
    else if (idx===3){
      setVisible("good")
      openModal([idx])
    }
    else if (idx===4){
      setVisible("best")
      openModal([idx])
    }
    // else setVisible("none")
  
  }

  const [visible, setVisible] = useState(0) // const [변수, set변수] = useState(기본값)
    const selectVisible = (idx) =>{
      setVisible(idx)
    }

const [modal, setModal] = useState(false)
const openModal = (e) => {
  console.log(e)
  setModal(true)
  setVisible(0)

  setTimeout(() => {
    setModal(false);
  }, 2000);
}
  return (
    <>
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
    <SatisfyMobileComponent
    todayData={todayData} 
    type={type} 
    selectType={selectType}
    selectTypeIdx={[1,2,3]} 

    todayTaste={todayTaste}

    // satisfaction={satisfaction}
    selectSatisfaction = {selectSatisfaction}
    
    survey={picLink}

    visible={visible}
    selectVisible={selectVisible}>

    </SatisfyMobileComponent>
    </>
  )
}