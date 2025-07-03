import React from "react";

const Spinner: React.FC = () => {
    return (
         <div className="fixed inset-0 flex justify-center items-center">
      <div className="w-12 h-12 border-4 border-gray-500 border-t-transparent rounded-full animate-spin" />
    </div>
    );
};

export default Spinner;
