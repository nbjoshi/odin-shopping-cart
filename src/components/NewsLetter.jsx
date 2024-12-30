export default function NewsLetter() {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className="text-center mt-10">
      <p className="text-2xl font-medium text-gray-800">
        Subscribe Now & Get 20% Off
      </p>
      <p className="mt-3 text-gray-400">
        Unlock exclusive deals and enjoy early access to our latest products.
        Don't miss out—join our community today and start saving!
      </p>
      <form
        onSubmit={onSubmitHandler}
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 pl-3"
      >
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full sm:flex-1 outline-none border-b-2 border-gray-300 py-2"
          required
        ></input>
        <button
          type="submit"
          className="bg-black text-white text-xs px-10 py-4 rounded-lg"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}
