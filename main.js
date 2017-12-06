
TweenMax.set(['.fade-in', '#title', '#collection-component-42b9525f806'], {autoAlpha: 0});
TweenMax.set('#bg', {autoAlpha: 0,});
TweenMax.set('.slide-in', {x: -500});

var pageHeight = $(document).height();

var introAnim = new TimelineMax();
	introAnim.to('#bg', 2, {autoAlpha: 1}, 'start')
			 .to('#title', 1, {autoAlpha: 1}, 'start+=0.5') 	
			 .staggerTo('.fade-in', 1, {autoAlpha: 1}, 0.5, 'start+=1');

var storeAnim = new TimelineMax();
	storeAnim.staggerTo('.slide-in', 0.5, {x: 0}, 0.25)
	.to('#collection-component-42b9525f806', 1, {autoAlpha: 1});

// initialize scrollmagic controller
var controller = new ScrollMagic.Controller();

// create a scene
var scene = new ScrollMagic.Scene({
		offset: 200
	})
	.setTween(storeAnim)
	.addTo(controller);

(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }

  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }

  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'run-downhill.myshopify.com',
      apiKey: '4a862f7fc763b57c249f8b556e7c0ca9',
      appId: '6',
    });

    //loads 1st buy button
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: [98013478919],
        node: document.getElementById('product-component-0bc6e5c7af4'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
          "product": {
              "buttonDestination": "modal",
              "variantId": "all",
              "width": "240px",
              "contents": {
                "img": false,
                "imgWithCarousel": false,
                "title": false,
                "variantTitle": false,
                "options": false,
                "price": false,
                "description": false,
                "buttonWithQuantity": false,
                "quantity": false
              },
              "text": {
                "button": "$1 SPECIAL"
              },
              "styles": {
                "product": {
                  "@media (min-width: 601px)": {
                    "max-width": "calc(25% - 20px)",
                    "margin-left": "20px",
                    "margin-bottom": "50px"
                  }
                },
                "button": {
                  "font-weight": "bold"
                }
              }
            },
            "cart": {
              "contents": {
                "button": true
              },
              "styles": {
                "button": {
                  "font-weight": "bold"
                },
                "footer": {
                  "background-color": "#ffffff"
                }
              }
            },
            "modalProduct": {
              "contents": {
                "img": false,
                "imgWithCarousel": true,
                "variantTitle": false,
                "buttonWithQuantity": true,
                "button": false,
                "quantity": false
              },
              "styles": {
                "product": {
                  "@media (min-width: 601px)": {
                    "max-width": "100%",
                    "margin-left": "0px",
                    "margin-bottom": "0px"
                  }
                },
                "button": {
                  "font-weight": "bold"
                }
              }
            },
            "toggle": {
              "styles": {
                "toggle": {
                  "font-weight": "bold"
                },
                "count": {
                  "font-size": "16px"
                }
              }
            },
            "productSet": {
              "styles": {
                "products": {
                  "@media (min-width: 601px)": {
                    "margin-left": "-20px"
                  }
                }
              }
            }
          }
      }).then(introAnim, console.log('loading store...'));     
      //

      //loads collection - song comics
      ui.createComponent('collection', {
        id: 1295548423,
        node: document.getElementById('collection-component-de2b81280e9'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
		  "product": {
		  	"buttonDestination": "modal",
		    "variantId": "all",
		    "contents": {
		      "imgWithCarousel": false,
		      "variantTitle": false,
		      "description": false,
		      "buttonWithQuantity": false,
		      "quantity": false
		    },
		    "text": {
		      "button": "LEARN MORE"
		    },
		    "styles": {
		      "product": {
		      	"margin-bottom": "20px",
		        "@media (min-width: 601px)": {
		          "margin-left": "20px",
		          "margin-bottom": "70px"
		        }
		      },
		      "title": {
		        "color": "#f1f1f1"
		      },
		      "price": {
		        "color": "#ffffff"
		      },
		      "compareAt": {
		        "color": "#ffffff"
		      }
		    }
		  },
		  "cart": {
		    "contents": {
		      "button": true
		    },
		    "styles": {
		      "footer": {
		        "background-color": "#ffffff"
		      }
		    }
		  },
		  "modalProduct": {
		    "contents": {
		      "img": false,
		      "imgWithCarousel": true,
		      "variantTitle": false,
		      "buttonWithQuantity": true,
		      "button": false,
		      "quantity": false
		    },
		    "styles": {
		      "product": {
		        "@media (min-width: 601px)": {
		          "max-width": "100%",
		          "margin-left": "0px",
		          "margin-bottom": "20px"
		        }
		      }
		    }
		  },
		  "productSet": {
		    "styles": {
		      "products": {
		        "@media (min-width: 601px)": {
		          "margin-left": "-20px"
		        }
		      }
		    }
		  }
		}
      });

      //loads collection - albums and storybooks
      ui.createComponent('collection', {
      	id: 1295613959,
      	node: document.getElementById('collection-component-2eac21d61f5'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
		  "product": {
		  	"buttonDestination": "modal",
		    "variantId": "all",
		    "contents": {
		      "imgWithCarousel": false,
		      "variantTitle": false,
		      "description": false,
		      "buttonWithQuantity": false,
		      "quantity": false
		    },
		    "text": {
		      "button": "LEARN MORE"
		    },
		    "styles": {
		      "product": {
		      	"margin-bottom": "20px",
		        "@media (min-width: 601px)": {
		          "margin-left": "20px",
		          "margin-bottom": "70px"
		        }
		      },
		      "title": {
		        "color": "#f1f1f1"
		      },
		      "price": {
		        "color": "#ffffff"
		      },
		      "compareAt": {
		        "color": "#ffffff"
		      }
		    }
		  },
		  "cart": {
		    "contents": {
		      "button": true
		    },
		    "styles": {
		      "footer": {
		        "background-color": "#ffffff"
		      }
		    }
		  },
		  "modalProduct": {
		    "contents": {
		      "img": false,
		      "imgWithCarousel": true,
		      "variantTitle": false,
		      "buttonWithQuantity": true,
		      "button": false,
		      "quantity": false
		    },
		    "styles": {
		      "product": {
		        "@media (min-width: 601px)": {
		          "max-width": "100%",
		          "margin-left": "0px",
		          "margin-bottom": "20px"
		        }
		      }
		    }
		  },
		  "productSet": {
		    "styles": {
		      "products": {
		        "@media (min-width: 601px)": {
		          "margin-left": "-20px"
		        }
		      }
		    }
		  }
		}
      });

            //loads collection - postcards and prints
            ui.createComponent('collection', {
            	id: 1300070407,
            	node: document.getElementById('collection-component-42b9525f806'),
              moneyFormat: '%24%7B%7Bamount%7D%7D',
              options: {
      		  "product": {
      		  	"buttonDestination": "modal",
      		    "variantId": "all",
      		    "contents": {
      		      "imgWithCarousel": false,
      		      "options": false,
      		      "variantTitle": false,
      		      "description": false,
      		      "buttonWithQuantity": false,
      		      "quantity": false
      		    },
      		    "text": {
      		      "button": "LEARN MORE"
      		    },
      		    "styles": {
      		      "product": {
      		      	"margin-bottom": "20px",
      		        "@media (min-width: 601px)": {
      		          "margin-left": "20px",
      		          "margin-bottom": "70px"
      		        }
      		      },
      		      "title": {
      		        "color": "#f1f1f1"
      		      },
      		      "price": {
      		        "color": "#ffffff"
      		      },
      		      "compareAt": {
      		        "color": "#ffffff"
      		      }
      		    }
      		  },
      		  "cart": {
      		    "contents": {
      		      "button": true
      		    },
      		    "styles": {
      		      "footer": {
      		        "background-color": "#ffffff"
      		      }
      		    }
      		  },
      		  "modalProduct": {
      		    "contents": {
      		      "img": false,
      		      "imgWithCarousel": true,
      		      "variantTitle": false,
      		      "buttonWithQuantity": true,
      		      "button": false,
      		      "quantity": false
      		    },
      		    "styles": {
      		      "product": {
      		        "@media (min-width: 601px)": {
      		          "max-width": "100%",
      		          "margin-left": "0px",
      		          "margin-bottom": "20px"
      		        }
      		      }
      		    }
      		  },
      		  "productSet": {
      		    "styles": {
      		      "products": {
      		        "@media (min-width: 601px)": {
      		          "margin-left": "-20px"
      		        }
      		      }
      		    }
      		  }
      		}
            });


    });
  }
})();