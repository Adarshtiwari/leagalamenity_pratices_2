//  const datas = [
//     [
//       {
//         type: "cost",
//         value: 200,
//         month: "2023-04"
//       },
//       {
//         type: "totalcost",
//         month: "2023-04",
//         value: 2000
//       },
//       {
//         type: "credits",
//         value: 1000,
//         month: "2023-04"
//       }
//     ],
//     [
//       {
//         type: "cost",
//         value: 200,
//         month: "2023-05"
//       },
//       {
//         type: "totalcost",
//         month: "2023-05",
//         value: 2050
//       },
//       {
//         type: "credits",
//         value: 100,
//         month: "2023-05"
//       }
//     ]
//   ];
  let data_change=[
  {
    projectname: 'SAP Yash Domain Servers',
    month: '202306',
    cost: '439094',
    credits: '-14608',
    totalcost: '453702'
  },

  
  {
    projectname: 'SAP Yash Domain Servers',
    month: '202209',
    cost: '898986',
    credits: null,
    totalcost: null
  },
  {
    projectname: 'SAP Yash Domain Servers',
    month: '202304',
    cost: '831739',
    credits: '-92783',
    totalcost: '924523'
  },
  {
    projectname: 'SAP Yash Domain Servers',
    month: '202212',
    cost: '545600',
    credits: null,
    totalcost: null
  },
  {
    projectname: 'SAP Yash Domain Servers',
    month: '202211',
    cost: '872607',
    credits: null,
    totalcost: null
  },
  {
    projectname: 'SAP Yash Domain Servers',
    month: '202210',
    cost: '925908',
    credits: null,
    totalcost: null
  }
]
let finalData=[];
data_change.forEach(element => {
    let temp_cost={}
    let temp_credits={}
    let totalcost={}

    temp_cost.month=element.month
    temp_cost.type="cost"
    temp_cost.value=element.cost

    temp_credits.month=element.month
    temp_credits.type="credits"
     if(element.credits<0)
     {
      temp_credits.value=-(element.credits)
     }
     else
     temp_credits.value=(element.credits)
 
    totalcost.month=element.month
    totalcost.type="totalcost"
    totalcost.value=element.totalcost

   let final_temp=[]
    final_temp.push(temp_cost)
    final_temp.push(temp_credits)
    final_temp.push(totalcost)
    finalData.push(final_temp)
});

console.log(finalData)


 