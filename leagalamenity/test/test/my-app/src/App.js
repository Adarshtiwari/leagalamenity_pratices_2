import logo from './logo.svg';
import './App.css';

import Chart from 'react-apexcharts'
import ReactApexChart from 'react-apexcharts'

//  let  state = {
//       options: {},
//       series: [44, 55, 41, 17, 15],
//       labels: ['A', 'B', 'C', 'D', 'E']
//     }
let state={
          
            series: [ {
                name: 'Cost ',
                group: 'cost',
                data: [44000, 55000, 41000, 67000, 22000,1000]
              },  {
                name: 'Totalcost',
                group: 'totalcost',
                data: [44000, 55000, 41000, 67000, 22000,3000]
              },  {
                name: 'Credits',
                group: 'credits',
                data: [44000, 55000, 41000, 67000, 22000,4000]
              }],
            options: {
              chart: {
                type: 'bar',
                height: 930
              },
              plotOptions: {
                bar: {
                  horizontal: true,
                  dataLabels: {
                    position: 'top',
                  },
                }
              },
              dataLabels: {
                enabled: true,
                offsetX: -6,
                style: {
                  fontSize: '12px',
                  colors: ['#fff']
                }
              },
              stroke: {
                show: true,
                width: 2,
                colors: ['#fff']
              },
              tooltip: {
                shared: true,
                intersect: false
              },
              xaxis: {
                categories: [1, 2, 3, 4, 5, 6],
              },
            },
          
          
          };
        
  





function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    <ReactApexChart options={state.options} series={state.series} type="bar"  width="380" />
     
    </div>
  );
}

export default App;
