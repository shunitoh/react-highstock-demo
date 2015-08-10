import React     from 'react';

export default class CompareMultipleStockChart extends React.Component {
    changeConfig(series){
        return {
            chart: {
                renderTo: 'highstock'
                //type: 'spline'
            },
            credits: {  // 右下のクレジット
                enabled: false
            },
            yAxis: {
                floor: 0,
                title : {
                    text: 'imps'
                },
                plotLines: [{
                    value: 0,
                    width: 2,
                    color: 'silver'
                }]
            },
            xAxis: [{  // X軸
                labels: {
                    formatter: function(){
                        var d = new Date();
                        d.setTime(this.value);
                        return d.getFullYear()+'/'+(d.getMonth()+1)+'/'+d.getDate();
                    }
                },
                plotLines:[
                    {
                        color: 'silver',
                        width: 2,
                        value: 201111
                    }
                ]
            }], 
            plotOptions: {  // プロットオプション
                series: {
                    dataGrouping: {
                        dateTimeLabelFormats: {
                            millisecond: ['%Y/%m/%d %H:%M:%S.%L', '%Y/%m/%d %H:%M:%S.%L', '-%H:%M:%S.%L'],
                            second: ['%Y/%m/%d %H:%M:%S', '%Y/%m/%d %H:%M:%S', '-%H:%M:%S'],
                            minute: ['%Y/%m/%d %H:%M', '%Y/%m/%d %H:%M', '-%H:%M'],
                            hour: ['%Y/%m/%d %H:%M', '%Y/%m/%d %H:%M', '-%H:%M'],
                            day: ['%Y/%m/%d', '%Y/%m/%d', '-%Y/%m/%d'],
                            week: ['%Y/%m/%d', '%Y/%m/%d', '-%Y/%m/%d'],
                            month: ['%B %Y', '%B', '-%B %Y'],
                            year: ['%Y', '%Y', '-%Y']
                        }
                    }
                }
            },
            rangeSelector: { // 表示幅選択ボタン
                selected : 1,
                inputDateFormat: '%Y/%m/%d',
                inputEditDateFormat: '%Y/%m/%d',
                buttons : [{
                    type : 'month',  // 月単位 (0)
                    count : 1,       // 約 1ヶ月分のデータを表示
                    text : '1ヶ月'   // ボタンの表示名
                }, {
                    type : 'month',  // 月単位 (0)
                    count : 3,       // 約 3ヶ月分のデータを表示
                    text : '3ヶ月'   // ボタンの表示名
                }, {
                    type : 'month',  // 月単位 (0)
                    count : 5,       // 約 5ヶ月分のデータを表示
                    text : '5ヶ月'   // ボタンの表示名
                }, {
                    type : 'month',  // 月単位 (0)
                    count : 7,       // 約 7ヶ月分のデータを表示
                    text : '7ヶ月'   // ボタンの表示名
                }, {
                    type : 'month',  // 月単位 (0)
                    count : 9,       // 約 9ヶ月分のデータを表示
                    text : '9ヶ月'   // ボタンの表示名
                }, {
                    type : 'year',  // 年単位 (1)
                    count : 1,      // 約 1年分のデータを表示
                    text : '1年'    // ボタンの表示名
                }, {
                    type : 'all',    // 全データ (2)
                    count : 1,
                    text : 'All'
                }]
            },
            tooltip: {
                pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.change}%)<br/>',
                valueDecimals: 2
            },
            series : series
        }
    }

    render() {
        var cpmpareMultiStockChart = <div></div>;
        if(typeof window !== "undefined"){
            var Chart = require('./BaseChart.jsx');
            cpmpareMultiStockChart = (<Chart theme="grid" type="Highstock" config={this.changeConfig(this.props.series)} ref="cpmpareMultiStockChart" />);
        }
        return (
            <div>
            {cpmpareMultiStockChart}
            </div>
        );
    }
}

CompareMultipleStockChart.PropTypes = {
    series : React.PropTypes.object.isRequired
}
