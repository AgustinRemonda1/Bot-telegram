import React, { useContext } from 'react';
import { CardContent, Box } from '@mui/material';
import {
  DashboardContainer,
  Content,
  SectionContainer,
  CardContainer,
  StatisticCard,
  DashboardButton,
  IconContainer,
  LoaderContainer,
  Loader
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
          />
        </SectionContainer>
        <CardContainer>
          {infoCards.map((infoCard, index) => (
            <StatisticCard key={'info-card' + index}>
              <CardContent>
                <Box fontSize={18} fontWeight={300}>
                  {infoCard.name}
                </Box>
                <Box fontSize={40} fontWeight={700}>
                  {infoCard.value}
                </Box>
              </CardContent>
            </StatisticCard>
          ))}
          <StatisticCard>
            <CardContent>
              <Box fontSize={18} fontWeight={300}>
                {language.actions}
              </Box>
              <DashboardButton
                variant="contained"
                onClick={actions.onRefreshCommands}
                disabled={state.loading}
              >
                <IconContainer>
                  <AutorenewIcon />
                </IconContainer>
                {language.refreshCommands}
                {state.loading && (
                  <LoaderContainer>
                    <Loader size={35} />
                  </LoaderContainer>
                )}
              </DashboardButton>
            </CardContent>
          </StatisticCard>
        </CardContainer>
        <SectionContainer>
          <SectionTitle
            titleLabel={language.polls}
            hiddenSectionFrom={true}
            correctionTitle={true}
          />
          <SimpleTable
            config={generatePollConfigWithLang(configParams)}
            dataset={state.polls || []}
            loader={state.loading}
          />
          <DashboardButton variant="contained" onClick={actions.onRedirectPoll}>
            <IconContainer>
              <MoreHorizIcon />
            </IconContainer>
            {language.moreOptions}
          </DashboardButton>
        </SectionContainer>
        <SectionContainer>
          <SectionTitle
            titleLabel={language.botActions}
            hiddenSectionFrom={true}
            correctionTitle={true}
          />
          <SimpleTable
            config={generateCommandConfigWithLang(configParams)}
            dataset={state.commands || []}
            loader={state.loading}
          />
          <DashboardButton
            variant="contained"
            onClick={actions.onRedirectBotActions}
          >
            <IconContainer>
              <MoreHorizIcon />
            </IconContainer>
            {language.moreOptions}
          </DashboardButton>
        </SectionContainer>
      </Content>
    </DashboardContainer>
  );
};

export default Dashboard;
