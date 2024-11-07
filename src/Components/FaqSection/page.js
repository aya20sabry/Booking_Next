import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  const FaqSection = () => {
    return (
      <div className="flex justify-center p-8 bg-white">
        <div className="flex flex-col w-full max-w-5xl shadow-lg sm:flex-row">
          <div className="sm:w-1/3 p-8 bg-gray-100">
            <h2 className="text-2xl font-bold mb-2">Learn more about our airport taxi service</h2>
            <p className="text-gray-600">
              See more FAQs on our{' '}
              <a href="#" className="text-blue-600 hover:underline">
                help page
              </a>
            </p>
          </div>
          <div className="sm:w-2/3 p-8 bg-white">
            <Accordion type="single" collapsible className="space-y-2">
              <AccordionItem value="item-1" className="border rounded-lg">
                <AccordionTrigger className="px-4 py-2 hover:no-underline focus:no-underline">What if my flight is early or delayed?</AccordionTrigger>
                <AccordionContent className="px-4 py-2">
                  As long as you provide your flight number when booking your airport taxi, our Meet & Greet service means we'll track your flight and adjust pickup time if necessary. After your flight lands, the driver will wait for 45 minutes. This gives you plenty of time to go through security, get your luggage, and head to the arrivals hall to meet your driver.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border rounded-lg">
                <AccordionTrigger className="px-4 py-2 hover:no-underline focus:no-underline">What's included in the price?</AccordionTrigger>
                <AccordionContent className="px-4 py-2">
                  Our prices include all taxes, fees, gratuity, and toll road charges. If you book airport pickup, prices also include Meet & Greet, which means we'll track your flight and wait 45 minutes after your flight lands. If you book a taxi going to the airport (or any other non-airport pickup), your driver will wait 15 minutes after the scheduled pickup time. You might have to pay an additional cost for special requests, or any changes you make to your trip.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border rounded-lg">
                <AccordionTrigger className="px-4 py-2 hover:no-underline focus:no-underline">How do I pay?</AccordionTrigger>
                <AccordionContent className="px-4 py-2">
                  All our private transportation services are pre-paid, meaning you pay online at the time of booking. Payment is secure, and we accept most major credit cards, debit cards, PayPal, and eligible rewards in your Booking.com Wallet.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="border rounded-lg">
                <AccordionTrigger className="px-4 py-2 hover:no-underline focus:no-underline">Can I cancel my booking?</AccordionTrigger>
                <AccordionContent className="px-4 py-2">
                  Yes. You can cancel your booking for free up to 24 hours before your scheduled pick-up time. Some of our partners have shorter windows for free cancellation. Check your booking confirmation for more info.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    );
  };
  
  export default FaqSection;