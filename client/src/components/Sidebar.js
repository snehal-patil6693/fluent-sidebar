import React,{ useId, useState} from 'react';
import { Accordion, AccordionHeader, AccordionItem, AccordionPanel, Title3, Input, Button} from "@fluentui/react-components";
import { SearchRegular, ChevronRight24Filled, ChevronLeft24Filled } from '@fluentui/react-icons';


/* import { IconsFilled } from '@fluentui/react-icons'; */

const items = [
      {
          ltId: "0:floor:0:138",
          expressID: 138,
          type: "IFCBUILDINGSTOREY",
          elementName: "Nivel 1",
          objectType: "Nivel:Nivel 1",
          children: [
              {
                  type: "IFCWALLSTANDARDCASE",
                  ltId: "0:floor:0:138:IFCWALLSTANDARDCASE",
                  children: [
                      {
                          ltId: "0:floor:0:138:IFCWALLSTANDARDCASE:equipment:0:186",
                          expressID: 186,
                          type: "IFCWALLSTANDARDCASE",
                          elementName: "Muro b\\X2\\00E1\\X0\\sico:Partici\\X2\\00F3\\X0\\n con capa de yeso:163541",
                          objectType: "Muro b\\X2\\00E1\\X0\\sico:Partici\\X2\\00F3\\X0\\n con capa de yeso"
                      },
                      {
                          ltId: "0:floor:0:138:IFCWALLSTANDARDCASE:equipment:1:294",
                          expressID: 294,
                          type: "IFCWALLSTANDARDCASE",
                          elementName: "Muro b\\X2\\00E1\\X0\\sico:Partici\\X2\\00F3\\X0\\n con capa de yeso:163542",
                          objectType: "Muro b\\X2\\00E1\\X0\\sico:Partici\\X2\\00F3\\X0\\n con capa de yeso"
                      },
                      {
                          ltId: "0:floor:0:138:IFCWALLSTANDARDCASE:equipment:2:338",
                          expressID: 338,
                          type: "IFCWALLSTANDARDCASE",
                          elementName: "Muro b\\X2\\00E1\\X0\\sico:Partici\\X2\\00F3\\X0\\n con capa de yeso:163543",
                          objectType: "Muro b\\X2\\00E1\\X0\\sico:Partici\\X2\\00F3\\X0\\n con capa de yeso"
                      }
                  ]
              },
              {
                  type: "IFCWINDOW",
                  ltId: "0:floor:0:138:IFCWINDOW",
                  children: [
                      {
                          ltId: "0:floor:0:138:IFCWINDOW:equipment:3:6518",
                          expressID: 6518,
                          type: "IFCWINDOW",
                          elementName: "Ventana simple:100 x 100 cm:164008",
                          objectType: "Ventana simple:100 x 100 cm"
                      },
                      {
                          ltId: "0:floor:0:138:IFCWINDOW:equipment:4:6563",
                          expressID: 6563,
                          type: "IFCWINDOW",
                          elementName: "Ventana simple:100 x 100 cm:164121",
                          objectType: "Ventana simple:100 x 100 cm"
                      },
                      {
                          ltId: "0:floor:0:138:IFCWINDOW:equipment:5:6595",
                          expressID: 6595,
                          type: "IFCWINDOW",
                          elementName: "Ventana simple:100 x 100 cm:164156",
                          objectType: "Ventana simple:100 x 100 cm"
                      },
                      {
                          ltId: "0:floor:0:138:IFCWINDOW:equipment:6:6627",
                          expressID: 6627,
                          type: "IFCWINDOW",
                          elementName: "Ventana simple:100 x 100 cm:164180",
                          objectType: "Ventana simple:100 x 100 cm"
                      },
                      {
                          ltId: "0:floor:0:138:IFCWINDOW:equipment:7:6659",
                          expressID: 6659,
                          type: "IFCWINDOW",
                          elementName: "Ventana simple:100 x 100 cm:164181",
                          objectType: "Ventana simple:100 x 100 cm"
                      },
                      {
                          ltId: "0:floor:0:138:IFCWINDOW:equipment:8:6691",
                          expressID: 6691,
                          type: "IFCWINDOW",
                          elementName: "Ventana simple:100 x 100 cm:164192",
                          objectType: "Ventana simple:100 x 100 cm"
                      },
                      {
                          ltId: "0:floor:0:138:IFCWINDOW:equipment:9:6723",
                          expressID: 6723,
                          type: "IFCWINDOW",
                          elementName: "Ventana simple:100 x 100 cm:164193",
                          objectType: "Ventana simple:100 x 100 cm"
                      },
                      {
                          ltId: "0:floor:0:138:IFCWINDOW:equipment:10:6755",
                          expressID: 6755,
                          type: "IFCWINDOW",
                          elementName: "Ventana simple:100 x 100 cm:164194",
                          objectType: "Ventana simple:100 x 100 cm"
                      },
                      {
                          ltId: "0:floor:0:138:IFCWINDOW:equipment:11:6787",
                          expressID: 6787,
                          type: "IFCWINDOW",
                          elementName: "Ventana simple:100 x 100 cm:164195",
                          objectType: "Ventana simple:100 x 100 cm"
                      }
                  ]
              },
              {
                  type: "IFCFURNISHINGELEMENT",
                  ltId: "0:floor:0:138:IFCFURNISHINGELEMENT",
                  children: [
                      {
                          ltId: "0:floor:0:138:IFCFURNISHINGELEMENT:equipment:12:7792",
                          expressID: 7792,
                          type: "IFCFURNISHINGELEMENT",
                          elementName: "M_Table-Dining Round w Chairs:0915mm Diameter:165477",
                          objectType: "M_Table-Dining Round w Chairs:0915mm Diameter"
                      },
                      {
                          ltId: "0:floor:0:138:IFCFURNISHINGELEMENT:equipment:13:18774",
                          expressID: 18774,
                          type: "IFCFURNISHINGELEMENT",
                          elementName: "M_Chair-Breuer:M_Chair-Breuer:165478",
                          objectType: "M_Chair-Breuer:M_Chair-Breuer"
                      },
                      {
                          ltId: "0:floor:0:138:IFCFURNISHINGELEMENT:equipment:14:18799",
                          expressID: 18799,
                          type: "IFCFURNISHINGELEMENT",
                          elementName: "M_Chair-Breuer:M_Chair-Breuer:165479",
                          objectType: "M_Chair-Breuer:M_Chair-Breuer"
                      },
                      {
                          ltId: "0:floor:0:138:IFCFURNISHINGELEMENT:equipment:15:18819",
                          expressID: 18819,
                          type: "IFCFURNISHINGELEMENT",
                          elementName: "M_Chair-Breuer:M_Chair-Breuer:165480",
                          objectType: "M_Chair-Breuer:M_Chair-Breuer"
                      },
                      {
                          ltId: "0:floor:0:138:IFCFURNISHINGELEMENT:equipment:16:18839",
                          expressID: 18839,
                          type: "IFCFURNISHINGELEMENT",
                          elementName: "M_Chair-Breuer:M_Chair-Breuer:165481",
                          objectType: "M_Chair-Breuer:M_Chair-Breuer"
                      },
                      {
                          ltId: "0:floor:0:138:IFCFURNISHINGELEMENT:equipment:17:18859",
                          expressID: 18859,
                          type: "IFCFURNISHINGELEMENT",
                          elementName: "M_Table-Dining Round w Chairs:0915mm Diameter:165592",
                          objectType: "M_Table-Dining Round w Chairs:0915mm Diameter"
                      },
                      {
                          ltId: "0:floor:0:138:IFCFURNISHINGELEMENT:equipment:18:18879",
                          expressID: 18879,
                          type: "IFCFURNISHINGELEMENT",
                          elementName: "M_Chair-Breuer:M_Chair-Breuer:165593",
                          objectType: "M_Chair-Breuer:M_Chair-Breuer"
                      },
                      {
                          ltId: "0:floor:0:138:IFCFURNISHINGELEMENT:equipment:19:18899",
                          expressID: 18899,
                          type: "IFCFURNISHINGELEMENT",
                          elementName: "M_Chair-Breuer:M_Chair-Breuer:165594",
                          objectType: "M_Chair-Breuer:M_Chair-Breuer"
                      },
                      {
                          ltId: "0:floor:0:138:IFCFURNISHINGELEMENT:equipment:20:18919",
                          expressID: 18919,
                          type: "IFCFURNISHINGELEMENT",
                          elementName: "M_Chair-Breuer:M_Chair-Breuer:165595",
                          objectType: "M_Chair-Breuer:M_Chair-Breuer"
                      },
                      {
                          ltId: "0:floor:0:138:IFCFURNISHINGELEMENT:equipment:21:18939",
                          expressID: 18939,
                          type: "IFCFURNISHINGELEMENT",
                          elementName: "M_Chair-Breuer:M_Chair-Breuer:165596",
                          objectType: "M_Chair-Breuer:M_Chair-Breuer"
                      },
                      {
                          ltId: "0:floor:0:138:IFCFURNISHINGELEMENT:equipment:22:18959",
                          expressID: 18959,
                          type: "IFCFURNISHINGELEMENT",
                          elementName: "M_Table-Dining Round w Chairs:0915mm Diameter:165631",
                          objectType: "M_Table-Dining Round w Chairs:0915mm Diameter"
                      },
                      {
                          ltId: "0:floor:0:138:IFCFURNISHINGELEMENT:equipment:23:18979",
                          expressID: 18979,
                          type: "IFCFURNISHINGELEMENT",
                          elementName: "M_Chair-Breuer:M_Chair-Breuer:165632",
                          objectType: "M_Chair-Breuer:M_Chair-Breuer"
                      },
                      {
                          ltId: "0:floor:0:138:IFCFURNISHINGELEMENT:equipment:24:18999",
                          expressID: 18999,
                          type: "IFCFURNISHINGELEMENT",
                          elementName: "M_Chair-Breuer:M_Chair-Breuer:165633",
                          objectType: "M_Chair-Breuer:M_Chair-Breuer"
                      },
                      {
                          ltId: "0:floor:0:138:IFCFURNISHINGELEMENT:equipment:25:19019",
                          expressID: 19019,
                          type: "IFCFURNISHINGELEMENT",
                          elementName: "M_Chair-Breuer:M_Chair-Breuer:165634",
                          objectType: "M_Chair-Breuer:M_Chair-Breuer"
                      },
                      {
                          ltId: "0:floor:0:138:IFCFURNISHINGELEMENT:equipment:26:19039",
                          expressID: 19039,
                          type: "IFCFURNISHINGELEMENT",
                          elementName: "M_Chair-Breuer:M_Chair-Breuer:165635",
                          objectType: "M_Chair-Breuer:M_Chair-Breuer"
                      },
                      {
                          ltId: "0:floor:0:138:IFCFURNISHINGELEMENT:equipment:27:19059",
                          expressID: 19059,
                          type: "IFCFURNISHINGELEMENT",
                          elementName: "M_Table-Dining Round w Chairs:0915mm Diameter:165733",
                          objectType: "M_Table-Dining Round w Chairs:0915mm Diameter"
                      },
                      {
                          ltId: "0:floor:0:138:IFCFURNISHINGELEMENT:equipment:28:19079",
                          expressID: 19079,
                          type: "IFCFURNISHINGELEMENT",
                          elementName: "M_Chair-Breuer:M_Chair-Breuer:165734",
                          objectType: "M_Chair-Breuer:M_Chair-Breuer"
                      },
                      {
                          ltId: "0:floor:0:138:IFCFURNISHINGELEMENT:equipment:29:19099",
                          expressID: 19099,
                          type: "IFCFURNISHINGELEMENT",
                          elementName: "M_Chair-Breuer:M_Chair-Breuer:165735",
                          objectType: "M_Chair-Breuer:M_Chair-Breuer"
                      },
                      {
                          ltId: "0:floor:0:138:IFCFURNISHINGELEMENT:equipment:30:19119",
                          expressID: 19119,
                          type: "IFCFURNISHINGELEMENT",
                          elementName: "M_Chair-Breuer:M_Chair-Breuer:165736",
                          objectType: "M_Chair-Breuer:M_Chair-Breuer"
                      },
                      {
                          ltId: "0:floor:0:138:IFCFURNISHINGELEMENT:equipment:31:19139",
                          expressID: 19139,
                          type: "IFCFURNISHINGELEMENT",
                          elementName: "M_Chair-Breuer:M_Chair-Breuer:165737",
                          objectType: "M_Chair-Breuer:M_Chair-Breuer"
                      },
                      {
                          ltId: "0:floor:0:138:IFCFURNISHINGELEMENT:equipment:32:19159",
                          expressID: 19159,
                          type: "IFCFURNISHINGELEMENT",
                          elementName: "M_Table-Dining Round w Chairs:0915mm Diameter:165776",
                          objectType: "M_Table-Dining Round w Chairs:0915mm Diameter"
                      },
                      {
                          ltId: "0:floor:0:138:IFCFURNISHINGELEMENT:equipment:33:19179",
                          expressID: 19179,
                          type: "IFCFURNISHINGELEMENT",
                          elementName: "M_Chair-Breuer:M_Chair-Breuer:165777",
                          objectType: "M_Chair-Breuer:M_Chair-Breuer"
                      },
                      {
                          ltId: "0:floor:0:138:IFCFURNISHINGELEMENT:equipment:34:19199",
                          expressID: 19199,
                          type: "IFCFURNISHINGELEMENT",
                          elementName: "M_Chair-Breuer:M_Chair-Breuer:165778",
                          objectType: "M_Chair-Breuer:M_Chair-Breuer"
                      },
                      {
                          ltId: "0:floor:0:138:IFCFURNISHINGELEMENT:equipment:35:19219",
                          expressID: 19219,
                          type: "IFCFURNISHINGELEMENT",
                          elementName: "M_Chair-Breuer:M_Chair-Breuer:165779",
                          objectType: "M_Chair-Breuer:M_Chair-Breuer"
                      },
                      {
                          ltId: "0:floor:0:138:IFCFURNISHINGELEMENT:equipment:36:19239",
                          expressID: 19239,
                          type: "IFCFURNISHINGELEMENT",
                          elementName: "M_Chair-Breuer:M_Chair-Breuer:165780",
                          objectType: "M_Chair-Breuer:M_Chair-Breuer"
                      },
                      {
                          ltId: "0:floor:0:138:IFCFURNISHINGELEMENT:equipment:37:19259",
                          expressID: 19259,
                          type: "IFCFURNISHINGELEMENT",
                          elementName: "M_Table-Dining Round w Chairs:0915mm Diameter:165821",
                          objectType: "M_Table-Dining Round w Chairs:0915mm Diameter"
                      },
                      {
                          ltId: "0:floor:0:138:IFCFURNISHINGELEMENT:equipment:38:19279",
                          expressID: 19279,
                          type: "IFCFURNISHINGELEMENT",
                          elementName: "M_Chair-Breuer:M_Chair-Breuer:165822",
                          objectType: "M_Chair-Breuer:M_Chair-Breuer"
                      },
                      {
                          ltId: "0:floor:0:138:IFCFURNISHINGELEMENT:equipment:39:19299",
                          expressID: 19299,
                          type: "IFCFURNISHINGELEMENT",
                          elementName: "M_Chair-Breuer:M_Chair-Breuer:165823",
                          objectType: "M_Chair-Breuer:M_Chair-Breuer"
                      },
                      {
                          ltId: "0:floor:0:138:IFCFURNISHINGELEMENT:equipment:40:19319",
                          expressID: 19319,
                          type: "IFCFURNISHINGELEMENT",
                          elementName: "M_Chair-Breuer:M_Chair-Breuer:165824",
                          objectType: "M_Chair-Breuer:M_Chair-Breuer"
                      },
                      {
                          ltId: "0:floor:0:138:IFCFURNISHINGELEMENT:equipment:41:19339",
                          expressID: 19339,
                          type: "IFCFURNISHINGELEMENT",
                          elementName: "M_Chair-Breuer:M_Chair-Breuer:165825",
                          objectType: "M_Chair-Breuer:M_Chair-Breuer"
                      },
                      {
                          ltId: "0:floor:0:138:IFCFURNISHINGELEMENT:equipment:42:19359",
                          expressID: 19359,
                          type: "IFCFURNISHINGELEMENT",
                          elementName: "M_Table-Dining Round w Chairs:0915mm Diameter:165862",
                          objectType: "M_Table-Dining Round w Chairs:0915mm Diameter"
                      },
                      {
                          ltId: "0:floor:0:138:IFCFURNISHINGELEMENT:equipment:43:19379",
                          expressID: 19379,
                          type: "IFCFURNISHINGELEMENT",
                          elementName: "M_Chair-Breuer:M_Chair-Breuer:165863",
                          objectType: "M_Chair-Breuer:M_Chair-Breuer"
                      },
                      {
                          ltId: "0:floor:0:138:IFCFURNISHINGELEMENT:equipment:44:19399",
                          expressID: 19399,
                          type: "IFCFURNISHINGELEMENT",
                          elementName: "M_Chair-Breuer:M_Chair-Breuer:165864",
                          objectType: "M_Chair-Breuer:M_Chair-Breuer"
                      },
                      {
                          ltId: "0:floor:0:138:IFCFURNISHINGELEMENT:equipment:45:19419",
                          expressID: 19419,
                          type: "IFCFURNISHINGELEMENT",
                          elementName: "M_Chair-Breuer:M_Chair-Breuer:165865",
                          objectType: "M_Chair-Breuer:M_Chair-Breuer"
                      },
                      {
                          ltId: "0:floor:0:138:IFCFURNISHINGELEMENT:equipment:46:19439",
                          expressID: 19439,
                          type: "IFCFURNISHINGELEMENT",
                          elementName: "M_Chair-Breuer:M_Chair-Breuer:165866",
                          objectType: "M_Chair-Breuer:M_Chair-Breuer"
                      }
                  ]
              },
              {
                  type: "IFCDOOR",
                  ltId: "0:floor:0:138:IFCDOOR",
                  children: [
                      {
                          ltId: "0:floor:0:138:IFCDOOR:equipment:47:22492",
                          expressID: 22492,
                          type: "IFCDOOR",
                          elementName: "Puerta de 1 hoja:80 x 210 cm:166070",
                          objectType: "Puerta de 1 hoja:80 x 210 cm"
                      }
                  ]
              },
              {
                  type: "IFCSLAB",
                  ltId: "0:floor:0:138:IFCSLAB",
                  children: [
                      {
                          ltId: "0:floor:0:138:IFCSLAB:equipment:48:22551",
                          expressID: 22551,
                          type: "IFCSLAB",
                          elementName: "Suelo:Por defecto - 30 cm:166729",
                          objectType: "Suelo:Por defecto - 30 cm"
                      }
                  ]
              },
              {
                  type: "IFCCURTAINWALL",
                  ltId: "0:floor:0:138:IFCCURTAINWALL",
                  children: [
                      {
                          ltId: "0:floor:0:138:IFCCURTAINWALL:equipment:49:22655",
                          expressID: 22655,
                          type: "IFCCURTAINWALL",
                          elementName: "Muro cortina:Muro cortina - 300 x 200 cm:166910",
                          objectType: "Muro cortina:Muro cortina - 300 x 200 cm"
                      }
                  ]
              }
          ]
      },
      {
          ltId: "0:floor:1:144",
          expressID: 144,
          type: "IFCBUILDINGSTOREY",
          elementName: "Nivel 2",
          objectType: "Nivel:Nivel 1",
          children: [
              {
                  type: "IFCSLAB",
                  ltId: "0:floor:1:144:IFCSLAB",
                  children: [
                      {
                          ltId: "0:floor:1:144:IFCSLAB:equipment:50:22620",
                          expressID: 22620,
                          type: "IFCSLAB",
                          elementName: "Suelo:Por defecto - 30 cm:166811",
                          objectType: "Suelo:Por defecto - 30 cm"
                      }
                  ]
              }
          ]
      }
  ]


