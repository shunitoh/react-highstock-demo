import React from 'react';
import SimpleStockChart from './Charts/SimpleStockChart.jsx';
import SimpleChart      from './Charts/SimpleChart.jsx';

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
            ]
        }
    }

    render() {
        return (
            <div>
                <SimpleChart series={this.state.simpleChartSeries}/>
                <SimpleStockChart series={this.state.simpleStockChartSeries}/>
            </div>
        );
    }
}

