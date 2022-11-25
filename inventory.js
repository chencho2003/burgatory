// ---------- CHARTS ----------

// BAR CHART
var barChartOptions = {
    series: [{
      data: [12, 10, 9, 7, 6, 5]
    }],
    chart: {
      type: 'bar',
      height: 350,
      toolbar: {
        show: false
      },
    },
    colors: [
      "#bfa45f",
      "#ee8b9f",
      "#61d0a0",
      "#f5b74f",
      "#71ccde",
      "#ca93cc"
    ],
    plotOptions: {
      bar: {
        distributed: true,
        borderRadius: 4,
        horizontal: false,
        columnWidth: '40%',
      }
    },
    dataLabels: {
      enabled: false
    },
    legend: {
      show: false
    },
    xaxis: {
      categories: ["Whopper", "Bacon King", "Chicken Fries", "Hamburger", "Chicken Nuggets", "Stacker King"],
    },
    yaxis: {
      title: {
        text: "Count"
      }
    }
  };
  
  var barChart = new ApexCharts(document.querySelector("#bar-chart"), barChartOptions);
  barChart.render();
  
  
