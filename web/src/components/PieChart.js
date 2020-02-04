import React from 'react';
import { ResponsivePie, Pie } from '@nivo/pie';
import PropTypes from 'prop-types';

export default function PieChart({ data }) {
  return (
    <>
      <ResponsivePie
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.3}
        padAngle={6}
        cornerRadius={3}
        colors={{ scheme: 'nivo' }}
        borderWidth={1}
        borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
        radialLabelsSkipAngle={10}
        radialLabelsTextXOffset={6}
        radialLabelsTextColor="#333333"
        radialLabelsLinkOffset={0}
        radialLabelsLinkDiagonalLength={16}
        radialLabelsLinkHorizontalLength={24}
        radialLabelsLinkStrokeWidth={1}
        radialLabelsLinkColor={{ from: 'color' }}
        sliceLabel={d =>
          d.value > 1000
            ? `${(d.value / 1000).toFixed(2)}k`
            : d.value.toFixed(0)
        } // Dá pra fazer um valor abreviado, ex: 17,2k
        slicesLabelsSkipAngle={10}
        slicesLabelsTextColor="#333333"
        animate
        motionStiffness={90}
        motionDamping={15}
        defs={[
          {
            id: 'dots',
            type: 'patternDots',
            background: 'inherit',
            color: 'rgba(255, 255, 255, 0.3)',
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: 'lines',
            type: 'patternLines',
            background: 'inherit',
            color: 'rgba(255, 255, 255, 0.3)',
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        fill={[
          {
            match: {
              id: 'ruby',
            },
            id: 'dots',
          },
          {
            match: {
              id: 'c',
            },
            id: 'dots',
          },
          {
            match: {
              id: 'go',
            },
            id: 'dots',
          },
          {
            match: {
              id: 'python',
            },
            id: 'dots',
          },
          {
            match: {
              id: 'scala',
            },
            id: 'lines',
          },
          {
            match: {
              id: 'lisp',
            },
            id: 'lines',
          },
          {
            match: {
              id: 'elixir',
            },
            id: 'lines',
          },
          {
            match: {
              id: 'javascript',
            },
            id: 'lines',
          },
        ]}
        legends={[
          {
            anchor: 'bottom-left',
            direction: 'row',
            translateX: -56,
            translateY: 56,
            itemWidth: 90,
            itemHeight: 18,
            itemTextColor: '#999',
            symbolSize: 14,
            symbolShape: 'circle',
            effects: [
              {
                on: 'hover',
                style: {
                  itemTextColor: '#000',
                },
              },
            ],
          },
        ]}
      />
    </>
  );
}

PieChart.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.array,
};

PieChart.defaultProps = {
  data: [
    {
      id: 'Cliente A',
      label: 'Cliente A',
      value: 15000,
      color: 'hsl(180, 70%, 50%)',
    },
    {
      id: 'Cliente B',
      label: 'Cliente B',
      value: 17500,
      color: 'hsl(204, 70%, 50%)',
    },
    {
      id: 'Cliente C',
      label: 'Cliente C',
      value: 8750,
      color: 'hsl(91, 70%, 50%)',
    },
    {
      id: 'Cliente D',
      label: 'Cliente D',
      value: 9350.15,
      color: 'hsl(18, 70%, 50%)',
    },
  ],
};
