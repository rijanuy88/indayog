import React, { Component } from 'react'
import Chart from 'react-apexcharts'

export default class Charts extends Component {
    constructor(props) {
        super(props);

        this.state = {
        options: {
            chart: {
            id: 'apexchart-example'
            },
            xaxis: {
            categories: ["Acc", "BM", "CS", "HumLet", "NSM", "SEA", "SOE", "SON", "SS"]
            }
        },
        series: [{
            name: 'series-1',
            data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
        }]
        }
    }
    render() {
        return (
        <Chart options={this.state.options} series={this.state.series} type="bar" width={950} height={320} />
        )
    }
}
