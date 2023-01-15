const Express = require("express");
const BodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
const CONNECTION_URL =
  "mongodb+srv://naruto1922:Vinay123@cluster0.tnpjvpd.mongodb.net/?retryWrites=true&w=majority";
const DATABASE_NAME = "FliprHackathon";
var app = Express();
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));
app.use(Express.static("public"));
app.set("view engine", "ejs");

//-----------------------------------------------------------------------------------------------------------------------------
var database, collection;
var curr = "BSE";

app.get("/", function (req, res) {
  res.render("login");
});

app.post("/", function (req, res) {
  res.render("stocks", { curr: curr });
});

var labelss = [];
var dataa = [];


//-----------------------------------------------------------------------------------------------------------------------------
const fs = require("fs");
const { ChartJSNodeCanvas } = require("chartjs-node-canvas");

const width = 400; //px
const height = 400; //px
const backgroundColour = "white"; // Uses https://www.w3schools.com/tags/canvas_fillstyle.asp
const chartJSNodeCanvas = new ChartJSNodeCanvas({
  width,
  height,
  backgroundColour,
});

const configuration = {
  type: "line", // for line chart
  data: {
    labels: labelss,
    datasets: [
      {
        label: "Sample 1",
        data: dataa,
        fill: false,
        borderColor: ["rgb(51, 204, 204)"],
        borderWidth: 1,
        xAxisID: "xAxis1", //define top or bottom axis ,modifies on scale
      }
    ],
  },
  options: {
    scales: {
      y: {
        suggestedMin: 0,
      },
    },
  },
};

async function run() {
  const dataUrl = await chartJSNodeCanvas.renderToDataURL(configuration);
  const base64Image = dataUrl;

  var base64Data = base64Image.replace(/^data:image\/png;base64,/, "");

  fs.writeFile("chart.png", base64Data, "base64", function (err) {
    if (err) {
      console.log(err);
    }
  });
  return dataUrl;
}
run();
//-----------------------------------------------------------------------------------------------------------------------------



//-----------------------------------------------------------------------------------------------------------------------------
// app.post("/BSE", (request, response) => {
//   collection.insert(request.body, (error, result) => {
//     if (error) {
//       return response.status(500).send(error);
//     }
//     response.send(result.result);
//   });
// });

//-----------------------------------------------------------------------------------------------------------------------------

app.get("/:something", (request, response) => {

    curr=request.params.something;
    console.log(curr);

      collection = database.collection(curr);
   

  collection.find({}).toArray((error, result) => {
    if (error) {
      return response.status(500).send(error);
    }

    for (var i = 0; i < result.length; ++i) {
      var avg = Number(result[i].Low) + Number(result[i].High);
      avg /= 2;
      labelss.push(i+1);
      dataa.push(avg);

    }
  // console.log(labelss);
     run();
    response.render("stocks");
    // response.send(result);
  });
});
//-----------------------------------------------------------------------------------------------------------------------------


app.get("/NSEE", (request, response) => {
    curr="NSE";
    collection2.find({}).toArray((error, result) => {
      if (error) {
        return response.status(500).send(error);
      }
  
      for (var i = 0; i < result.length; ++i) {
        var avg = Number(result[i].Low) + Number(result[i].High);
        avg /= 2;
        labelss.push(i+1);
        dataa.push(avg);
  
      }
    // console.log(labelss);
       run();
      response.render("stocks");
      // response.send(result);
    });
  });


  //-----------------------------------------------------------------------------------------------------------------------------
  
  
  app.get("/TATASTEEL", (request, response) => {
    curr="TATASTEEL";
    collection7.find({}).toArray((error, result) => {
      if (error) {
        return response.status(500).send(error);
      }
  
      for (var i = 0; i < result.length; ++i) {
        var avg = Number(result[i].Low) + Number(result[i].High);
        avg /= 2;
        labelss.push(i+1);
        dataa.push(avg);
  
      }
    // console.log(labelss);
       run();
      response.render("stocks");
      // response.send(result);
    });
  });


  //-----------------------------------------------------------------------------------------------------------------------------
 
 
  app.get("/CIPLA", (request, response) => {
    curr="CIPLA";
    collection4.find({}).toArray((error, result) => {
      if (error) {
        return response.status(500).send(error);
      }
  
      for (var i = 0; i < result.length; ++i) {
        var avg = Number(result[i].Low) + Number(result[i].High);
        avg /= 2;
        labelss.push(i+1);
        dataa.push(avg);
  
      }
    // console.log(labelss);
       run();
      response.render("stocks");
      // response.send(result);
    });
  });


  //-----------------------------------------------------------------------------------------------------------------------------
  
  
  app.get("/ASHOKLEY", (request, response) => {
    curr="ASHOKLEY";
    collection3.find({}).toArray((error, result) => {
      if (error) {
        return response.status(500).send(error);
      }
  
      for (var i = 0; i < result.length; ++i) {
        var avg = Number(result[i].Low) + Number(result[i].High);
        avg /= 2;
        labelss.push(i+1);
        dataa.push(avg);
  
      }
    // console.log(labelss);
       run();
      response.render("stocks");
      // response.send(result);
    });
  });


  //-----------------------------------------------------------------------------------------------------------------------------
  
  
  app.get("/EICHERMOT", (request, response) => {
    curr="EICHERMOT";
    collection5.find({}).toArray((error, result) => {
      if (error) {
        return response.status(500).send(error);
      }
  
      for (var i = 0; i < result.length; ++i) {
        var avg = Number(result[i].Low) + Number(result[i].High);
        avg /= 2;
        labelss.push(i+1);
        dataa.push(avg);
  
      }
    // console.log(labelss);
       run();
      response.render("stocks");
      // response.send(result);
    });
  });


  //-----------------------------------------------------------------------------------------------------------------------------
 
 
  app.get("/RELIANCE", (request, response) => {
    curr="RELIANCE";
    collection6.find({}).toArray((error, result) => {
      if (error) {
        return response.status(500).send(error);
      }
  
      for (var i = 0; i < result.length; ++i) {
        var avg = Number(result[i].Low) + Number(result[i].High);
        avg /= 2;
        labelss.push(i+1);
        dataa.push(avg);
  
      }
  //   console.log(labelss);
       run();
      response.render("stocks");
      // response.send(result);
    });
  });
  //-----------------------------------------------------------------------------------------------------------------------------
// app.get("/BSE/:id", (request, response) => {
//   collection.findOne(
//     { _id: new ObjectId(request.params.id) },
//     (error, result) => {
//       if (error) {
//         return response.status(500).send(error);
//       }

//       console.log(result);
//       response.send(result);
//     }
//   );
// });
//-----------------------------------------------------------------------------------------------------------------------------






app.listen(3000, () => {
  MongoClient.connect(
    CONNECTION_URL,
    { useNewUrlParser: true },
    (error, client) => {
      if (error) {
        throw error;
      }
      database = client.db(DATABASE_NAME);
      collection1 = database.collection("BSE");
      collection2 = database.collection("NSE");
      collection3 = database.collection("ASHOKLEY");
      collection4 = database.collection("CIPLA");
      collection5 = database.collection("EICHERMOT");
      collection6 = database.collection("RELIANCE");
      collection7 = database.collection("TATASTEEL");
      console.log("Connected to `" + DATABASE_NAME + "`!");
    }
  );
});
//-----------------------------------------------------------------------------------------------------------------------------