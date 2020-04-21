import { ChartData } from '../common/interfaces/charts.config';

export const SAMPLE_DATA: ChartData[] = [
    {
        value: 20,
        options: {
            pattern: false,
            patternId: 'p1'
        }
    },
    {
        value: 100,
        options: {
            pattern: true,
            patternId: 'p2'
        }
    }
]