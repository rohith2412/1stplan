export function Field({ name, value, onChange }) {
    return (
      <div className="relative w-48 text-gray-500">
        <select
          name={name} // Dynamically set the name to match the formData key
          value={value} // Bind the selected value to formData
          onChange={onChange} // Handle changes to update formData
          className="bg-gray-100 w-full p-2 text-sm rounded-md cursor-pointer"
        >
          <option value="" disabled selected>
            Field
          </option>
          <option value="Web developer">Web developer</option>
          <option value="App developer">App developer</option>
          <option value="UI/UX designer">UI/UX designer</option>
          <option value="Design & Animation">Design & Animation</option>
          <option value="Photo Editing">Photo Editing</option>
          <option value="Machine Learning Engineer">Machine Learning Engineer</option>
          <option value="Data Scientist">Data Scientist</option>
          <option value="Architecture & Interior Design">Architecture & Interior Design</option>
          <option value="Blockchain Developer">Blockchain Developer</option>
          <option value="Robotics Engineer">Robotics Engineer</option>
          <option value="Application Support Engineer">Application Support Engineer</option>
          <option value="Cloud Solutions Architect">Cloud Solutions Architect</option>
          <option value="3D Software">3D Software</option>
          <option value="Illustration">Illustration</option>
          <option value="Game Design">Game Design</option>
          <option value="Music Production & Audio Design">Music Production & Audio Design</option>
          <option value="Photography">Photography</option>
          <option value="DevOps Engineer">DevOps Engineer</option>
        </select>
      </div>
    );
  }
  