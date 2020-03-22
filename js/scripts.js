//Intro overlay from w3schools

function openIntro() {
  document.getElementById("myIntro").style.width = "100%";
  document.querySelector('body').style.overflow = 'hidden';
}

function closeIntro() {
  document.getElementById("myIntro").style.width = "0%";
  document.querySelector('body').style.overflow = 'auto';
}

// My mapboxGL token

mapboxgl.accessToken = 'pk.eyJ1IjoiY25laWRzb24iLCJhIjoiY2s3Ynp3NTFhMDBhaTNncXVwNHpkcG4weiJ9.45E5i4zpVqnIUbJm0isEfA';

// Initial center point and zoom level
var initialCenterPoint = [-74.125656, 40.732835]
var initialZoom = 10

// create an object to hold the initialization options for a mapboxGL map
var initOptions = {
  container: 'map', // put the map in this container
  style: 'mapbox://styles/mapbox/dark-v10', // use this basemap
  center: initialCenterPoint, // initial view center
  zoom: initialZoom, // initial view zoom level (0-18)
}

// create the new map
var map = new mapboxgl.Map(initOptions);

// disable map zoom when using scroll
map.scrollZoom.disable();

// wait for the initial style to Load
map.on('style.load', function() {

  // Zones
  map.addSource('ezones', {
    type: 'geojson',
    data: './data/ezones.geojson',
  });


  // zone 1
  map.addLayer({
    'id': 'Zone 1',
    'source': 'ezones',
    'type': 'fill',
    'filter': ["==", "hurricane", "1"],
    'layout': {
      'visibility': 'visible'
    },
    'paint': {
      'fill-color': '#d73027',
      'fill-opacity': 0.3,
    }
  });


  // Zone 2
  map.addLayer({
    'id': 'Zone 2',
    'source': 'ezones',
    'type': 'fill',
    'filter': ["==", "hurricane", "2"],
    'layout': {
      'visibility': 'visible'
    },
    'paint': {
      'fill-color': '#f46d43',
      'fill-opacity': 0.3,
    }
  });
  // Zone 3
  map.addLayer({
    'id': 'Zone 3',
    'source': 'ezones',
    'filter': ["==", "hurricane", "3"],
    'type': 'fill',
    'layout': {
      'visibility': 'visible'
    },
    'paint': {
      'fill-color': '#e0d653',
      'fill-opacity': 0.3,
    }
  });
  // Zone 4
  map.addLayer({
    'id': 'Zone 4',
    'source': 'ezones',
    'filter': ["==", "hurricane", "4"],
    'type': 'fill',
    'layout': {
      'visibility': 'visible'
    },
    'paint': {
      'fill-color': '#a9b352',
      'fill-opacity': 0.3,
    }
  });
  // Zone 5
  map.addLayer({
    'id': 'Zone 5',
    'source': 'ezones',
    'filter': ["==", "hurricane", "5"],
    'type': 'fill',
    'layout': {
      'visibility': 'visible'
    },
    'paint': {
      'fill-color': '#abdda4',
      'fill-opacity': 0.3,
    }
  });
  // Zone 6
  map.addLayer({
    'id': 'Zone 6',
    'source': 'ezones',
    'filter': ["==", "hurricane", "6"],
    'type': 'fill',
    'layout': {
      'visibility': 'visible'
    },
    'paint': {
      'fill-color': '#66c2a5',
      'fill-opacity': 0.3,
    }
  });

  // SMIAs fill
  map.addSource('smia', {
    type: 'geojson',
    data: './data/smia.geojson',
  });

  map.addLayer({
    'id': 'smia',
    'source': 'smia',
    'type': 'fill',
    'layout': {
      'visibility': 'none'
    },
    'paint': {
      'fill-color': '#E066FF',
      'fill-opacity': 0.5,
      'fill-outline-color': 'black'
    }
  });

  map.addLayer({
    'id': 'newtown',
    'source': 'smia',
    'filter': ["==", "OBJECTID", 2],
    'type': 'line',
    'layout': {
      'visibility': 'none'
    },
    'paint': {
      'line-width': 3.1,
      'line-opacity': 0.8,
      'line-color': '#E066FF',
    }
  });

  map.addLayer({
    'id': 'bronx',
    'source': 'smia',
    'filter': ["==", "OBJECTID", 5],
    'type': 'line',
    'layout': {
      'visibility': 'none'
    },
    'paint': {
      'line-width': 3.1,
      'line-opacity': 0.8,
      'line-color': '#E066FF',
    }
  });

  map.addLayer({
    'id': 'sunset',
    'source': 'smia',
    'filter': ["==", "OBJECTID", 6],
    'type': 'line',
    'layout': {
      'visibility': 'none'
    },
    'paint': {
      'line-width': 3.1,
      'line-opacity': 0.8,
      'line-color': '#E066FF',
    }
  });

  map.addLayer({
    'id': 'redhook',
    'source': 'smia',
    'filter': ["==", "OBJECTID", 4],
    'type': 'line',
    'layout': {
      'visibility': 'none'
    },
    'paint': {
      'line-width': 3.1,
      'line-opacity': 0.8,
      'line-color': '#E066FF',
    }
  });

  // Income
  map.addSource('income', {
    type: 'geojson',
    data: './data/income.geojson',
  });

  map.addLayer({
    'id': 'income',
    'source': 'income',
    'type': 'fill',
    'layout': {
      'visibility': 'none'
    },
    'paint': {
      'fill-color': [
        'interpolate',
        ['linear'],
        ['get', 'B06011_001'],
        0,
        '#8c510a',
        24000,
        '#d8b365',
        39000,
        '#f6e8c3',
        53000,
        '#c7eae5',
        68000,
        '#5ab4ac',
        820000,
        '#01665e',
      ],
      'fill-opacity': 0.5,
      'fill-outline-color': 'black'
    }
  });

  map.addLayer({
    'id': 'View SMIAs',
    'source': 'smia',
    'type': 'line',
    'layout': {
      'visibility': 'none'
    },
    'paint': {
      'line-width': 2.5,
      'line-opacity': 0.9,
      'line-color': '#E066FF',
    }
  });

  map.moveLayer('place_label', 'View SMIAs');

});


