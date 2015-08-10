import React                     from 'react';
import SimpleStockChart          from './Charts/SimpleStockChart.jsx';
import SimplePolarChart          from './Charts/SimplePolarChart.jsx';
import SimpleChart               from './Charts/SimpleChart.jsx';
import CompareMultipleStockChart from './Charts/CompareMultipleStockChart.jsx';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            simpleChartSeries : [
                {
                    name: 'Tokyo',
                    data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
                }, {
                    name: 'New York',
                    data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
                }, {
                    name: 'Berlin',
                    data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
                }, {
                    name: 'London',
                    data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
                }
            ],
            simpleStockChartSeries : [
                {
                    name : 'AAPL',
                    data : [
                        [1218153600000,24.22],
                        [1218412800000,24.79],
                        [1218499200000,25.25],
                        [1218585600000,25.61],
                        [1218672000000,25.62],
                        [1218758400000,25.11],
                        [1219017600000,25.06],
                        [1219104000000,24.79]
                    ],
                    tooltip: {
                        valueDecimals: 2
                    }
                }
            ],
            simplePolarChartSeries : [
                {
                    type: 'column',
                    name: 'Column',
                    data: [8, 7, 6, 5, 4, 3, 2, 1],
                    pointPlacement: 'between'
                }, {
                    type: 'line',
                    name: 'Line',
                    data: [1, 2, 3, 4, 5, 6, 7, 8]
                }, {
                    type: 'area',
                    name: 'Area',
                    data: [1, 8, 2, 7, 3, 6, 4, 5]
                }
            ],
            compareMultipleStockChartSeries : [
                {
                    name: 'MSFT',
                    data: [
                        [1218412800000,27.90],
                        [1218499200000,28.12],
                        [1218585600000,27.91],
                        [1218672000000,27.91],
                        [1218758400000,27.81],
                        [1219017600000,27.69],
                        [1219104000000,27.32],
                        [1219190400000,27.29],
                        [1219276800000,27.18],
                        [1219363200000,27.84],
                        [1219622400000,27.66],
                        [1219708800000,27.27],
                        [1219795200000,27.56],
                        [1219881600000,27.94],
                        [1219968000000,27.29],
                        [1220313600000,27.10],
                        [1220400000000,26.90],
                        [1220486400000,26.35],
                        [1221091200000,27.34],
                        [1221177600000,27.62],
                        [1221436800000,26.82],
                        [1221523200000,25.99],
                    ]
                },
                {
                    name: 'AAPL',
                    data: [
                        [1218412800000,24.79],
                        [1218499200000,25.25],
                        [1218585600000,25.61],
                        [1218672000000,25.62],
                        [1218758400000,25.11],
                        [1219017600000,25.06],
                        [1219104000000,24.79],
                        [1219190400000,25.12],
                        [1219276800000,24.90],
                        [1219363200000,25.26],
                        [1219622400000,24.65],
                        [1219708800000,24.81],
                        [1219795200000,24.95],
                        [1219881600000,24.82],
                        [1219968000000,24.22],
                        [1220313600000,23.74],
                        [1220400000000,23.85],
                        [1220486400000,23.03],
                        [1220572800000,22.88],
                        [1220832000000,22.56],
                        [1220918400000,21.67],
                        [1221004800000,21.66],
                        [1221091200000,21.81],
                        [1221177600000,21.28]
                    ]
                }
            ]
        }
    }

    render() {
        return (
            <div>
                <SimpleChart series={this.state.simpleChartSeries}/>
                <SimpleStockChart series={this.state.simpleStockChartSeries}/>
                <SimplePolarChart series={this.state.simplePolarChartSeries}/>
                <CompareMultipleStockChart series={this.state.compareMultipleStockChartSeries}/>
            </div>
        );
    }
}

