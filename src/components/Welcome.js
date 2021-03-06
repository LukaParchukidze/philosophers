import { useState } from "react";

const Welcome = () => {
  const [flowText, setFlowText] = useState(false);

  return (
    <section style={{ textAlign: "justify", margin: "48px" }}>
      <h1>What is Philosophy?</h1>
      <button
        className="waves-effect waves-teal btn-flat blue-grey lighten-4"
        onClick={() => setFlowText(!flowText)}
      >
        Toggle Text Size
      </button>
      <p className={flowText ? "flow-text" : ""}>
        Philosophy (from Greek: φιλοσοφία, philosophia, 'love of wisdom') is the
        deliberative investigation of humanity's most general and fundamental
        questions, such as those about reason, existence, knowledge, values,
        mind, and language. Such questions are often posed as problems to be
        studied or resolved. The term was probably coined by Pythagoras (c. 570
        – c. 495 BCE). Philosophical methods include questioning, critical
        discussion, rational argument, and systematic presentation.
        <br />
        <br />
        Historically, philosophy encompassed all bodies of knowledge and a
        practitioner was known as a philosopher. From the time of Ancient Greek
        philosopher Aristotle to the 19th century, "natural philosophy"
        encompassed astronomy, medicine, and physics. For example, Newton's 1687
        Mathematical Principles of Natural Philosophy later became classified as
        a book of physics.
        <br />
        <br />
        In the 19th century, the growth of modern research universities led
        academic philosophy and other disciplines to professionalize and
        specialize. Since then, various areas of investigation that were
        traditionally part of philosophy have become separate academic
        disciplines, such as psychology, sociology, linguistics, and economics.
        <br />
        <br />
        Today, major subfields of academic philosophy include metaphysics, which
        is concerned with the fundamental nature of existence and reality;
        epistemology, which studies the nature of knowledge and belief; ethics,
        which is concerned with moral value; and logic, which studies the rules
        of inference that allow one to deduce conclusions from true premises.
        Other notable subfields include philosophy of science, political
        philosophy, aesthetics, philosophy of language, and philosophy of mind.
      </p>
    </section>
  );
};

export default Welcome;
