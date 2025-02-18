// 2023年全国粮食播种面积、总产量及单位面积产量情况
(function() {
  // 1. 实例化对象
  var myChart = echarts.init(document.querySelector(".czm3"));
  // 2. 指定配置项和数据
  var option = {
    legend: {},
    tooltip: {},
    dataset: {
      source: [
        ['product', '稻谷', '小麦', '玉米'],
        ['播种面积', 2894.91,2362.72,4421.89],
        ['总产量', 2066.03,1365.9,2888.42],
        ['单位面积产量',7136.8,5781,6532.1]
      ]
    },
    xAxis: [
      { type: 'category', gridIndex: 0 },
      { type: 'category', gridIndex: 1 }
    ],
    yAxis: [{ gridIndex: 0 }, { gridIndex: 1 }],
    grid: [{ bottom: '55%' }, { top: '55%' }],
    series: [
      // These series are in the first grid.
      { type: 'bar', seriesLayoutBy: 'row' },
      { type: 'bar', seriesLayoutBy: 'row' },
      { type: 'bar', seriesLayoutBy: 'row' },
      // These series are in the second grid.
      { type: 'bar', xAxisIndex: 1, yAxisIndex: 1 },
      { type: 'bar', xAxisIndex: 1, yAxisIndex: 1 },
      { type: 'bar', xAxisIndex: 1, yAxisIndex: 1 },
    ]
  };
  // 3. 配置项和数据给我们的实例化对象
  myChart.setOption(option);
  // 4. 当我们浏览器缩放的时候，图表也等比例缩放
  window.addEventListener("resize", function() {
    // 让我们的图表调用 resize这个方法
    myChart.resize();
  });
})();


// 2023年全国及各省（区、市）粮食产量
(function() {
  // 1. 实例化对象
  var myChart = echarts.init(document.querySelector(".pie"));
  // 2. 指定配置项和数据
  var option = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'right'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 45.96, name: '林地' },
          { value: 36.4, name: '耕地' },
          { value: 7.41, name: '湿地' },
          { value: 3.66, name: '水域及水利设施用地' },
          { value: 2.5, name: '城镇村及工矿用地' },
          { value: 2.49, name: '草地' },
          { value: 1.18, name: '交通运输用地' },
          { value: 0.24, name: '其他' },
          { value: 0.16, name: '园地' }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 20,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };
  // 3. 配置项和数据给我们的实例化对象
  myChart.setOption(option);
  // 4. 当我们浏览器缩放的时候，图表也等比例缩放
  window.addEventListener("resize", function() {
    // 让我们的图表调用 resize这个方法
    myChart.resize();
  });
})();

// 食物浪费的原因
(function() {
  // 1. 实例化对象
  var myChart = echarts.init(document.querySelector(".czm"));
  // 2. 指定配置项和数据
  var option = {
    series: [
      {
        name: 'Nightingale Chart',
        type: 'pie',
        radius: [20, 100],
        center: ['50%', '50%'],
        roseType: 'area',
        itemStyle: {
          borderRadius: 8
        },
        data: [
          { value: 38, name: '生产流通环节' },
          { value: 32, name: '采收不精' },
          { value: 30, name: '储运设施' },
          { value: 28, name: '冷链化程度低' },
          { value: 26, name: '消费端' },
          { value: 22, name: '餐饮业' },
          { value: 18, name: '家庭消费' }
        ]
      }
    ]
  };
  // 3. 配置项和数据给我们的实例化对象
  myChart.setOption(option);
  // 4. 当我们浏览器缩放的时候，图表也等比例缩放
  window.addEventListener("resize", function() {
    // 让我们的图表调用 resize这个方法
    myChart.resize();
  });
})();



// 各省粮食总产量趋势（来源：前瞻数据库）
(function() {
  // 1. 实例化对象
  var myChart = echarts.init(document.querySelector(".czm1"));
  // 2. 指定配置项和数据
   var option = {

     tooltip: {
       trigger: 'axis'
     },
     legend: {
       data: ['广东省', '山东省', '湖南省', '内蒙古自治区', '安徽']
     },
     grid: {
       left: '3%',
       right: '4%',
       bottom: '3%',
       containLabel: true
     },
     xAxis: {
       type: 'category',
       boundaryGap: false,
       data: ['1949', '1970', '2009', '2010', '2011', '2012', '2023']
     },
     yAxis: {
       type: 'value'
     },
     series: [
       {
         name: '广东省',
         type: 'line',
         stack: 'Total',
         data: [690.47,1289.61,1314.5,1316.5,1361,1396.3,1285.2]
       },
       {
         name: '内蒙古自治区',
         type: 'line',
         stack: 'Total',
         data: [184.5,469.5,1981.7,2158.2,2387.5,2528.5,3957.8]
       },
       {
         name: '湖南省',
         type: 'line',
         stack: 'Total',
         data: [747.95,1481.3, 2902.7, 2847.5, 2939.4, 3006.5, 3068.0]
       },
       {
         name: '山东省',
         type: 'line',
         stack: 'Total',
         data: [870, 1465, 4316.3, 4335.7, 4426.3, 4511.4, 5655.3]
       },
       {
         name: '安徽',
         type: 'line',
         stack: 'Total',
         data: [639.2, 1263.8, 3069.87, 3080.5, 3135.5, 3289.1, 4150.8]
       }
     ]
   };
  // 3. 配置项和数据给我们的实例化对象
  myChart.setOption(option);
  // 4. 当我们浏览器缩放的时候，图表也等比例缩放
  window.addEventListener("resize", function() {
    // 让我们的图表调用 resize这个方法
    myChart.resize();
  });
})();



