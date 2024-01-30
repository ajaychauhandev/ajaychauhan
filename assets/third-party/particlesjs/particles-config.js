/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */
let objDesktop = {
  "particles": {
    "number": {
      "value": 100, // we have changed this size for mobile obj
      "density": {
        "enable": false,
        "value_area": 1000
      }
    },
    "color": {
      "value": "#2d5073"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 12
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 90
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 5,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 200,  // we have changed this size for mobile obj
      "color": "#2d5073",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 7,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1523
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 657.7825419640895,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 158.35505639876231,
        "size": 60.905790922600886,
        "duration": 2.679854800594439,
        "opacity": 1,
        "speed": 3
      },
      "repulse": {
        "distance": 80,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}
let objMobile = {
  "particles": {
    "number": {
      "value": 25, // changed on md
      "density": {
        "enable": false,
        "value_area": 1000
      }
    },
    "color": {
      "value": "#2d5073"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 12
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 90
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 5,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 100, // changed on md
      "color": "#2d5073",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 7,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1523
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 657.7825419640895,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 158.35505639876231,
        "size": 60.905790922600886,
        "duration": 2.679854800594439,
        "opacity": 1,
        "speed": 3
      },
      "repulse": {
        "distance": 80,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}
if (document.body.clientWidth > 991) { // laptop, desktop
  particlesJS('sect-hero-bg-anim', objDesktop);
} else if (document.body.clientWidth < 991) { // mobile
  particlesJS('sect-hero-bg-anim', objMobile);
}