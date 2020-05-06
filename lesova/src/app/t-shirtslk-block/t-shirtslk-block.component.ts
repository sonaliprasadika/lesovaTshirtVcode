import {AfterViewInit, Component, ChangeDetectorRef, OnInit, AfterViewChecked} from '@angular/core';
declare var $;

@Component({
  selector: 'app-t-shirtslk-block',
  templateUrl: './t-shirtslk-block.component.html',
  styleUrls: ['./t-shirtslk-block.component.css']
})
export class TShirtslkBlockComponent implements OnInit, AfterViewInit, AfterViewChecked {

  switchType: number;
  tshirtsCollection = [
    {
      name : 'a1',
      data : [
        {
          name : 'Casual Ware',
          block : 'purposeCasual',
          class : 'owl-carousel',
          tshirts : [
            {
              name : 'Design 1',
              imageUrl : 'assets/img/tshirt-designs-originals/cus1.png',
              price : '',
              discountPrice : '',
              tid : 100
            },
            {
              name : 'Design 2',
              imageUrl : 'assets/img/tshirt-designs-originals/cus2.png',
              price : '',
              discountPrice : '',
              tid : 101
            },
            {
              name : 'Design 3',
              imageUrl : 'assets/img/tshirt-designs-originals/cus3.png',
              price : '',
              discountPrice : '',
              tid : 102
            },
            {
              name : 'Design 3',
              imageUrl : 'assets/img/tshirt-designs-originals/cus3.png',
              price : '',
              discountPrice : '',
              tid : 102
            },
            {
              name : 'Design 3',
              imageUrl : 'assets/img/tshirt-designs-originals/cus3.png',
              price : '',
              discountPrice : '',
              tid : 102
            }
          ]
        },
        {
          name : 'Cooperate Ware',
          block : 'purposeCooperate',
          class : 'owl-carousel',
          tshirts : [
            {
              name : 'Design 1',
              imageUrl : 'assets/img/tshirt-designs-originals/cus3.png',
              price : '',
              discountPrice : '',
              tid : 100
            },
            {
              name : 'Design 2',
              imageUrl : 'assets/img/tshirt-designs-originals/cus3.png',
              price : '',
              discountPrice : '',
              tid : 101
            },
            {
              name : 'Design 3',
              imageUrl : 'assets/img/tshirt-designs-originals/cus3.png',
              price : '',
              discountPrice : '',
              tid : 102
            }
          ]
        },
        {
          name : 'Team Ware',
          block : 'purposeTeam',
          class : 'owl-carousel',
          tshirts : [
            {
              name : 'Design 1',
              imageUrl : 'assets/img/tshirt-designs-originals/cus2.png',
              price : '',
              discountPrice : '',
              tid : 100
            },
            {
              name : 'Design 2',
              imageUrl : 'assets/img/tshirt-designs-originals/cus2.png',
              price : '',
              discountPrice : '',
              tid : 101
            },
            {
              name : 'Design 3',
              imageUrl : 'assets/img/tshirt-designs-originals/cus2.png',
              price : '',
              discountPrice : '',
              tid : 102
            }
          ]
        },
        {
          name : 'Full Collar',
          block : 'collarFull',
          class : 'owl-carousel',
          tshirts : [
            {
              name : 'Design 1',
              imageUrl : 'assets/img/tshirt-designs-originals/cus6.png',
              price : '',
              discountPrice : '',
              tid : 100
            },
            {
              name : 'Design 2',
              imageUrl : 'assets/img/tshirt-designs-originals/cus7.png',
              price : '',
              discountPrice : '',
              tid : 101
            },
            {
              name : 'Design 3',
              imageUrl : 'assets/img/tshirt-designs-originals/cus6.png',
              price : '',
              discountPrice : '',
              tid : 102
            },
            {
              name : 'Design 3',
              imageUrl : 'assets/img/tshirt-designs-originals/cus7.png',
              price : '',
              discountPrice : '',
              tid : 102
            },
            {
              name : 'Design 3',
              imageUrl : 'assets/img/tshirt-designs-originals/cus6.png',
              price : '',
              discountPrice : '',
              tid : 102
            }
          ]
        }
      ]
    },
    {
      name : 'a2',
      data : [
        {
          name : 'Full Collar',
          block : 'collarFull',
          class : 'owl-carousel',
          tshirts : [
            {
              name : 'Design 1',
              imageUrl : 'assets/img/tshirt-designs-originals/cus6.png',
              price : '',
              discountPrice : '',
              tid : 100
            },
            {
              name : 'Design 2',
              imageUrl : 'assets/img/tshirt-designs-originals/cus7.png',
              price : '',
              discountPrice : '',
              tid : 101
            },
            {
              name : 'Design 3',
              imageUrl : 'assets/img/tshirt-designs-originals/cus6.png',
              price : '',
              discountPrice : '',
              tid : 102
            },
            {
              name : 'Design 3',
              imageUrl : 'assets/img/tshirt-designs-originals/cus7.png',
              price : '',
              discountPrice : '',
              tid : 102
            },
            {
              name : 'Design 3',
              imageUrl : 'assets/img/tshirt-designs-originals/cus6.png',
              price : '',
              discountPrice : '',
              tid : 102
            }
          ]
        },
        {
          name : 'Collar Half',
          block : 'collarFull',
          class : 'owl-carousel',
          tshirts : [
            {
              name : 'Design 1',
              imageUrl : 'assets/img/tshirt-designs-originals/cus8.png',
              price : '',
              discountPrice : '',
              tid : 100
            },
            {
              name : 'Design 2',
              imageUrl : 'assets/img/tshirt-designs-originals/cus9.png',
              price : '',
              discountPrice : '',
              tid : 101
            },
            {
              name : 'Design 3',
              imageUrl : 'assets/img/tshirt-designs-originals/cus8.png',
              price : '',
              discountPrice : '',
              tid : 102
            }
          ]
        },
        {
          name : 'Collar Less',
          block : 'collarLess',
          class : 'owl-carousel',
          tshirts : [
            {
              name : 'Design 1',
              imageUrl : 'assets/img/tshirt-designs-originals/cus2.png',
              price : '',
              discountPrice : '',
              tid : 100
            },
            {
              name : 'Design 2',
              imageUrl : 'assets/img/tshirt-designs-originals/cus2.png',
              price : '',
              discountPrice : '',
              tid : 101
            },
            {
              name : 'Design 3',
              imageUrl : 'assets/img/tshirt-designs-originals/cus2.png',
              price : '',
              discountPrice : '',
              tid : 102
            }
          ]
        },
      ]
    },
    {
      name : 'a3',
      data : [
        {
          name : 'Polo Fabric',
          block : 'fabricPolo',
          class : 'owl-carousel',
          tshirts : [
            {
              name : 'Design 1',
              imageUrl : 'assets/img/tshirt-designs-originals/cus1.png',
              price : '',
              discountPrice : '',
              tid : 100
            },
            {
              name : 'Design 2',
              imageUrl : 'assets/img/tshirt-designs-originals/cus2.png',
              price : '',
              discountPrice : '',
              tid : 101
            },
            {
              name : 'Design 3',
              imageUrl : 'assets/img/tshirt-designs-originals/cus3.png',
              price : '',
              discountPrice : '',
              tid : 102
            }
          ]
        },
        {
          name : 'Sports Fabric',
          block : 'fabricSports',
          class : 'owl-carousel',
          tshirts : [
            {
              name : 'Design 1',
              imageUrl : 'assets/img/tshirt-designs-originals/cus1.png',
              price : '',
              discountPrice : '',
              tid : 100
            },
            {
              name : 'Design 2',
              imageUrl : 'assets/img/tshirt-designs-originals/cus2.png',
              price : '',
              discountPrice : '',
              tid : 101
            },
            {
              name : 'Design 3',
              imageUrl : 'assets/img/tshirt-designs-originals/cus3.png',
              price : '',
              discountPrice : '',
              tid : 102
            }
          ]
        },
        {
          name : 'cotton single jersey Fabric',
          block : 'fabricCotton',
          class : 'owl-carousel',
          tshirts : [
            {
              name : 'Design 1',
              imageUrl : 'assets/img/tshirt-designs-originals/cus1.png',
              price : '',
              discountPrice : '',
              tid : 100
            },
            {
              name : 'Design 2',
              imageUrl : 'assets/img/tshirt-designs-originals/cus2.png',
              price : '',
              discountPrice : '',
              tid : 101
            },
            {
              name : 'Design 3',
              imageUrl : 'assets/img/tshirt-designs-originals/cus3.png',
              price : '',
              discountPrice : '',
              tid : 102
            }
          ]
        },
      ]
    }
  ];

