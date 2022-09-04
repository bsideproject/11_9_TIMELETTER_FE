import { Text } from '~components/index';

import ReceiverField from '../ReceiverField/ReceiverField';
import SenderField from '../SenderField/SenderField';

import { LetterFormContentProps } from './LetterFormContent.types';

function LetterFormContent(props: LetterFormContentProps) {
  const { activeStep } = props;

  switch (activeStep) {
    case 1:
      return <SenderField />;
    case 2:
      return <ReceiverField />;
    default:
      return <Text color="white">작업중</Text>;
  }
}

export default LetterFormContent;