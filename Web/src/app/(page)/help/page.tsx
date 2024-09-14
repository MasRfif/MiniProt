import Background from "@/components/2.Body/Background";
import Navbar from "@/components/1.Header/Navbar";

export default function help() {
  return (
    <>
      <Navbar />
      <section className="w-full h-fit flex py-20 justify-center font-bold  bg-gradient-to-br from-black to-red-700/90">
        {" "}
        <div className="max-w-full p-10 h-fit text-center rounded-xl bg-base-200">
          <form className="py-4 text-white">
            {" "}
            <h2 className="text-2xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="mb-4">
              Got questions about our Events, services, or Ticket? Find answers
              here.
            </p>
          </form>

          <div className="join join-vertical text-start  p-10 w-fit s:h-[45rem] s:overflow-y-auto sm:h-[50rem] sm:overflow-y-auto rounded-xl bg-white  ">
            <div className="pb-24">
              <h2 className="text-2xl font-bold mb-4  ">
                Ticket Purchasing and Registration :
              </h2>
              <div className="collapse collapse-arrow join-item shadow-xl ">
                <input type="radio" name="my-accordion-4" defaultChecked />
                <div className="collapse-title text-xl font-bold">
                  How do I purchase tickets for an event?
                </div>
                <div className="collapse-content font-light">
                  <p>
                    To purchase tickets, simply select the desired event from
                    our calendar, choose your preferred ticket type and
                    quantity, and proceed to checkout. You can pay using your
                    preferred payment method.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-arrow join-item shadow-xl">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-xl font-bold">
                  Can I purchase tickets as a gift?
                </div>
                <div className="collapse-content font-light">
                  <p>
                    Yes, we offer gift certificates that can be used to purchase
                    tickets for any event on our platform.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-arrow join-item shadow-xl">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-xl font-bold">
                  Can I change or cancel my ticket purchase?
                </div>
                <div className="collapse-content font-light">
                  <p>
                    Our ticket cancellation policy varies depending on the
                    event. Please review the events specific terms and
                    conditions for details.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-arrow join-item shadow-xl">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-xl font-bold">
                  What happens if an event is canceled?
                </div>
                <div className="collapse-content font-light">
                  <p>
                    If an event is canceled, we will typically offer a refund or
                    the option to transfer your tickets to a future event.
                  </p>
                </div>
              </div>
            </div>
            <div className="pb-24">
              <h2 className="text-2xl font-bold mb-4  ">
                Event Information and Validation :
              </h2>
              <div className="collapse collapse-arrow join-item shadow-xl  ">
                <input type="radio" name="my-accordion-4" defaultChecked />
                <div className="collapse-title text-xl font-bold  ">
                  How can I verify the authenticity of an event?
                </div>
                <div className="collapse-content font-light">
                  <p>
                    All events listed on our platform are verified by our team.
                    You can check the events details, including the organizers
                    information, to ensure its authenticity.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-arrow join-item shadow-xl">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-xl font-bold">
                  What if I have a question about an event?
                </div>
                <div className="collapse-content font-light">
                  <p>
                    You can contact the event organizer directly using the
                    contact information provided on the event page.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-arrow join-item shadow-xl">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-xl font-bold">
                  How do I know if an event is sold out?
                </div>
                <div className="collapse-content font-light">
                  <p>
                    The event page will indicate whether tickets are still
                    available. If the event is sold out, you can sign up for a
                    waitlist to be notified if any tickets become available.
                  </p>
                </div>
              </div>
            </div>
            <div className="pb-24">
              <h2 className="text-2xl font-bold mb-4  ">
                Event Day and Entry :
              </h2>
              <div className="collapse collapse-arrow join-item shadow-xl ">
                <input type="radio" name="my-accordion-4" defaultChecked />
                <div className="collapse-title text-xl font-bold">
                  What should I bring to the event?
                </div>
                <div className="collapse-content font-light">
                  <p>
                    Please refer to the events specific guidelines for
                    information on what to bring, such as tickets, ID, and any
                    required health documentation.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-arrow join-item shadow-xl">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-xl font-bold">
                  What is the events entry policy?
                </div>
                <div className="collapse-content font-light">
                  <p>
                    The events entry policy will vary depending on the event.
                    Please check the event details for specific information,
                    such as age restrictions and dress code.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-arrow join-item shadow-xl">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-xl font-bold">
                  Can I bring my own food and drinks?
                </div>
                <div className="collapse-content font-light">
                  <p>
                    Most events prohibit outside food and drinks. However, there
                    may be exceptions. Please check the events specific rules.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
