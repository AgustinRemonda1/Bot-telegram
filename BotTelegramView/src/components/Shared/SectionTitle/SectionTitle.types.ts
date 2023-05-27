export interface IProps {
  titleLabel: string;
  correctionLabel?: boolean;
  action?: (event?: any) => void;
  hiddenSectionFrom?: boolean;
  correctionTitle?: boolean;
}
