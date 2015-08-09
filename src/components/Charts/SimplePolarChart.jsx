import React     from 'react';

export default class SimplePolarChart extends React.Component {
    changeConfig(series){
        return {
            chart: {
                polar: true
            },

            title: {
                text: 'Highcharts Polar Chart'
            },

            pane: {
                startAngle: 0,
                endAngle: 360
            },

            xAxis: {
                tickInterval: 45,
                min: 0,
                max: 360,
                labels: {
                    formatter: function () {
                        return this.value + '°';
                    }
                }
            },

            yAxis: {
                min: 0
            },

            plotOptions: {
                series: {
                    pointStart: 0,
                    pointInterval: 45
                },
                column: {
                    pointPadding: 0,
                    groupPadding: 0
                }
            },
            series: series
        };
    }

    render() {
        var highChart = <div></div>;
        if(typeof window !== "undefined"){
            var Chart = require('./BaseChart.jsx');
            highChart = (<Chart type="HighchartsMore" config={this.changeConfig(this.props.series)} ref="highPolarChart" />);
        }
        return (
            <div>
            {highChart}
            </div>
        );
    }
}

SimplePolarChart.PropTypes = {
    series : React.PropTypes.object.isRequired
}
