'use client';

import {
  ActionIcon,
  Group,
  Paper,
  PaperProps,
  Text,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core';
import dynamic from 'next/dynamic';
import { IconDotsVertical } from '@tabler/icons-react';
import { CollectionQuery } from '@/Model/collection-query.model';
import fetcher from '@/shared/utils/fetcher';
import { useEffect } from 'react';
import useSwr from 'swr';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

type VisitorsChartProps = PaperProps & {
  viewerData?: {
    ip: string;
    count: string | number;
    firstView: string;
    lastView: string;
  }[];
};

const VisitorsChart = ({ viewerData, ...others }: VisitorsChartProps) => {
  const collection: CollectionQuery = {
    locale: 'en',
  };

  const { data, isLoading, error } = useSwr(
    { url: "/portal-interactions/get-viewers", params: collection },
    fetcher
  );

  const theme = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();

  useEffect(() => {
    if (data) {
      console.log('Data List:', JSON.stringify(data, null, 2));
    }
  }, [data]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data: {error.message}</div>;

  if (data) {
    // Prepare the chart data using IP as key
    const seriesData = data.data.reduce((acc: { [key: string]: number }, item: { ip: string; count: string | number }) => {
      const ip = item.ip;
      const count = parseFloat(item.count.toString());
      acc[ip] = (acc[ip] || 0) + count; // Sum the counts for the same IP
      return acc;
    }, {});

    const categories = Object.keys(seriesData); // IP addresses for categories
    const counts = Object.values(seriesData); // Counts for each IP

    const series = [
      {
        name: 'Viewer Count',
        data: counts as number[], // Ensure this is an array of numbers
      },
    ];

    const options: any = {
      chart: {
        height: 350,
        type: 'bar', // Change to 'area' if needed
        fontFamily: 'Poppins, sans-serif',
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
      },
      xaxis: {
        categories: categories,
        labels: {
          style: {
            colors: colorScheme === 'dark' ? theme.white : theme.black,
          },
        },
      },
      yaxis: {
        title: {
          text: 'Viewer Count',
        },
        labels: {
          style: {
            colors: colorScheme === 'dark' ? theme.white : theme.black,
          },
        },
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm',
        },
      },
      colors: [
        theme.colors[theme.primaryColor][5],
        theme.colors[theme.primaryColor][2],
      ],
      legend: {
        labels: {
          colors: [colorScheme === 'dark' ? theme.white : theme.black],
        },
      },
    };

    return (
      <Paper {...others}  withBorder>
        <Group justify='space-between' mb='md'>
          <Text size='lg' fw={600}>
            Total Visitors by IP
          </Text>
          <ActionIcon variant='subtle'>
            <IconDotsVertical size={16} />
          </ActionIcon>
        </Group>
        {/*@ts-ignore*/}
        <Chart
          options={options}
          series={series}
          type='bar' // Change to 'area' if needed
          height={350}
          width={'100%'}
        />
      </Paper>
    );
  }

  return null; // Fallback if data is not available
};

export default VisitorsChart;