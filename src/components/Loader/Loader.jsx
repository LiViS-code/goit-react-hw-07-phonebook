import { BarsRow, BarsCol, Bars, Bar, Text } from './Loader.styled';

export default function Loader() {
  return (
    <BarsRow>
      <BarsCol>
        <Bars>
          <Bar></Bar>
          <Bar></Bar>
          <Bar></Bar>
          <Bar></Bar>
          <Bar></Bar>
        </Bars>
      </BarsCol>
      <Text>Loading...</Text>
    </BarsRow>
  );
}
