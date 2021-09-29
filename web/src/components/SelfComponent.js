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
  height: 68vh;
  // width: 42.5vw;
  // height: 75vh;
  // left: 345px;
  // top: 98px;
  left: 35vw;
  top: 12vh;

  background: #FFFFFF;
  /* Background */

  border: 5px solid #E9E9EF;
  box-sizing: border-box;
`
const ModalForm = styled.form`
margin: 20px;
`
const ModalTextTitle = styled.div`
margin-bottom: 4vh;
margin-top: 7vh;

font-style: normal;
font-weight: bold;
font-size: 26px;
line-height: 31px;
display: grid;
align-items: center;
text-align: center;

color: #000000;
`

const ModalTextForm = styled(ModalTextTitle)`
text-align: left;
margin-bottom: 0;
margin-top: 0;
font-weight: normal;
font-size: 22px;
line-height: 27px;

// padding:10px;

// font-style: normal;
// font-weight: normal;
// font-size: 18px;
// line-height: 22px;
// // display: flex;
// align-items: center;

// color: #000000;
`

const ModalFieldWrapper = styled.div`
justify-content: space-between;
display:flex;

margin: 30px 0px 30px 0px;
`
const ModalFieldDescriptionWrapper = styled.div`

`
const ModalDescriptionField = styled.textarea`
margin-top: 5px;
padding: 10px;
font-size: 22px;
line-height: 27px;
color:#868686;
width: 460px;
height: 144px;
background: #FFFFFF;
border: 1px solid #000000;
box-sizing: border-box;
border-radius: 5px;

// word-wrap: break-word;
// overflow-x: scroll;

// value:${props => props.description};
`
const ModalDateAndTimeField = styled(ModalTextForm)`
width: 165px;
height: 40px;
background: #E5E5E5;
border-radius: 5px;
color: #B8B8B8;
text-align: center;
`
const ModalMenuField = styled.input`
width: 344px;
height: 40px;
defaultValue: ${props => props.title};
background: #FFFFFF;
border: 1px solid #000000;
box-sizing: border-box;
border-radius: 5px;

padding:10px;

font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 22px;
// display: flex;
align-items: center;

color: #000000;
`
const ModalSelfField = styled.input`
border: 1px solid #000000;
box-sizing: border-box;
border-radius: 5px;
width: 220px;
height: 40px;

padding:10px;

font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 22px;
// display: flex;
align-items: center;

color: #000000;
`

const AddSelfMenuButton = styled.div`
border: 3px solid #75CB32;
box-sizing: border-box;
border-radius: 5px;
background-color:white;
padding:7px;
width: 100px;
height: 43px;

font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 22px;

display: block;
align-items: center;
text-align: center;

color: #75CB32;
`
const CancelButton = styled.div`
width: 211px;
height: 43px;

background: #FFFFFF;
border: 3px solid #B6B6B6;
box-sizing: border-box;

font-style: normal;
font-weight: bold;
font-size: 22px;
line-height: 22px;
padding: 7px;
align-items: center;
text-align: center;

color: #6F6F6F;
`

const AddButton = styled.div`
width: 211px;
height: 43px;

background: #75CB32;
border: 3px solid #75CB32;
box-sizing: border-box;
padding: 7px;
font-style: normal;
font-weight: bold;
font-size: 22px;
line-height: 22px;

align-items: center;
text-align: center;

color: #FFFFFF;
`

const InputWrapper = styled.div`
display: contents;
width: auto;
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

export default function SelfComponent({events, selectEvent, event}){
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
          // dateClick={(e) => dateClick(e)} 
        />
        {event ? 
          <Modal selectEvent={selectEvent}>
            <ModalTextTitle>
              자율메뉴 추가/수정
            </ModalTextTitle>
            <ModalForm>
              <ModalFieldWrapper>
                <ModalTextForm>
                  날짜:
                </ModalTextForm>
                <ModalDateAndTimeField>
                  {event.event.startStr.split("T")[0]}
                  </ModalDateAndTimeField>
                <ModalTextForm>
                  타임:
                </ModalTextForm>
                <ModalDateAndTimeField>
                  {event.event._def.extendedProps.time}
                </ModalDateAndTimeField>
              </ModalFieldWrapper>
              <ModalFieldWrapper>
                <ModalTextForm>
                  메뉴명:
                </ModalTextForm>
                <InputWrapper>
                  <ModalMenuField defaultValue={event.event.title}/>
                </InputWrapper>
                
              </ModalFieldWrapper>
              <ModalFieldWrapper>
                <ModalTextForm>
                  부식 추가:
                </ModalTextForm>
                <InputWrapper>
                  <ModalSelfField/>
                  <AddSelfMenuButton>추가하기</AddSelfMenuButton>
                </InputWrapper>
              </ModalFieldWrapper>
              <ModalFieldDescriptionWrapper>
                <ModalTextForm>메뉴에 해당하는 부식</ModalTextForm>
                <ModalDescriptionField defaultValue={event.event._def.extendedProps.description}/>
              </ModalFieldDescriptionWrapper>
              <ModalFieldWrapper>
                <CancelButton>
                  취소
                </CancelButton>
                <AddButton>
                  추가하기
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

