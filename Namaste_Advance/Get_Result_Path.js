function getResultByPath(path, obj) {

  //write your implementation here


const normalize = path.replace(/\[(\d+)\]/g,'.$1')
  const keys = normalize.split('.');
  const result = obj;

  for (let k of keys) {
    if (result === undefined || result === null) break;

    result = result[k];
  }

  return result;
}

const path = "data.results.status";
const obj = {
    data: {
        results:
        {
            status: "completed",
            error: "",
        }
    },
}
// getResultByPath(path, obj);



const path1 = "data.results[1].status[0].type";
const obj1 = {
    data:
    {
        results: [
            {
                status: "completed",
                error: "",
            },
            {
                status: [{ type: "done" }, { type: "start" }],
                error: ""
            },
        ]
    }
}




console.log(getResultByPath(path, obj));
console.log(getResultByPath(path1, obj1))