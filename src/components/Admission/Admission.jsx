const Admissions = () => {
  return (
    <section className="bg-gray-100 p-8">
      <section className="bg-gray-100 p-8">
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-6">Admissions</h2>

          <form className="space-y-4">
            <div>
              <label
                className="block text-gray-700 font-medium mb-1"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label
                className="block text-gray-700 font-medium mb-1"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label
                className="block text-gray-700 font-medium mb-1"
                htmlFor="phone"
              >
                Phone Number
              </label>
              <input
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
              />
            </div>

            <div>
              <label
                className="block text-gray-700 font-medium mb-1"
                htmlFor="grade"
              >
                Grade Applying For
              </label>
              <input
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                id="grade"
                name="grade"
                placeholder="Enter the grade you're applying for"
              />
            </div>

            <div>
              <label
                className="block text-gray-700 font-medium mb-1"
                htmlFor="documents"
              >
                Required Documents
              </label>
              <input
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="file"
                id="documents"
                name="documents"
                multiple
              />
            </div>

            <div className="text-center">
              <button className=" text-white px-6 py-2 sm:px-4 rounded-md focus:bg-gradient-to-r focus:from-[#0035F5] focus:to-[#A600F5] hover:bg-gradient-to-r hover:from-[#5C7FFF] hover:to-[#CB5CFF]  bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF] ">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Process</h3>
            <p className="text-gray-700">
              Admission forms are available for download. Submit the completed
              form along with required documents at the school office.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Criteria</h3>
            <p className="text-gray-700">
              Admission is based on merit and availability of seats. Entrance
              tests may be conducted for certain grades.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Important Dates</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>
                <strong>Admission Form Availability:</strong> March 1st
              </li>
              <li>
                <strong>Last Date for Submission:</strong> March 31st
              </li>
              <li>
                <strong>Entrance Test:</strong> April 15th
              </li>
              <li>
                <strong>Announcement of Results:</strong> April 30th
              </li>
            </ul>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Admissions;
