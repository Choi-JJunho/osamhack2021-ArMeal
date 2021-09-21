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

export default function ManagementComponent({events}){
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
        />
      </CalendarWrapper>
    </Container>
  )
}

function addHoverEvent(info) {
  var tooltip = new Tooltip(info.el, {
    title: info.event.extendedProps.description,
    placement: 'top',
    trigger: 'hover',
    container: 'body',
  });
  tooltip.hide();
}
