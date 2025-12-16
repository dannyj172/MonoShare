const Features = () => {
  return (
    <section className="flex flex-col items-center mb-50">
      <h1 className="text-3xl mb-3 arvo">Features</h1>
      <p className="electrolize w-135 text-center mb-15 text-(--gray)">
        Monoshare keeps your secret private from start to finish and creates a
        better way to send passwords, tokens, and private messages.
      </p>

      <div>
        <ul className="flex">
          <li className="z-10 card-glow flex flex-col items-center w-65 text-center mx-8 border-2 border-[#303030] rounded-xl p-5 bg-[#010203a9] hover:card-glow">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 640 512"
              height="4em"
              width="4em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M224 256A128 128 0 1 0 96 128a128 128 0 0 0 128 128zm96 64a63.08 63.08 0 0 1 8.1-30.5c-4.8-.5-9.5-1.5-14.5-1.5h-16.7a174.08 174.08 0 0 1-145.8 0h-16.7A134.43 134.43 0 0 0 0 422.4V464a48 48 0 0 0 48 48h280.9a63.54 63.54 0 0 1-8.9-32zm288-32h-32v-80a80 80 0 0 0-160 0v80h-32a32 32 0 0 0-32 32v160a32 32 0 0 0 32 32h224a32 32 0 0 0 32-32V320a32 32 0 0 0-32-32zM496 432a32 32 0 1 1 32-32 32 32 0 0 1-32 32zm32-144h-64v-80a32 32 0 0 1 64 0z"></path>
            </svg>
            <h2 className="text-xl font-bold my-3 text-(--main-clr)">
              Security First
            </h2>
            <p className="electrolize text-md">
              Our purpose is to protect your secrets at all cost
            </p>
          </li>
          {/* Enhanced Privacy options */}
          <li className="z-10 card-glow flex flex-col items-center w-65 text-center mx-8 border-2 border-[#303030] rounded-xl p-5 bg-[#010203a9]">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 640 512"
              height="4em"
              width="4em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M224 256A128 128 0 1 0 96 128a128 128 0 0 0 128 128zm96 64a63.08 63.08 0 0 1 8.1-30.5c-4.8-.5-9.5-1.5-14.5-1.5h-16.7a174.08 174.08 0 0 1-145.8 0h-16.7A134.43 134.43 0 0 0 0 422.4V464a48 48 0 0 0 48 48h280.9a63.54 63.54 0 0 1-8.9-32zm288-32h-32v-80a80 80 0 0 0-160 0v80h-32a32 32 0 0 0-32 32v160a32 32 0 0 0 32 32h224a32 32 0 0 0 32-32V320a32 32 0 0 0-32-32zM496 432a32 32 0 1 1 32-32 32 32 0 0 1-32 32zm32-144h-64v-80a32 32 0 0 1 64 0z"></path>
            </svg>
            <h2 className="text-xl font-bold my-3 text-(--main-clr)">
              Enhanced Privacy options
            </h2>
            <p className="electrolize text-md">
              You decide your secrets password and how long it stays live
            </p>
          </li>
          {/* Self-erasing links */}
          <li className="z-10 card-glow flex flex-col items-center w-65 text-center mx-8 border-2 border-[#303030] rounded-xl p-5 bg-[#010203a9]">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              height="4em"
              width="4em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M497.941 273.941c18.745-18.745 18.745-49.137 0-67.882l-160-160c-18.745-18.745-49.136-18.746-67.883 0l-256 256c-18.745 18.745-18.745 49.137 0 67.882l96 96A48.004 48.004 0 0 0 144 480h356c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12H355.883l142.058-142.059zm-302.627-62.627l137.373 137.373L265.373 416H150.628l-80-80 124.686-124.686z"></path>
            </svg>
            <h2 className="text-xl font-bold my-3 text-(--main-clr)">
              Self-erasing Links
            </h2>
            <p className="electrolize text-md">
              Once your secret has been accessed, the link will automatically
              erase itself from existence
            </p>
          </li>
          {/* Fully encrypted  */}
          <li className="z-10 card-glow flex flex-col items-center w-65 text-center mx-8 border-2 border-[#303030] rounded-xl p-5 bg-[#010203a9]">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              height="4em"
              width="4em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M497.941 273.941c18.745-18.745 18.745-49.137 0-67.882l-160-160c-18.745-18.745-49.136-18.746-67.883 0l-256 256c-18.745 18.745-18.745 49.137 0 67.882l96 96A48.004 48.004 0 0 0 144 480h356c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12H355.883l142.058-142.059zm-302.627-62.627l137.373 137.373L265.373 416H150.628l-80-80 124.686-124.686z"></path>
            </svg>
            <h2 className="text-xl font-bold my-3 text-(--main-clr)">
              Fully encrypted
            </h2>
            <p className="electrolize text-md ">
              Both in your browser and in our databases, your secret stays fully
              encrypted at all times
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Features;
