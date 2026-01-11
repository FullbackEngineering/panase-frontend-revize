'use client';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import trLocale from '@fullcalendar/core/locales/tr';
// 🚨 DÜZELTME 1: Gerekli tipleri import ediyoruz
import { EventContentArg, EventInput } from '@fullcalendar/core';

interface AppointmentCalendarProps {
  // 🚨 DÜZELTME 2: 'any[]' yerine 'EventInput[]' kullanıyoruz.
  // Bu sayede TypeScript, etkinlik objesinin içinde 'title', 'start' gibi alanların olabileceğini biliyor.
  events: EventInput[]; 
}

export default function AppointmentCalendar({ events }: AppointmentCalendarProps) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
      <style jsx global>{`
        .fc-toolbar-title { font-size: 1.25rem !important; font-weight: 700; color: #1f2937; }
        .fc-button-primary { background-color: #4f46e5 !important; border-color: #4f46e5 !important; }
        .fc-button-primary:hover { background-color: #4338ca !important; border-color: #4338ca !important; }
        .fc-event { cursor: pointer; border: none !important; }
      `}</style>
      
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
        }}
        locale={trLocale}
        events={events}
        height="auto"
        aspectRatio={1.8}
        editable={false}
        selectable={true}
        dayMaxEvents={true}
        eventContent={renderEventContent}
      />
    </div>
  );
}

// 🚨 DÜZELTME 3: Fonksiyon argümanına doğru tipi veriyoruz.
function renderEventContent(eventInfo: EventContentArg) {
  return (
    <div className="flex flex-col px-1 overflow-hidden">
      {/* FullCalendar bu nesnelerin dolu geleceğini garanti eder */}
      <span className="text-xs font-bold">{eventInfo.timeText}</span>
      <span className="text-xs truncate">{eventInfo.event.title}</span>
    </div>
  );
}