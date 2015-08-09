import React      from 'react';
import Highcharts from 'highstock-browserify';
import {addons}   from 'react/addons';

export default class BaseChart extends React.Component {
    renderChart() {
        if (!this.props.config) {
            throw new Error('Config has to be specified, for the Highstock component');
        }

        // set config     
        var config = this.props.config;
        if (!this.props.config.chart) {
            config = addons.update(config, {chart: {$set: {}}})
        }
        var node = this.refs.chart.getDOMNode();
        config   = addons.update(config, {chart: {renderTo: {$set: node}}});

        // set chart type
        var chartType = (this.props.type) ? this.props.type : 'Highcharts';
        switch(chartType){
            case 'Highstock':
                this.chart = new Highcharts.StockChart(config);
                break;
            case 'Highcharts':
                this.chart = new Highcharts.Chart(config);
                break;
            case 'HighchartsMore':
                require('Highcharts/js/highcharts-more.src.js');
                this.chart = new Highcharts.Chart(config);
                break;
            default:
                throw new Error('Cannot match chart type. keys[ Highstock or Highcharts ] input[ ' + chartType + ' ]');
                break;
        }
    }

    getChart() {
        if (!this.chart) {
            throw new Error('getChart() should not be called before the component is mounted');
        }
        return this.chart;
    }

    componentDidMount() {
        this.renderChart();
    }

    componentDidUpdate() {
        this.renderChart();
    }

    render() {
        return <div className = "chart" ref = "chart" />
    }
}

BaseChart.PropTypes = {
    type   : React.PropTypes.string.isRequired,
    config : React.PropTypes.object.isRequired,
    ref    : React.PropTypes.string.isRequired
}
