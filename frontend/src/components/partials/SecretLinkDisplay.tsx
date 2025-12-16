const SecretLinkDisplay = () => {
  return (
    <div className="flex flex-col">
      <button>&lt;-Done</button>
      <p className="electrolize">
        \/ Your secret has been created successfully!
      </p>
      <div>
        <p>https://monoshare.com/secret/nuxdamed47motnw65snwdvwz93l8i7r</p>
        <p>C</p>
      </div>
      <div className="flex electrolize">
        {/* shield icon */}
        <p>Share this link privately with the intended recipient.</p>
      </div>
      <div className="flex flex-col">
        <textarea readOnly>Your skype password is 123123</textarea>
        <div className="flex">
          {/* careful/exclamation point/warning svg */}
          <p className="electrolize">You will only see this once.</p>
        </div>
      </div>
      <div className="timeline"></div>
    </div>
  );
};

export default SecretLinkDisplay;
