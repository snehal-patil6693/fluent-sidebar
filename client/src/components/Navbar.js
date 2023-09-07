import React,{ useId} from 'react';
import { Accordion, AccordionHeader, AccordionItem, AccordionPanel, Title3, Image, Input} from "@fluentui/react-components";
import { Add20Filled, Subtract20Filled, SearchRegular } from '@fluentui/react-icons';

const Navbar = () => {

  const [openItem, setOpenItems] = React.useState(0);
  const beforeId = useId('content-before');
  const handleToggle = React.useCallback((_, data) => {
    setOpenItems(data.value);
  }, []);
  return (
    <div className='container'>

   
   <div className='sidebar-container'>
    <div className='sidebar'>
        
    <Input contentBefore={<SearchRegular />} id={beforeId} type='search' placeholder='Search' appearance='filled-darker' />
       
    <Title3 block style={{fontSize:'1.2rem'}}>Accordion</Title3>

    <Accordion onToggle={handleToggle} openItems={openItem}>
      <AccordionItem value={1} >
        <AccordionHeader expandIcon={<Add20Filled />}>
          Accordion Header 1
        </AccordionHeader>

        <AccordionPanel>
        <Accordion>
        <AccordionItem value={4}>
        <AccordionHeader expandIcon={<Add20Filled />}>
          Accordion Header 4
        </AccordionHeader>
        <AccordionPanel>
          <div>Accordion Panel 4</div>
        </AccordionPanel>
      </AccordionItem>
       
        <AccordionItem value={5}>
        <AccordionHeader expandIcon={<Add20Filled />}>
          Accordion Header 5
        </AccordionHeader>
        <AccordionPanel>
          <div>Accordion Panel 5</div>
        </AccordionPanel>
      </AccordionItem>
      </Accordion>
        </AccordionPanel>

      </AccordionItem>
      <AccordionItem value={2}>
        <AccordionHeader expandIcon={<Add20Filled />}>
          Accordion Header 2
        </AccordionHeader>
        <AccordionPanel>
          <div>Accordion Panel 2</div>
        </AccordionPanel>
      </AccordionItem>
      
      <AccordionItem value={3}>
        <AccordionHeader expandIcon={<Add20Filled />}>
          Accordion Header 3
        </AccordionHeader>
        <AccordionPanel>
          <div>Accordion Panel 3</div>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
    </div>
    </div>
   
    </div>

    
 
  )
}

export default Navbar;