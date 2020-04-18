export interface ChartData{
    name?: string|number,
    value: number,
    options?: any
}

export interface DataSeries{
    series: ChartData[];
    type: string;
}

export interface Labels {
    labels: string[];
}