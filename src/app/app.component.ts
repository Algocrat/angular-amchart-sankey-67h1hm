import { AfterViewInit, Component, VERSION } from "@angular/core";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit() {
    let chart = am4core.create("chartdiv", am4charts.SankeyDiagram);
    let nodeTemplate = chart.nodes.template;
    chart.paddingRight = 120;

    chart.data = [
      {
        from: "Item 1",
        to: "Virgin Plastic",
        labelText: "400",
        value: 400,
        id: "A0-0",
      },
      {
        from: "Item 1",
        to: "Post Consumer Recycled Plastic",
        labelText: "550",
        value: 550,
        id: "A1-0",
        "nodeColor": "#06D6A0", "linkColor": "#06D6A0", "linkOpacity": 1 
      },
      {
        from: "Item 1",
        to: "Ocean Bound Prevented Recycled Plastic",
        labelText: "50",
        value: 50,
        id: "A2-0"
      },
      {
        from: "Item 2",
        to: "Virgin Plastic",
        labelText: "600",
        value: 600,
        id: "B0-0"
      },
      {
        from: "Item 2",
        to: "Post Consumer Recycled Plastic",
        labelText: "900",
        value: 900,
        id: "B1-0"
      },

      {
        from: "Virgin Plastic",
        to: "Batch No 44",
        labelText: "400",
        value: 400,
        id: "A0-0"
      },
      {
        from: "Virgin Plastic",
        to: "Batch No 44",
        labelText: "500",
        value: 500,
        id: "B0-1"
      },

      {
        from: "Post Consumer Recycled Plastic",
        to: "Bale No 568",
        labelText: "300",
        value: 300,
        id: "A1-0"
      },
      {
        from: "Post Consumer Recycled Plastic",
        to: "Bale No 472",
        labelText: "250",
        value: 250,
        id: "B1-0"
      },
      {
        from: "Post Consumer Recycled Plastic",
        to: "Bale No 1197",
        labelText: "300",
        value: 300,
        id: "A1-0"
      },
      {
        from: "Post Consumer Recycled Plastic",
        to: "Bale No 889",
        labelText: "600",
        value: 600,
        id: "B1-0"
      },

      {
        from: "Ocean Bound Prevented Recycled Plastic",
        to: "Batch No 59",
        labelText: "50",
        value: 50,
        id: "A2-0"
      },
      {
        from: "Ocean Bound Prevented Recycled Plastic",
        to: "Batch No 59",
        labelText: "50",
        value: 50,
        id: "A2-0"
      },

      {
        from: "Batch No 44",
        to: "Inward No 655",
        labelText: "400",
        value: 400,
        id: "A0-0"
      },
      {
        from: "Batch No 44",
        to: "Inward No 655",
        labelText: "500",
        value: 500,
        id: "B0-1"
      },

      {
        from: "Bale No 568",
        to: "Inward No 768",
        labelText: "180",
        value: 180,
        id: "A1-0"
      },
      {
        from: "Bale No 568",
        to: "Inward No 756",
        labelText: "120",
        value: 120,
        id: "A1-1"
      },

      {
        from: "Bale No 472",
        to: "Inward No 971",
        labelText: "110",
        value: 110,
        id: "B1-0"
      },
      {
        from: "Bale No 472",
        to: "Inward No 543",
        labelText: "140",
        value: 140,
        id: "B1-0"
      },

      {
        from: "Batch No 59",
        to: "Inward No 59",
        labelText: "50",
        value: 50,
        id: "A2-0"
      },
      {
        from: "Batch No 59",
        to: "Inward No 59",
        labelText: "50",
        value: 50,
        id: "A2-0"
      },

      {
        from: "Bale No 1197",
        to: "Inward No 546",
        labelText: "110",
        value: 110,
        id: "A1-0"
      },
      {
        from: "Bale No 1197",
        to: "Inward No 666",
        labelText: "190",
        value: 190,
        id: "A1-0"
      },

      {
        from: "Bale No 889",
        to: "Inward No 896",
        labelText: "510",
        value: 510,
        id: "B1-0"
      },
      {
        from: "Bale No 889",
        to: "Inward No 645",
        labelText: "90",
        value: 90,
        id: "B1-0"
      }
    ];
    chart.dataFields.fromName = "from";
    chart.dataFields.toName = "to";
    chart.dataFields.value = "value";

    nodeTemplate.nameLabel.label.hideOversized = false;
    chart.links.template.propertyFields.id = "id";

    chart.nodes.template.inert = true;

    var labelBullet = chart.links.template.bullets.push(
      new am4charts.LabelBullet()
    );
    labelBullet.label.propertyFields.text = "labelText";
    labelBullet.label.horizontalCenter = "left";
    labelBullet.label.textAlign = "start";
    labelBullet.label.dx = -50;
    labelBullet.label.fillOpacity = 0.2;

    nodeTemplate.width = 10;
    nodeTemplate.nameLabel.width = 300;
    nodeTemplate.draggable = false;
    nodeTemplate.events.on(
      "hit",
      function(ev) {
        chart.openModal(
          '<div class="row"><div class="col"><img src="https://images.pexels.com/photos/761297/pexels-photo-761297.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" class="w-100"></div><div class="col"><img src="https://images.pexels.com/photos/802221/pexels-photo-802221.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" class="w-100"></div></div>'
        );
      },
      this
    );

    let hoverState = chart.links.template.states.create("hover");
    hoverState.properties.fillOpacity = 0.6;
    chart.hiddenState.properties.opacity = 0;
    chart.links.template.propertyFields.id = "id";
    chart.links.template.fill = new am4core.InterfaceColorSet().getFor(
      "alternativeBackground"
    );
    chart.links.template.fillOpacity = 0.1;

    chart.links.template.events.on("over", function(event) {
      let link = event.target;
      let id = link.id.split("-")[0];

      chart.links.each(function(link) {
        if (link.id.indexOf(id) != -1) {
          link.isHover = true;
        }
      });
    });

    chart.links.template.events.on("out", function(event) {
      chart.links.each(function(link) {
        link.isHover = false;
      });
    });
  }
}
