import React from "react";

interface RealisationProps {
    idRealisation: string;
    title: string;
    children: React.ReactNode;
}

export const Realisation: React.FC<RealisationProps> = ({ idRealisation, title, children }) => {
  return (
    <div className="realisation subcontainer" id={idRealisation}>
      <h2>{title}</h2>
      <div className="realisation-content">{children}</div>
    </div>
  );
};