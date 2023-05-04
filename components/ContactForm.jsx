import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("moqrgrbl");
  if (state.succeeded) {
    return <p>Thanks for connecting!</p>;
  }
  return (
    <div className="m-10">
      <div>
        <p>
          If you&apos;d like to get in touch, please use the form below or reach
          out on LinkedIn!
        </p>
        <p>I look forward to hearing from you.</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mt-2">
          <input
            id="name"
            type="text"
            name="name"
            placeholder=" Name"
            className="border border-cyan-900 rounded-md w-64"
          />
        </div>
        <div className="mt-2">
          <input
            id="email"
            type="email"
            name="email"
            placeholder=" Email"
            className="border border-cyan-900 rounded-md w-64"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div className="mt-2">
          <textarea
            id="message"
            name="message"
            placeholder=" Message"
            className="border border-cyan-900 rounded-md w-64 h-52"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        <button
          className="h-8 px-5 text-white bg-cyan-600 hover:bg-sky-900 rounded-full transition-all duration-100"
          type="submit"
          disabled={state.submitting}
        >
          Send email
        </button>
      </form>
    </div>
  );
}
