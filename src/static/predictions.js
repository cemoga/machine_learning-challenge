var url = `/predict`;

var model = [],
    no = [],
    prediction = [],
    probability = [];

d3.json(url).then((data) => {
    // console.log(data)
    for (i = 0; i < 3; i++) {
        data[i].forEach((item) => {
            model.push(item.Model)
            no.push(item.no)
            prediction.push(item.prediction)
            probability.push(item.probability)
        })
    }

    console.log(model),
        console.log(no),
        console.log(prediction),
        console.log(probability);

    google.charts.load('current', {
        callback: function () {
            var container = document.getElementById('chart_div');
            var chart = new google.visualization.Gauge(container);

            var p1 = parseFloat(probability[0])
            var p2 = parseFloat(probability[3])
            var p3 = parseFloat(probability[6])

            console.log(p1)
            console.log(p2)
            console.log(p3)

            var data = google.visualization.arrayToDataTable([
                ['Label', 'Value'],
                ['VGG16', p1],
                ['VGG19', p2],
                ['RESNET50', p3]
            ]);


            var formatter = new google.visualization.NumberFormat(
                {suffix: '%',pattern:'#'}
            );
                formatter.format(data,1);

            var options = {
                min: 0, max: 100,
                width: 600, height: 200,
                redFrom: 0, redTo: 25,
                yellowFrom: 25, yellowTo: 75,
                greenFrom: 75, greenTo: 100,
                minorTicks: 10
            };

            chart.draw(data, options);
        },
        packages: ['gauge']
    });

    google.charts.load('current', { 'packages': ['table'] });
    google.charts.setOnLoadCallback(drawTable);


    function drawTable() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Model');
        data.addColumn('number', 'No.');
        data.addColumn('string', 'Prediction');
        data.addColumn('string', 'Probability');

        for (i = 0; i < 9; i++) {
            data.addRows([
                [model[i], no[i], prediction[i][0], probability[i]]
            ])
        }

        var table = new google.visualization.Table(document.getElementById('table_div'));
        table.draw(data, { showRowNumber: true, width: '100%', height: '100%' });

    }
})

