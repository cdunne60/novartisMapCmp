import { LightningElement } from 'lwc';

export default class MapNovartis_CD extends LightningElement {
 
    mapMarkers = [
      {
        location: {
          Street: "Marktgasse 6",
          City: "Basel ",
        },
        // For onmarkerselect
        value: "SF1",
        title: "Prosupplier Gmbh",
        description: '<b>ETA:</b> Lunch Tomorrow <br> <b>Available Stock:</b> 1200',
      },
  
      {
        location: {
          Street: "Bahnhofstrasse 7",
          City: "8730 Uznach"
        },
        value: "SF2",
        title: "Streuli Pharma AG",
        description: '<b>ETA:</b> 9 days <br> <b>Available Stock:</b> 1200',
        
      },

      {
        location: {
          Street: "Aachstrasse 4",
          City: "8590 Romanshorn"
        },
  
        title: "Voigt AG",
        description: '<b>ETA:</b> 9 days <br> <b>Available Stock:</b> 1200'
      },

      {
        location: {
          Street: "Industriestrasse 2",
          City: " 4704 Niederbipp"
        },
  
        title: "Galexis AG",
        description: '<b>ETA:</b> 2 days <br> <b>Available Stock:</b> 1200'
      },
      {
          location: {
        Street: "Piazza Indipendenza 3b",
        City: " 6830 Chiasso"
      },

      title: "FarmaMondo",
      description: '<b>ETA:</b> 6 days <br> <b>Available Stock:</b> 1200'
    },

    {
      location: {
        Street: "Corso S. Gottardo 25",
        City: "6830 Chiasso"
      },
      value: "SF2",
      title: "Merlonipharma",
      description: '<b>ETA:</b> 4 days <br> <b>Available Stock:</b> 1200',
    }
    ];
  
    markersTitle = "wholesalers Nearby with Cosentyx in stock";
  
    center = {
      location: { Latitude: "47.5596", Longitude: "7.5886" }
    };
  
    selectedMarkerValue = this.value;

    handleMarkerSelect(event) {
        this.selectedMarkerValue = event.target.selectedMarkerValue;
    }
}