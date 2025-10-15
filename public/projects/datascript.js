// Chart.js 전역 설정
Chart.defaults.font.family = 'Inter, sans-serif';
Chart.defaults.color = 'var(--text)';

// 팔레트
const colors = [
  '#049DD9', '#F28627', '#1DC9B7', '#F2BB13', '#034AA6', '#ff6384'
];

const chartConfigs = [
  {
    id: 'chart1',
    type: 'line',
    data: {
      labels: ['1','2','3','4','5','6','7','8','9','10'],
      datasets: [{
        label: '온도 (°C)',
        data: [23,25,22,24,26,28,27,29,28,30],
        borderColor: colors[0],
        backgroundColor: 'rgba(4, 157, 217, 0.2)',
        tension: 0.3,
        fill: true
      }]
    },
    options: { responsive:true, maintainAspectRatio:false, plugins:{legend:{display:false}} }
  },
  {
    id: 'chart2',
    type: 'bar',
    data: {
      labels:['월','화','수','목','금','토','일'],
      datasets:[{ label:'주가 (KRW)', data:[120,122,125,123,130,128,132], backgroundColor: colors[0] }]
    },
    options:{ responsive:true, maintainAspectRatio:false, plugins:{legend:{display:false}}, scales:{ y:{ beginAtZero:false } } }
  },
  {
    id:'chart3',
    type:'doughnut',
    data:{
      labels:['서울','부산','대구','광주'],
      datasets:[{ label:'인구 (천 명)', data:[1000,600,400,300], backgroundColor:[colors[0],colors[1],colors[2],colors[3]], hoverOffset:10 }]
    },
    options:{ responsive:true, maintainAspectRatio:false, plugins:{ legend:{ position:'right' } } }
  },
  {
    id:'chart4',
    type:'bar',
    data:{
      labels:['0시','3시','6시','9시','12시','15시','18시','21시'],
      datasets:[{ label:'차량 수', data:[50,30,20,80,120,90,60,40], backgroundColor: colors[2] }]
    },
    options:{ responsive:true, maintainAspectRatio:false, plugins:{ legend:{display:false} } }
  },
  {
    id:'chart5',
    type:'radar',
    data:{
      labels:['전력','태양','풍력','수력','가스'],
      datasets:[{
        label:'사용량 (%)', data:[80,50,65,70,60], borderColor:colors[3],
        backgroundColor:'rgba(242,187,19,0.2)', pointBackgroundColor:colors[3]
      }]
    },
    options:{ responsive:true, maintainAspectRatio:false, elements:{ line:{ borderWidth:3 } }, scales:{ r:{ suggestedMin:0, suggestedMax:100 } } }
  },
  {
    id:'chart6',
    type:'line',
    data:{
      labels:['1월','2월','3월','4월','5월','6월','7월'],
      datasets:[{
        label:'매출액 (백만원)', data:[10,15,25,20,30,35,45],
        borderColor:colors[4],
        backgroundColor:'rgba(3,74,166,0.3)',
        tension:0.4, fill:true
      }]
    },
    options:{ responsive:true, maintainAspectRatio:false, plugins:{ legend:{ display:false } } }
  }
];

// 초기화
function initializeCharts(){
  chartConfigs.forEach(config => {
    const ctx = document.getElementById(config.id);
    if(ctx) new Chart(ctx, { type: config.type, data: config.data, options: config.options });
  });
}

window.addEventListener('load', initializeCharts);
