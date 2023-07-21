import React, { useContext } from 'react';
import { CardContent, Box } from '@mui/material';
import {
  DashboardContainer,
  Content,
  SectionContainer,
  CardContainer,
  StatisticCard
} from './Dashboard.styled';
import { ModalControllerContext } from 'components/HOC/ModalController';
import SimpleTable from 'components/Shared/SimpleTable';
import { LanguageContext } from 'Static/Lang/Lang.lang';
import {
  generateCardInfo,
  generateCommandConfigWithLang,
  generatePollConfigWithLang
} from './Dashboard.config';
import SectionTitle from 'components/Shared/SectionTitle';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import useDashboard from 'LogicServices/Dashboard/useDashboard';

const Dashboard = () => {
  const { language } = useContext(LanguageContext);
  const { isOpenDrawer } = useContext(ModalControllerContext);
  const { state, actions } = useDashboard();

  const configParams = {
    language,
    ...state.statistics
  };

  const infoCards = generateCardInfo(configParams);

  return (
    <DashboardContainer open={isOpenDrawer}>
      <Content>
        <SectionContainer>
          <SectionTitle
            titleLabel={language.dataAndActions}
            hiddenSectionFrom={true}
            correctionTitle={true}
            typeButton="CustomButton"
            action={actions.onRefreshCommands}
            buttonProps={{
              label: language.refreshCommands,
              icon: <AutorenewIcon />,
              disabled: state.loading
            }}
          />
        </SectionContainer>
        <CardContainer>
          {infoCards.map((infoCard, index) => (
            <StatisticCard key={'info-card' + index}>
              <CardContent>
                <Box fontSize={20} fontWeight={500}>
                  {infoCard.name}
                </Box>
                <Box fontSize={40} fontWeight={800}>
                  {infoCard.value}
                </Box>
              </CardContent>
            </StatisticCard>
          ))}
        </CardContainer>
        <SectionContainer>
          <SectionTitle
            titleLabel={language.polls}
            hiddenSectionFrom={true}
            correctionTitle={true}
            action={actions.onRedirectPoll}
            typeButton="CustomButton"
            buttonProps={{
              label: language.moreOptions,
              icon: <MoreHorizIcon />,
              disabled: state.loading
            }}
          />
          <SimpleTable
            config={generatePollConfigWithLang(configParams)}
            dataset={state.polls || []}
            loader={state.loading}
          />
        </SectionContainer>
        <SectionContainer>
          <SectionTitle
            titleLabel={language.botActions}
            hiddenSectionFrom={true}
            correctionTitle={true}
            action={actions.onRedirectBotActions}
            typeButton="CustomButton"
            buttonProps={{
              label: language.moreOptions,
              icon: <MoreHorizIcon />,
              disabled: state.loading
            }}
          />
          <SimpleTable
            config={generateCommandConfigWithLang(configParams)}
            dataset={state.commands || []}
            loader={state.loading}
          />
        </SectionContainer>
      </Content>
    </DashboardContainer>
  );
};

export default Dashboard;
