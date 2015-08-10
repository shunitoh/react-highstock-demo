import React     from 'react';

export default class SimpleChart extends React.Component {
    changeConfig(series){
        return {
            title: {
                text: 'Monthly Average Temperature',
                x: -20 //center
            },
            subtitle: {
                text: 'Source: WorldClimate.com',
                x: -20
            },
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            yAxis: {
                title: {
                    text: 'Temperature (°C)'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
                valueSuffix: '°C'
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle',
                borderWidth: 0
            },
            series: series
        };
    }

    render() {
        var highChart = <div></div>;
        if(typeof window !== "undefined"){
            var Chart = require('./BaseChart.jsx');
            highChart = (<Chart theme="dark-green" type="Highcharts" config={this.changeConfig(this.props.series)} ref="highChart" />);
        }
        return (
            <div>
            {highChart}
            </div>
        );
    }
}

SimpleChart.PropTypes = {
    series : React.PropTypes.object.isRequired
}
