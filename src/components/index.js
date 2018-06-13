import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import axios from 'axios';

// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import  'echarts/lib/chart/bar';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';

class Index extends Component {
    constructor(props) {
      super(props);
      this.state = {
        testUrl: 'http://www.sunbowei.com:3111',
        posts: []
      };
    }
    componentDidMount() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById('echartsTest'));
      // 绘制图表
      myChart.setOption({
        title: { text: 'ECharts 入门示例' },
        tooltip: {},
        xAxis: {
            data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
        }]
      });

      let params = {params:{'id':1}};
      axios.get(`${this.state.testUrl}/getMusicList`).then(res => {
        const posts = res.result;
        this.setState({ posts });
      }).catch(err => {
        console.log(err);
      });
    }
    render () {
      return (
        <div>
          <div id="echartsTest" style={{ width: 400, height: 400 }}>
          </div>
          <ul>
            {this.state.posts.map(post =>
              <li key={post.id}>{post.name}</li>
            )}
          </ul>
        </div>
      );
    }
}

window.onload = function(){
  $("#root").show();
  $("#startLoadPage").hide();
}

export default Index;