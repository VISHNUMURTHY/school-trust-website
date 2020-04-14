export interface Data{
    name?: string|number,
    value: number,
    options?: any
}

export interface DataSeries{
    series: Data[];
    type: string;
}

export interface Labels {
    labels: string[];
}