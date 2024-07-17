import Accordion from "../components/Accordion";

function AccordionPage() {

  const items = [
    {
      id: 'ad1',
      label : 'Use react',
      content: 'yes'
    },
    {
      id: 'ads1',
      label : 'Use js',
      content: 'yes'
    },
    {
      id: 'adq1',
      label : 'Use css',
      content: 'yes'
    }
  ]
  
  return <Accordion items = {items}/>

  
}

export default AccordionPage;