var chapters = {
  'intro': {
    center: [-74.125656, 40.732835],
    zoom: 10,
    essential: true
  },

  'rockaways': {
    center: [-73.940220, 40.578368],
    zoom: 11,
    essential: true
  },

  'smias': {
    center: [-74.125656, 40.732835],
    zoom: 10,
    essential: true,
  },

  'newtown': {
    center: [-73.951632, 40.726445],
    zoom: 13,
    essential: true,
  },

  'bronx': {
    center: [-73.916901, 40.810297],
    zoom: 13,
    essential: true,
  },

  'sunset': {
    center: [-74.037502, 40.657198],
    zoom: 13,
    essential: true,
  },

  'redhook': {
    center: [-74.020436, 40.674699],
    zoom: 13,
    essential: true,
  },

  'conclusion': {
    center: [-74.125656, 40.732835],
    zoom: 10,
    essential: true,
  }
};


// On every scroll event, check which element is on screen
window.onscroll = function() {
  console.log('scroll')
  var chapterNames = Object.keys(chapters);
  for (var i = 0; i < chapterNames.length; i++) {
    var chapterName = chapterNames[i];
    console.log(chapterName)
    if (isElementOnScreen(chapterName)) {
      setActiveChapter(chapterName);
      break;
    }
  }
};

var activeChapterName = 'intro';