  tempc = ['a', 'b'];

  selectCollectionType(collectionType: number) {

    $(".product-slider-active").each(function () {
      $(this).owlCarousel('destroy');
    });

    // $('.product-slider-active').owlCarousel('destroy');

    if (collectionType === 0) {
      this.tshirtsCollection = [];
    } else {
      this.tshirtsCollection = [
        {
          name : 'a1',
          data : [
            {
              name : 'Casual Ware',
              block : 'purposeCasual',
              class : 'owl-carousel',
              tshirts : [
                {
                  name : 'Design 1',
                  imageUrl : 'assets/img/tshirt-designs-originals/cus1.png',
                  price : '',
                  discountPrice : '',
                  tid : 100
                },
                {
                  name : 'Design 2',
                  imageUrl : 'assets/img/tshirt-designs-originals/cus2.png',
                  price : '',
                  discountPrice : '',
                  tid : 101
                },
                {
                  name : 'Design 3',
                  imageUrl : 'assets/img/tshirt-designs-originals/cus3.png',
                  price : '',
                  discountPrice : '',
                  tid : 102
                },
                {
                  name : 'Design 3',
                  imageUrl : 'assets/img/tshirt-designs-originals/cus3.png',
                  price : '',
                  discountPrice : '',
                  tid : 102
                },
                {
                  name : 'Design 3',
                  imageUrl : 'assets/img/tshirt-designs-originals/cus3.png',
                  price : '',
                  discountPrice : '',
                  tid : 102
                }
              ]
            },
            {
              name : 'Cooperate Ware',
              block : 'purposeCooperate',
              class : 'owl-carousel',
              tshirts : [
                {
                  name : 'Design 1',
                  imageUrl : 'assets/img/tshirt-designs-originals/cus3.png',
                  price : '',
                  discountPrice : '',
                  tid : 100
                },
                {
                  name : 'Design 2',
                  imageUrl : 'assets/img/tshirt-designs-originals/cus3.png',
                  price : '',
                  discountPrice : '',
                  tid : 101
                },
                {
                  name : 'Design 3',
                  imageUrl : 'assets/img/tshirt-designs-originals/cus3.png',
                  price : '',
                  discountPrice : '',
                  tid : 102
                }
              ]
            },
            {
              name : 'Team Ware',
              block : 'purposeTeam',
              class : 'owl-carousel',
              tshirts : [
                {
                  name : 'Design 1',
                  imageUrl : 'assets/img/tshirt-designs-originals/cus2.png',
                  price : '',
                  discountPrice : '',
                  tid : 100
                },
                {
                  name : 'Design 2',
                  imageUrl : 'assets/img/tshirt-designs-originals/cus2.png',
                  price : '',
                  discountPrice : '',
                  tid : 101
                },
                {
                  name : 'Design 3',
                  imageUrl : 'assets/img/tshirt-designs-originals/cus2.png',
                  price : '',
                  discountPrice : '',
                  tid : 102
                }
              ]
            },
            {
              name : 'Full Collar',
              block : 'collarFull',
              class : 'owl-carousel',
              tshirts : [
                {
                  name : 'Design 1',
                  imageUrl : 'assets/img/tshirt-designs-originals/cus6.png',
                  price : '',
                  discountPrice : '',
                  tid : 100
                },
                {
                  name : 'Design 2',
                  imageUrl : 'assets/img/tshirt-designs-originals/cus7.png',
                  price : '',
                  discountPrice : '',
                  tid : 101
                },
                {
                  name : 'Design 3',
                  imageUrl : 'assets/img/tshirt-designs-originals/cus6.png',
                  price : '',
                  discountPrice : '',
                  tid : 102
                },
                {
                  name : 'Design 3',
                  imageUrl : 'assets/img/tshirt-designs-originals/cus7.png',
                  price : '',
                  discountPrice : '',
                  tid : 102
                },
                {
                  name : 'Design 3',
                  imageUrl : 'assets/img/tshirt-designs-originals/cus6.png',
                  price : '',
                  discountPrice : '',
                  tid : 102
                }
              ]
            }
          ]
        },
        {
          name : 'a2',
          data : [
            {
              name : 'Full Collar',
              block : 'collarFull',
              class : 'owl-carousel',
              tshirts : [
                {
                  name : 'Design 1',
                  imageUrl : 'assets/img/tshirt-designs-originals/cus6.png',
                  price : '',
                  discountPrice : '',
                  tid : 100
                },
                {
                  name : 'Design 2',
                  imageUrl : 'assets/img/tshirt-designs-originals/cus7.png',
                  price : '',
                  discountPrice : '',
                  tid : 101
                },
                {
                  name : 'Design 3',
                  imageUrl : 'assets/img/tshirt-designs-originals/cus6.png',
                  price : '',
                  discountPrice : '',
                  tid : 102
                },
                {
                  name : 'Design 3',
                  imageUrl : 'assets/img/tshirt-designs-originals/cus7.png',
                  price : '',
                  discountPrice : '',
                  tid : 102
                },
                {
                  name : 'Design 3',
                  imageUrl : 'assets/img/tshirt-designs-originals/cus6.png',
                  price : '',
                  discountPrice : '',
                  tid : 102
                }
              ]
            },
            {
              name : 'Collar Half',
              block : 'collarFull',
              class : 'owl-carousel',
              tshirts : [
                {
                  name : 'Design 1',
                  imageUrl : 'assets/img/tshirt-designs-originals/cus8.png',
                  price : '',
                  discountPrice : '',
                  tid : 100
                },
                {
                  name : 'Design 2',
                  imageUrl : 'assets/img/tshirt-designs-originals/cus9.png',
                  price : '',
                  discountPrice : '',
                  tid : 101
                },
                {
                  name : 'Design 3',
                  imageUrl : 'assets/img/tshirt-designs-originals/cus8.png',
                  price : '',
                  discountPrice : '',
                  tid : 102
                }
              ]
            },
            {
              name : 'Collar Less',
              block : 'collarLess',
              class : 'owl-carousel',
              tshirts : [
                {
                  name : 'Design 1',
                  imageUrl : 'assets/img/tshirt-designs-originals/cus2.png',
                  price : '',
                  discountPrice : '',
                  tid : 100
                },
                {
                  name : 'Design 2',
                  imageUrl : 'assets/img/tshirt-designs-originals/cus2.png',
                  price : '',
                  discountPrice : '',
                  tid : 101
                },
                {
                  name : 'Design 3',
                  imageUrl : 'assets/img/tshirt-designs-originals/cus2.png',
                  price : '',
                  discountPrice : '',
                  tid : 102
                }
              ]
            },
          ]
        },
        {
          name : 'a3',
          data : [
            {
              name : 'Polo Fabric',
              block : 'fabricPolo',
              class : 'owl-carousel',
              tshirts : [
                {
                  name : 'Design 1',
                  imageUrl : 'assets/img/tshirt-designs-originals/cus1.png',
                  price : '',
                  discountPrice : '',
                  tid : 100
                },
                {
                  name : 'Design 2',
                  imageUrl : 'assets/img/tshirt-designs-originals/cus2.png',
                  price : '',
                  discountPrice : '',
                  tid : 101
                },
                {
                  name : 'Design 3',
                  imageUrl : 'assets/img/tshirt-designs-originals/cus3.png',
                  price : '',
                  discountPrice : '',
                  tid : 102
                }
              ]
            },
            {
              name : 'Sports Fabric',
              block : 'fabricSports',
              class : 'owl-carousel',
              tshirts : [
                {
                  name : 'Design 1',
                  imageUrl : 'assets/img/tshirt-designs-originals/cus1.png',
                  price : '',
                  discountPrice : '',
                  tid : 100
                },
                {
                  name : 'Design 2',
                  imageUrl : 'assets/img/tshirt-designs-originals/cus2.png',
                  price : '',
                  discountPrice : '',
                  tid : 101
                },
                {
                  name : 'Design 3',
                  imageUrl : 'assets/img/tshirt-designs-originals/cus3.png',
                  price : '',
                  discountPrice : '',
                  tid : 102
                }
              ]
            },
            {
              name : 'cotton single jersey Fabric',
              block : 'fabricCotton',
              class : 'owl-carousel',
              tshirts : [
                {
                  name : 'Design 1',
                  imageUrl : 'assets/img/tshirt-designs-originals/cus1.png',
                  price : '',
                  discountPrice : '',
                  tid : 100
                },
                {
                  name : 'Design 2',
                  imageUrl : 'assets/img/tshirt-designs-originals/cus2.png',
                  price : '',
                  discountPrice : '',
                  tid : 101
                },
                {
                  name : 'Design 3',
                  imageUrl : 'assets/img/tshirt-designs-originals/cus3.png',
                  price : '',
                  discountPrice : '',
                  tid : 102
                }
              ]
            },
          ]
        }
      ];
    }

      console.log('changing collection type ', collectionType);




    $('.product-slider-active').owlCarousel({
      loop: false,
      rewind: true,
      margin: 0,
      nav: true,
      autoplay: true,
      navText: [ '<i class="zmdi zmdi-chevron-left"></i>', '<i class="zmdi zmdi-chevron-right"></i>' ],
      items: 3,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        800: {
          items: 2
        },
        1024: {
          items: 3
        },
        1200: {
          items: 3
        },
        1400: {
          items: 3
        },
        1920: {
          items: 3
        }
      }
    });









    /*console.log('changing collection type to ', typeof collectionType);
    this.switchType = collectionType;
    this.ref.detectChanges();
    console.log('collection', this.tshirtsCollection);*/
  }
  toArray(answers: object) {
    return Object.keys(answers).map(key => answers[key]);
  }

  constructor(private ref: ChangeDetectorRef) { }

  ngOnInit() {
    this.switchType = 0;
  }

  ngAfterViewInit(): void {
    console.log('clicking');
    console.log('clicked');
  }

  ck() {
    console.log('ck method');
    document.getElementById('purposeCasual').click();
  }

  ngAfterViewChecked(): void {
  }
}
