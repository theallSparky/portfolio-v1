const Contact = () => {
  return (
    <div
      id="contact"
      className="max-w-[1040px] m-auto md:px-20 p-4 py-16 pb-4 border border-solid mx-1 mb-1 border-red-900 md:border-2 lg:border-3 rounded-3xl hover:bg-slate-300 ease-in duration-150"
    >
      <h1 className="py-4 text-4xl font-bold text-center text-[#0015be]">
        Contact
      </h1>
      <form
        action="https://getform.io/f/c2aa7230-c224-4142-946c-16a6d1a74dfd"
        method="POST"
        encType="multipart/form-data"
      >
        <div className="grid md:grid-cols-2 gap-4 w-full py-2">
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2">Name</label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-300"
              type="text"
              name="name"
              placeholder="John Smith"
            />
          </div>
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2">Phone Number</label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-300"
              type="text"
              name="phone"
              placeholder="123-456-7890"
            />
          </div>
        </div>
        <div className="flex flex-col py-2">
          <label className="uppercase text-sm py-2">Email</label>
          <input
            className="border-2 rounded-lg p-3 flex border-gray-300"
            type="email"
            name="email"
            placeholder="email@test.test"
          />
        </div>
        <div className="flex flex-col py-2">
          <label className="uppercase text-sm py-2">Subject</label>
          <input
            className="border-2 rounded-lg p-3 flex border-gray-300"
            type="text"
            name="subject"
            placeholder="Reason for reaching out..."
          />
        </div>
        <div className="flex flex-col py-2">
          <label className="uppercase text-sm py-2">Message</label>
          <textarea
            className="border-2 rounded-lg p-3 border-gray-300"
            rows="10"
            name="message"
            placeholder="Your thoughts..."
          ></textarea>
        </div>
        <button className="bg-[#001b5e] text-gray-100 mt-4 w-full p-4 rounded-lg">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
