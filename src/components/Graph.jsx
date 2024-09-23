import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const data = {
  labels: ['07-02', '07-04', '07-08', '07-10', '07-12', '07-14', '07-16'],
  datasets: [
    {
      label: 'Série 1',
      data: [0, 0, 5000, 80000, 80000, 65000, 65000],
      borderColor: 'rgba(255, 0, 0, 1)',
      backgroundColor: 'rgba(255, 0, 0, 0.2)',
      borderWidth: 3,
      fill: true,
      segment: {
        borderDash: ctx => {
          const index = ctx.p0DataIndex;
          return index < 2 ? [5, 5] : undefined;
        },
      },
    },
    {
      label: 'Série 2',
      data: [0, 8000, 50000, 70000, 60000, 50000, 45000],
      borderColor: 'rgba(0, 255, 0, 1)',
      backgroundColor: 'rgba(0, 255, 0, 0.2)',
      borderWidth: 2,
      fill: true,
    },
    {
      label: 'Série 3',
      data: [0, 4000, 45000, 50000, 40000, 20000, 10000],
      borderColor: 'rgba(0, 0, 255, 1)',
      backgroundColor: 'rgba(0, 0, 255, 0.2)',
      borderWidth: 2,
      borderDash: [5, 5],
      fill: false,
    },
    {
      label: 'Série 4',
      data: [0, 0, 0, 0, -40000, -40000, -40000],
      borderColor: 'rgba(255, 204, 0, 1)',
      backgroundColor: 'rgba(255, 204, 0, 0.2)',
      borderDash: [5, 5],
      borderWidth: 5,
      fill: false,
    },
    {
      label: 'Série 5',
      data: [60000, 60000, 60000, 60000, 60000, 60000, 60000],
      borderColor: 'black',
      backgroundColor: 'black',
      borderWidth: 5,
      fill: false,
    },
  ],
};

const options = {
  responsive: true, // Rend le graphique responsive
  maintainAspectRatio: false, // Désactive le ratio fixe
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
  scales: {
    y: {
      beginAtZero: false,
      suggestedMin: -80000,
      suggestedMax: 100000,
      ticks: {
        stepSize: 20000,
        callback: function (value) {
          return value.toLocaleString();
        },
      },
    },
  },
};

const Graph = () => {
  return (
    <div style={{ width: '700px', height: '600px', marginTop: '-50px', marginLeft: '10px', border: '2px black solid' }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default Graph;
