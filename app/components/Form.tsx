export default function Form() {
  return (
    <form method="post">
      <div className="form-wrapper">
        <h3 className="form-title">Request A Quote</h3>
        <p>
          <label htmlFor="origin">
            <span>Origin (from)</span>
          </label>
          <select name="origin" id="origin" required>
            <option value="" disabled selected>
              Select option
            </option>
            <option value="palestine">Palestine</option>
          </select>
        </p>
        <p>
          <label htmlFor="destination">
            <span>Destination (to)</span>
          </label>
          <select name="destination" id="destination" required>
            <option value="" disabled selected>
              Select option
            </option>
            <option value="LA">Los Angeles</option>
            <option value="NY">New York</option>
            <option value="beijing">Beijing</option>
            <option value="haifa">Haifa</option>
          </select>
        </p>
        <p>
          <label htmlFor="weight">
            <span>Weight (kg)</span>
          </label>
          <input
            type="number"
            name="weight"
            id="weight"
            min="0.001"
            step="any"
            required
          />
        </p>
        <p>
          <button type="submit">Get Quote</button>
        </p>
      </div>
    </form>
  );
}