function setActiveChapter(chapterName) {
  if (chapterName === activeChapterName) return;
  map.flyTo(chapters[chapterName]);

  document.getElementById(chapterName).setAttribute('class', 'active');
  document.getElementById(activeChapterName).setAttribute('class', '');

  activeChapterName = chapterName;

  if (activeChapterName === 'smias')
    map.setLayoutProperty('smia', 'visibility', 'visible');
  else map.setLayoutProperty('smia', 'visibility', 'none');

  if (activeChapterName === 'newtown')
    map.setLayoutProperty('newtown', 'visibility', 'visible');
  else map.setLayoutProperty('newtown', 'visibility', 'none');

  if (activeChapterName === 'bronx')
    map.setLayoutProperty('bronx', 'visibility', 'visible');
  else map.setLayoutProperty('bronx', 'visibility', 'none');

  if (activeChapterName === 'sunset')
    map.setLayoutProperty('sunset', 'visibility', 'visible');
  else map.setLayoutProperty('sunset', 'visibility', 'none');

  if (activeChapterName === 'redhook')
    map.setLayoutProperty('redhook', 'visibility', 'visible');
  else map.setLayoutProperty('redhook', 'visibility', 'none');

  if (activeChapterName === 'conclusion')
    map.setLayoutProperty('income', 'visibility', 'visible');
  else map.setLayoutProperty('income', 'visibility', 'none');

  if (activeChapterName === 'conclusion')
    map.setLayoutProperty('Zone 1', 'visibility', 'none');
  else map.setLayoutProperty('Zone 1', 'visibility', 'visible');

  if (activeChapterName === 'conclusion')
    map.setLayoutProperty('Zone 2', 'visibility', 'none');
  else map.setLayoutProperty('Zone 2', 'visibility', 'visible');

  if (activeChapterName === 'conclusion')
    map.setLayoutProperty('Zone 3', 'visibility', 'none');
  else map.setLayoutProperty('Zone 3', 'visibility', 'visible');

  if (activeChapterName === 'conclusion')
    map.setLayoutProperty('Zone 4', 'visibility', 'none');
  else map.setLayoutProperty('Zone 4', 'visibility', 'visible');

  if (activeChapterName === 'conclusion')
    map.setLayoutProperty('Zone 5', 'visibility', 'none');
  else map.setLayoutProperty('Zone 5', 'visibility', 'visible');

  if (activeChapterName === 'conclusion')
    map.setLayoutProperty('Zone 6', 'visibility', 'none');
  else map.setLayoutProperty('Zone 6', 'visibility', 'visible');

  if (activeChapterName === 'conclusion')
    map.setLayoutProperty('View SMIAs', 'visibility', 'visible');
  else map.setLayoutProperty('View SMIAs', 'visibility', 'none');

}

//scroller
function isElementOnScreen(id) {
  var element = document.getElementById(id);
  var bounds = element.getBoundingClientRect();
  return bounds.top < window.innerHeight && bounds.bottom > 0;
}

// Zone toggles
var toggleableLayerIds = ['Zone 1', 'Zone 2', 'Zone 3', 'Zone 4', 'Zone 5', 'Zone 6'];

for (var i = 0; i < toggleableLayerIds.length; i++) {
  var id = toggleableLayerIds[i];

  var link = document.createElement('a');
  link.href = '#';
  link.className = 'active';
  link.textContent = id;


  link.onclick = function(e) {
    var clickedLayer = this.textContent;
    e.preventDefault();
    e.stopPropagation();

    var visibility = map.getLayoutProperty(clickedLayer, 'visibility');

    if (visibility === 'visible') {
      map.setLayoutProperty(clickedLayer, 'visibility', 'none');
      this.className = '';
    } else {
      this.className = 'active';
      map.setLayoutProperty(clickedLayer, 'visibility', 'visible');
    }
  };

  var layers = document.getElementById('menu');
  layers.appendChild(link);
}

//Fly to smias//

$('#flybrooklyn').on('click', function() {
  map.flyTo({
    center: [-73.987993, 40.702351],
    zoom: 13,
    essential: true,
  });
})

$('#flykill').on('click', function() {
  map.flyTo({
    center: [-74.191840, 40.642247],
    zoom: 12,
    essential: true,
  });
})

$('#flynewtown').on('click', function() {
  map.flyTo({
    center: [-73.951632, 40.726445],
    zoom: 13,
    essential: true,
  });
})

$('#flybronx').on('click', function() {
  map.flyTo({
    center: [-73.916901, 40.810297],
    zoom: 13,
    essential: true,
  });
})

$('#flyredhook').on('click', function() {
  map.flyTo({
    center: [-74.019217, 40.688120],
    zoom: 14,
    essential: true,
  });
})

$('#flysunset').on('click', function() {
  map.flyTo({
    center: [-74.037502, 40.657198],
    zoom: 13,
    essential: true,
  });
})

$('#flysi').on('click', function() {
  map.flyTo({
    center: [-74.254121, 40.544579],
    zoom: 13,
    essential: true,
  });
  markers['HanaMichi'].togglePopup();
})
