import React, { useContext } from 'react';
import {
  Container,
  Content,
  SpaceAroundContent
} from 'components/Layout/Content';
import SectionTitle from 'components/Shared/SectionTitle';
import { LanguageContext } from 'Static/Lang/Lang.lang';
import BigIconButton from 'components/Shared/BigIconButton';
import { generateActivitiesButtons } from './Activities.config';
import useAppRouter from 'LogicServices/Shared/useRouter';

const Activities = () => {
  const { language } = useContext(LanguageContext);
  const { onChangeRoute } = useAppRouter();
  const activitiesButtons = generateActivitiesButtons({
    language,
    onChangeRoute
  });
  return (
    <Container>
      <Content>
        <SectionTitle titleLabel={language.activities} />
        <SpaceAroundContent>
          {activitiesButtons.map((activitiesButton) => (
            <BigIconButton
              text={activitiesButton.text}
              icon={activitiesButton.icon}
              onClick={activitiesButton.onClick}
            />
          ))}
        </SpaceAroundContent>
      </Content>
    </Container>
  );
};

export default Activities;
