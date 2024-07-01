import React from 'react';
import { ReactSVG } from 'react-svg';
import Tooltip from '../Tooltip/Tooltip';
import { Container, StyledButton } from './ActionButton.styles';
import { IProps } from './ActionButton.types';
import { IAction } from 'LogicServices/Shared/Types';
import { getColorWithType } from './ActionButton.utils';
import useActionButton from './useActionButton';

const ActionButton = ({ actions, dataset }: IProps) => {
  const { click, onClickTooltip, onClick, disabled } = useActionButton({
    dataset
  });

  return (
    <Container>
      {actions.map((action: IAction, i: number) => (
        <Tooltip
          key={'action-button' + i}
          title={action.title}
          click={click}
          onClick={onClickTooltip}
        >
          <StyledButton
            key={i}
            id={action.id}
            disabled={disabled(action)}
            onClick={() => onClick(action)}
            colorType={getColorWithType(action.type, disabled(action))}
          >
            <ReactSVG src={action.icon} />
          </StyledButton>
        </Tooltip>
      ))}
    </Container>
  );
};

export default ActionButton;
