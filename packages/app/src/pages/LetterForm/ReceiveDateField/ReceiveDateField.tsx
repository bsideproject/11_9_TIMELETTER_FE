import { useEffect, useState } from 'react';
import moment from 'moment';
import { useRecoilState } from 'recoil';

import { DatePicker, Text, TimePicker } from '~components/index';
import { layoutSprinkles } from '~components/styles/layout.css';
import Tooltip from '~components/Tooltip/Tooltip';

import { letterFormState } from '../LetterForm.atoms';

function ReceiveDateField() {
  const [letterForm, setLetterForm] = useRecoilState(letterFormState);
  const [date, setDate] = useState<Date>(moment().add(1, 'd').toDate());
  const [time, setTime] = useState<string>(moment().format('HH:mm'));

  const handleDateChange = (value: Date) => {
    setDate(value);
  };

  const handleTimeChange = (value: string) => {
    setTime(value);
  };

  useEffect(() => {
    setLetterForm({
      ...letterForm,
      receivedDate: `${moment(date).format('YYYY-MM-DD')} ${time}:00`,
    });
  }, [date, time]);

  return (
    <>
      <Text as="h2" color="white" style={{ marginBottom: 12 }}>
        {letterForm.receiverName}님이
        <br />
        <Text as="strong" color="secondary">
          편지 열 수 있는 날
        </Text>
        을 선택해 주세요.
      </Text>
      <Tooltip
        color="white"
        content={
          <>
            타임레터는 타임캡슐 편지 서비스예요.
            <br />
            내가 원하는 시간에 상대방이 편지를 읽을 수 있도록 편지 시간은 최소 하루, 최대 1년 뒤인
            미래 시간으로 설정해 주세요.
          </>
        }
        label="편지 날짜는 왜 설정하나요?"
      />
      <div
        className={layoutSprinkles({ display: 'flex', flex: 'column' })}
        style={{ marginTop: 23, gap: 16 }}
      >
        <DatePicker value={date} onChange={handleDateChange} />
        <TimePicker value={time ?? moment(date).format('HH:mm')} onChange={handleTimeChange} />
      </div>
    </>
  );
}

export default ReceiveDateField;