// 全国各大高校节约粮食行动
(function() {
  var item = {
    name: "",
    value: 1200,
    // 1. 修改当前柱形的样式
    itemStyle: {
      color: "#254065"
    },
    // 2. 鼠标放到柱子上不想高亮显示
    emphasis: {
      itemStyle: {
        color: "#254065"
      }
    },
    // 3. 鼠标经过柱子不显示提示框组件
    tooltip: {
      extraCssText: "opacity: 0"
    }
  };
  // 1. 实例化对象
  var myChart = echarts.init(document.querySelector(".bar"));
  // 2. 指定配置和数据
  var option = {
    color: new echarts.graphic.LinearGradient(
      // (x1,y2) 点到点 (x2,y2) 之间进行渐变
      0,
      0,
      0,
      1,
      [
        { offset: 0, color: "#00fffb" }, // 0 起始颜色
        { offset: 1, color: "#0061ce" } // 1 结束颜色
      ]
    ),
    tooltip: {
      trigger: "item"
    },
    grid: {
      left: "0%",
      right: "3%",
      bottom: "3%",
      top: "3%",
      //  图表位置紧贴画布边缘是否显示刻度以及label文字 防止坐标轴标签溢出跟grid 区域有关系
      containLabel: true,
      // 是否显示直角坐标系网格
      show: true,
      //grid 四条边框的颜色
      borderColor: "rgba(0, 240, 255, 0.3)"
    },
    xAxis: [
      {
        type: "category",
        data: [
          "山师",
          "云能",
          "重大",
          "宿学",
          "河科",
          "广商",
          "昆学",
          "河工",
          "山农",
          "什大",
          "贵大"
        ],
        axisTick: {
          alignWithLabel: false,
          // 把x轴的刻度隐藏起来
          show: false
        },
        axisLabel: {
          color: "#4c9bfd"
        },
        // x轴这条线的颜色样式
        axisLine: {
          lineStyle: {
            color: "rgba(0, 240, 255, 0.3)"
            // width: 3
          }
        }
      }
    ],
    yAxis: [
      {
        type: "value",
        axisTick: {
          alignWithLabel: false,
          // 把y轴的刻度隐藏起来
          show: false
        },
        axisLabel: {
          color: "#4c9bfd"
        },
        // y轴这条线的颜色样式
        axisLine: {
          lineStyle: {
            color: "rgba(0, 240, 255, 0.3)"
            // width: 3
          }
        },
        // y轴分割线的颜色样式
        splitLine: {
          lineStyle: {
            color: "rgba(0, 240, 255, 0.3)"
          }
        }
      }
    ],
    series: [
      {
        name: "打卡单位（万次）",
        type: "bar",
        barWidth: "60%",
        data: [
          132.3,
          121.7,
          120.5,
          120.2,
          116.6,
          113.5,
          100.9,
          91,
          91,
          85.3,
          82.5
        ]
      }
    ]
  };
  // 3. 把配置给实例对象
  myChart.setOption(option);
  // 4. 当我们浏览器缩放的时候，图表也等比例缩放
  window.addEventListener("resize", function() {
    // 让我们的图表调用 resize这个方法
    myChart.resize();
  });
})();





// biaoyu
(function() {
  // 1. 实例化对象
  var myChart = echarts.init(document.querySelector(".czm5"));
  // 2. 指定配置项和数据
  var option = {
    graphic: {
      elements: [
        {
          type: 'text',
          left: 'center',
          top: 'center',
          style: {
            text: '一粥一饭，当思来之不易',
            fontSize: 80,
            fontWeight: 'bold',
            lineDash: [0, 200],
            lineDashOffset: 0,
            fill: 'transparent',
            stroke: '#000',
            lineWidth: 1
          },
          keyframeAnimation: {
            duration: 3000,
            loop: true,
            keyframes: [
              {
                percent: 0.7,
                style: {
                  fill: 'transparent',
                  lineDashOffset: 200,
                  lineDash: [200, 0]
                }
              },
              {
                // Stop for a while.
                percent: 0.8,
                style: {
                  fill: 'transparent'
                }
              },
              {
                percent: 1,
                style: {
                  fill: 'black'
                }
              }
            ]
          }
        }
      ]
    }
  };
  // 3. 配置项和数据给我们的实例化对象
  myChart.setOption(option);
  // 4. 当我们浏览器缩放的时候，图表也等比例缩放
  window.addEventListener("resize", function() {
    // 让我们的图表调用 resize这个方法
    myChart.resize();
  });
})();

