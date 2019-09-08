
export const CONTENT = [
    {
      isExpanded: false,
      category_name: 'Temperatura',
      type: 1,
      image_link: 'https://live.hopu.eu/images/icon-sensor-noise.png',
      items: [
        { id: 1, type: 'line_chart', values: [{id: 1, max: 25.47, min: 24.02}] }
      ],
    },
    {
      isExpanded: false,
      category_name: 'Humidade',
      type: 1,
      image_link: 'https://live.hopu.eu/images/icon-sensor-crowd_monitoring.png',
      items: [
        { id: 1, type: 'line_chart', values: [{id: 1, max: 64.45, min: 50.47}] }
      ],
    },
    {
      isExpanded: false,
      category_name: 'Gases',
      type: 2,
      image_link: 'https://live.hopu.eu/images/icon-sensor-crowd_monitoring.png',
      items: [
        { id: 1, type: 'dognut_chart', values: [
            {id: 1, value: 56.45, gas: 'O3'},
            {id: 2, value: 19.36, gas: 'NO2'},
            {id: 3, value: 51.44, gas: 'SO2'},
            {id: 4, value: 9.87, gas: 'CO'}
          ]
        }
      ],
    },
    {
      isExpanded: false,
      category_name: 'Ruído',
      type: 3,
      image_link: 'https://live.hopu.eu/images/icon-sensor-crowd_monitoring.png',
      items: [
        { id: 1, type: 'line_chart', values: [{id: 1, value: 15.44}] }
      ],
    },
    {
      isExpanded: false,
      category_name: 'Bateria',
      type: 3,
      image_link: 'https://live.hopu.eu/images/icon-sensor-crowd_monitoring.png',
      items: [
        { id: 1, type: 'line_chart', values: [{id: 1, value: 10}] }
      ],
    },
  ];
  