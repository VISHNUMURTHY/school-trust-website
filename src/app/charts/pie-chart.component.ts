import * as d3 from 'd3';
import { ChartData } from './charts.config';

export class PieChartComponent {

    chartType: string;
    donut: boolean;
    data: ChartData[];
    margin = 10;

    constructor() { }

    drawPieChart(data: ChartData[], svg: any, colorSchema?: string[]) {
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

    drawDonutChart(data: ChartData[], svg: any, startAngle?: number, endAngle?: number, innerRadius?: number, colorSchema?: string[], label?: string, subLabel?: string) {
        startAngle = (-1 * startAngle / 180) || -0.6;
        endAngle = (endAngle / 180) || 0.6;
        let width = svg.attr("width"),
            height = svg.attr("height"),
            radius = (Math.min(width, height) / 2) - this.margin,
            g = svg.append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

        const defs = svg.select("defs");

        let color = d3.scaleOrdinal(colorSchema || ['#4daf4a', '#377eb8']);
        let fillIds = {};
        for (let j = 0; j < data.length; j++) {
            if (data[j].options.pattern) {
                fillIds[data[j].options.patternId] = this.createPattern(defs, colorSchema[j], data[j].options.patternId);
            }
        };

        let pie = d3.pie()
            .value(function (d, i) {
                return d.value;
            })
            .sort(null)
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
                if (d.data.options.pattern) {
                    return `url(#${fillIds[d.data.options.patternId]})`;
                }
                return color(i);
            }).attr("stroke", function (d, i) {
                return color(i);
            })
            .style("stroke-width", "2px")
            .style("opacity", function (d, i) {
                if (i == 1)
                    return 0.3;
                return 1;
            })
            .transition().delay(function (d, i) {
                return i * 600
            }).duration(500).attrTween('d', function (d) {
                let i = d3.interpolate(d.startAngle + 0.1, d.endAngle);
                return function (t) {
                    d.endAngle = i(t);
                    return arc(d)
                }
            });

        if (label !== null && label !== undefined && subLabel !== null && subLabel !== undefined) {
            let text = g.append("g")
            text.append("text")
                .attr("class", "label")
                .attr("text-anchor", "middle")
                .attr("font-size", 20)
                .transition().delay(900)
                .text(label);
            text.append("text")
                .attr('dy', 20)
                .attr("class", "subLabel")
                .attr("text-anchor", "middle")
                .attr("font-size", 11)
                .transition().delay(900)
                .text(subLabel);
        } else {
            g.append("text")
                .attr("text-anchor", "middle")
                .attr("class", "labels")
                .attr('dy', 5)
                .transition().delay(500)
                .text(function (d) {
                    return d3.mean(data) + '%';
                });
        }
    }

    createPattern(defs, fill, patternId) {
        const pattern = defs
            .append("pattern")
            .attr("id", `${patternId}_pattern`)
            .attr('patternUnits', 'userSpaceOnUse')
            .attr('x', 0)
            .attr('y', '0')
            .attr('width', 6)
            .attr('height', 6)
            .attr('viewBox', '0 0 6 6')
        pattern
            .append('rect')
            .attr('x', 0)
            .attr('y', 0)
            .attr('width', 6)
            .attr('height', 6)
            .attr('fill', 'white');
        const lines = pattern
            .append('g')
            .attr('stroke', fill)
            .attr('stroke-linecap', 'square');
        lines
            .append('line')
            .attr('x1', 3)
            .attr('y1', 0)
            .attr('x2', 6)
            .attr('y2', 3)
            .attr('stroke-width', '0.5');
        lines
            .append('line')
            .attr('x1', 0)
            .attr('y1', 3)
            .attr('x2', 3)
            .attr('y2', 6)
            .attr('stroke-width', '0.5');

        return `${patternId}_pattern`;
    }

}