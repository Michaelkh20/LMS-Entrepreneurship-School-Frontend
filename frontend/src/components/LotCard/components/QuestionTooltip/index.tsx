import { QuestionCircleOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';
import { PRICE_DESC_TEXT } from '../../constants';

export default function PriceQuestionTooltip() {
  return (
    <Tooltip title={PRICE_DESC_TEXT}>
      <QuestionCircleOutlined
        style={{
          fontSize: '14px',
          color: 'grey',
        }}
      />
    </Tooltip>
  );
}
