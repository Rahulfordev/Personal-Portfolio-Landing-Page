import React from "react";

export const Container = ({ children }) => {
  return (
    <section className="container mx-auto px-4 pb-10 sm:pb-20 lg:pb-28 text-center">
      {children}
    </section>
  );
};
