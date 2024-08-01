const About = () => {
  return (
    <div className="mt-8 space-y-4 text-cente">
      <div>
        <p className="text-xl font-bold">History</p>
        <p>
          Founded in 1985, Springdale Public School has been dedicated to
          providing quality education and holistic development to students.
        </p>
      </div>
      <div>
        <p className="text-xl font-bold">Vision</p>
        <p>
          To create a learning environment that fosters academic excellence,
          critical thinking, and ethical values.
        </p>
      </div>

      <div>
        <p className="text-xl font-bold">Mission</p>
        <p>
          To empower students with the knowledge, skills, and values needed to
          thrive in a dynamic world.
        </p>
      </div>

      <div>
        <p className="text-xl font-bold">Principal's Message</p>
        <p>
          "At Springdale, we believe in nurturing the potential of every student
          and guiding them towards a successful future."
        </p>
      </div>
      <div>
        <p className="text-xl font-bold"> Infrastructure and Facilities:</p>

        <ul className="list-decimal p-4">
          <li>State-of-the-art science and computer labs</li>
          <li>Spacious and well-equipped classrooms</li>
          <li>Library with a vast collection of books and digital resources</li>
          <li>
            Sports facilities including a playground, gymnasium, and swimming
            pool
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
