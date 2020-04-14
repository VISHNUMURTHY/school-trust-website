import * as d3 from 'd3';

export class PieChartComponent {

    chartType: string;
    donut: boolean;
    data: number[];
    margin = 10;

    constructor() { }

    drawPieChart(data: number[], svg: any, colorSchema?: string[]) {
        let width = svg.attr("width"),
            height = svg.attr("height"),
            radius = (Math.min(width, height) / 2) - this.margin,
            g = svg.append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

        let color = d3.scaleOrdinal(colorSchema || ['#4daf4a', '#377eb8', '#ff7f00', '#984ea3', '#e41a1c']);

        let pie = d3.pie();

        let arc = d3.arc()
            .innerRadius(0)
            .outerRadius(radius);

        let arcs = g.selectAll("arc")
            .data(pie(data))
            .enter()
            .append("g")
            .attr("class", "arc")

        arcs.append("path")
            .attr("fill", function (d, i) {
                return color(i);
            })
            .attr("d", arc);
    }

    drawDonutChart(data: number[], element: any, startAngle?: number, endAngle?: number, innerRadius?: number, colorSchema?: string[]) {
        let svg = d3.select(element).append('svg')
            .attr('width', element.offsetWidth)
            .attr('height', element.offsetHeight || 200);

        startAngle = (-1 * startAngle / 180) || -0.6;
        endAngle = (endAngle / 180) || 0.6;
        let width = svg.attr("width"),
            height = svg.attr("height"),
            radius = (Math.min(width, height) / 2) - this.margin,
            g = svg.append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

        let color = d3.scaleOrdinal(colorSchema || ['#4daf4a', '#377eb8']);

        let pie = d3.pie()
            .startAngle(startAngle * Math.PI)
            .endAngle(endAngle * Math.PI);

        let arc = d3.arc()
            .innerRadius(innerRadius || (radius / 2))
            .outerRadius(radius);

        let arcs = g.selectAll("arc")
            .data(pie(data))
            .enter()
            .append("g")
            .attr("class", "arc")

        arcs.append("path")
            .attr("fill", function (d, i) {
                return color(i);
            }).attr("stroke", function (d, i) {
                return color(i);
            })
            .style("stroke-width", "2px")
            .style("opacity", 0.5)
            .attr("d", arc);
    }

}