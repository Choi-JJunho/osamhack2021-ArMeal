import React from 'react';
import styled from 'styled-components'
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction'
import Tooltip from 'tooltip.js';
import './shared/tooltip.css'

const Container = styled.div`
  padding: 0 2vw;
`

const CalendarWrapper = styled.div`
  background-color: white;
  padding: 2vh 2vw;
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`
const Modal = styled.div`
  z-index: 1;
  position: absolute;
  width: 511px;
  height: 603px;
  left: 345px;
  top: 98px;

  background: #FFFFFF;
  /* Background */

  border: 5px solid #E9E9EF;
  box-sizing: border-box;
`
const ModalForm = styled.form`
margin: 20px;
`
const ModalTextTitle = styled.div`

font-style: normal;
font-weight: bold;
font-size: 26px;
line-height: 31px;
display: flex;
align-items: center;
text-align: center;

color: #000000;
`

const ModalTextForm = styled(ModalTextTitle)`
font-weight: normal;
font-size: 22px;
line-height: 27px;
`

const ModalFieldWrapper = styled.div`
display:flex;
justify-content:spaced-evenly;
margin: 30px 0px 30px 0px;
`
const ModalFieldDescriptionWrapper = styled.div`

`
const ModalDescriptionField = styled.div`
width: 445px;
height: 144px;
background: #FFFFFF;
border: 1px solid #000000;
box-sizing: border-box;
border-radius: 5px;
// value:${props => props.description};
`
const ModalDateAndTimeField = styled(ModalTextForm)`
width: 140px;
height: 40px;

background: #E5E5E5;
border-radius: 5px;

color: #B8B8B8;
`
const ModalMenuField = styled.input`
width: 333px;
height: 40px;
value: ${props => props.title};
background: #FFFFFF;
border: 1px solid #000000;
box-sizing: border-box;
border-radius: 5px;
`
const ModalSelfField = styled.input`

width: 333px;
height: 40px;
`

const AddSelfMenuButton = styled.button`
width: 100px;
height: 43px;

font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 22px;

display: flex;
align-items: center;
text-align: center;

color: #75CB32;
`
const CancelButton = styled.button`
width: 211px;
height: 43px;

background: #FFFFFF;
border: 3px solid #B6B6B6;
box-sizing: border-box;
`
const CancelText = styled.div`
width: 176.92px;
height: 32.25px;

font-style: normal;
font-weight: bold;
font-size: 22px;
line-height: 22px;

display: flex;
align-items: center;
text-align: center;

color: #6F6F6F;
`

const AddButton = styled.button`
width: 211px;
height: 43px;

background: #75CB32;
border: 3px solid #75CB32;
box-sizing: border-box;
`

const AddText = styled.div`
width: 176.92px;
height: 32.25px;

font-style: normal;
font-weight: bold;
font-size: 22px;
line-height: 22px;

display: flex;
align-items: center;
text-align: center;

color: #FFFFFF;
`

function addHoverEvent(info) {
  var tooltip = new Tooltip(info.el, {
    title: info.event.extendedProps.description,
    placement: 'top',
    trigger: 'hover',
    container: 'body',
  });
  tooltip.hide();
}

export default function SelfComponent({events, selectEvent, event, dateClick, }){
  return (
    <Container>
      <CalendarWrapper>
        <FullCalendar
          plugins={[ dayGridPlugin, interactionPlugin ]}
          initialView="dayGridMonth"
          headerToolbar={{
            left: 'prev',
            center: 'title',
            right: 'next'
          }}
          height="76vh"
          locale="af"
          initialEvents={events}
          eventDidMount={el => addHoverEvent(el)}
          eventClick={(e) => selectEvent(e)}
          // onClick={selectEdit()}
          dateClick={(e) => dateClick(e)} 
        />
        {event ? 
          <Modal selectEvent={selectEvent}>
            <ModalTextTitle>
              자율메뉴 추가/수정
            </ModalTextTitle>
            <ModalForm>
              <ModalFieldWrapper>
                <ModalTextForm>날짜:</ModalTextForm><ModalDateAndTimeField>{event.event._def.extendedProps.time}</ModalDateAndTimeField>
                <ModalTextForm>타임:</ModalTextForm><ModalDateAndTimeField>{event.event._def.extendedProps.time}</ModalDateAndTimeField>
              </ModalFieldWrapper>
              <ModalFieldWrapper>
                <ModalTextForm>메뉴명:</ModalTextForm><ModalMenuField title={event.event.title}/>
              </ModalFieldWrapper>
              <ModalFieldWrapper>
                <ModalTextForm>부식 추가:</ModalTextForm><ModalSelfField/><AddSelfMenuButton>추가하기</AddSelfMenuButton>
              </ModalFieldWrapper>
              <ModalFieldDescriptionWrapper>
                <ModalTextForm>메뉴에 해당하는 부식</ModalTextForm><ModalDescriptionField>{event.event._def.extendedProps.description}</ModalDescriptionField>
              </ModalFieldDescriptionWrapper>
              <ModalFieldWrapper>
                <CancelButton>
                  <CancelText>취소하기</CancelText>
                </CancelButton>
                <AddButton>
                  <AddText>추가하기</AddText>
                </AddButton>
              </ModalFieldWrapper>
              
              
              
            
            </ModalForm>
          </Modal>
        :
          <div></div>
        }
        

        
      </CalendarWrapper>
    </Container>
  )
}