const Sidebar = ({ cssSidebar, styleSidebar }) => {

    const [openItem, setOpenItems] = React.useState(0);
    const beforeId = useId('content-before');
    const handleToggle = React.useCallback((_, data) => {
      setOpenItems(data.value);
    }, []);

    const [isExpanded, setExpendState] = useState(false);

  return (
    <div
			className={
				isExpanded
					? "side-nav-container"
					: "side-nav-container side-nav-container-NX"
			}
		>

    <div className="nav-heading">
					
					<Button icon
						= {
							isExpanded ? <ChevronLeft24Filled/> : <ChevronRight24Filled/>
						}
						onClick={() => setExpendState(!isExpanded)} size='small'
					>
						
					</Button>
				</div>

    <div className={cssSidebar} style={styleSidebar}>
   
    <Input contentBefore={<SearchRegular />} id={beforeId} type='search' placeholder='Search' appearance='filled-darker' />
       
    <Title3 block style={{fontSize:'1.2rem'}}>Accordion</Title3>
    {items.map((item) => (
       
    <Accordion collapsible={true} >
      <AccordionItem value={item.expressID}>
        <AccordionHeader  >
          {item.elementName}
        </AccordionHeader>

          <AccordionPanel>
        {item.children.map((item) => (
        <Accordion >
        <AccordionItem >
       
        <AccordionHeader >
        {item.type.replace(/.{3}/, '')}
        
      </AccordionHeader>
       
         {item.children.map((item) => (
        <AccordionPanel>
         <div>{item.elementName}</div>
        </AccordionPanel>
         ))}
        </AccordionItem>
       </Accordion>
       ))}
        </AccordionPanel>

      </AccordionItem>
     
    </Accordion>
   ))}
    </div>
    </div>
  );
};

export default Sidebar;                                   