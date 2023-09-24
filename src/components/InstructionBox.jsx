export default function InstructionBox({ onLogout, onStart }) {
  return (
    <div className="instruction-box">
      <h2>Instruction</h2>
      <ul>
        <li>
          <span>There will be 5 multiple choice questions</span>
        </li>
        <li>
          <span>The duration of the quiz is 60 seconds</span>
        </li>
        <li>
          <span>Each question can only be done/displayed once</span>
        </li>
        <li>
          <span>So that when the answer has been selected the next question will be displayed immediately</span>
        </li>
        <li>
          <span>If the browser is closed, the user can still continue working on the questions</span>
        </li>
      </ul>
      <div>
        <button onClick={onLogout}>Exit</button>
        <button onClick={onStart}>Mulai</button>
      </div>
    </div>
  );
}
