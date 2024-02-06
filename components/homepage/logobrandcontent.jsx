import React from "react";

const LogBrandContent = () => {
  return (
    <div className="min-h-screen  sm:h-auto">
      <iframe
        className="rounded-md pb-4 rounded-b-md "
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d101336.4412287291!2d58.30662954559941!3d23.55928263859076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e91ffa8879aafc9%3A0xdb53876d0d79a72c!2sMuscat%2C%20Oman!5e1!3m2!1sen!2sbd!4v1706321216710!5m2!1sen!2sbd"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default LogBrandContent;
