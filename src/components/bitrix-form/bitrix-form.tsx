import { useEffect } from "react";

const BitrixForm = () => {
  useEffect(() => {
   
    if (document.getElementById("bitrix-form-script")) return;

    const script = document.createElement("script");
    script.id = "bitrix-form-script"; 
    script.src = "https://office.asianuniversity.uz/upload/crm/form/loader_12_0sh87p.js?" + ((Date.now() / 180000) | 0);
    script.async = true;
    script.setAttribute("data-b24-form", "inline/12/0sh87p");
    script.setAttribute("data-skip-moving", "true");

    document.getElementById("bitrix-form-container")?.appendChild(script);
  }, []);

  return (
    
  
    <div className="w-full  flex items-center justify-center bg-white">
    <div
      className="w-full max-w-4xl h-full overflow-y-scroll rounded-xl shadow-lg py-4 border border-gray-200"
      id="bitrix-form-inner"
    >
      <div
        id="bitrix-form-container"
        className=""
      />
    </div>
  </div>
  );
};

export default BitrixForm
