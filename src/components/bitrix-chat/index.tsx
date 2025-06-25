import { useEffect, useRef } from "react";

interface BitrixChatProps {
  /** e.g. "inline/5/abc123" (exactly as in the Bitrix embed snippet) */
  formId: string;
  /** the numeric suffix Bitrix adds to the loader file name */
  scriptId: string;
}

/**
 * Loads a Bitrix24 CRM form or Live-Chat widget
 * once the component is mounted on the client.
 */
const BitrixChat = ({ formId, scriptId }: BitrixChatProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Avoid injecting the script twice
    if (containerRef.current.querySelector("script[data-b24-form]")) return;

    const script = document.createElement("script");
    script.dataset.b24Form = formId;
    script.dataset.skipMoving = "true";
    script.async = true;

    // Build the loader URL: /loader_<formNumber>_<scriptId>.js
    const [, formNumber] = formId.split("/"); // "5" from "inline/5/abc123"
    script.src = `https://office.asianuniversity.uz/upload/crm/form/loader_${formNumber}_${scriptId}.js?${Math.floor(
      Date.now() / 180000
    )}`;

    containerRef.current.appendChild(script);

    // optional cleanup (if the component ever unmounts)
    return () => {
      containerRef.current?.replaceChildren();
    };
  }, [formId, scriptId]);

  return (
    <div className="w-full min-h-[500px] p-4 rounded-xl flex items-center justify-center">
      <div ref={containerRef} className="w-full max-w-2xl" id="data-b24-form" />
    </div>
  );
};

export default BitrixChat;
